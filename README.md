# 아트라스콥코 올인웍스 스마트스토어
## Atlas Copco Official Dealer - All-in Works

![Atlas Copco](https://img.shields.io/badge/Atlas%20Copco-Official%20Dealer-0079C1?style=for-the-badge)
![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-10B981?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Design-4DA6D9?style=for-the-badge)

---

## 📋 프로젝트 개요

아트라스콥코(Atlas Copco) 공식 대리점 **올인웍스 주식회사**의 네이버 스마트스토어 웹사이트입니다.

### 🎯 프로젝트 목표

- **네이버 쇼핑 검색 SEO 최적화**: B2B 고객 유입 극대화
- **미니멀 & 모던 디자인**: 아트라스콥코 브랜드 톤앤매너 반영
- **제품군별 체계적 구조**: 카탈로그 기반 명확한 정보 전달
- **스마트스토어 즉시 적용 가능**: 바로 사용 가능한 완성도

---

## ✨ 주요 기능

### 🏠 메인 페이지 (index.html)
- **히어로 섹션**: 브랜드 메시지와 핵심 가치 전달
- **제품 카테고리**: 6개 주요 카테고리 카드 형식
- **브랜드 스토리**: 지속가능성, 생산성, 수익성 가치 제시
- **문의 폼**: 견적 문의 및 상담 신청
- **반응형 네비게이션**: 모바일 최적화 메뉴

### 📂 제품 카테고리 페이지
1. **재료 제거 도구** (category-material-removal.html)
2. **에어 조립 도구** (category-air-tools.html) ✅ 구현됨
3. **배터리 조립 도구** (category-battery-tools.html)
4. **유선 핸드헬드 도구** (category-cable-tools.html)
5. **정밀 저토크 도구** (category-precision-tools.html)
6. **컨트롤러 & 소프트웨어** (category-controllers.html)

각 카테고리 페이지 구성:
- 카테고리 히어로 섹션
- 제품 시리즈 카드 (사양, 특징, 적용 분야)
- 산업별 적용 사례
- CTA (견적 문의, 카탈로그 다운로드)

### 🛍️ 상품 상세 페이지 (product-detail.html)
- **네이버 스마트스토어 최적화 구조**
- **SEO 메타 태그**: Title, Description, Keywords, Open Graph
- **JSON-LD 구조화 데이터**: 검색 엔진 최적화
- **상품 이미지 갤러리**: 썸네일 네비게이션
- **탭 구조**: 상세정보, 제품사양, 주요기능, 구매후기, 상품문의
- **관련 상품 추천**: 크로스셀링
- **가격 정보**: 견적 문의 시스템

### ❓ FAQ 페이지 (faq.html)
- 자주 묻는 질문 아코디언 UI
- 카테고리별 질문 분류
- 검색 기능

### 📱 반응형 디자인
- **Desktop**: 1280px 이상
- **Tablet**: 640px ~ 1024px
- **Mobile**: 640px 이하
- 모든 디바이스에서 최적화된 사용자 경험

---

## 🎨 디자인 시스템

### 브랜드 컬러 (Atlas Copco Official)
```css
--atlas-primary-blue: #0079C1   /* 메인 블루 */
--atlas-dark-blue: #004F9E       /* 다크 블루 */
--atlas-light-blue: #4DA6D9      /* 라이트 블루 */
--atlas-accent-blue: #00A3E0     /* 액센트 블루 */
```

### 타이포그래피
- **Primary Font**: Pretendard (한글 최적화)
- **Fallback**: -apple-system, BlinkMacSystemFont, Segoe UI

### 디자인 컨셉
- **미니멀리즘**: 불필요한 요소 제거, 콘텐츠 중심
- **모던**: 깔끔한 그리드, 충분한 여백, 명확한 계층 구조
- **프로페셔널**: B2B 타겟에 맞는 신뢰감 있는 디자인

---

## 🔍 SEO 최적화

### 네이버 쇼핑 검색 최적화
- ✅ 표준상품명 가이드 준수 (50자 이내)
- ✅ 메타 태그 최적화 (Title, Description, Keywords)
- ✅ Open Graph 태그 (SNS 공유 최적화)
- ✅ JSON-LD 구조화 데이터
- ✅ Canonical URL 설정
- ✅ Breadcrumb 네비게이션
- ✅ 내부 링크 구조 최적화

### 키워드 전략
- **메인 키워드**: 아트라스콥코, Atlas Copco, 산업용 공구
- **세부 키워드**: 제품군별 특화 키워드 (에어 스크류드라이버, 무선 너트러너 등)
- **Long-tail 키워드**: "항공우주용 고정밀 드릴" 등 구체적 검색어

**상세 가이드**: [SEO-GUIDE.md](SEO-GUIDE.md) 참고

---

## 📁 프로젝트 구조

```
atlas-copco-smartstore/
│
├── index.html                    # 메인 홈페이지
├── category-air-tools.html       # 에어 조립 도구 카테고리
├── category-battery-tools.html   # 배터리 조립 도구 (템플릿)
├── category-cable-tools.html     # 유선 도구 (템플릿)
├── category-material-removal.html# 재료 제거 도구 (템플릿)
├── category-precision-tools.html # 정밀 도구 (템플릿)
├── category-controllers.html     # 컨트롤러 (템플릿)
├── product-detail.html           # 상품 상세 페이지 템플릿
├── faq.html                      # FAQ 페이지 (작성 예정)
│
├── css/
│   ├── variables.css            # CSS 변수 (색상, 간격, 폰트)
│   ├── reset.css                # CSS 리셋
│   ├── utilities.css            # 유틸리티 클래스
│   ├── main.css                 # 메인 페이지 스타일
│   ├── category.css             # 카테고리 페이지 스타일
│   └── product.css              # 상품 상세 페이지 스타일
│
├── js/
│   ├── main.js                  # 메인 JavaScript
│   └── product.js               # 상품 상세 페이지 JavaScript
│
├── SEO-GUIDE.md                 # SEO 최적화 가이드
└── README.md                    # 프로젝트 문서 (현재 파일)
```

---

## 🚀 시작하기

### 1. 파일 다운로드
프로젝트의 모든 파일을 다운로드합니다.

### 2. 로컬 서버 실행
```bash
# Python 3를 사용하는 경우
python -m http.server 8000

# 또는 Node.js의 http-server 사용
npx http-server
```

### 3. 브라우저에서 확인
```
http://localhost:8000
```

### 4. 네이버 스마트스토어 적용
1. **상품 이미지 추가**: 각 제품의 실제 이미지로 교체
2. **가격 정보 입력**: 견적 문의 → 실제 가격으로 변경 (필요시)
3. **연락처 정보 수정**: 실제 회사 정보로 업데이트
4. **도메인 연결**: 스마트스토어 도메인 설정

---

## 📦 제품 카테고리 구조

### 1. 재료 제거 도구 (Material Removal Tools)
- **드릴**: LBB, EBB, LBD 시리즈
- **그라인더**: GTG, LBG 시리즈
- **적용 분야**: 항공우주, 조선, 금속 가공

### 2. 에어 조립 도구 (Air Assembly Tools)
- **LUM / Twist / LTV009**: 에어 스크류드라이버
- **LTV29-2 / LTV39-2**: 고속 너트러너
- **LTP61 / LTV69**: 트윈 모터 너트러너
- **ErgoPulse PTI**: 유압 임펄스 렌치 (프리미엄)

### 3. 배터리 조립 도구 (Battery Assembly Tools)
- **BCP / BCV**: 배터리 클러치 도구
- **Tensor SB / SRB31 / TBP**: 배터리 너트러너
- **IxB 시리즈**: 통합 컨트롤러 배터리 도구

### 4. 유선 핸드헬드 도구 (Handheld Cable Tools)
- **Tensor ES / SL / SR**: 보급형 유선 너트러너
- **Tensor ST / ST REVO / STR**: 고성능 유선 너트러너

### 5. 정밀 저토크 도구 (Low Torque & MicroTorque)
- **LowTorque 클러치 도구 / EBL**: 저토크 전동 드라이버
- **ETD / QMC**: 마이크로토크 정밀 도구

### 6. 컨트롤러 & 소프트웨어 (Controllers & Software)
- **Power Focus 6000 / 8**: 토크 컨트롤러
- **ToolsNet 8**: 체결 데이터 관리
- **ILS 2.0**: 산업용 위치 추적 시스템

---

## 🎯 타겟 고객

### B2B 산업 고객
- **자동차 제조**: 완성차 및 부품 업체
- **항공우주**: 항공기 제조 및 정비
- **전자제품**: 가전, IT 기기 제조
- **중장비**: 건설기계, 산업기계
- **조선**: 선박 건조 및 수리

### 검색 유입 시나리오
1. 네이버에서 "산업용 임펄스 렌치" 검색
2. 스마트스토어 검색 결과 노출
3. 제품 상세 페이지 진입
4. 사양 확인 후 견적 문의

---

## 📱 주요 페이지 URL 구조

```
/                                    # 메인 홈페이지
/index.html#categories               # 제품 카테고리 섹션
/index.html#about                    # 회사소개
/index.html#contact                  # 문의하기

/category-air-tools.html             # 에어 조립 도구
/category-battery-tools.html         # 배터리 조립 도구
/category-cable-tools.html           # 유선 핸드헬드 도구
/category-material-removal.html      # 재료 제거 도구
/category-precision-tools.html       # 정밀 저토크 도구
/category-controllers.html           # 컨트롤러 & 소프트웨어

/product-detail.html?series=ergopulse # 상품 상세 (ErgoPulse 시리즈)
/product-detail.html?series=ltv29     # 상품 상세 (LTV29 시리즈)

/faq.html                            # 자주 묻는 질문
```

---

## ✅ 구현 완료 기능

- [x] 메인 홈페이지 (반응형)
- [x] 제품 카테고리 페이지 템플릿
- [x] 상품 상세 페이지 (스마트스토어 최적화)
- [x] SEO 메타 태그 및 구조화 데이터
- [x] 반응형 네비게이션 (모바일 메뉴)
- [x] 문의 폼 (유효성 검사 포함)
- [x] 스크롤 애니메이션
- [x] 상단 이동 버튼
- [x] Atlas Copco 브랜드 컬러 시스템
- [x] 미니멀 & 모던 디자인
- [x] SEO 최적화 가이드 문서

---

## 🔧 커스터마이징 가이드

### 색상 변경
`css/variables.css` 파일에서 브랜드 컬러 수정:
```css
:root {
  --atlas-primary-blue: #YOUR_COLOR;
  --atlas-dark-blue: #YOUR_COLOR;
}
```

### 연락처 정보 수정
`index.html` 및 각 페이지의 Footer 섹션:
```html
<p>02-XXXX-XXXX</p>  <!-- 실제 전화번호로 변경 -->
<p>info@allinworks.co.kr</p>  <!-- 실제 이메일로 변경 -->
```

### 상품 이미지 추가
```html
<!-- 현재 placeholder -->
<div class="product-image-placeholder">
  <i class="fas fa-wrench"></i>
</div>

<!-- 실제 이미지로 교체 -->
<img src="images/products/ergopulse-pti.jpg" alt="ErgoPulse PTI">
```

---

## 📈 다음 단계 (권장 개발 사항)

### 우선순위 높음
- [ ] FAQ 페이지 완성
- [ ] 나머지 카테고리 페이지 작성 (5개)
- [ ] 실제 제품 이미지 추가
- [ ] 제품별 상세 페이지 개별 생성
- [ ] 실제 가격 정보 반영 (또는 견적 시스템 유지)

### 우선순위 중간
- [ ] 제품 검색 기능
- [ ] 제품 필터링 (토크 범위, 가격, 적용 분야)
- [ ] 리뷰 시스템 (실제 데이터 연동)
- [ ] Q&A 시스템 (실제 데이터 연동)
- [ ] 관심상품 기능 (localStorage 활용)

### 우선순위 낮음
- [ ] 다국어 지원 (영어)
- [ ] 제품 비교 기능
- [ ] PDF 카탈로그 다운로드
- [ ] 라이브 채팅 통합
- [ ] Google Analytics 연동

---

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, CSS Variables
- **JavaScript (Vanilla)**: ES6+
- **Font Awesome 6**: 아이콘
- **Google Fonts**: Pretendard 폰트

### 외부 라이브러리
- **Font Awesome**: 6.4.0 (CDN)
- **Google Fonts**: Pretendard

---

## 📞 문의 및 지원

### 프로젝트 관련 문의
- **이메일**: info@allinworks.co.kr
- **전화**: 02-XXXX-XXXX

### 기술 지원
- **GitHub Issues**: (저장소 URL)
- **개발 문의**: dev@allinworks.co.kr

---

## 📄 라이선스

이 프로젝트는 **올인웍스 주식회사**의 자산입니다.  
아트라스콥코(Atlas Copco)는 등록 상표이며, 공식 대리점 계약에 따라 사용됩니다.

---

## 🙏 감사의 글

- **Atlas Copco**: 프리미엄 산업용 공구 제공
- **네이버 스마트스토어**: 판매 플랫폼 지원
- **개발팀**: 웹사이트 개발 및 SEO 최적화

---

**마지막 업데이트**: 2024-02-11  
**버전**: 1.0.0  
**개발**: 올인웍스 주식회사 IT팀
