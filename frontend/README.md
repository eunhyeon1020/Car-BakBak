# 🚗 차박러를 위한 안전 정보 플랫폼 _ 차박박 
- 배포 URL : https://eunhyeon1020.github.io/

## 차박박 소개 💨
- 차박을 즐기는 사람들에게 안전과 편의를 제공하는 새로운 개념의 차박 플랫폼입니다. 
- 실시간으로 차박지의 안전 뉴스와 자신의 경험을 남길 수 있습니다. 
- 차박에 관련된 제품을 스토어를 통해 한눈에 확인하고 구입할 수 있습니다. 

## 🙂 팀원 구성
 **김은현** | **박소정** 
:-----:|:------:
![김은현](../frontend/src/assets/images/profiles/150px_keh.jpg) | ![박소정](../frontend/src/assets/images/profiles/150px_psj.jpg) 
반응형 웹 디자인 <br> UI/UX 구현 | 웹 디자인 <br> UI 구현(보조) <br> 데이터 처리 및 연결 

## 1. 개발환경 
- frontend : HTML, css, Vue.js, javascript   
- 라이브러리 : Vue CLI, Axios, slick-side   
- API : 지도 API, 검색 API   
- 데이터 베이스 : LocalStorage   
- 형상 관리 : Github   

## 2. 프로젝트 구성 
```
├─ README.md   
├─ package-lock.json   
├─ package.json   
├─ frontend    
├─ public    
│  ├─ index.html    
│  └─ favicon.svg   
└─ src   
   ├─ assets   
   │ ├─ css   
   │ │  ├─ base   
   │ │  ├─ color   
   │ │  ├─ page   
   │ │  ├─ ...   
   │ │  └─ table   
   │ ├─ fonts   
   │ │  ├─ paperlogy   
   │ │  └─ nanumGothic   
   │ └─ images    
   │    ├─ backgrounds    
   │    ├─ gifs       
   │    ├─ icons   
   │    ├─ linkmoves   
   │    ├─ logos    
   │    ├─ products     
   │    └─ profiles     
   ├─ components      
   │  ├─ Alert.vue       
   │  └─ Error.vue   
   ├─ layouts       
   │  ├─ Header.vue      
   │  └─ Footer.vue      
   ├─ views           
   │  ├─ main  
   │  │  └─ Main.vue         
   │  ├─ login  
   │  │  ├─ Login.vue      
   │  │  └─ Sign.vue     
   │  ├─ profile    
   │  │  └─ MyPage.vue     
   │  ├─ notice       
   │  │  ├─ Notice.vue       
   │  │  └─ NoticeDetail.vue      
   │  ├─ map       
   │  │  └─ Map.vue     
   │  └─ store     
   │     ├─Store.vue   
   │     └─StoreDetail.vue      
   ├─ App.vue   
   ├─ main.js 
   ├─ routes    
   │  └─ index.js   
   ├─ stores   
   │  └─ index.js : 상태관리 패턴/라이브러리(vuex) 적용 예정    
   └─ mixins       
      └─ index.js : 예정    
```
## 3. 개발 기간 및 작업 관리 
### 개발 기간 
- 전체 개발 기간 : 2024.03 ~ 2024.12 
- 기획 및 변경 : 2024.03 ~ 2024.06
- 시장 분석 및 타켓층 설정 : 2024.06
- UI/UX 설계 및 시스템 구상 : 2024.06 ~ 2024.08
- UI/UX 구현 : 2024.10 ~ 2024.12 
- 테스트 :  2024.12

### 작업관리 
- Github를 사용하여 코드 리뷰와 진행 상황을 공유했습니다.
- 주기적인 회의를 통해 작업 순서와 방향성에 대해 생각해 나가며 Google sheet에 기록해 나갔습니다. 

## 4. 컴포넌트 별 구성 
모든 컴포넌트는 반응형으로 처리되어 있습니다. 

### [Header] 
- 상단 메뉴   
  - 메인 / 소개 / 지도 / 스토어 / 공지사항 / 로그인 및 회원가입(로그인 전) / 사용자명 및 마이페이지(로그인 후)      
  - 각각의 버튼을 누르게 되면 해당 페이지로 이동 
- 상단 메뉴 (반응형) 
  - 로고 변경 
  - 소개 / 지도 / 스토어 / 공지사항 / 로그인 및 회원가입(로그인 전) 각각의 버튼들이 햄버거 버튼으로 변경 
  - 마이페이지 버튼은 사람 모양 버튼으로 변경 

### [Main]
#### 1. 인트로 
  - 차박박에 대한 간략한 소개와 키워드 설명 
  - 발자국 남기기 버튼
    - 사용자 리뷰가 있는 지도로 이동하는 버튼 
    - 로그인 전, 로그인 페이지로 이동 
    - 로그인 후, 지도 페이지로 이동 
#### 2. 상세 소개
  - 안전 지도와 store에 대한 자세한 설명 
  - Header 소개 버튼 클릭 시, 해당 페이지로 스크롤 내려옴
#### 3. 구성원 소개 및 포부 
  - 구성원 프로필과 역할, 구성원들의 포부 작성 

### [Footer] 
  - 차박박 로고, 사업명, 구성원, 문의번호, 주소 등 정보 존재 

### [Login]
#### 1. Login 
  - LocalStoregy userDate(userId, userPassword)를 연동해 로그인 기능 구현 
  - userdate 저장된 정보와 입력한 값의 참거짓을 보고 로그인 여부를 따짐. 
  - 로그인 성공 시, 성공창이 뜨고 메인 페이지로 이동
#### 2. Sign
  - 각각의 란에 해당 값을 입력하면 입력창에서 유효성 검사가 진행됨. 
  - 입력한 값이 정해진 형식과 일치하지 않으면 각 경고 문구가 입력창 하단에 표시 
  - 형식에 맞지 않거나 필수 입력란을 입력하지 않을 시에는 회원가입을 할 수 없다는 경고창이 뜸
  - 모든 란을 입력 후, 회원가입이 성공되면 성공창이 뜨고 로그인 페이지로 넘어감. 

### [Map]


 





 