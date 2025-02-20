<template>
  <div id="sign">
    <div class="sign-content">
      <router-link :to="'/'">
        <div class="sign-logo later"></div>
      </router-link>

      <div class="sign-box">
        <form id="sign-form" @submit.prevent="submitForm">
          <!-- 회원가입 타이틀 -->
          <div class="sign-title">
            <div>
              <router-link :to="'/'">
                <div class="sign-logo"></div>
              </router-link>
              <h3>회원가입</h3> 
            </div>
            <div>
              <span>차박박과 함께 여행을 떠날 준비 되셨나요?</span>
            </div>
          </div>

          <!-- 회원가입 박스 -->
          <div class="sign-input-area">
            <div class="input-IdPw">
              <input
                class="sign-id"
                type="text"
                v-model="userID"
                placeholder="아이디 입력"
                @input="validateID"
              />
              <span v-if="error.userID" class="error-message">{{ error.userID }}</span>

              <input
                class="sign-pw"
                type="password"
                v-model="userPassword"
                placeholder="비밀번호 입력"
                @input="validatePassword"
              />
              <span v-if="error.userPassword" class="error-message">{{ error.userPassword }}</span>

              <input
                class="sign-aginPw"
                type="password"
                v-model="checkuserPassword"
                placeholder="비밀번호 재확인"
              />
              <span v-if="error.checkuserPassword" class="error-message">{{ error.checkuserPassword }}</span>
            </div>

            <div class="input-name">
              <input
                class="sign-top"
                type="text"
                v-model="userName"
                placeholder="이름"
                @input="validateName"
              />
              <span v-if="error.userName" class="error-message">{{ error.userName }}</span>
            </div>

            <div class="input-adress">
              <input
                class="sign-adress"
                type="text"
                v-model="userAdress"
                placeholder="주소 입력"
                @input="validateAdress"
              />
              <span v-if="error.userAdress" class="error-message">{{ error.userAdress }}</span>
            </div>

            <div class="input-email">
              <input
                class="sign-email"
                type="text"
                v-model="userEmail"
                placeholder="이메일 EX:) 이메일@naver.com"
                @input="validateEmail"
              />
              <span v-if="error.userEmail" class="error-message">{{ error.userEmail }}</span>
            </div>

            <div class="signPhone-content">
              <div class="input-phoneNum">
                <input
                  class="sign-phoneNum"
                  type="text"
                  name="phoneNum"
                  v-model="phoneNum"
                  placeholder="전화번호(-제외)"
                  @input="validatePhoneNum"
                />
                <span v-if="error.phoneNum" class="error-message">{{ error.phoneNum }}</span>
              </div>
            </div>

            <button type="submit" class="signup-btn">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signupForm',
  data() {
    return {
      userID: '',
      userPassword: '',
      checkuserPassword: '',
      userName: '',
      userAdress: '',
      userEmail: '',
      phoneNum: '',
      loginYorN: 'N',
      error: {
        userID: '',
        userPassword: '',
        checkuserPassword: '',
        userName: '',
        userAdress: '',
        userEmail: '',
        phoneNum: '',
      },
    };
  },
  methods: {
    //입력 정보 검증
    validateID() {
      const idRegex = /^[a-zA-Z0-9]{5,}$/;
      this.error.userID = !idRegex.test(this.userID)
        ? '아이디는 5자 이상이며 영어와 숫자만 입력 가능합니다.'
        : '';
    },
    validatePassword() {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
      this.error.userPassword = !passwordRegex.test(this.userPassword)
        ? '비밀번호는 최소 8자 이상, 숫자를 포함해야 합니다.'
        : '';
    },
    validateName() {
      const nameRegex = /^[가-힣]+$/;
      this.error.userName = !nameRegex.test(this.userName)
        ? '이름은 한글만 입력 가능합니다.'
        : '';
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.error.userEmail = !emailRegex.test(this.userEmail)
        ? '올바른 이메일 형식을 입력해 주세요.'
        : '';
    },
    validatePhoneNum() {
      const phoneRegex = /^\d{11}$/;
      this.error.phoneNum = !phoneRegex.test(this.phoneNum)
        ? '올바른 전화번호 형식을 입력해 주세요.'
        : '';
    },
    
    validateAdress() {
      this.error.userAdress = this.userAdress.trim().length < 5
        ? '주소를 정확히 입력해 주세요.'
        : '';
    },
    submitForm() {
      this.validateID();
      this.validatePassword();
      this.error.checkuserPassword =
        this.userPassword !== this.checkuserPassword
          ? '비밀번호가 일치하지 않습니다.'
          : '';
      this.validateName();
      this.validateAdress();
      this.validateEmail();
      this.validatePhoneNum();

      if (Object.values(this.error).some((err) => err)) {
        alert('입력된 정보를 다시 확인해 주세요.');
        return;
      }

      //데이터 생성
      const userData = {
        userID: this.userID,
        userPassword: this.userPassword,
        userName: this.userName,
        userAdress: this.userAdress,
        userEmail: this.userEmail,
        phoneNum: this.phoneNum,
        loginYorN: this.loginYorN,
      };

      //로컬스토리지에 저장
      localStorage.setItem('userData', JSON.stringify(userData));
      alert('회원가입이 성공적으로 완료되었습니다.');
      //회원가입 후 로그인 화면으로 이동
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 0.8em;
}
</style>