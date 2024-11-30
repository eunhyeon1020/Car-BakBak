<template>
  <div id="login">
    
    <div class="login-box">

      <router-link :to="'/'">
        <div class="login-logo"></div>
      </router-link>

      <!-- 로그인 입력 부분 -->
      <form id="login-form" @submit.prevent="submitForm"> 
        <!-- @submit.prevent="formSubmit" -->
        <div class="login-top-text">
          <h3>로그인</h3>
          <div>
            <span class="check-newbie-ment">신규 이용자신가요?</span>
            <router-link :to="'sign'">
              <span class="make-account-ment">계정 만들기</span>
            </router-link>
          </div>
          
          <input type="text" id="userID" name="userID" placeholder="아이디 입력" v-model="userID" />
          <input type="password" id="userPassword" name="userPassword" placeholder="비밀번호 입력" v-model="userPassword"/>
          <input type="submit" value="로그인" style="cursor: pointer;">
          
        </div>

        <div class="find-text">

          <div v-if="isMobile"> 
            <router-link :to="'/sign'">
              계정 만들기 
            </router-link>
          </div>

          <div>
            <p @click="showAlert">비밀번호 찾기</p>
            <p>|</p>
            <p @click="showAlert">아이디 찾기</p>
          </div>

        </div>
        
      </form>
    </div>
  </div>
</template>

<script>

  export default {
    data: () => ({      
      userID : '',
      userPassword : '',
      isMobile: window.innerWidth <= 1024,
    }),
    methods: {      
      submitForm() {
        //로컬스토리지에 저장된 회원정보 가져옴
      const storedData = localStorage.getItem("userData");
      if (!storedData) {
        alert("저장된 계정 정보가 없습니다. 회원가입을 진행해주세요.");
        return;
      }

      const userData = JSON.parse(storedData);
      console.log("userData:" ,userData);

      //입력 정보랑 저장된 회원 정보 일치하면
      if (this.userID === userData.userID && this.userPassword === userData.userPassword) {
        userData.loginYorN = 'Y';
        localStorage.setItem('userData', JSON.stringify(userData));

        alert("로그인 성공!");
        this.$router.push("/"); 
      } else { //불일치
        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
      }
    },
      updateIsMobile() {
      this.isMobile = window.innerWidth <= 750;
      },

      showAlert() {
        this.$emit('showAlert', true);
      }
    },
    mounted() {
    window.addEventListener('resize', this.updateIsMobile); // 리사이즈 이벤트 등록
    },
    beforeDestroy() {
    window.removeEventListener('resize', this.updateIsMobile); // 이벤트 해제
    },
  }
</script>