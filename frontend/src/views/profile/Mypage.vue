<template>
  <div id="mypage">
    <div class="mypage-contain">
      <div class="mypage-header">
        <ul>
          <li>
            <router-link :to="'/'">
              <div class="mypage-logo"></div>
            </router-link>
            <div>My Page</div>
          </li>
          
          <li class="mypage-img">
              <div class="profile-img"></div>
            <div class="userName">{{ userName }}</div>
            <div class="userId">{{ userID }}</div>
          </li>

          <li>
            <div class="mypage-menu">
              <div @click="listClick('mypage')" :class="{ 'font-700' : pageStatus === 'mypage'}">내프로필</div>
              <div @click="listClick('store')" :class="{ 'font-700' : pageStatus === 'store'}">스토어</div>
              <div @click="listClick('info')" :class="{ 'font-700' : pageStatus === 'info'}">고객센터</div>
            </div>
            <div style="border: 1px solid #eee;"></div>
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
                <div class="userName">{{ userName }}</div>
            <div class="userId">{{ userID }}</div>
              </li>
            </ul>
  
            <ul>
              <li>
                <div class="tel">
                  <div></div>
                  <div>{{ phoneNum }}</div>
                </div>
              </li>
            </ul>
  
            <ul>
              <li>
                <div class="id">
                  <div></div>
                  <div>{{ userID }}</div> 
                </div>
                <div class="pw">
                  <div></div>
                  <div>{{ userPassword }}</div>
                </div>
              </li>
            </ul>
  
            <ul>
              <li>
                <div class="adress">
                  <div></div>
                  <div>{{ userAdress }}</div>
                </div>
              </li>
            </ul>
  
            <ul>
              <li>
                <div class="email">
                  <div></div>
                  <div>{{userEmail}}</div>
                </div>
              </li>
            </ul>
  
            <div class="change" @click="change">
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
              <li @click="showInfoSubPage('paymoney')" class="info-paymoney">
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
              <li v-for="(inquiry, index) in loginInquiries" :key="index">
                <div :class="['inquiry-title', {'active' : inquiry.isOpen}]" @click="toggleContent(index)">
                  {{ inquiry.title }}
                </div>
                <div v-if="inquiry.isOpen" class="inquiry-content">
                  {{ inquiry.content }}
                </div>
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
              <li v-for="(inquiry, index) in paymoneyInquiries" :key="index">
                <div :class="['inquiry-title', {'active' : inquiry.isOpen}]" @click="toggleContent(index)">
                  {{ inquiry.title }}
                </div>
                <div v-if="inquiry.isOpen" class="inquiry-content">
                  {{ inquiry.content }}
                </div>
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
              <li v-for="(inquiry, index) in serviceInquiries" :key="index">
                <div :class="['inquiry-title', {'active' : inquiry.isOpen}]" @click="toggleContent(index)">
                  {{ inquiry.title }}
                </div>
                <div v-if="inquiry.isOpen" class="inquiry-content">
                  {{ inquiry.content }}
                </div>
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

      <div class="isMobile">
        <div class="mobile-logoutBtn" v-if="isMobile" @click="logout">로그아웃</div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    data: () => ({
      pageStatus: 'mypage',
      infoStatus: 'main',
      loginInquiries: [
        {title: "회원 탈퇴/로그아웃은 어떻게 하나요?", content:"탈퇴 및 로그아웃 방법에 대한 내용입니다.", isOpen: false},
        {title: "닉네임을 변경하고 싶어요", content: "닉네임 변경 방법에 대한 내용입니다.", isOpen: false},
        {title: "회원가입 시 입력한 이메일을 변경하고 싶어요", content: "이메일 변경에 대한 내용입니다.", isOpen: false},
        {title: "비밀번호를 변경하고 싶어요", content: "비밀번호 변경에 대한 내용입니다.", isOpen: false}
      ],
      paymoneyInquiries: [
        {title: "결제를 취소하고 싶어요.", content:"결제 취소에 대한 내용입니다.", isOpen:false},   
        {title:"현금 결제는 어떻게 하나요?", content: "현금 결제에 대한 내용입니다.", isOpen:false},
        {title:"입금자명을 바꾸고 싶어요.", content: "입금자명 변경 방법에 대한 내용입니다.", isOpen:false},
        {title:"현금영수증 발급은 어떻게 받나요?", content: "현금영수증 발급 방법에 대한 내용입니다.", isOpen:false}
      ],
      serviceInquiries: [
        {title:"회원가입 시 어떠한 혜택이 있나요?", content:"회원가입 혜택에 대한 내용입니다.", isOpen:false},
        {title:"비회원도 주문이 가능한가요?", content:"비회원 주문 방법에 대한 내용입니다.", isOpen:false},
        {title:"리뷰는 어떻게 작성해야 하나요", content:"리뷰 작성 방법에 대한 내용입니다.", isOpen:false},
        {title:"리뷰를 삭제하고 싶어요.", content:"리뷰 삭제 방법에 대한 내용입니다. ", isOpen:false},
      ],
      isMobile: window.innerWidth <= 1000,
      userName: '',
      userID: '',
      userPassword: '',
      phoneNum: '',
      userAdress: '',
      userEmail: '',
      loginYorN: '',
    }),
    methods: {
      change() {
        this.$emit('showAlert', true);
      },
      updateIsMobile() {
      this.isMobile = window.innerWidth <= 1000; // 화면 크기 업데이트
      },

      listClick(item){
        if (item === 'store') {
          this.$emit('showAlert', true);
          return;
        }
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
        const userData = JSON.parse(localStorage.getItem('userData'));
        userData.loginYorN = 'N';
        localStorage.setItem('userData', JSON.stringify(userData));
        this.$router.push({path: '/'});
      },

      toggleContent(index) { 
        // console.log("index :: ", index);
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
    },

    mounted() {
    window.addEventListener('resize', this.updateIsMobile); // 화면 크기 변경 이벤트 등록
    const userData = JSON.parse(localStorage.getItem('userData')); //회원가입 정보 가져옴
    if (userData) {
      this.userName = userData.userName;
      this.userID = userData.userID; 
      this.userPassword = userData.userPassword;
      this.phoneNum = userData.phoneNum; 
      this.userAdress = userData.userAdress;
      this.userEmail = userData.userEmail;
    }
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.updateIsMobile); // 이벤트 해제
    },
  }
</script>

<style scoped>
  .font-700 {
    padding-bottom: 5px;
    font-weight: 700;
    width: 75px;
    border-bottom: 3px solid #01321f;
  }
  
  .inquiry-title::after {
    content: '';
    width: 30px;
    min-width: 30px;
    height: 30px;

    margin-left: auto;

    display: inline-block;  
    background-image: url(@/assets/images/icons/ico-keyDown.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: right center;
    cursor: pointer;
  }
  .inquiry-title.active::after {
    background-image: url(@/assets/images/icons/ico-keyUp.svg);
  }
</style>