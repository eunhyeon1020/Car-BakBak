<template>
  <div class="sign">
    <div class="sign-logo">
      <router-link :to="'main'">
        <div class="sign-logo-img"></div>
      </router-link>
    </div>
    <div class="sign-box">
      <form id="sign-form" @submit.prevent="formSubmit">
        <div class="sign-top-text">
          <h3>회원가입</h3>
          <div>
            <span>차박박과 함께 여행을 떠날 준비 되셨나요?</span>
          </div>
          <div class="sign-input-area">
            <input class="sign-top" type="text" name="uerID" placeholder="아이디">
            <input class="sign-middle" type="password" name="userPassword" placeholder="비밀번호">
            <input class="sign-bottom" type="password" name="checkuserPassword" placeholder="비밀번호 재확인">
            <input class="sign-top" type="text" placeholder="이름">
            <div class="phone-container sign-middle">
              <!-- <select>
                  <option>+82</option>
                  <option>+444</option>
                  <option>+444</option>
                  <option>+444</option>
              </select> -->
              <div class="sign-phone-area">
                <input class="sign-phoneNum" type="text" name="phoneNum" placeholder="전화번호(-제외)">
                <button class="verify-btn" type="button">인증</button>
                <button class="verify-btn" type="button">확인</button>
              </div>
            </div>
            <input class="sign-bottom" type="text" placeholder="인증번호">
            <button type="submit" class="signup-btn">회원가입</button>
          </div>
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
.sign {
position: relative;
width: 100%;
height: 100vh;
background: url(../assets/images/blur-background2.png) fixed center center / cover;
}

/* 회원가입 박스 영역 */
.sign-box {
float: right;
width: 570px;
padding: 20px;
margin-right: 40px;
box-sizing: border-box;
display: flex;
flex-direction: column;
gap: 40px;
}

/* 로고 */
.sign-logo {
  display: inline-block;
}
.sign-logo-img {
background-image: url("../assets/images/차박박.png");
background-size: 256px 103px;
width: 256px;
height: 103px;
}

/* 회원가입 창 */
#sign-form {
border-radius: 15px;
padding: 40px;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
background-color: #ffffff;
}

.sign-top-text {
display: flex;
flex-direction: column;
gap: 16px;
}

.sign-top-text>h3 {
font-size: 30px;
color: #000000;
font-weight: 500;
}

.sign-top-text span {
font-size: 14px;
color: #545454;
padding-right: 10px;
}

/* input 부분  */
input:focus {
  outline:none;
}

#sign-form input {
height: 45px;
box-sizing: border-box;
text-indent: 15px;
background-color: #f5f5f5;
}

#sign-form input[type="submit"] {
background-color: #243516;
color: white;
height: 40px;
}

.sign-input-area {
  display: flex;
  flex-direction: column;
}

.sign-top {
  border-radius: 5px 5px 0 0;
}
.sign-middle {
  border-top: 1px solid #D8D8D8;
  border-bottom: 1px solid #D8D8D8;
}
.sign-bottom {
  border-radius: 0 0 5px 5px;
  margin-bottom: 15px;
}

/* 전화번호 입력창 부분 */

/* 셀렉트가 잇을때 css */

/* .sign-phone-area {
  display: flex;
  width: 75%;
  align-items: center;
  background: #f5f5f5;
}
select {
    padding: 10px;
    font-size: 14px;
    background-color: #f5f5f5;
    width: 25%;
    border-right: 1px solid #D8D8D8;
}
.phone-container {
  display: flex;
}

*/

.sign-phone-area {
  width: 100%;
  background: #f5f5f5;
}
.sign-phoneNum {
  width: 60%;
}

.verify-btn {
  width: 17%;
  height: 80%;
  margin: auto;
  background-color: #ffffff;
  text-align: center;
  cursor: pointer;
  border: 1px solid #d8d8d8;
}

/* 회원가입 버튼 */
.signup-btn {
    padding: 10px;
    background-color: #243516;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}
</style>