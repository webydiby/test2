const BODY = document.body;
const HEADER = document.getElementById('header');
const FOOTER = document.getElementById('footer');

HEADER.innerHTML = `
<nav id="gnb">
  <a href="login.html">회원가입</a>
  <a href="login.html">로그인</a>
  <a href="login.html">주문조회</a>
  <a>최근 본 상품</a>
  <a>고객센터</a>
</nav>
<nav id="lnb">
  <a href="index.html"><img src="img/logo.jpg" alt="기업 로고 이미지" class="logo"></a>
  <div>
    <ul class="lnb_menu">
      <li>
        <a href="all.html">전체보기</a>
      </li>
      <li>
        <a href="clothes.html">의류(Clothes)</a>
        <div class="category">
          <a href="clothes.html">자켓(Jacket)</a>
          <a href="clothes.html">상의(Tops)</a>
          <a href="clothes.html">하의(Bottoms)</a>
          <a href="clothes.html">벨트(Belts)</a>
          <a href="clothes.html">패치(Patch)</a>
        </div>
      </li>
      <li>
        <a href="training.html">트레이닝 용품</a>
        <div class="category">
          <a href="training.html">케미라이트</a>
          <a href="training.html">훈련용 고무줄</a>
          <a href="training.html">훈련용 억제기</a>
          <a href="training.html">다회용 투척류</a>
        </div>
      </li>
      <li>
        <a href="edu.html">교육</a>
      </li>
      <li>
        <a href="about.html">ABOUT US</a>
      </li>
      <li>
        <a href="headwear.html">헤드웨어(Headwear)</a>
        <div class="category">
          <a href="headwear.html">모자(Caps)</a>
          <a href="headwear.html">헬멧(Helmet)</a>
          <a href="headwear.html">헤드셋(Headset)</a>
          <a href="headwear.html">마스크(Mask)</a>
        </div>
      </li>
      <li>
        <a href="gears.html">전술장비(Gears)</a>
        <div class="category">
          <a href="gears.html">플레이트 캐리어(Plate Carrier)</a>
          <a href="gears.html">홀스터(Holster)</a>
          <a href="gears.html">파우치(Pouch)</a>
          <a href="gears.html">슬링(Sling)</a>
        </div>
      </li>
      <li>
        <a href="goods.html">프리오더 굿즈</a>
      </li>
    </ul>
  </div>
  <div class="utility">
    <a href="" class="material-symbols-outlined">search</a>
    <a href="login.html" class="material-symbols-outlined">person</a>
    <a href="" class="material-symbols-outlined">shopping_bag</a>
    <button class="lnb_menu_btn">
      <span class="material-symbols-outlined menu_icon">menu</span>
      <span class="material-symbols-outlined close_icon">close</span>
    </button>
  </div>
</nav>
`;

FOOTER.innerHTML = `
<div class="footer_top">
  <a href="index.html"><img src="img/logo.jpg" alt="기업 로고 이미지" class="logo"></a>
  <div class="footer_menu">
    <a href="">회사 소개</a>
    <a href="">이용 약관</a>
    <a href="" class="on">개인정보처리방침</a>
    <a href="">이용안내</a>
    <a href="">사업자정보확인</a>
  </div>
</div>
<div class="footer_bot">
  <div class="sns">
    <a href=""><b>INSTAGRAM</b></a>
    <a href=""><b>YOUTUBE</b></a>
  </div>
  <address>
    <div class="info-1">
      <p class="head"><b>쇼핑몰 기본정보</b></p>
      <p>
        <b>상호명</b> (주)갈매기형제들<br>
        <b>대표자명</b> 홍길동, 홍길동, 홍길동<br>
        <b>사업장 주소</b> 00000 ****시 **구 **로 00 00층 00호 (**동)<br>
        <b>대표 전화</b> 010-0000-0000<br>
        <b>사업자 등록번호</b> 177-86-03219<br>
        <b>통신판매업 신고번호</b> 0000-****-0000<br>
        <b>개인정보보호책임자</b> 홍길동
      </p>
    </div>
    <div class="info-2">
      <p class="head"><b>고객센터 정보</b></p>
      <p>
        <b>상담/주문전화</b> 010-0000-0000<br>
        <b>상담/주문 이메일</b> <a href="" style="text-decoration: underline;">seagullbrothers@naver.com</a><br>
        <b>CS운영시간</b> 월요일 ~ 금요일 AM 10:00 - PM 17:00
      </p>
    </div>
    <div class="info-3">
      <p class="head"><b>결제 정보</b></p>
      <p>
        <b>무통장 계좌정보</b><br>
        **은행 000-000-000000 (주)갈매기형제들
      </p>
    </div>
    <small><b>Copyright © (주)갈매기형제들 All Rights Reserved.</b></small>
  </address>
</div>
`;

const GNB = document.getElementById('gnb');
const LNB_MENU = document.querySelector('.lnb_menu');
const LNB_MENU_BTN = document.querySelector('.lnb_menu_btn');

let lastScrollY = window.scrollY;
let hasScrolledDown = false;
let isMenuHovered = false;

window.addEventListener('scroll', () => {
  let isScrollingDown = window.scrollY > lastScrollY;
  lastScrollY = window.scrollY;
  if (hasScrolledDown === isScrollingDown) return;
  HEADER.classList.toggle('scrollingDown');
  hasScrolledDown ? hasScrolledDown = false : hasScrolledDown = true;
});

HEADER.addEventListener('mouseover', (e) => {
  let hasMenu = e.target.querySelector('.lnb_menu');
  if (e.target.matches('.lnb_menu') && !isMenuHovered) {
    isMenuHovered = true;
    let lnbMenuHeight = e.target.scrollHeight;
    HEADER.style.setProperty('--menuScrollHeight', `${lnbMenuHeight}px`);
  }
});

HEADER.addEventListener('mouseleave', () => {
  isMenuHovered = false;
});

LNB_MENU_BTN.addEventListener('click', () => {
  LNB_MENU.classList.toggle('on');
  LNB_MENU_BTN.classList.toggle('on');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 800) {
    LNB_MENU.classList.remove('on');
    LNB_MENU_BTN.classList.remove('on');
  }
});