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
