<template>
  <div id="login">
    
    <div class="login-box">

      <router-link :to="'main'">
        <div class="login-logo"></div>
      </router-link>

      <!-- 로그인 입력 부분 -->
      <form id="login-form" @submit.prevent="formSubmit">
        <div class="login-top-text">
          <h3>로그인</h3>
          <div>
            <span>신규 이용자신가요?</span>
            <router-link :to="'sign'">
              <span style="color: #016FB6;">계정 만들기</span>
            </router-link>
          </div>
          
          <input type="text" name="userID" placeholder="아이디 입력" />
          <input type="password" name="userPassword" placeholder="비밀번호 입력"/>
          <input type="submit" value="로그인" style="cursor: pointer;">
          
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
// import { router } from '@/routes/routes';

  export default {
    data: () => ({      
      myId : 'eunhyeon',
      myPw : '1234',
      success: true,
    }),
    methods: {
      formSubmit() {
        // const form = document.getElementById('login-form');
        // const data = {
        //   userId : 'XXX',
        //   userPw : 'XXXXXXXXXX',
        // }
        // await res = $axios('http://localhost:8080/login', data);
        if (this.success) {
          confirm('로그인 창으로 이동합니다.'); // 확인 : true, 취소 : false

          // 세션 스토리지에 고객 데이터를 등록
          // sessionStorage.setItem('Key이름', Value);
          
          // 고객 데이터를 다시 들고올 때에는
          // sessionStorage.getItem('Key이름');

          this.$router.push({path: '/main'});
        } 
        else {
          this.$router.push({path: '/login'});
          alert('아이디 패스워드를 확인해주세요.');
        }
      },
    }
    
    /* 데이터 내려받는 예시

      {
        data: {
          userId: 'user123',
          userNm: '남궁은현',
          userRate: '마스터',
        },
        success: true,
        statusCd: 202 / 404
      }

    */
  }
</script>