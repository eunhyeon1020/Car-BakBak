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
              <td>NO.</td>
              <td>종류</td>
              <td>제목</td>
              <td>작성일</td>
            </tr>
          </thead>

          <tbody class="table-content">
            <!-- vue에서 사용하는 for문 -->
            <tr v-for="(item, index) in notiList" :key="index"> <!-- 6번 루프 -->
              <td>{{ item.num }}</td>

              <td>{{ item.type }}</td>

              <td>
                <router-link :to="'noticedetail'">{{ item.title }}</router-link>
              </td>

              <td>{{ item.createDt }}</td>

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

    <noticedetail :data="this.array">

    </noticedetail>
  </div>
</template>

<script>
  export default {

    data:() => ({
      notiList: [
        { num: '1', type: '작업', title: '웹 사용 공지사항', createDt: '2024.10.23' },
        { num: '2', type: '업데이트', title: '2024 업데이트', createDt: '2024.10.31' },
        { num: '3', type: '이벤트', title: 'open 이벤트 ', createDt: '2024.10.26' },
      ],
    }),
    mounted() {
      for (let i=0; i<this.notiList.length; i++ ) {  // 6번 루프
        console.log(this.notiList[i]);
      }
    },
    methods: {
    },
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