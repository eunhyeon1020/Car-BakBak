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
                            <input type="hidden" name="chkButton" id="chkButton" value="">
                            <input type="text" class="header_search_input" name="" value="" placeholder="상품, 브랜드 검색">
                        </div>
                        <i class="ico-shopping"></i>
                    </div>
            </div>
            <div class="banner">
                <div class="banner-img"></div>
            </div>
        </div>
        <div class="body_content">
            <div class="section body_section1">
                <div class="box sec1">
                    <span class="title">BEST ITEM</span>
                    <span class="mini-title">이번 주 가장 인기있는 상품</span>
                    <div class="content">
                        <div class="arrow-back">
                        <i class="ico-arrow-back"></i>
                    </div>
                        <div class="item">
                            <div class="item-img"> <img src="../assets/images/sec1-1.png"></div>
                            <div class="item-txt">
                                <div>잠 잘오는 침낭</div>
                                <div>45,250원</div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-img"><img src="../assets/images/sec1-2.png"></div>
                            <div class="item-txt">
                                <div>화력 지리는 버너</div>
                                <div>33,000원</div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-img"><img src="../assets/images/sec1-3.png"></div>
                            <div class="item-txt">
                                <div>방수 쩌는 텐트</div>
                                <div>105,200원</div>
                            </div>
                        </div>
                        <div class="item">
                            <router-link :to="'storedetail'"><div class="item-img"><img src="../assets/images/sec1-4.png"></div></router-link>
                            <div class="item-txt">
                                <div>맛있어지는 후라이팬</div>
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
                            <div class="item-img"><img src="../assets/images/sec2-1.png"></div>
                        </div>
                        <div class="item">
                            <div class="item-img"><img src="../assets/images/sec2-2.png"></div>
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
                            <div class="item-img"><img src="../assets/images/sec3-1.jpg"></div>
                        </div>
                        <div class="item">
                            <div class="item-img"><img src="../assets/images/sec3-2.jpg"></div>
                        </div>
                        <div class="item">
                            <div class="item-img"><img src="../assets/images/sec3-3.jpg"></div>
                        </div>
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
</template>