<template>
  <div id="map">
    <!--  카카오맵이 들어갈 부분을 #mapContain 영역으로 지정 -->
    <div id="mapContain" style="width:100%; height:calc(100vh - 65px); position:relative; top:65px;"></div>

    <!--------------------- sidebar html ------------------->
      <div v-if="isSidebarOpen" class="sidebar"> 
        <div class="menuBtn">
          <div @click="menuContent('news')" :class="{'menu': menuPage === 'news'}">NEWS</div>
          <div @click="menuContent('review')" :class="{'menu': menuPage === 'review'}">REVIEW</div>
        </div>
        
        <!-- 뉴스 page -->
        <div class="news" v-if=" menuPage === 'news'"> 
          <div class="newsbar-header">
            <div class="search-icon" v-text="searchText"></div>
          </div>

          <div ref="chatArea" class="newsbar-body">
            <div class="newsbar-contain" v-for="(item, index) in searchList" :key="index" >
              <div>
                <div class="newsbar-title" v-html="item.title"></div>
                <a class="newsbar-link" :href="item.url" target='_blank'></a>
              </div> 
              <div class="newsbar-datetime" v-html="formatDate(item.datetime)"></div>
              <div class="newsbar-contents" v-html="item.contents"></div>
            </div>
          </div>

          <div class="newsbar-footer">
            <button @click="isSidebarOpen = false">Close</button>
          </div>
        </div>
        
        
        <!-- 리뷰 page -->
        <div class="review" v-else>
          <!-- header -->
          <div class="review-header">
            <div class="review-icon"></div>
            <div class="review-title" v-text="searchText"></div>
          </div>

          <!-- body -->
          <div ref="chatArea" class="review-body">
            <div v-for="(user, index) in reviewContent" :key="index">
              <div class="chatDate">
                <div class="chatDate-content">
                  {{ user.chatDate }}
                </div>
              </div>

              <div class="userId">
                {{ user.userID}}
              </div>
              
              <div class="chat" >
                <div class="chatting">
                  {{ user.chatting }}
                </div>
                <div class="chatTime">
                  {{ user.chatTime }}
                </div>
              </div>
            
            </div>

            <!-- 날짜 출력 -->
            <div class="chatDate">
              <div class="myChatdate" v-if="reviewList.length !== 0" v-text="currentDate"></div>
            </div>

            <!-- 시간과 내용 출력 -->
            <div class="myChat-contain" v-if="reviewList.length !== 0">
              <div v-for="(item, index) in reviewList" :key="index" class="myChat">
                <div class="myChattime" v-if="index === reviewList.length - 1 || reviewList[index + 1]?.time !== item.time ">
                  {{ item.time }}
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-end;">
                  <div class="myChatting">
                    {{ item.chat }}
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <!-- footer -->
          <div class="review-footer">
            <!-- 입력하는 곳 -->
            <textarea type="text" v-model="reviewText" @key.enter="SendReview" ref="textarea" placeholder="발자국을 남겨주세요."/>
            <div class="review-closeBtn">
              <button @click="isSidebarOpen = false"> Close</button>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  export default {
    data:() => ({
      map: null,  // map 객체를 초기화해줬다
      overlay: null,
      isSidebarOpen: true, //사이드 바 기본 열림 상태(false)
      searchText: '실미유원지 안전',
      searchList: [],   // {}
      reviewText: '',
      reviewList: [],
      menuPage: 'news', // news, review
      reviewContent: [
        {userID: "차차차", chatting: "여름에 갔는데 샤워실도 있고 수영하기도 좋았어요 !!", chatDate:"2023 . 7 . 27", chatTime: "11 : 20",},
        {userID: "차린이", chatting: "처음 차박하시는 분들께 추천드립니다!", chatTime: "14 : 22",},
        {userID: "차박마스터꿈나무", chatting: "바다 보고 싶으시면 왼쪽으로 들어가는 것 ㅊㅊ", chatDate:"2023 . 11 . 23", chatTime: "18 : 37",},
        {userID: "차박박하사탕탕후루", chatting: "근처 00횟집이 레전드 맛있음;;", chatDate:"2024 . 10 . 17", chatTime: "15 : 20",},
        {userID: "차박해볼까", chatting: "상당히 추움. 외투 챙겨가세요", chatDate:"2024 . 11 . 16", chatTime: "18 : 33",},
      ],
      currentDate: '',
      currentTime: '',
    }),
    async mounted() {

      this.currentDate = new Date();

      if (window.kakao && window.kakao.maps) {  // 카카오맵 라이브러리가 존재할 때,
        this.loadMap();
      } else {  // 카카오, 카카오맵 라이브러리가 존재하지 않을 때,
        this.loadScript();
      }

      // 카카오 검색 API 불러오기
      const searchRes = await this.$axios.get(`https://dapi.kakao.com/v2/search/web`, {
          params: { 
            query: this.searchText, 
            sort: 'accuracy',
            page: 1, 
            size: 10, 
          },
          headers: {
            Authorization: 'KakaoAK 6f28d7e14b2449fb380b7a2c0af2d9b4'
          },
        });
        // console.log("searchRes.data.documents:", searchRes.data.documents);

        this.searchList = searchRes.data && searchRes.data.documents ? searchRes.data.documents : [];
    },
    methods: {
      handleEnter() {
      // Enter 키 입력 시 커서 위치를 유지
      const textarea = this.$refs.textarea;
      if (textarea) {
        // 강제로 커서를 텍스트 끝으로 이동
        const cursorPosition = textarea.selectionEnd;
        textarea.setSelectionRange(cursorPosition, cursorPosition);
      }
      },
      searchAction(e) {
        this.searchText = e.target.value;        
      },
      
      formatDate(datetime) {
        if (!datetime) return '';
          const [date] = datetime.split('T'); 
          return date; 
      },
      loadMap() {   // 카카오 맵을 그리는 함수
        const container = document.getElementById('mapContain');
        const options = {
          center: new window.kakao.maps.LatLng(37.40198, 126.4021), //좌표(구글)
          level: 3,   // 지도의 확대,축소 정도
        };        
        this.map = new window.kakao.maps.Map(container, options);
        
        // map 내부에 zoomControl 기능 추가 
        var zoomControl = new window.kakao.maps.ZoomControl();
        this.map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
        this.loadMarker();
      },
      loadScript() {  // 카카오맵 라이브러리를 로드한다.
        const script = document.createElement("script");    // <script>< /script>
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=cdb7bc47b59d2de4ee68f3e460e373cf&autoload=false"; // <script src=""><script>
        script.onload = () => window.kakao.maps.load(this.loadMap); // onclick 이벤트처럼 onload 라는 이벤트를 실행시키는 것(script를 준비하는 이벤트)
        document.head.appendChild(script);  
        // 위에서 제작해준 script를 html > head 태그 내부에 추가 해주는 부분!
        // appendChild를 씀으로써 head 태그 맨 뒤에 script 태그가 위치한댜.
      },
      loadMarker() {
        // 마커 변경 
        // const imageSrc = 'https://img.icons8.com/?size=256w&id=13800&format=png' // 마커이미지의 주소
        const imageSrc = 'https://paperless-dev.bizmeka.com/resources/public/template/_kddx/images/marker.svg' // 마커이미지의 주소
        const imageSize = new window.kakao.maps.Size(30, 30) // 마커이미지의 크기
        const imageOption = {offset: new window.kakao.maps.Point(16, 20)}; // 마커이미지의 옵션
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption); // 마커의 이미지 정보를 가지고 있는 MarkerImage 객체 생성        
        const markerPosition = new window.kakao.maps.LatLng(37.40198, 126.4021); // 마커 위치 설정

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // 마커를 지도에 표시
        marker.setMap(this.map);

        // 커스텀 오버레이 생성
        this.overlay = new window.kakao.maps.CustomOverlay({
          map: this.map,
        });

        // 오버레이를 처음에는 닫은 상태로 설정
        this.overlay.setMap(null);

        // 마커 클릭 이벤트
        window.kakao.maps.event.addListener(marker, "click", () => {
          this.overlay.setMap(this.map);
          this.isSidebarOpen = true;
        });
      },
      menuContent(item) {
        this.menuPage = item;

        if (this.menuPage === 'review') {
          this.$nextTick(() => {
            const separateSettingArea = document.querySelector('.review-body');
            const chatArea = this.$refs.chatArea;
            chatArea.scrollTo({ top: separateSettingArea.scrollHeight, behavior: 'smooth', });
          });
        }
      },
      /* 리뷰창 컨트롤 */
      SendReview(e) {
        if (e.keyCode === 13 && !e.shiftKey) {
          e.preventDefault(); 

          if (!this.reviewText.trim()){
            return;
          }

          // 현재 입력된 시간과 채팅 내용
          const newMessage = {
            chat: this.reviewText,
            time: this.timeFormat(),
          };

          this.reviewList.push(newMessage);
          this.reviewText = ''; // 입력창 초기화

          this.$nextTick(() => {  // DOM이 로딩이 완료된 후
            this.currentDate = this.dateFormat();
            this.currentTime = this.timeFormat();

            // 자동 스크롤
            const separateSettingArea = document.querySelector('.review-body');
            const chatArea = this.$refs.chatArea;
            chatArea.scrollTo({ top: separateSettingArea.scrollHeight, behavior: 'smooth' });
          });

          // console.log("this.reviewList :: ", this.reviewList);
        }
      },      
      dateFormat() {
        const today = new Date();
        const year = today.getFullYear(); // 2023
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 06
        const day = today.getDate().toString().padStart(2, '0'); // 18

        const dateString = year + '.' + month + '.' + day; // 2023-06-18

        return dateString;
      },
      timeFormat(date = new Date()) {
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return hours + ":" + minutes
      },

    },
  };
</script>

<style scoped>
  .menu{
    background-color: white;
    color: #01321f;
    font-weight: 700;
  }
</style>

