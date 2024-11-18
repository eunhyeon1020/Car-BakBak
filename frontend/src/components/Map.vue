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
        <div v-if=" menuPage === 'news'"> 
          <div class="sidebar-header">
            <div class="search-icon" v-text="searchText"></div>
          </div>

          <div class="sidebar-body">
            <div class="sidebar-contain" v-for="(item, index) in searchList" :key="index" >
              <div>
                <div class="side-title" v-html="item.title"></div>
                <a class="side-link" :href="item.url" target='_blank'> → </a>
              </div> 
              <div class="side-datetime" v-html="formatDate(item.datetime)"></div>
              <div class="side-contents" v-html="item.contents"></div>
            </div>
          </div>

          <div class="sidebar-footer">
            <button @click="isSidebarOpen = false">닫기</button>
          </div> 
        </div>


        <!-- 리뷰 page -->
        <div v-else>
          안녕
          <div style="border: 1px solid red; border-radius: 20px; height: auto; padding: 8px;">
            <div style="display: flex; flex-direction: column;">
              <div>생각하는 라이언</div>
              <div style="background-color: #EEE; border-radius: 5px; padding: 3px 8px; width: 70%;">
                아ㅣ~ 따분하다
              </div>
            </div>
            <div style="display: flex; flex-direction: column;">
              <div>고민하는 어피치</div>
              <div style="background-color: #EEE; border-radius: 5px; padding: 3px 8px; width: 70%;">
                아ㅣ~ 따분하다
              </div>
            </div>
            <div style="display: flex; flex-direction: column;">
              <div>기뻐하는 춘식이</div>
              <div style="background-color: #EEE; border-radius: 5px; padding: 3px 8px; width: 70%;">
                아ㅣ~ 따분하다
              </div>
            </div>
            <div style="display: flex; flex-direction: column;">
              <div>장난치는 콘</div>
              <div style="background-color: #EEE; border-radius: 5px; padding: 3px 8px; width: 70%;">
                아ㅣ~ 따분하다
              </div>
            </div>

            <!-- 내가 채팅 치는 곳 -->
            <div v-if="reviewList.length !== 0" style="display: flex; flex-direction: column; align-items: flex-end;">
              <div>장난치는 콘</div>
              <div v-for="(item, index) in reviewList" :key="index"
              style="background-color: #ffff0026; border-radius: 5px;padding: 3px 8px; margin-bottom: 3px; width: 70%;">{{ item }}</div>
            </div>
            <!-- 내가 채팅 치는 곳 -->

          </div>
          <!-- 입력하는 곳 -->
          <div style="width:100%;text-align:center;padding-top:10px;">
            <textarea type="text" v-model="reviewText" style="border: 1px solid red; width: 50%;" 
              @keypress="SendReview"/>
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
    }),
    async mounted() {
      if (window.kakao && window.kakao.maps) {  // 카카오맵 라이브러리가 존재할 때,
        this.loadMap();
      } else {  // 카카오, 카카오맵 라이브러리가 존재하지 않을 때,
        this.loadScript();
      }

      // 카카오 검색 API 불러오기
      const searchRes = await this.$axios.get(`	https://dapi.kakao.com/v2/search/web`, {
          params: { 
            query: this.searchText, 
            sort: 'accuracy',
            page: 1, 
            size: 3, 
          },
          headers: {
            Authorization: 'KakaoAK 6f28d7e14b2449fb380b7a2c0af2d9b4'
          },
        });
        // console.log("searchRes.data.documents:", searchRes.data.documents);

        this.searchList = searchRes.data && searchRes.data.documents ? searchRes.data.documents : [];
    },
    methods: {
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
        // console.log(item);
      },
      SendReview(e) {
        // console.log("e.keyCode :: ", e.keyCode);
        // console.log("e.shiftKey ::", e.shiftKey)
        /* 
          - enter : 13
          - shift+enter : 16
        */
        if (e.keyCode === 13 && !e.shiftKey) {
        this.reviewList.push(this.reviewText);
          this.reviewText = '';
        }
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

