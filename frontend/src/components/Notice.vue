<template>
  <div id="notice">
    <div class="noti-contain">

      <h1>공지사항</h1>

      <div class="noti-content">

        <div class="order-opt">          
          <select name="order" id="order">
            <option value="current">최신순</option>
            <option value="date">날짜순</option>
            <option value="view">조회순</option>
          </select>
        </div>

        <table class="noti-table">
          <thead>
             <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>추천</th>
              <th>조회</th>
             </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>웹 사용 공지사항</td>
              <td>차박박</td>
              <td>2024.10.23</td>
              <td>0</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>

        <div class="pagenation">
          <div class="page-num">
            <span>1</span>
            <span>2</span>
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


</style>