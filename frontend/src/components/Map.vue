<template>
  <div id="map">
    <!--  카카오맵이 들어갈 부분을 #mapContain 영역으로 지정 -->
    <div id="mapContain" style="width:500px;height:400px;"></div>
  </div>
</template>
<script>
  export default {
    data:() => ({
      map: null,
    }),
    mounted() {
      if (window.kakao && window.kakao.maps) {
        this.loadMap();
      } else {
        this.loadScript();
      }
    },
    methods: {
      loadScript() {
        const script = document.createElement("script");
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=???????&autoload=false"; // ???? 부분에 key 넣으시면 됩니다~~~~
        script.onload = () => window.kakao.maps.load(this.loadMap);

        document.head.appendChild(script);  // 위에서 제작해준 script를 html > head 태그 내부에 추가 해주는 부분!
      },
      loadMap() {
        const container = document.getElementById('mapContain');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),    // 지도의 좌표! (본인 위치 구글로 찍어서 좌표 적으면 돼요!)
          level: 3,   // 지도의 확대/축소 정도
        }

        this.map = new window.kakao.maps.Map(container, options);
        this.loadMarker();
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