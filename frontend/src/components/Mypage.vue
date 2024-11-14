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
          
          <li class="mypage-img">
            <div class="profile-img"></div>
            <div class="userName">김은현</div>
            <div class="userId">userID</div>
          </li>

          <li>
            <div class="mypage-menu">
              <div @click="amuFounctin('mypage')" :class="{ 'font-700' : pageStatus === 'mypage'}">내프로필</div>
              <div @click="amuFounctin('store')" :class="{ 'font-700' : pageStatus === 'store'}">스토어</div>
              <div @click="amuFounctin('info')" :class="{ 'font-700' : pageStatus === 'info'}">고객센터</div>
            </div>
            <div style="border: 1px solid #d7d7d78f;"></div>
          </li>
          
          <li class="logout"> 
            <div @click="logout">
              로그아웃
            </div>
          </li>

        </ul>
      </div>
      <!-- 기본 상태 -->
      <!-- <template v-if="새로운 status"></template> -->
      <template v-if="infoStatus === 'main'">
        <div class="mypage-content">
          <!-- 내프로필 -->
          <div v-if=" pageStatus ==='mypage'" class="mypage-profile">
            <div class="accountCircle">
              <div></div>
              <div>기본정보</div>
            </div>
            <ul>
              <li class="profile-img"></li>
              <li>
                <div class="userName">김은현</div>
                <div class="userId">userId</div>
              </li>
            </ul>
  
            <ul>
              <li>
                <div class="tel">
                  <div></div>
                  <div>010-1234-5678</div>
                </div>
              </li>
            </ul>
  
            <ul>
              <li>
                <div class="id">
                  <div></div>
                  <div>userID</div> 
                </div>
                <div class="pw">
                  <div></div>
                  <div>userPw</div>
                </div>
              </li>
            </ul>
  
            <ul>
              <li>
                <div class="adress">
                  <div></div>
                  <div>서울특별시 00구 00동 00길 00-0 </div>
                </div>
              </li>
            </ul>
  
            <ul>
              <li>
                <div class="email">
                  <div></div>
                  <div>email@naver.com</div>
                </div>
              </li>
            </ul>
  
            <div class="change">
              <div>수정하기</div>
            </div>
          </div>
  
          <!-- 스토어 -->
          <div v-else-if = "pageStatus==='store'" class="mypage-store">
            나는 스토어
          </div>
  
          <!-- 고객센터 -->
          <div v-else class="mypage-service">
            <div class="info-title">
              <div>FAQ _ 자주 묻는 질문</div>
            </div>
            <ul class="infoBtn">
              <li  @click="showInfoSubPage('login')" class="info-login">
                계정 & 로그인
              </li>
              <li @click="showInfoSubPage('paymoney')" class="info-paymoeny">
                결제
              </li>
              <li @click="showInfoSubPage('service')" class="info-service">
                서비스
              </li>
              <li @click="showInfoSubPage('ask')" class="info-ask"> 
                1 : 1 문의하기 
              </li>
            </ul>
          </div>
        </div>
      </template> 

      <!-- 고객센터 >> 계정 & 로그인  -->
      <template v-else-if="infoStatus === 'login'">
        <div class="mypage-content">
          <div class="login-page">
            <div>계정 & 로그인</div>
            <ul>
              <li>
                회원 탈퇴/로그아웃은 어떻게 하나요?
              </li>
              <li>
                닉네임을 변경하고 싶어요.
              </li>
              <li>
                회원가입 시 입력한 이메일을 변경하고 싶어요.
              </li>
              <li> 
                비밀번호를 변경하고 싶어요.
              </li>
            </ul>
          </div>
          <button class="backBtn" @click="backBtn"> ← 되돌아가기</button>
        </div> 
      </template>

      <!-- 고객센터 >>  결제 -->
      <template v-else-if ="infoStatus === 'paymoney'">
        <div class="mypage-content">
          <div class="paymoney-page">
            <div>결제</div>
            <ul>
              <li>
                현금 결제는 어떻게 하나요?
              </li>
              <li>
                임금자 명을 바꾸고 싶어요.
              </li>
              <li>
                현금영수증 발급은 어떻게 받나요?
              </li>
            </ul>
          </div>
          <button class="backBtn" @click="backBtn"> ← 되돌아가기</button>
        </div> 
      </template>

      <!-- 고객센터 >> 서비스 -->
      <template v-else-if ="infoStatus === 'service'">
        <div class="mypage-content">
          <div class="service-page">
            <div>서비스</div>
            <ul>
              <li>
                회원가입 시 어떠한 혜택이 있나요? 
              </li> 
              <li>
                비회원도 주문이 가능한가요? 
              </li>
              <li>
                리뷰는 어떻게 작성해야 하나요?
              </li>
              <li> 
                리뷰를 삭제하고 싶어요.
              </li>
            </ul>
          </div>
          <button class="backBtn" @click="backBtn"> ← 되돌아가기</button>
        </div> 
      </template>

      <!-- 고객센터 >> 1: 1 문의하기 -->
      <template v-else>
        <div class="mypage-content">
          <div class="ask-page">
            <div>1 : 1 문의하기</div>
            <textarea class="ask-content" type="text" placeholder="문의를 남겨주세요. "></textarea>
          </div>
          <button class="backBtn" @click="backBtn"> ← 되돌아가기</button>
          <button class="askBtn" type="submit" >문의하기</button>
        </div> 
      </template>

    </div>
  </div>
</template>

<script>

  export default {
    data: () => ({
      pageStatus: 'mypage',
      infoStatus: 'main',
    }),
    methods: {
      amuFounctin(item){
        this.pageStatus = item;

        /* item이 'info'와 같지 않다면 실행 --> 'info'가 아닌 다른 페이지를 선택했을 때만 조건문 실행 */
        if (item !== 'info') { 
          this.infoStatus = 'main'; 
          // main, store 일 때, 고객센터 외의 페이지는 main 상태로 리셋(자연스럽게 넘어감)
        }
      },
      logout() {
        const logoutAsk = confirm('로그아웃 하시겠습니까?');
        // console.log('res :: ', res);  // 확인 : true, 취소 : false
        if (!logoutAsk) return;
        this.$emit('logInOut', '로그아웃');
        this.$router.push({path: '/main'});
      },
      toggleContent(index) { 
        console.log("index :: ", index);
        this.loginInquiries[index].isOpen = !this.loginInquiries[index].isOpen;        
        this.paymoneyInquiries[index].isOpen = !this.paymoneyInquiries[index].isOpen;        
        this.serviceInquiries[index].isOpen = !this.serviceInquiries[index].isOpen;        
      },
      showInfoSubPage(status){
        this.infoStatus = status;
      },
      backBtn() {
        this.infoStatus = 'main'; // 고객센터 메인으로 돌아가기
      },
  }
}
</script>

<style scoped>
  .font-700 {
    padding-bottom: 5px;
    font-weight: 700;
    width: 75px;
    border-bottom: 3px solid #01321f;
  }
</style>
