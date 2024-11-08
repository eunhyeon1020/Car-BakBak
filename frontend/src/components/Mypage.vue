<template>
  <div id="mypage">
    <div class="mypage-contain">
      <div class="mypage-header">

        
        <ul>
          <li>
            <router-link :to="'/main'">
              <div class="mypage-logo"></div>
            </router-link>
            <div>My Page</div>
          </li>
          
          <li class="mypage-profile">
            <div class="profile-img"></div>
            <div>김은현</div>
            <div>dmsgus1734@naver.com</div>
          </li>

        </ul>
      </div>
      
      <div class="mypage-content">

      </div>


    </div>
  </div>
</template>
