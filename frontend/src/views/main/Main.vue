<template>
  <div id="main">
    <!-- 배너 영역 -->
    <div class="main-banner">
      <div class="banner-title">차박의 설렘, 안전한 길 위에서<br />차박박</div>
    </div>

    <!-- 인트로 영역 -->
    <div class="main-intro">
      <!-- 1. 간략 소개 / 차 안에서 만나는 안전의 쉼표, 차박박! -->
      <div class="intro-contain">
        <div>차 안에서 만나는 안전의 쉼표, 차박박</div>
        <ul>
          <li>
            <div class="bottom-line">Essence</div>
            <div>안전과 즐거움</div>
          </li>
          <li>
            <div class="bottom-line">Exploration</div>
            <div>새로운 장소의 발견</div>
          </li>
          <li>
            <div class="bottom-line">Connection</div>
            <div>경험 공유</div>
          </li>
        </ul>
        <div>
          차박박은 차박을 즐기는 사람들에게 안전과 즐거움을 제공하는 <br />
          새로운 개념의 차박 플랫폼입니다. <br /><br />
          실시간으로 차박지의 날씨와 안전 및 사고 소식까지 한 눈에 확인할 수
          있습니다. <br />
          사용자들이 남긴 여행의 발자국을 통해 최고의 차박지를 발견하고, <br />
          나만의 발자국을 남기며 마일리지도 쌓아보세요. <br /><br /><br />
          차박박이 제공하는 안전지도와 함께 더 안전하고 편안한 차박 라이프를
          즐겨보세요.
        </div>
        <button class="review-btn" @click="pagehandler">
          발자국 남기러 가기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="white">
            <path d="M260-840q-45 0-72.5 50T160-680q0 63 17.5 111.5T210-496l110-22q13-32 26.5-73t13.5-89q0-60-27.5-110T260-840Zm55 520q19 0 32-14t13-39q0-17-8-35t-16-32l-96 20q0 40 17.5 70t57.5 30Zm385-320q-45 0-72.5 50T600-480q0 48 13.5 88.5T640-318l110 22q15-24 32.5-72T800-480q0-60-27.5-110T700-640Zm-55 520q40 0 57.5-30t17.5-70l-96-20q-8 14-16 32t-8 35q0 20 12.5 36.5T645-120ZM315-240q-77 0-117-57t-38-128l-18-27q-11-17-36.5-77T80-680q0-103 51-171.5T260-920q85 0 132.5 75.5T440-680q0 58-16 107t-28 79l8 13q8 14 22 44.5t14 63.5q0 57-35.5 95T315-240ZM645-40q-54 0-89.5-38T520-173q0-33 14-63.5t22-44.5l8-13q-12-30-28-79t-16-107q0-89 47.5-164.5T700-720q78 0 129 68.5T880-480q0 91-25.5 150.5T818-253l-18 28q1 71-38.5 128T645-40Z"/>
          </svg>
        </button>
      </div>

      <!-- 2. 자세히 소개 -->
      <div class="intro-contain" id="useSafe">
        <!-- 2-1. 안전 지도 소개-->
        <div>
          <div class="use-safe-contain">
            <div class="use-safe">
              <div class="safe-map">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="#e9e9e9"
                >
                  <path
                    d="m612-120-263-93-179 71q-17 9-33.5-1T120-173v-558q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840-788v565q0 11-7.5 19T814-192l-202 72Zm-34-75v-505l-196-66v505l196 66Zm60 0 142-47v-512l-142 54v505Zm-458-12 142-54v-505l-142 47v512Zm458-493v505-505Zm-316-66v505-505Z"
                  />
                </svg>
                <span>안전 지도</span>
              </div>
              <div style="line-height: 2.5rem; font-weight: 600;">
                편리와 안전, <br />그리고 기록을 한 번에
              </div>
            </div>

            <div>
              사용자가 입력한 장소에 대한 안전 정보와 날씨 예보를 제공합니다.
              <br>또한, 다른 사용자들의 리뷰를 통해 새로운 차박지를 발견하고 
              <br>자신의 경험을 공유할 수 있습니다.
            </div>
          </div>

          <div class="map-img"></div>
        </div>

        <!-- 2-2. 스토어 소개 -->
        <div class="intro-store">
          <div>
            <h3>Store</h3>
            <p>
              차박박의 스토어에서는 사용자가 남긴 리뷰로 쌓은 마일리지를 활용해
              다양한 차박 필수 아이템을 구입할 수 있습니다. 캠핑에 필요한 모든
              제품을 한 곳에서 만나보고, 특별한 할인 혜택도 누릴 수 있습니다.
            </p>
          </div>
          <div class="store-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="47px"
              viewBox="0 -960 960 960"
              width="47px"
              fill="#fff"
            >
              <path
                d="M840-519v339q0 24-18 42t-42 18H179q-24 0-42-18t-18-42v-339q-28-24-37-59t2-70l43-135q8-27 28-42t46-15h553q28 0 49 15.5t29 41.5l44 135q11 35 1.5 70T840-519Zm-270-31q29 0 49-19t16-46l-25-165H510v165q0 26 17 45.5t43 19.5Zm-187 0q28 0 47.5-19t19.5-46v-165H350l-25 165q-4 26 14 45.5t44 19.5Zm-182 0q24 0 41.5-16.5T263-607l26-173H189l-46 146q-10 31 8 57.5t50 26.5Zm557 0q32 0 50.5-26t8.5-58l-46-146H671l26 173q3 24 20.5 40.5T758-550ZM179-180h601v-311q1 1-6.5 1H758q-25 0-47.5-10.5T666-533q-16 20-40 31.5T573-490q-30 0-51.5-8.5T480-527q-15 18-38 27.5t-52 9.5q-31 0-55-11t-41-32q-24 21-47 32t-46 11h-13.5q-6.5 0-8.5-1v311Zm601 0H179h601Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- 3. 구성원 소개 -->
      <div class="intro-contain">
        <div class="profile-comment">
          <div>"안전을 위해 항상 힘내겠습니다."</div>
        </div>
        <div class="profile">
          <ul class="park">
            <li>
              <div></div>
            </li>
            <li>팀장 박소정</li>
            <li><span>웹 디자인(주)</span><br /><span>UI 구현(보조)</span><br /><span>데이터 처리 및 연결</span></li>
          </ul>

          <ul class="kim">
            <li>
              <div></div>
            </li>
            <li>조원 김은현</li>
            <li><span>웹 디자인(보조)</span><br /><span>반응형 웹 디자인</span><br /><span>UI/UX 개발(주)</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </template>


<script>
export default {
  data:() => ({
    
  }),
  methods: {
  pagehandler() {
    const data = localStorage.getItem("userData");
    if (data) {
      try {
        const userData = JSON.parse(data);
        if (userData && userData.loginYorN) {
          if (userData.loginYorN === "Y") {
            this.$router.push("/map");
          } else {
            this.$router.push("/login");
          }
        } else {
          this.$router.push("/login");
        }
      } catch (e) {
        this.$router.push("/login");
      }
    } else {
      this.$router.push("/login");
    }
  },
},
};

</script>
