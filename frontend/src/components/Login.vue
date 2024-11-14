<template>
  <div id="login">
    
    <div class="login-box">

      <router-link :to="'main'">
        <div class="login-logo"></div>
      </router-link>

      <!-- 로그인 입력 부분 -->
      <form id="login-form"> 
        <!-- @submit.prevent="formSubmit" -->
        <div class="login-top-text">
          <h3>로그인</h3>
          <div>
            <span class="check-newbie-ment">신규 이용자신가요?</span>
            <router-link :to="'sign'">
              <span class="make-account-ment">계정 만들기</span>
            </router-link>
          </div>
          
          <input type="text" id="userID" name="userID" placeholder="아이디 입력" v-model="myId" />
          <input type="password" id="userPassword" name="userPassword" placeholder="비밀번호 입력" v-model="myPw"/>
          <input @click="login" type="button" value="로그인" style="cursor: pointer;">
          
        </div>

        <div class="find-text">
          <p>비밀번호 찾기</p>
          <p>|</p>
          <p>아이디 찾기</p>
        </div>          
      </form>
    </div>
  </div>
</template>

<script>

  export default {
    data: () => ({      
      myId : '',
      myPw : '',
    }),
    methods: {      
      login(event) {

        console.log("id :: ", this.myId);
        console.log("pw :: ", this.myPw);

        if (this.myId === 'admin' && this.myPw === '123456'){
          alert('로그인이 되었습니다.');
          this.$emit('logInOut', '로그인') ;
          this.$router.push({path: '/main'});

        } else {
          alert('아이디와 비밀번호를 다시 입력해주세요.');
          event.preventDefault();   // 중지          
        }
      }
    }
  }
</script>