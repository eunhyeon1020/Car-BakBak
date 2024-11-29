<template>
  <div id="store">
    <div class="store-header">

      <!-- 검색창 영역 --> 
      <div class="menu-content">
        <div class="searchBar">
          <div class="search-box" id="search-box">
            <input type="hidden" name="chkButton" id="chkButton" value="" />
            <input
              type="text"
              class="header_search_input"
              name=""
              value=""
              placeholder="상품, 브랜드 검색"
            />
            <i class="ico-search"></i>
          </div>
          <i class="ico-shopping"></i>
        </div>
      </div>

      <!-- 광고 영역  -->
      <div class="banner"><!-- 컨테이너가 되어야 할 부분 -->

        <div class="banner-img" style="position: relative;" v-for="(item, index) in bannerList" :key="index"><!-- v-for 들어갈 부분 -->
          <div style="
            height: 100%; 
            padding: 0 3rem; 
            display: flex; 
            flex-flow: row nowrap; 
            justify-content: space-between; 
            align-items: center; 
            gap: 10px 3rem;"
            :style="`background-image: ${item.imgUrl}`"
          >
            <span style="color: #FFF; font-size: 2rem; white-space: nowrap;">{{ item.title }}</span>
            <span style="color: #FFF; font-size: 2rem; white-space: nowrap;">{{ item.content }}</span>
          </div>
        </div>
        
      </div>


      <!-- 내비게이션 영역 (카테고리) -->
      <div class="store-navigation">
        <ul>
          <li>전체</li>
          <li>텐트 ㆍ 타프</li>
          <li>침낭 ㆍ 매트</li>
          <li>라이팅</li>
          <li>계절 용품</li>
          <li>키친</li>
          <li>전자 기기</li>
          <li>etc</li>
        </ul> 
      </div>

      <!-- 스토어 body -->
      <div class="store-body">

        <!-- 베스트 아이템 영역 -->
        <div class="bestItem-contain">

          <!-- 베스트 아이템 타이틀 -->
          <div class="bestItem-title">
            <span>BEST ITEM</span>
            <span>이번 주 가장 인기있는 상품</span>
          </div>
          
          <!-- 베스트 아이템 내용 -->
          <div class="bestItem-content">
            <!-- 베스트 아이템 캐러셀(슬라이드) -->
            <div class="bestItem-carousel">
              <!-- <div class="arrow-back">
                <i class="ico-arrow-back"></i>
              </div> -->

              <div v-for="(item, index) in bestItemList" :key="index" class="bestItems">
                <router-link :to="'storedetail'">
                  <div class="bestitem-img">
                    <img :src="item.imgUrl" alt="상품 이미지" />
                  </div>
                  <div class="bestitem-name"> {{ item.itemNm }} </div>
                  <div class="bestitem-price"> {{ item.price.toLocaleString('ko') }} 원</div>               
                </router-link>
              </div>

              <!-- <div class="arrow-front">
                <i class="ico-arrow-front"></i>
              </div> -->
            </div>

            <!-- 베스트 아이템 박스 -->
            <div class="bestItem-box">
              <div class="box-items">
                <div class="boxItem-img">
                  <img src="../assets/images/bestItem-box1.png" />
                  <img src="../assets/images/bestItem-box2.png" />
                </div>
              </div>
            </div>
          </div> 

        </div> <!-- 베스트 아이템 영역 끝 -->

        
        <!-- 뉴 아이템 영역 -->
        <div class="newItem-contain">
          <!-- 뉴아이템 타이틀 -->
          <div class="newItem-title">
            <span>NEW ITEM</span>
            <span>이번 주 새로 들어온 상품</span>
          </div>

          <!-- 뉴아이템 내용 -->
          <div class="newItem-content">
            <div v-for="(item, index) in newItemList" :key="index" class="newItems">
              <div class="newitem-img">
                <img :src="item.imgUrl" alt="상품 이미지" />
              </div>
              <div class="newitem-name"> {{ item.itemNm }} </div>
              <div class="newitem-price"> {{ item.price.toLocaleString('ko')}} 원</div>
            </div>
          </div>

        </div>

      <!-- <div class="section body_section4">
            <div class="box sec4">
                <span class="title">주목해야할브랜드</span>
                <div class="content">
                    <div class="item">
                        <div class="item-img"><img src="../assets/images/camping-travel-knife-card.jpg"></div>
                    </div>
                </div>
                <div class="content">
                    <div class="item">
                        <div class="item-img"><img src="../assets/images/camping-travel-knife-card.jpg"></div>
                        <div class="item-txt">잠 잘오는 침낭</div>
                    </div>
                    <div class="item">
                        <div class="item-img"><img src="../assets/images/camping-travel-knife-card.jpg"></div>
                        <div class="item-txt">잠 잘오는 침낭</div>
                    </div>
                </div>
            </div>
          </div> -->
      </div>    
    </div>
  </div>
</template>

<script>
  export default {
    data:() => ({
      bestItemList: [
        { itemNm: '잠 잘오는 침낭', imgUrl: require('@/assets/images/bestItem_1.png'), price: 45250 },
        { itemNm: '잠 잘오는 침낭', imgUrl: require('@/assets/images/bestItem_2.png'), price: 45250 },
        { itemNm: '잠 잘오는 침낭', imgUrl: require('@/assets/images/bestItem_3.png'), price: 45250 },
        { itemNm: '잠 잘오는 침낭', imgUrl: require('@/assets/images/bestItem_1.png'), price: 45250 },
        { itemNm: '잠 잘오는 침낭', imgUrl: require('@/assets/images/bestItem_2.png'), price: 45250 },
        { itemNm: '잠 잘오는 침낭', imgUrl: require('@/assets/images/bestItem_3.png'), price: 45250 },
        { itemNm: '잠 잘오는 침낭', imgUrl: require('@/assets/images/bestItem_4.png'), price: 45250 },
        { itemNm: '잠 잘오는 침낭', imgUrl: require('@/assets/images/bestItem_1.png'), price: 45250 },
      ],
      newItemList: [
        { itemNm: '신제품', imgUrl: require('@/assets/images/newItem_1.png'), price: 30000},
        { itemNm: '신제품', imgUrl: require('@/assets/images/newItem_2.png'), price: 30000},
        { itemNm: '신제품', imgUrl: require('@/assets/images/newItem_3.png'), price: 30000},
      ],
      bannerList: [
        { title: '타이틀1', content: '안녕하세요', imgUrl: require('@/assets/images/banner1.png')},
        { title: '타이틀2', content: '안녕히가세요', imgUrl: require('@/assets/images/banner2.png')},
        { title: '타이틀3', content: '잘가요', imgUrl: require('@/assets/images/banner3.png')},
      ],
    }),
    mounted() {
      if (typeof $ === 'undefined') {
        console.error('jQuery is not loaded');
        return;
      }
      this.$nextTick(() => {
        window.$('.bestItem-carousel').slick({
          infinite: true,
          // autoplay: true,
          // pauseOnHover: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: `<i class="ico-arrow-back"></i>`,
          nextArrow: `<i class="ico-arrow-front"></i>`,
        });
      });
    },
    methods: {
    },
  }
</script>