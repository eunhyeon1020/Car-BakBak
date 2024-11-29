<template>
  <div class="store_detail">

    <!-- 이전으로 버튼 -->
    <div class="storeDetail-header">
      <div>
        <router-link :to="'/store'">
          ← 이전으로
        </router-link>
      </div>
    </div>

    <div class="storeDetail-body">
      <div class="detail-contain">

        <div  class="detail-img">
          <img :src="require(`@/assets/images/${$route.meta.imgSrc}`)" alt="상품 이미지" />
        </div>
        
        <div class="detail-content">
        
          <div class="detail-info">
            <h1 class="brand-name">{{ $route.meta.itemNm}}</h1>
            <p class="item-name">{{ $route.meta.itemDesc }}</p>
            <!-- <p class="item-text">이 머그컵은 고온 소성 에나멜 코팅으로 뛰어난 내구성과 깔끔한 디자인을 자랑합니다.<br/> 내충격 스틸 바디로 캠핑이나 아웃도어 환경에서도 안전하게 사용할 수 있고, <br/>인체공학적으로 설계된 손잡이는 편안한 그립감을 제공해 사용이 편리합니다.</p> -->
            <div class="item-price">
              <span>판매가:</span>
              <p class="item-price-val">{{ $route.meta.price.toLocaleString('ko-KR') }} 원</p>
            </div>

            <div class="shipping-info">
              <p>배송비: 2,500원 (50,000원 이상 구매 시 무료)</p>
            </div>

            <div class="count-section">
              <label for="count">수량</label>
              <input type="number" id="count" min="1" value="1" />
            </div>

            <div class="item-total">
              <span>총 상품금액(수량):</span>
              <p class="total-price" id="total-price">{{ $route.meta.price.toLocaleString('ko-KR') }} 원</p>
              <p class="total-price" id="total-count">(1개)</p>
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
      <img
        src="../assets/images/item-detail-img.jpg"
        alt="캠핑 상세 이미지"
        class="detail-banner"
      />
    </div>

  </div>
</template>
<script>
export default {
  mounted() {
    const Price = this.$route.meta.price;
    console.log("Price :: ", Price);
    const countInput = document.getElementById("count");
    const totalPrice = document.getElementById("total-price");
    const totalCount = document.getElementById("total-count");

    countInput.addEventListener("input", function () {
      const count = parseInt(countInput.value, 10);
      const total = Price * count;
      totalPrice.textContent = total.toLocaleString() + "원";
      totalCount.textContent = "(" + count + "개)";
    });
  },
  methods: {
    showAlert() {
      this.$emit('showAlert', true);
    }
  }
};
</script>
