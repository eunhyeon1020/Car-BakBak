<template>
  <div id="sign">

    <div class="sign-content">

      <div class="sign-logo">
        <router-link :to="'/'">
          <div class="sign-logo-img"></div>
        </router-link>
      </div>

      <div class="sign-box">
        <form id="sign-form" @submit.prevent="formSubmit">
          
          <!-- 회원가입 타이틀 -->
          <div class="sign-title">
            <h3>회원가입</h3>
            <div>
              <span>차박박과 함께 여행을 떠날 준비 되셨나요?</span>
            </div>
          </div> 

          <!-- 회원가입 박스 -->
          <div class="sign-input-area">
            <div class="input-IdPw">
              <input class="sign-id" type="text" name="userID" placeholder="아이디">
              <input class="sign-pw" type="password" name="userPassword" placeholder="비밀번호">
              <input class="sign-aginPw" type="password" name="checkuserPassword" placeholder="비밀번호 재확인">
            </div>

            <div class="input-name">
              <input class="sign-top" type="text" placeholder="이름">
            </div>
            
            <div class="input-adress"> 
              <input class="sign-adress" type="text" name="userAdress" placeholder="주소">
            </div>

            <div class="input-email">
              <input class="sign-email" type="text" name="userEmail" placeholder="이메일 EX:) 이메일@naver.com">
            </div>

            <div class="signPhone-content">
              <!-- <select>
                  <option>+82</option>
                  <option>+444</option>
                  <option>+444</option>
                  <option>+444</option>
              </select> -->
              <div class="input-phoneNum">
                <input class="sign-phoneNum" type="text" name="phoneNum" placeholder="전화번호(-제외)">
                <!-- <div class="testdiv-btn">
                  <button class="verify-btn" type="button">인증</button> 
                  <button class="verify-btn" type="button">확인</button>
                </div> -->
              </div>

            </div>

            <!-- <input class="sign-bottom" type="text" placeholder="인증번호"> -->

            <button type="submit" class="signup-btn">회원가입</button>
          </div>
          
        </form>
      </div>

    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
