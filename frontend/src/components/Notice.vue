<template>
  <div id="notice">
    <div class="noti-contain">

      <h1>공지사항</h1>

      <div class="noti-content">

        <div class="order-opt">          
          <select name="order" id="order">
            <option value="all">전체</option>
            <option value="current">작업</option>
            <option value="date">업데이트</option>
            <option value="view">이벤트</option>
          </select>
        </div>

        <table class="noti-table">
          <thead>
             <tr class="table-title">
              <td>종류</td>
              <td>제목</td>
              <td>작성일</td>
             </tr>
          </thead>
          <tbody class="table-content">
            <tr>
              <td>작업</td>
              <td>
                <router-link :to="'noticedetail'">웹 사용 공지사항</router-link>
              </td>
              <td>2024.10.23</td>
            </tr>
          </tbody>
        </table>

        <div class="pagenation">
          <div class="page-num">
            <span>1</span>
            <!-- <span>2</span> -->
          </div>
        </div>

        <div class="search-contain">
          <input type="text" placeholder="검색해주세요">
          <button type="button">검색</button>
        </div>
        
      </div>
    </div>

  </div>
</template>
<script>
  export default {

  }
</script>

<style scoped>
a {
  color: #2b2b2b;
}

a:active {
  color: #2b2b2b;
}

a:visited {
  color: #2b2b2b;
}

</style>