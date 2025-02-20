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

        <div class="banner-content"><!-- v-for 들어갈 부분 -->
          <div class="banner-img" v-for="(item, index) in bannerList" :key="index">
              <span style="color: #FFF; font-size: 2rem; white-space: nowrap; font-weight: 600;">{{ item.title }}</span>
              <span style="color: #FFF; font-size: 2rem; white-space: nowrap; font-weight: 600;">{{ item.content }}</span>
          </div>
        </div>
        
      </div>

      <!-- 내비게이션 영역 (카테고리) -->
      <div class="store-navigation">
        <ul>
          <li v-for="(item, i) in naviList" :key="i" @click="showAlert">{{ item }}</li>
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

              <div v-for="(item, index) in bestItemList" :key="index" class="bestItems">
                <a @click="goToDetail(item)">
                  <div class="bestitem-img" style="cursor: pointer;">
                    <img :src="item.imgUrl" alt="상품 이미지" />
                  </div>
                  <div class="bestitem-name" > {{ item.itemNm }} </div>
                  <div class="bestitem-price"> {{ item.price.toLocaleString('ko') }} 원</div>               
                </a>
              </div>

            </div>

            <!-- 베스트 아이템 박스 -->
            <div class="bestItem-box">
              <div class="box-items">
                <div class="boxItem-img">
                  <img src="@/assets/images/products/bestItem-box1.png" />
                  <img src="@/assets/images/products/bestItem-box2.png" />
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
            <div class="newItems" v-for="(item, index) in newItemList" :key="index">
              <a @click="goToDetail(item)">
              <div class="newitem-img">
                <img :src="item.imgUrl" alt="상품 이미지" />
              </div>
              <div class="newitem-name"> {{ item.itemNm }} </div>
              <div class="newitem-price"> {{ item.price.toLocaleString('ko')}} 원</div>
            </a>
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
        { itemNm: '블루 스피클 캠핑 세트', imgUrl: require('@/assets/images/products/bestItem_1.png'),itemDesc:'블루 스피클 캠핑 세트 ( 컵(1) + 주전자(1))', price: 39900 },
        { itemNm: '컴팩트 마이크로파이버 타월', imgUrl: require('@/assets/images/products/bestItem_2.png'), itemDesc:'흡수력 좋은 오렌지 마이크로파이버 타월 1종', price: 15000 },
        { itemNm: '어드벤터 EDC 생존 키드', imgUrl: require('@/assets/images/products/bestItem_3.png'), itemDesc:'휴대하기 좋은 생존형(비상용) 다용도 키트',  price: 35000 },
        { itemNm: '루나블루 LED 캠핑 랜턴', imgUrl: require('@/assets/images/products/bestItem_4.png'),  itemDesc:'한 번 충전으로 최대 48시간 지속 가능한 휴대LED', price: 22000 },
        { itemNm: '접이식 캠핑백', imgUrl: require('@/assets/images/products/bestItem_5.png'),  itemDesc:'휴대하기 좋은 라임색 접이식 가방', price: 29000 },
        { itemNm: '휴대용 와이어 톱', imgUrl: require('@/assets/images/products/bestItem_6.png'), itemDesc:'작고 가벼운 휴대용 와어어 톱',  price: 12000 },
        { itemNm: '미니 접이식 칼', imgUrl: require('@/assets/images/products/bestItem_7.png'), itemDesc:'날카로운 칼날과 접이식 구조로 안전성을 동시에 챙긴 미니 칼',  price: 18500 },
        { itemNm: '초경량 침낭', imgUrl: require('@/assets/images/products/bestItem_8.png'), itemDesc:'따뜻함과 편안함을 모두 잡은 초경량 침낭',  price: 49000 },
      ],
      newItemList: [
        { itemNm: '레드 미니멀 키체인 캡슐', imgUrl: require('@/assets/images/products/newItem_1.png'), itemDesc:'실용성과 스타일을 동시에 갖춘 키체인 캡슐', price: 19000},
        { itemNm: '컴팩트 올인원 멀티툴', imgUrl: require('@/assets/images/products/newItem_2.png'), itemDesc:'다양한 기능을 한 곳에 담은 올인원 멀티툴', price: 32000},
        { itemNm: '클래식 스테인리스 보온병', imgUrl: require('@/assets/images/products/newItem_3.png'), itemDesc:'보온성과 보냉성이 뛰어난 클래식한 보온병', price: 45000},
      ],
      bannerList: [
        { title: '모든 캠핑의 시작과 끝,', content: '여기서 만나요', imgUrl: require('@/assets/images/products/banner1.png')},
        { title: '밤하늘과 맞닿는', content: '당신만의 쉼터', imgUrl: require('@/assets/images/products/banner2.png')},
        { title: '일상의 틀을 벗어나,', content: '자유를 마주하다', imgUrl: require('@/assets/images/products/banner3.png')},
      ],
      naviList: [ '전체', '텐트 ㆍ 타프', '침낭 ㆍ 매트', '라이팅', '계절 용품', '키친', '전자 기기', 'etc' ],
    }),
    mounted() {
      if (typeof $ === 'undefined') {
        console.error('jQuery is not loaded');
        return;
      }
      this.$nextTick(() => {
        window.$('.bestItem-carousel').slick({
          infinite: true,
          autoplay: true,
          pauseOnHover: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: `<i class="ico-arrow-back"></i>`,
          nextArrow: `<i class="ico-arrow-front"></i>`,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });

        window.$('.banner-content').slick({
          infinite: true,
          autoplay: true,
          pauseOnHover: true,
          speed: 1000,
          dots: true,
          customPaging: () => {
            return `<span class="custom-dot"></span>`; // 사용자 지정 dot
          },
          prevArrow: '',
          nextArrow: '',
          slidesToShow: 1,
          slidesToScroll: 1,
        });

      });
    },
    methods: {

      goToDetail(item) {
        const itemInfo = {
          itemNm: item.itemNm,
          imgUrl: item.imgUrl,
          itemDesc: item.itemDesc,
          price: item.price,
      };

      console.log("itemInfo:", itemInfo);
      localStorage.setItem('itemInfo', JSON.stringify(itemInfo));
      this.$router.push('/storedetail');

      },
    showAlert() {
        this.$emit('showAlert', true);
      }
  },
  }
</script>