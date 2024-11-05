<template>
  <div id="map">
    <!--  카카오맵이 들어갈 부분을 #mapContain 영역으로 지정 -->
    <div id="mapContain" style="width:500px;height:400px;"></div>
  </div>
</template>
<script>
  export default {
    data:() => ({
      map: null,  // map 객체를 초기화해줬다
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
        console.log(this.map);
        this.loadMarker();
      },
      loadScript() {  // 카카오맵 라이브러리를 로드한다.
        const script = document.createElement("script");    // <script>< /script>
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=???????&autoload=false"; // ???? 부분에 key 넣으시면 됩니다~~~~    // <script src=""><script>
        script.onload = () => window.kakao.maps.load(this.loadMap); // onclick 이벤트처럼 onload 라는 이벤트를 실행시키는 것(script를 준비하는 이벤트)

        document.head.appendChild(script);  // 위에서 제작해준 script를 html > head 태그 내부에 추가 해주는 부분!
        // appendChild를 씀으로써 head 태그 맨 뒤에 script 태그가 위치한댜.
      },
      loadMarker() {
        const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });

        marker.setMap(this.map);
      },
    }
  }
</script>