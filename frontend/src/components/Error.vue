<template>
  <div id="error">
    
    <div class="error-contain">
      
      <img class="errorGIF" src="@/assets/images/gifs/errorGIF.gif" >
      <div class="error-content">
        <div>죄송합니다.</div>
        <div>로그인 후, 본 페이지는 이용이 가능합니다.</div>
        <div class="loginBtn">
          <div><router-link :to="'/login'"> Sign In </router-link></div>
        </div>
      </div>
      
    </div>

  </div>
</template>