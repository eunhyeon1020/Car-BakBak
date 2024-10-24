<template>
  <div class="login">
  <div class="login-box">
        <div class="login-logo"></div>
        <form id="login-form">
          <div class="login-top-text">
            <h3>로그인</h3>
            <span>신규 이용자신가요?</span>
            <span style="color: #016FB6;">계정 만들기</span>
          </div>
          <input type="text" name="userID" placeholder="아이디 입력" />
          <input type="password" name="userPassword" placeholder="비밀번호 입력"/>
          <input type="submit" value="로그인">
          <div class="find-text">
            <p>비밀번호 찾기</p>
            <div>|</div>
            <p>아이디 찾기</p>
          </div>
            
        </form>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>

<style scoped>
* {padding: 0;margin: 0 auto;border: none;}
body {font-size: 14px;font-family: 'Roboto', sans-serif;}
.login {width: 100%;height: 100vh;background:url(../assets/images/loginsign-bg.png) fixed center center / cover;}
.find-text {font-size: 13px; color: #9B9A9A;display: flex; padding: 0 100px;}
.login-top-text {text-align: left;margin-bottom: 20px}
.login-top-text>h3 {font-size: 30px; color: #000000; margin-bottom: 10px}
.login-top-text > span {font-size: 14px; color: #545454; margin-right: 5px;}
.login-logo {background-image: url("../assets/images/차박박.png"); background-size: 256px 103px;width: 256px;height: 103px}
.login-box {width: 540px; height: 100%;padding: 40px;box-sizing: border-box;margin-top: 30px;}
.login > h2 {font-size: 50px;font-weight: 1000;color: #8129e0;margin-bottom: 30px;margin-top: 100px;text-align: center;}
#login-form {border-radius: 15px;padding: 40px;margin-top: 25px;box-shadow:0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);background-color: #ffffff;}
#login-form > input {width: 100%; height: 40px;margin-bottom: 15px;border-radius: 5px;box-sizing: border-box;padding: 0 10px;background-color: #f5f5f5;}
#login-form > input[type="submit"] {background-color: #243516;color: white;height: 42px;}
</style>