<template>
    <div class="store_detail">
        <div class="header_content">
            <div class="menu_inner"> 
                <ul>
                    <li>카테고리</li>
                    <li>신상품</li>
                    <li>랭킹</li>
                    <li>세일</li>
                    <li>고객센터</li>
                </ul>
                <div class="menu_right">
                    <div class="search_box" id="search_box">
                        <input type="hidden" name="chkButton" id="chkButton" value="">
                        <input type="text" class="header_search_input" name="" value="" placeholder="상품, 브랜드 검색">
                    </div>
                    <i class="ico-shopping"></i>
                </div>
            </div>
        </div>
        <div class="body_content top detail">
            <div class="item-image">
                <img src="../assets/images/sec1-4.png" alt="상품 이미지" />
            </div>
            <div class="item-info">
                <h1 class="brand-name">Camper</h1>
                <p class="item-name">블루 스피클 캠핑 세트(주전자(1) + 컵(1) 구성)</p>
                <!-- <p class="item-text">이 머그컵은 고온 소성 에나멜 코팅으로 뛰어난 내구성과 깔끔한 디자인을 자랑합니다.<br/> 내충격 스틸 바디로 캠핑이나 아웃도어 환경에서도 안전하게 사용할 수 있고, <br/>인체공학적으로 설계된 손잡이는 편안한 그립감을 제공해 사용이 편리합니다.</p> -->
                <div style="display: flex; font-weight: 700;align-items:center;">
                    판매가:&nbsp;&nbsp;&nbsp;<p class="item-price">39,900원</p>
                </div>
                
                <div class="shipping-info">
                    <p>배송비: 2,500원 (50,000원 이상 구매 시 무료)</p>
                </div>
                <div class="count-section">
                    <label for="count">수량</label>
                    <input type="number" id="count" min="1" value="1" />
                </div>
                <div style="display: flex; font-weight: 700;font-size: 18px; align-items:center; border-top: 1px solid #ddd;padding-top: 10px;justify-content: flex-end;">
                    총 상품금액(수량):&nbsp;&nbsp;&nbsp;<p class="total-price" id="total-price">39,000원</p><p class="total-price" id="total-count">(1개)</p>
                </div>
                <div class="action-buttons">
                    <button class="buy-now">바로 구매하기</button>
                    <button class="add-to-cart">장바구니 담기</button>
                </div>
            </div>
        </div>
        <div class="body_content bottom detail">
            <img src="../assets/images/item-detail-img.jpg" alt="캠핑 상세 이미지" class="detail-banner" />
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        const Price = 39900; 
        const countInput = document.getElementById('count'); 
        const totalPrice = document.getElementById('total-price');
        const totalCount = document.getElementById('total-count');

        countInput.addEventListener('input', function() {
        const count = parseInt(countInput.value, 10);
        const total = Price * count;
        totalPrice.textContent = total.toLocaleString() + '원';
        totalCount.textContent = '(' + count + '개)'
        });
    }
};
</script>
