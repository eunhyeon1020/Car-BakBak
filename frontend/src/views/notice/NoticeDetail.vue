<template>
  <div id="noticedetail">
    <div class="ntDetail-contain">
    
      <!-- 공지사항 제목 -->
      <div class="ntDetail-title">
        <span>작업</span>
        <h1> 웹페이지 공지사항</h1>
        <span>2023.10.23</span>
      </div>
      
      <!-- 공지사항 내용 -->
      <div class="ntDetail-content">
        <div>
          <p>안녕하세요, <span>차박박</span>에 오신 여러분을 진심으로 환영합니다. </p>
          
          <p><span>차박박</span>은 차박을 사랑하는 모든 분들이 보다 안전하고, 
            편안하게 자연 속으로 떠날 수 있도록 준비한 공간입니다. <br>
            도심을 벗어나 별빛 가득한 밤하늘 아래서 오롯이 나를 마주하는 순간들, 
            그 모든 순간을 차박박이 함께하고 싶습니다. </p>
          
            <p><span> ▶ 실시간 차박지 정보 :</span>
              그곳의 날씨, 안전 소식, 그리고 필요한 모든 정보가 여러분을 기다리고 있어요. 
              자연 속으로 떠나는 순간에도 차박박은 여러분과 함께합니다.</p>
            <p><span> ▶ 나만의 발자국 남기기 :</span>
              여행지에서 느낀 작은 감동, 잊고 싶지 않은 기억들을 발자국으로 남겨주세요. 
              쌓이는 발자국마다 차박박과의 소중한 추억이 됩니다.</p>
            <p><span> ▶ 안심하고 떠나는 여행 :</span>
              차박박의 안전 지도를 참고해 더욱 안전한 차박을 즐겨보세요. 
              언제나 안심할 수 있는 차박 경험을 위해 노력하겠습니다.</p>

            <p><span>차박박</span>은 여러분이 자연속에서 행복한 기억을 쌓고, 
              새로운 만남을 이어가는 그 모든 여정을 응원합니다. <br>
              이제 차박박과 함께 더 특별한 차박 라이프를 시작해보세요.</p>

            <p>여러분의 동반자,</p>
            <span>차박박 드림</span>
        </div>
        
      </div>
      <!-- 공지사항 목록으로 넘어가는 부분 -->
      <div class="not-comeback">
      <router-link :to="'/notice'">
        <p> ← 목록으로</p>
        </router-link>
      </div>


    </div>

  </div>
</template>

<script>
  export default {
    props: {
      data: Array,
    },
  }
</script>

<style scoped>

</style>