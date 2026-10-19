# Frontend Engineer 최성재

Next.js 15 / React 19 / TypeScript 기반의 프론트엔드 엔지니어입니다.
2년간의 퍼블리셔 경험을 바탕으로 현재 리턴플러스에서 한조각 홈페이지·WebView 앱·관리자 대시보드와 지도 기반 부동산 플랫폼 Prime의 프론트엔드 개발을 맡고 있습니다. 아키텍처 설계와 기능 개발부터 기존 코드의 마이그레이션, 유지보수와 기능 확장까지 서비스 전반의 개발을 담당합니다.
한조각의 3개 프로젝트는 Next.js 15 기반으로 설계와 개발을 리딩하며 성능 최적화·SEO·권한 관리와 관리자 화면을 구현했습니다. 이와 함께 Prime을 FSD·TypeScript 구조로 전환하고, 지도 데이터 동기화 개선과 개발구역·교통망 편집 기능 확장을 진행했습니다.

## Tech Stack

**Core** — React, Next.js (App Router), TypeScript, Tailwind CSS, Zustand

**Production** — TanStack Table, Framer Motion, GSAP, React Hook Form, Axios, Storybook, Jest / React Testing Library

**Familiar** — Redux, SCSS, Styled Components, Supabase, Prisma, Docker

**LLM Workflow** — Claude Code, OpenAI API, Prompt Engineering

---

## Career

### ReturnPlus (2025.05 ~ 현재) — 프론트엔드 리드

- 한조각 홈페이지, WebView 앱, 관리자 대시보드 3개 프로젝트 리드
- 공통 모듈 설계 (인증, 권한, 테이블, WebView Bridge)
- 이미지/폰트 70% 이상 경량화, Lighthouse 95점 달성
- SEO 구현 (Dynamic Metadata, JSON-LD, Sitemap)
- 기존 담당자가 개발한 Prime 프론트엔드 인수, 유지보수 및 FSD·TypeScript 마이그레이션
- Prime 지도 데이터 동기화 개선, 개발구역·이미지 오버레이·교통망 편집 및 저장 실패 복원 기능 개발

### Surromind (2025.01 ~ 2025.05) — DX팀 연구원

- React/TypeScript 기반 UI 컴포넌트 라이브러리 개발 (26개 컴포넌트)
- Storybook 문서화 및 Jest/RTL 단위 테스트 작성
- AIOCR 시스템 프론트엔드 개발

### Hivelab (2021.09 ~ 2023.11) — UX/UI 인터랙티브팀

- NHN PayCo 이벤트 프로모션 운영 (월 70~100건 이상)
- NAVER Yorkie 실시간 협업 프레임워크 참여
- Olive Young 이벤트 페이지 마크업
- 2년 이상의 HTML/CSS/JavaScript 퍼블리싱 경력

---

## Projects

### Prime — 지도 기반 부동산·개발사업 플랫폼

2026.02.25 ~ 현재

React 18 · TypeScript · Redux Toolkit · Naver Maps API · Tailwind CSS · Axios

기존 JavaScript 서비스를 FSD 6개 계층과 TypeScript로 마이그레이션.
토지·매물 탐색, 개발구역 관리, 지도 이미지 오버레이 및 교통망 편집 기능 개발.
지도 뷰포트 상태 동기화 액션을 이벤트당 3회에서 1회로 통합하고,
마커 갱신 오류 수정 및 교통망 임시저장·실패 복원 기능 구현.

### Document Chat — RAG 스터디·토이 프로젝트

Next.js 15 · React 19 · TypeScript · Vercel AI SDK · Supabase · Zustand

RAG와 LLM 애플리케이션 개발을 공부하고 학습 내용을 PDF 질의응답 웹앱으로 구현한 개인 프로젝트.
페이지별 텍스트 추출·임베딩·벡터 검색·답변 생성을 연결하고,
초기 ChromaDB 버전에서 5개 유형의 질문 20개로 Top-K 6·10 평가 실험 기록.
이후 Supabase pgvector·Storage로 전환하고 대화 히스토리, 인증 및 API 사용량 기록을 실습.

### 한조각 Homepage — 의료기기 투자 플랫폼

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · GSAP

GSAP ScrollTrigger 기반 시네마틱 애니메이션 9개 섹션 구현.
Zustand 다단계 본인인증(KCP PASS), SEO 최적화(Lighthouse 95점).

### 한조각 App — WebView 모바일 앱

Next.js 15 · Zustand · Framer Motion · Recharts

KCP PASS 인증, PIN/생체 로그인, 투자 상품 관리, 배당 내역 조회.
Flutter WebView Bridge 타입 안전 통신 구현.

### 관리자 대시보드

Next.js 15 · TanStack Table v8 · Lexical · Recharts

역할 기반 멀티 대시보드(본사/병원/장비 관리자).
서버 사이드 페이지네이션, 31개 이상 모듈화된 API 훅, 10개 이상 도메인 관리.

### Surromind Monorepo — UI 컴포넌트 라이브러리

React · TypeScript · Styled Components · Storybook

26개 재사용 컴포넌트 개발, Jest + RTL 단위 테스트, Storybook 문서화.

### AIOCR — AI OCR 문서 처리 시스템

Next.js 14 · Zustand · Alova · Ant Design

문서 업로드 및 OCR 처리, 한글 검색 정규화(NFD), 역할 관리, 드래그 앤 드롭 우선순위 관리.

---
