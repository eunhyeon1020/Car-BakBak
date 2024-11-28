<template>
    <div id="store">
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
            <input type="text" class="header_search_input" placeholder="상품, 브랜드 검색">
            </div>
            <i class="ico-shopping"></i>
        </div>
    </div>
    <div class="banner-container">
        <div class="banner">
            <div class="banner-img1" v-bind:style="getBannerStyle(0)"></div>
            <div class="banner-img2" v-bind:style="getBannerStyle(1)"></div>
            <div class="banner-img3" v-bind:style="getBannerStyle(2)"></div>
        </div>
        <button class="arrow arrow-back" @click="prevSlide">
            <i class="ico-arrow-back"></i>
        </button>
        <button class="arrow arrow-front" @click="nextSlide">
            <i class="ico-arrow-front"></i>
        </button>
    </div>
<div class="body_content">
    <div class="section body_section1">
    <div class="box sec1">
        <span class="title">BEST ITEM</span>
        <span class="mini-title">이번 주 가장 인기있는 상품</span>
        <div class="content">
        <div class="arrow-back"><i class="ico-arrow-back"></i></div>
        <div class="item">
            <router-link :to="'storedetail'">
            <div class="item-img">
                <img src="../assets/images/sec1-1.png" />
            </div>
            </router-link>
            <div class="item-txt">
            <div>포켓 미니 백</div>
            <div>19,250원</div>
            </div>
        </div>
                        <div class="item">
                            <router-link :to="'storedetail'"><div class="item-img"><img src="../assets/images/sec1-2.png"></div></router-link>
                            <div class="item-txt">
                                <div>LED 캠핑 램프</div>
                                <div>12,000원</div>
                            </div>
                        </div>
                        <div class="item">
                            <router-link :to="'storedetail'"><div class="item-img"><img src="../assets/images/sec1-3.png"></div></router-link>
                            <div class="item-txt">
                                <div>미니 서바이벌 키트</div>
                                <div>30,000원</div>
                            </div>
                        </div>
                        <div class="item">
                            <router-link :to="'storedetail'"><div class="item-img"><img src="../assets/images/sec1-4.png"></div></router-link>
                            <div class="item-txt">
                                <div>블루 스피클 캠핑 세트</div>
                                <div>39,900원</div>
                            </div>
                        </div>
                        <div class="arrow-front">
                        <i class="ico-arrow-front"></i>
                    </div>
                    </div>
                </div>
            </div>
            <div class="section body_section2">
                <div class="box sec2">
                    <div class="content">
                        <div class="item">
                            <router-link :to="'storedetail'"><div class="item-img"><img src="../assets/images/sec2-1.png"></div></router-link>
                        </div>
                        <div class="item">
                            <router-link :to="'storedetail'"><div class="item-img"><img src="../assets/images/sec2-2.png"></div></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section body_section3">
                <div class="box sec3">
                    <span class="title">NEW ITEM</span>
                    <span class="mini-title">이번 주 새로 들어온 상품</span>
                    <div class="content">
                        <div class="item">
                            <router-link :to="'storedetail'"><div class="item-img"><img src="../assets/images/sec3-1.jpg"></div></router-link>
                        </div>
                        <div class="item">
                            <router-link :to="'storedetail'"><div class="item-img"><img src="../assets/images/sec3-2.jpg"></div></router-link>
                        </div>
                        <div class="item">
                            <router-link :to="'storedetail'"><div class="item-img"><img src="../assets/images/sec3-3.jpg"></div></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
data() {
    return {
    currentIndex: 0, 
    intervalId: null, 
    totalBanner: 3,
    };
},
methods: {
    nextSlide() { //다음 배너로 넘어가는 이벤트(오른쪽 화살표)
        this.currentIndex += 1; //클릭할 때마다 현재 인덱스 +1 시킴
        if (this.currentIndex >= this.totalBanner) { //인덱스가 배너 개수랑 같거나 크면
            this.currentIndex = 0; //0으로 설정(처음부터 반복하게)
        }
    },

    prevSlide() { //이전 배너로 넘어가는 이벤트(왼쪽 화살표)
        this.currentIndex -= 1; //클릭할 때마다 현재 인덱스 -1 시킴
        if (this.currentIndex < 0) { //인덱스가 0보다 작아지면(개수가작아지니까)
            this.currentIndex = this.totalBanner - 1; //배너-1로 설정(뒤로 반복하게)
        }
    },


    startAutoSlide() { //버튼 클릭하지 않아도 시간 지나면 알아서 돌아감
        this.intervalId = setInterval(() => {
            this.nextSlide(); //next함수 실행
        }, 3000); //3초 뒤에
    },
    stopAutoSlide() {
        clearInterval(this.intervalId); // 시간 초기화
    },

    getBannerStyle(index) {
        return {
            display: this.currentIndex === index ? "block" : "none", //인덱스마다 display 설정 다르게 줌(보이는건 block 나머지는 none)
        };
    },
},
    mounted() {
        this.startAutoSlide(); //DOM 이후
    },
    beforeDestroy() {
        this.stopAutoSlide(); //마지막에 실행
    },
};
</script>





