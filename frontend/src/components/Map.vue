<template>
  <div id="map">
    <!--  카카오맵이 들어갈 부분을 #mapContain 영역으로 지정 -->
    <div id="mapContain" style="width:100%;height:calc(100vh - 65px);position:relative;top:65px;"></div>
  </div>
</template>
<script>
  export default {
    data:() => ({
      map: null,  // map 객체를 초기화해줬다
      overlay: null,
    }),
    mounted() {
      if (window.kakao && window.kakao.maps) {  // 카카오맵 라이브러리가 존재할 때,
        this.loadMap();
      } else {  // 카카오, 카카오맵 라이브러리가 존재하지 않을 때,
        this.loadScript();
      }
    },
    methods: {
      loadMap() {   // 카카오 맵을 그리는 함수
        const container = document.getElementById('mapContain');
        const options = {
          center: new window.kakao.maps.LatLng(37.500856, 127.036499),    // 지도의 좌표! (본인 위치 구글로 찍어서 좌표 적으면 돼요!)
          level: 3,   // 지도의 확대,축소 정도
        }
        
        this.map = new window.kakao.maps.Map(container, options);
        // 하단에 API 추가정보 입력

        // map 내부에 zoomControl 기능 추가 
        var zoomControl = new window.kakao.maps.ZoomControl();
        this.map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        this.loadMarker();
      },
      loadScript() {  // 카카오맵 라이브러리를 로드한다.
        const script = document.createElement("script");    // <script>< /script>
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=cdb7bc47b59d2de4ee68f3e460e373cf&autoload=false"; // ???? 부분에 key 넣으시면 됩니다~~~~    // <script src=""><script>
        script.onload = () => window.kakao.maps.load(this.loadMap); // onclick 이벤트처럼 onload 라는 이벤트를 실행시키는 것(script를 준비하는 이벤트)

        document.head.appendChild(script);  
        // 위에서 제작해준 script를 html > head 태그 내부에 추가 해주는 부분!
        // appendChild를 씀으로써 head 태그 맨 뒤에 script 태그가 위치한댜.
      },
      loadMarker() {
        // 마커 변경 
        const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소
        imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기
        imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션
        //  // 마커의 이미지 정보를 가지고 있는 MarkerImage 객체 생성
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        // 마커 위치 설정
        const markerPosition = new window.kakao.maps.LatLng(37.500856, 127.036499);

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // `imges`에서 `image`로 수정했습니다.
        });

        // // 마커를 지도에 표시
        marker.setMap(this.map);

        const content = `
        <div class="wrap">
          <div class="info">
            <div class="title">
              카카오 스페이스닷원
              <div id="overCloseBtn" class="close" title="닫기" onclick="closeOverlay()"></div>
            </div>
            <div class="body">
              <div class="img">
                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">
              </div>
              <div class="desc">
                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>
                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>
              </div>
            </div>
          </div>
        </div>`;

        // 커스텀 오버레이 생성
        this.overlay = new window.kakao.maps.CustomOverlay({
          content: content,
          map: this.map,
          position: markerPosition,
        });

        // 오버레이를 처음에는 닫은 상태로 설정
        this.overlay.setMap(null);

        // 마커 클릭 이벤트
        window.kakao.maps.event.addListener(marker, "click", () => {
          this.overlay.setMap(this.map);
        });
      },
      // marker overlay 삭제 이벤트
      closeOverlay() {        
        console.log('작동되나?');

        if (this.overlay) {
          this.overlay.setMap(null);
        }        
      },
    },
  };
</script>
<style>
.wrap {
  position: relative;
  width: 250px;
}
.info .title .close {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/close.png') no-repeat;
}
</style>