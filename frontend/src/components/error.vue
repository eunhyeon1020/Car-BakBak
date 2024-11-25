<template>
  <div id="error">
    
    <div class="error-contain">
      
      <img class="errorGIF" src="../assets/images/errorGIF.gif" >
      <div class="error-content">
        <div>죄송합니다.</div>
        <div>로그인 후, 본 페이지는 이용이 가능합니다.</div>
        <div class="homeBtn">
          <div><router-link :to="'/main'">홈으로</router-link></div>
        </div>
      </div>
      
    </div>

  </div>
</template>