<template>
  <div class="store_detail">
    <!-- 이전으로 버튼 -->
    <div class="storeDetail-header">
      <div>
        <router-link :to="'/store'">← 이전으로</router-link>
      </div>
    </div>

    <div class="storeDetail-body">
      <div class="detail-contain">
        <!-- 상품 URL 출력 -->
        <div class="detail-img">
          <img :src="imgUrl" alt="상품 이미지" />
        </div>

        <div class="detail-content">
          <div class="detail-info">
            <!-- 아이템 이름  -->
            <h1 class="brand-name">{{ itemNm }}</h1>

            <!-- 아이템 정보 -->
            <p class="item-name">{{ itemDesc }}</p>

            <!-- 아이템 판매가 -->
            <div class="item-price">
              <span>판매가:</span>
              <!-- toLocaleString() : 콤마가 포한된 문자열로 변환 -->
              <p class="item-price-val">{{ price.toLocaleString() }}원</p>
            </div>

            <!-- 배송비  -->
            <div class="shipping-info">
              <p>배송비: 2,500원 (50,000원 이상 구매 시 무료)</p>
            </div>

            <!-- 수량  -->
            <div class="count-section">
              <label for="count">수량</label>
              <!-- 수량을 변경 -->
              <!-- @blur :: 입력값 검사(0 이하 방지) // min이 있어도 완전히 같은 기능이 아니기 때문에 작성해야 함(모든 잘못된 입력값을 막을 수 없음)-->
              <input type="number" id="count" min="1" value="1" @input="updateTotal" @blur="validateCount" />
            </div>

            <!-- 총 상품금액 -->
            <div class="item-total">
              <span>총 상품금액(수량):</span>
              <p class="total-price">{{ totalPrice.toLocaleString()}}원</p>
              <p class="total-price">({{ totalCount}}개)</p>
            </div>

            <div class="action-buttons">
              <button class="buy-now" @click="showAlert">바로 구매하기</button>
              <button class="add-to-cart" @click="showAlert">장바구니 담기</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body_content bottom detail">
      <img src="@/assets/images/products/item-detail-img.jpg" alt="캠핑 상세 이미지" class="detail-banner" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemNm: '',
      imgUrl: '',
      itemDesc: '',
      price: 0,
      totalPrice: 0,
      totalCount: 1,
    };
  },
  mounted() {
    // 로컬스토리지에서 itemInfo 문자열을 객체로 바꿔서 불러옴.
    const item = JSON.parse(localStorage.getItem('itemInfo'));
    if (item) {
      this.itemNm = item.itemNm;
      this.itemDesc = item.itemDesc;
      this.imgUrl = item.imgUrl;
      this.price = item.price;
      this.totalPrice = item.price;
    }
  },
  methods: {
    showAlert() {
      this.$emit('showAlert', true);
    },

    // 총 수량 계산 
    updateTotal(event) {
      const count = parseInt(event.target.value, 10) || 0;
      this.totalCount = count;
      this.totalPrice = this.price * count;
    },
    validateCount(event) {
      const count = parseInt(event.target.value, 10);
      if (isNaN(count) || count <= 0) {
        event.target.value = 1;
        this.totalCount = 1;
        this.totalPrice = this.price;
      }
    },
  },
};
</script>