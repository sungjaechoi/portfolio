import Link from "next/link";
import TopButton from "./components/top-button";
import { FaLink } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <main>
        <article>
          <h2 className="hidden">포트폴리오 설명</h2>
          <section className="pb-20">
            <div className="flex flex-col items-center pb-4 border-b-2 border-dashed border-[#55501a]">
              <h3 className="text-center text-3xl font-thin pb-2">About Me</h3>
              <p className="text-sm px-2 py-1 text-white rounded-md"></p>
            </div>
            <div className="py-10 gap-8">
              <div>
                <p className="pb-2">
                  웹 표준·접근성을 기반으로 UI를 구현해온 경험을 바탕으로,
                  React/Next.js와 TypeScript 환경에서 프론트엔드 개발을
                  해왔습니다.
                  <br />
                  컴포넌트 설계와 상태 관리, API 연동을 기본으로 하되, 성능
                  최적화와 테스트·문서화를 함께 적용해 제품 품질과 개발 생산성을
                  높이는 데 집중합니다.
                </p>
                <p className="pb-2">
                  현재 리턴플러스에서 Next.js 15 기반의 프론트엔드 3개
                  프로젝트(홈페이지·WebView 앱·관리자 대시보드)를 아키텍처
                  설계부터 기능 개발까지 리딩하고 있습니다.
                  <br />
                  이미지·폰트 최적화로 로딩 성능을 개선했고,
                  메타데이터·JSON-LD·사이트맵 등 SEO 요소를 적용해 검색 친화적
                  구조를 구축했습니다. 또한 권한/라우팅을 역할 기준으로
                  설계하고, 관리자에서는 TanStack Table 기반 데이터 테이블을
                  구현해 운영에 필요한 화면을 안정적으로 제공했습니다.
                </p>
                <p className="pb-2">
                  Claude Code를 활용해 LLM 기반 개발 워크플로우를 설계·운영하며,
                  요구사항을 구조화해 작업 단계를 분해하고(분석→설계→구현→검증),
                  역할이 다른 에이전트들을 조율해 일관된 산출물이 나오도록
                  관리합니다.
                  <br />
                  특히 자동 검증과 피드백 루프를 통해 품질 기준을 반복적으로
                  만족시키는 방식으로, 코드 생성에 그치지 않고 “프로세스”를
                  자동화해 개발 생산성과 결과 품질을 안정적으로 끌어올리는 데
                  강점이 있습니다.
                </p>
              </div>
            </div>
          </section>
          {/* LLM 스킬 추가 */}
          {/* 주로 사용하는 LLM은 클로드 코드이이며, 블라블라, 서브에이전트 및 피드백 루트 블라브라,  */}
          <section className="pb-20">
            <div className="flex flex-col items-center pb-4 border-b-2 border-dashed border-[#55501a]">
              <h3 className="text-center text-3xl font-thin pb-2">Skills</h3>
            </div>
            <div className="py-10">
              <ul className="flex flex-col gap-10">
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold basis-1/4 max-md:text-center">
                    Core
                  </div>
                  <ul className="list-disc list-inside space-y-1 basis-3/4">
                    <li>
                      React, Next.js (App Router), TypeScript, Tailwind, Zustand
                    </li>
                  </ul>
                </li>
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold basis-1/4 max-md:text-center">
                    Production Experience
                  </div>
                  <ul className="list-disc list-inside space-y-1 basis-3/4">
                    <li>
                      TanStack Table, Framer Motion/GSAP, React Hook Form,
                      Axios, Storybook, Jest/RTL
                    </li>
                  </ul>
                </li>
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold basis-1/4 max-md:text-center">
                    Familiar
                  </div>
                  <ul className="list-disc list-inside space-y-1 basis-3/4">
                    <li>
                      Redux, SCSS, Styled-components, Supabase, Prisma, Docker
                    </li>
                  </ul>
                </li>
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold basis-1/4 max-md:text-center">
                    LLM Workflow
                  </div>
                  <ul className="list-disc list-inside space-y-1 basis-3/4">
                    <li>
                      Claude Code, OpenAI, Prompt Engineering(Cookbook),
                      Sub-agent(Feedback Loop)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          <section className="pb-20">
            <div className="flex flex-col items-center pb-4 border-b-2 border-dashed border-[#55501a]">
              <h3 className="text-center text-3xl font-thin pb-2">Projects</h3>
            </div>
            <div className="py-10">
              <ul className="flex flex-col gap-20">
                {/* Document Chat - AI RAG 챗봇 */}
                <li className="flex gap-8 max-md:flex-col">
                  <div className="sticky top-[148px] h-[174px] text-2xl font-semibold basis-1/4 max-md:text-center max-md:static">
                    <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                      AI RAG 챗봇
                    </span>
                    <p>Document Chat</p>
                    <ul className="font-thin text-base break-all">
                      <li>
                        Next.js 15, React 19, LangChain, Supabase, Zustand
                      </li>
                      <li className="flex max-md:justify-center items-center gap-4 py-4">
                        <Link
                          href={"https://chatbot-zeta-five-34.vercel.app/"}
                          target="_blank"
                        >
                          <FaLink size={30}></FaLink>
                        </Link>
                        <Link
                          href={"https://github.com/sungjaechoi/chatbot"}
                          target="_blank"
                        >
                          <FaSquareGithub size={38}></FaSquareGithub>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10 basis-3/4">
                    <div>
                      <p className="py-2 leading-relaxed">
                        PDF를 업로드하면 문서 기반 대화가 가능한 RAG 챗봇.
                        Vercel 배포 제약(4.5MB)을 Storage 직접 업로드로
                        우회하고, HNSW 인덱스 기반 벡터 검색과 RLS 데이터 격리로
                        멀티유저 환경의 문서 QA 서비스를 구현
                      </p>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주요 기능
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          문서 업로드 및 인덱싱 — PDF 페이지별 텍스트 추출 후
                          text-embedding-3-large(3072차원) 벡터 임베딩 생성,
                          업로드/임베딩 단계별 로딩 상태 표시
                        </li>
                        <li>
                          문서 기반 채팅 — HNSW 인덱스 + 코사인 유사도 Top-10
                          검색으로 관련 컨텍스트 추출, Vercel AI SDK + Gemini
                          2.5 Flash로 답변 생성, 출처 페이지 번호 제공
                        </li>
                        <li>
                          세션 관리 — 1개 PDF에서 주제별 대화 세션
                          생성·전환·삭제, 세션별 최근 10건 대화 히스토리를
                          프롬프트에 결합하여 맥락 유지
                        </li>
                        <li>
                          인증 및 보안 — Google OAuth + Supabase Auth 연동,
                          Next.js 미들웨어 라우트 보호, 6개 테이블에 RLS 정책
                          적용으로 사용자별 데이터 완전 격리
                        </li>
                        <li>
                          크레딧 시스템 — Vercel AI Gateway의 호출 전/후
                          total_used 차이로 토큰 비용 산출, fire-and-forget
                          비동기 로깅으로 응답 지연 없이 사용량 추적
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          Vercel API 라우트 body 크기 제한(4.5MB)으로 대용량 PDF
                          업로드 실패, 서버리스 환경에서 3072차원 임베딩
                          생성까지 대기 시간 발생
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          클라이언트 → Supabase Storage 직접 업로드(10MB)로 body
                          limit 우회 후 API에 메타데이터만 전송. 임베딩 생성은
                          서버에서 처리하며, 업로드 중/임베딩 중/완료 3단계
                          상태를 Zustand로 관리하여 사용자에게 현재 처리 단계
                          표시
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          페이지 단위 청킹에서 관련 없는 컨텍스트가 Top-K에
                          포함되어 답변 품질 저하
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          HNSW 인덱스(vector_cosine_ops) 적용으로 검색 성능
                          확보, Top-10 유사도 결과와 최근 대화 히스토리 10건을
                          결합한 프롬프트 구성으로 정확도 향상. 출처 페이지
                          번호를 함께 제공하여 답변 신뢰성 강화
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          크레딧 사용량 로깅이 API 응답을 블로킹하여 채팅 응답
                          지연 발생
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          fire-and-forget IIFE 패턴으로 크레딧 로깅을 비블로킹
                          처리, 응답 반환 후 비동기로 Vercel AI Gateway 비용
                          산출 및 DB 기록. 실패 시 catch 로깅만 수행하여 사용자
                          경험에 영향 없도록 설계
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        성과
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          PDF 추출 → 임베딩(3072차원) → HNSW 벡터 검색 → LLM
                          답변 생성까지 end-to-end RAG 파이프라인 설계 및 Vercel
                          서버리스 환경에 안정적 배포
                        </li>
                        <li>
                          Container/View 패턴으로 UI/로직 분리, 5개 독립 Zustand
                          스토어로 관심사별 상태 관리 아키텍처 구축
                        </li>
                        <li>
                          Supabase의 PostgreSQL + pgvector + Storage + Auth를
                          단일 플랫폼에서 통합 운영, 6개 테이블 RLS 정책으로
                          멀티테넌트 데이터 격리 구현
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-col gap-5">
                        <div className="text-sm px-2 py-1 text-center italic">
                          회고
                        </div>
                        <div>
                          <div className="font-bold mb-4">배운 점</div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [RAG 파이프라인 설계와 트레이드오프]
                              </span>
                              페이지 단위 청킹의 구현 단순성과 문맥 끊김
                              리스크를 비교 검토하고, HNSW 인덱스 선택(검색 속도
                              vs 인덱스 빌드 비용), Top-K 값 튜닝,
                              temperature(0.3) 설정 등 각 단계의 의사결정 근거를
                              체득. 향후 MMR/Rerank 적용과 chunk overlap
                              도입으로 검색 품질 개선 계획
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [서버리스 환경에서의 비동기 처리 설계]
                              </span>
                              Vercel 서버리스에서는 background job이
                              불가능하므로, fire-and-forget IIFE 패턴으로
                              비블로킹 로깅을 구현하고 응답 후 비동기 처리하는
                              구조를 설계. 서버리스의 제약 안에서 사용자 경험을
                              우선한 아키텍처 판단 경험
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [Supabase RLS 기반 보안 설계]
                              </span>
                              auth.uid() 기반 행 수준 보안 정책을 6개
                              테이블(profiles, chat_sessions, chat_messages,
                              pdf_documents, storage.objects,
                              credit_usage_logs)에 적용하며, 정책 누락 시 데이터
                              노출 리스크와 과도한 정책의 성능 영향을 균형 있게
                              설계하는 경험 습득
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-bold mb-4">개발 방식</div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [Claude Code 에이전트 파이프라인]
                              </span>
                              5개 전문 에이전트(Orchestrator,
                              Schema/Backend/Frontend Developer, Reviewer)를
                              역할별로 구성하고, 요구사항 분석 → 스키마 설계 →
                              구현 → 자동 리뷰(PASS/FAIL) → 실패 시 재작업(최대
                              2회) 루프를 포함한 파이프라인으로 개발 프로세스
                              자동화
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 한조각 홈페이지 */}
                <li className="flex gap-8 max-md:flex-col">
                  <div className="sticky top-[148px] h-[174px] text-2xl font-semibold basis-1/4 max-md:text-center max-md:static">
                    <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                      의료기기 투자 플랫폼
                    </span>
                    <p>한조각 홈페이지</p>
                    <ul className="font-thin text-base break-all">
                      <li>Next.js 15, React 19, TypeScript, Tailwind CSS 4</li>
                      <li className="flex max-md:justify-center items-center gap-4 py-4">
                        <Link
                          href={"https://home.hanjogak.co.kr"}
                          target="_blank"
                        >
                          <FaLink size={30}></FaLink>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10 basis-3/4">
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주요 기능
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          GSAP ScrollTrigger 활용 시네마틱 스크롤 애니메이션
                          (9개 섹션)
                        </li>
                        <li>
                          Zustand 기반 다단계 본인인증 시스템 (KCP PASS 연동)
                        </li>
                        <li>
                          동적 메타데이터, JSON-LD, Sitemap.xml 서버사이드 SEO
                        </li>
                        <li>
                          Sharp/AVIF 이미지 최적화 (75% 감소), 폰트 서브셋
                          자동화 (70% 감소)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          이미지 파일 용량 과다(평균 3.2MB), Pretendard 폰트
                          2MB로 초기 로딩 시간 평균 3-5초 소요
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          Sharp를 활용한 WebP/AVIF 자동 변환 스크립트,
                          subset-font로 폰트 서브셋 자동 생성. 이미지 75%
                          감소(800KB), 폰트 70% 감소(600KB). 이미지/폰트
                          최적화로 모바일(4G) 기준 초기 로딩 체감 시간을 약 5초
                          → 1.5초로 단축했고, 프로덕션 Lighthouse 성능 점수를 72
                          → 95로 개선했습니다
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          KCP PASS 본인인증 완료 후 부모 창으로 결과 전달 안 됨,
                          iOS/Android WebView에서 회원가입 중단
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          팝업 윈도우(window.open) + URL 폴링 방식으로 전환.
                          인증 완료 시 콜백 URL 파라미터로 결과를 전달받아
                          setInterval로 팝업 URL 변화를 감지하는 구조로 변경.
                          iOS/Android WebView 환경에서도 인증 결과 전달 정상화
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          검색엔진이 SPA 동적 콘텐츠 크롤링 실패, 네이버/구글
                          검색 결과 미노출
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          Next.js Metadata API로 서버사이드 메타데이터 생성,
                          JSON-LD 구조화 데이터 구현, 동적 Sitemap.xml 자동
                          생성. 구글 &quot;한조각&quot; 브랜드명 검색 시 상위
                          노출 (Search Console 기준, 2025년 10월)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        성과
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          초기 화면에 필요한 핵심 데이터는 서버에서
                          렌더링(SSR/RSC)하여 첫 로딩을 안정함
                        </li>
                        <li>Lighthouse SEO 점수 95/100</li>
                        <li>
                          구글 &quot;한조각&quot; 브랜드명 검색 시 상위 노출
                          (Search Console 기준, 2025년 10월)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-col gap-5">
                        <div className="text-sm px-2 py-1 text-center italic">
                          회고
                        </div>
                        <div>
                          <div className="font-bold mb-4">배운 점</div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [GSAP ScrollTrigger의 강력함]
                              </span>
                              scrub 옵션으로 부드러운 스크롤 동기화, 60fps
                              애니메이션 구현
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [성능 최적화의 중요성]
                              </span>
                              번들 크기 50% 감소로 TTI 34% 개선, 이미지 최적화가
                              LCP에 큰 영향
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [Next.js 15 App Router]
                              </span>
                              Server Component로 초기 로딩 속도 향상, 동적
                              메타데이터로 SEO 최적화
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [Zustand의 효율성]
                              </span>
                              Redux보다 간결한 문법, 번들 크기 최소(1KB), 복잡한
                              다단계 폼 상태 관리에 적합
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 한조각 앱 */}
                <li className="flex gap-8 max-md:flex-col">
                  <div className="sticky top-[148px] h-[174px] text-2xl font-semibold basis-1/4 max-md:text-center max-md:static">
                    <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                      WebView 기반 모바일 앱
                    </span>
                    <p>한조각 앱</p>
                    <ul className="font-thin text-base break-all">
                      <li>Next.js 15, Zustand, Framer Motion, Recharts</li>
                      <li className="flex max-md:justify-center items-center gap-4 py-4">
                        <Link
                          href={
                            "https://play.google.com/store/apps/details?id=kr.returnplus.hanjogak"
                          }
                          target="_blank"
                        >
                          <FaLink size={30}></FaLink>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10 basis-3/4">
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주요 기능
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          KCP PASS 본인인증, 간편 로그인 (PIN), 생체 인증
                          (WebView Bridge)
                        </li>
                        <li>
                          투자 모집중 상품 관리, 상세 페이지, 투자하기, 결제
                        </li>
                        <li>
                          마이페이지 (투자 현황, 배당금, 입출금 내역, 계좌 관리)
                        </li>
                        <li>1대1 문의, FAQ, 공지사항, 알림 센터 (푸시 알림)</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          Next.js의 서버사이드와 클라이언트사이드에서 API
                          baseURL이 달라야 하는 문제 (서버는 직접 백엔드 호출,
                          브라우저는 CORS 우회 필요)
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          getBaseURL() 함수로 환경 자동 감지, 서버사이드는 직접
                          백엔드 URL(NEXT_PUBLIC_API_BASE_URL) 사용,
                          클라이언트는 Next.js rewrites를 통한 /api 프록시 사용.
                          Axios 인터셉터로 헤더 자동 추가 및 응답 데이터 unwrap
                          처리
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          iOS/Android 모바일 브라우저에서 키보드가 올라올 때
                          하단 고정 버튼이 가려져 사용자가 조작 불가
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          모바일에서 키보드가 올라오면 하단 버튼이 가려지는 문제
                          해결. visualViewport API로 키보드 높이를 실시간
                          감지하고, 하단 고정 버튼을 키보드 위로 자동 이동.
                          iPhone 홈바(Safe Area)도 함께 대응
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          본인인증(X-ENCRYPTED-AUTH) → 로그인(AUTH-TOKEN) 2단계
                          인증 시스템에서 각 페이지별 접근 권한이 달라 라우팅
                          로직이 복잡해짐
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          Next.js middleware로 서버사이드 인증 검증 및 자동
                          리다이렉트 구현. 쿠키 기반 인증 상태 확인 후 미인증은
                          /auth, 본인인증만 완료는 /auth/login, 전체 인증 완료는
                          정상 접근. 게스트 모드(/auth/guest) 별도 처리
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          다른 디바이스에서 중복 로그인 시 기존 세션이 유지되어
                          보안 이슈 발생
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          Axios 응답 인터셉터에서 duplicated_login 플래그 감지
                          시 모든 쿠키 자동 삭제, 로그인 페이지로 강제
                          리다이렉트. 클라이언트사이드에서 자동 처리되어 사용자
                          혼란 최소화
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          Flutter WebView와 웹 간 양방향 통신 시 타입 안정성
                          부재, 액션별로 다른 payload/response 타입 관리 어려움
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          TypeScript 조건부 타입(PayloadByAction&lt;T&gt;,
                          ResponseByAction&lt;T&gt;)으로 액션별 타입 자동 추론
                          구현. 함수 오버로딩으로 각 액션(toFlutterBio,
                          toFlutterRegister 등)마다 정확한 타입 체크.
                          requestFlutterData() 함수 하나로 모든 브릿지 통신 타입
                          안전하게 처리
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        성과
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          getBaseURL() 함수로 SSR/CSR 환경 자동 감지, API 통신
                          에러율 0% 달성
                        </li>
                        <li>
                          middleware 기반 인증 상태 검증으로 잘못된 페이지 접근
                          방지, 라우팅 정확도 100%
                        </li>
                        <li>
                          Axios 인터셉터로 duplicated_login 플래그 감지 시 자동
                          세션 정리, 보안 강화
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-col gap-5">
                        <div className="text-sm px-2 py-1 text-center italic">
                          회고
                        </div>
                        <div>
                          <div className="font-bold mb-4">배운 점</div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [WebView 통신의 이해]
                              </span>
                              iOS와 Android의 Bridge API 차이 학습, 플랫폼별
                              예외 처리의 중요성
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [Framer Motion을 활용한 고성능 애니메이션]
                              </span>
                              AnimatePresence와 z-index 동적 할당으로 여러
                              페이지가 스택처럼 쌓이는 네이티브 앱 전환 효과
                              구현, 60fps 부드러운 슬라이드 애니메이션으로 웹과
                              앱의 경계 제거
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* ReturnPlus STO 관리자 대시보드 */}
                <li className="flex gap-8 max-md:flex-col">
                  <div className="sticky top-[148px] h-[174px] text-2xl font-semibold basis-1/4 max-md:text-center max-md:static">
                    <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                      백오피스 관리 시스템
                    </span>
                    <p>관리자 대시보드</p>
                    <ul className="font-thin text-base break-all">
                      <li>Next.js 15, TanStack Table, Lexical, Recharts</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10 basis-3/4">
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주요 기능
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          권한 기반 멀티 대시보드 (중앙, 병원, 장비 관리자)
                        </li>
                        <li>
                          TanStack Table v8 고급 데이터 테이블 (서버사이드
                          페이지네이션, 컬럼 리사이징)
                        </li>
                        <li>Lexical Rich Text 에디터 (약관, 뉴스, FAQ 작성)</li>
                        <li>
                          Recharts 대시보드 시각화 (KPI 카드, 투자 트렌드, 파이
                          차트)
                        </li>
                        <li>31개 모듈화된 API Hooks, 10개 이상 도메인 관리</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          중앙 관리자, 병원 관리자, 장비 관리자 등 3가지 권한에
                          따라 서로 다른 레이아웃과 메뉴 필요, 단일 레이아웃 +
                          조건부 렌더링은 복잡함
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          권한별 레이아웃 분리를 Route Groups + 서버 권한
                          확인으로 설계하여, 발생하던 hydration 이슈를
                          구조적으로 제거하고 레이아웃/메뉴 코드의 복잡도를
                          낮췄습니다
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          10개 이상 도메인에 대해 일관된 테이블 UI 필요,
                          페이지네이션/정렬/필터링/행 선택/컬럼 리사이징 등
                          복잡한 기능 요구, 도메인마다 새로 만들면 중복 코드
                          과다
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          TanStack Table v8 Headless UI 선택, 범용 DataTable
                          컴포넌트 설계, TypeScript 제네릭 활용. 서버사이드
                          페이지네이션으로 평균 로딩 0.5초 이내, 컴포넌트
                          재사용률 95%, 개발 속도 3배 향상
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        성과
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>풀 CRUD 기능, Excel 다운로드, 실시간 대시보드</li>
                        <li>
                          관리자 작업 효율성 60% 향상 (기존 수동 작업 대비)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-col gap-5">
                        <div className="text-sm px-2 py-1 text-center italic">
                          회고
                        </div>
                        <div>
                          <div className="font-bold mb-4">배운 점</div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [복잡한 권한 시스템 설계]
                              </span>
                              라우트 그룹을 활용한 권한별 레이아웃 분리,
                              RBAC(Role-Based Access Control) 구현
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [대규모 폼 상태관리]
                              </span>
                              Zustand를 활용한 복잡한 폼 상태 관리, 원본 데이터
                              추적을 통한 변경 감지
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [고성능 테이블 구현]
                              </span>
                              TanStack Table의 유연한 API 활용, 서버사이드
                              페이지네이션, 가상화
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [모듈화 및 재사용성]
                              </span>
                              Custom hooks, Container 패턴, 범용 컴포넌트 설계로
                              개발 속도 향상
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Surromind UI 컴포넌트 라이브러리 */}
                <li className="flex gap-8 max-md:flex-col">
                  <div className="sticky top-[148px] h-[174px] text-2xl font-semibold basis-1/4 max-md:text-center max-md:static">
                    <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                      UI 컴포넌트 라이브러리
                    </span>
                    <p>Surromind Monorepo</p>
                    <ul className="font-thin text-base break-all">
                      <li>React, TypeScript, Styled Components, Storybook</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10 basis-3/4">
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주요 기능
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          재사용 가능한 UI 컴포넌트 라이브러리 구축 (26개
                          컴포넌트)
                        </li>
                        <li>
                          메뉴, Breadcrumb, AutoComplete, Badge, Modal 등 핵심
                          컴포넌트 리팩토링
                        </li>
                        <li>Jest + React Testing Library 기반 단위 테스트</li>
                        <li>
                          Storybook을 활용한 컴포넌트 문서화 및 시각적 테스트
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          메뉴와 Breadcrumb 컴포넌트의 과도한 useEffect 사용으로
                          불필요한 리렌더링 발생, 디버깅 어려움
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          메뉴는 useEffect 제거 및 초기 상태 설정 방식으로 변경,
                          Breadcrumb은 내부 상태 관리를 완전히 제거하고 Props
                          기반 완전 제어 컴포넌트로 전환.
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          interface와 type import 간 순환 참조로 인한 빌드 에러
                          발생
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          공통 interface를 별도 types.ts 파일로 분리, interface
                          extends 활용하여 타입 재사용, import 구조를 단방향으로
                          재설계. 빌드 에러 완전 해결, 타입 재사용성 및
                          유지보수성 향상
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        성과
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          useEffect 제거 및 Props 기반 제어 컴포넌트 전환으로
                          불필요한 리렌더링 제거
                        </li>
                        <li>순환 참조 해결로 빌드 안정성 확보</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-col gap-5">
                        <div className="text-sm px-2 py-1 text-center italic">
                          회고
                        </div>
                        <div>
                          <div className="font-bold mb-4">배운 점</div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [체계적인 컴포넌트 설계]
                              </span>
                              상태 관리를 최소화하여 예측 가능성을 높이고, Props
                              인터페이스를 직관적으로 설계하며, 컴포넌트 책임을
                              명확히 분리하는 &quot;좋은 컴포넌트&quot;의 원칙
                              학습
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [테스트 주도 개발의 가치]
                              </span>
                              테스트 코드 작성으로 버그 조기 발견, 대규모
                              리팩토링 시 안전성 확보, 테스트가 컴포넌트 사용
                              방법을 명확히 문서화하는 효과 체감
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [TypeScript 타입 안정성]
                              </span>
                              interface extends를 통한 타입 재사용, 순환 참조
                              문제 해결, 런타임 에러를 컴파일 타임에 잡아
                              장기적으로 유지보수 비용 절감
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* AIOCR - AI OCR 문서 처리 */}
                <li className="flex gap-8 max-md:flex-col">
                  <div className="sticky top-[148px] h-[174px] text-2xl font-semibold basis-1/4 max-md:text-center max-md:static">
                    <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                      AI OCR 문서 처리
                    </span>
                    <p>AIOCR</p>
                    <ul className="font-thin text-base break-all">
                      <li>Next.js 14, Zustand, Alova, Ant Design</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10 basis-3/4">
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주요 기능
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          문서 업로드 및 OCR 처리 관리 (다중 파일, 실시간 진행률
                          표시)
                        </li>
                        <li>
                          한글 검색 정규화(NFD 방식), 다중 조건 필터, 디바운스
                          검색(300ms)
                        </li>
                        <li>
                          계정 및 권한 관리 (USER ↔ MANAGER 역할 변경,
                          활성/비활성 관리)
                        </li>
                        <li>
                          AI 키워드 관리 시스템 (동의어 그룹, 드래그앤드롭
                          우선순위 조정)
                        </li>
                        <li>
                          목록 상태 유지 기능 (URL 쿼리, sessionStorage 스크롤
                          복원)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          목록에서 상세 페이지를 거쳐 돌아올 때 처음으로 초기화
                          (페이지, 필터, 스크롤 위치 모두 리셋)
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          useQueryString 커스텀 훅으로 URL 기반 페이지 상태
                          관리, useScrollMemory 훅으로 sessionStorage에 스크롤
                          위치 저장/복원. 상세에서 돌아올 때 이전 상태 정확히
                          복원, Work 목록과 계정관리 목록 모두 적용
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          한글 검색 시 자모 분리 문제로 특정 조합에서 검색 실패
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          검색어 전송 전 NFD(Compatibility Decomposition) 정규화
                          적용. 모든 한글 검색이 일관되게 작동, 자모 분리 문자도
                          정확히 검색
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        성과
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          5개의 독립적인 Zustand 스토어로 관심사 분리, 확장
                          가능한 아키텍처 구축
                        </li>
                        <li>
                          사용자 경험 중심 개발, 보일러플레이트 90% 감소, 타입
                          안정성 확보
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-col gap-5">
                        <div className="text-sm px-2 py-1 text-center italic">
                          회고
                        </div>
                        <div>
                          <div className="font-bold mb-4">배운 점</div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [사용자 경험 중심 개발]
                              </span>
                              단순히 기능을 구현하는 것을 넘어 실제 사용자의
                              불편함을 발견하고 해결. URL 쿼리와
                              sessionStorage를 조합하여 SPA에서도 브라우저
                              네이티브 동작처럼 자연스러운 UX 제공
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [현대적인 기술 스택 활용]
                              </span>
                              Zustand의 간결한 API로 Redux 대비 보일러플레이트
                              90% 감소, Alova의 선언적 API로 직관적인 데이터
                              페칭 구현
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [한글 처리의 특수성]
                              </span>
                              한글 유니코드 정규화 방식(NFC vs NFD)의 차이를
                              이해하고, 서버-클라이언트 간 인코딩 일관성 확보의
                              중요성 학습
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Seul Gallery */}
                {/* <li className="flex gap-8 max-md:flex-col">
                  <div className="sticky top-[148px] h-[174px] text-2xl font-semibold  basis-1/4 max-md:text-center max-md:static">
                    <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                      Pixabay API를 활용한 갤러리
                    </span>
                    <p>Seul gallery</p>
                    <ul className="font-thin text-base break-all">
                      <li>Next, TS, Context API, Lodash, Styled-components</li>
                      <li className="flex max-md:justify-center items-center gap-4 py-4">
                        <Link
                          href={"https://next14-unsplash.vercel.app/"}
                          target="_blank"
                        >
                          <FaLink size={30}></FaLink>
                        </Link>
                        <Link
                          href={"https://github.com/sungjaechoi/seul-vm"}
                          target="_blank"
                        >
                          <FaSquareGithub size={38}></FaSquareGithub>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10  basis-3/4">
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주요기능
                      </div>
                      <ul className="list-disc list-inside space-y-1 ">
                        <li>Pixabay API 활용</li>
                        <li>검색, 유저 페이지, 유저 상세 페이지 구현</li>
                        <li>
                          패러럴 라우팅과 인터셉팅 라우팅을 활용한 모달 구현
                        </li>
                        <li>
                          Lodash를 사용하여 무한스크롤 쓰로틀링 구현, API 요청
                          최적화
                        </li>
                        <li>LocalStorage를 이용한 이미지 좋아요 기능 구현</li>
                        <li>스켈레톤 UI를 활용한 사용해 사용자 경험 향상</li>
                        <li>
                          Semantic HTML 및 Tab Navigation을 활용한 접근성 강화
                        </li>
                        <li>풀 반응형 대응</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          Unsplash API 사용 시, 무료 플랜의 요청 횟수 제한으로
                          인해 무한 스크롤 구현 과정에서 데이터 페칭이 중단됨.
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          Pixabay API로 전환하여 높은 요청 한도와 무료 이미지
                          제공을 활용. 전환 후 페이징 처리 및 에러 핸들링 로직
                          추가로 안정적인 데이터 처리를 구현.
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          Vercel 무료 요금제의 Next.js 이미지 최적화
                          기능(next/image)이 Pixabay API의 대량 이미지에 적용
                          불가.
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          기본 img 태그와 레이지 로딩(lazy loading)으로 대체해
                          불필요한 네트워크 요청을 최소화. Skeleton UI를 활용해
                          로딩 지연 문제를 보완하며 사용자 경험 개선.
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          Next.js의 패럴렐 및 인터셉팅 라우팅 사용 시, 모달
                          활성화 시 포커스가 모달 내부로 이동하지 않아 접근성
                          문제 발생.
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          모달 열림 상태를 감지해 활성화된 요소의 포커스를
                          저장하고 모달 종료 시 복원하는 로직 추가로 접근성과
                          사용자 경험 개선.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-col gap-5">
                        <div className="text-sm px-2 py-1 text-center italic">
                          회고
                        </div>
                        <div>
                          <div className="font-bold mb-4">좋았던 점</div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [프레임워크 심화 이해]
                              </span>
                              처음으로 Next.js를 사용해 프로젝트를 제작하며,
                              서버 사이드 렌더링(SSR)과 클라이언트 사이드
                              렌더링(CSR)의 차이를 배우고, 이를 활용한 렌더링
                              전략을 익혔습니다. 또한, 인터셉팅과 패러럴
                              라우팅을 활용한 모달은 기능을 구현 하는 과정에서
                              소프트 네비게이션과 하드네비게이션의 차이를
                              이해하고 이를 프로젝트에 적용하며 사용자 경험을
                              향상시킬 수 있었습니다. 소프트 네비게이션은 페이지
                              전환 없이 콘텐츠를 변경하여 더 빠르고 부드러운
                              사용자 경험을 제공했고, 하드 네비게이션은 페이지를
                              완전히 새로고침하여 명확한 전환이 필요한 상황에서
                              적합하다는 점을 알게 되었습니다. 이를 통해 상황에
                              따라 적절한 네비게이션 방식을 선택하고 활용하는
                              능력을 키울 수 있었으며, Next.js의 다양한 라우팅
                              기능을 깊이 이해하게 되었습니다.
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [서버와 클라이언트에 대한 이해]
                              </span>
                              Pixabay API를 활용하며 서버와 클라이언트 간 데이터
                              요청과 응답의 흐름을 체계적으로 이해할 수
                              있었습니다. API 호출 과정에서 데이터를 안정적으로
                              제공하기 위해 페이징 처리를 도입했으며, 에러가
                              발생할 경우 이를 클라이언트에서 효과적으로
                              처리하는 로직을 구현했습니다. 이러한 경험을 통해
                              서버가 데이터의 신뢰성을 보장하고, 클라이언트가
                              이를 효율적으로 소비하는 역할을 명확히 구분할 수
                              있었습니다. 특히, 서버 응답의 안정성을 바탕으로
                              클라이언트의 사용자 경험을 개선하는 데 중점을
                              두었습니다.
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [무한 스크롤 최적화와 클라이언트 성능 개선]
                              </span>
                              무한 스크롤을 구현하며 클라이언트 측 성능 최적화의
                              중요성을 배웠습니다. API 요청이 과도하게 발생하지
                              않도록 Lodash의 쓰로틀링 기법을 활용해 요청 빈도를
                              조절했고, 이를 통해 서버 부하를 줄이고
                              클라이언트의 성능을 높일 수 있었습니다. 또한,
                              Skeleton UI를 적용하여 데이터 로딩 중에도 사용자
                              경험을 유지하는 방법을 사용하였습니다. 이러한
                              과정을 통해 클라이언트와 서버 간 효율적인 데이터
                              처리 전략을 설계하는 데 필요한 기술적 통찰을
                              얻었습니다.
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [LocalStorage를 활용한 상태 관리와 사용자 경험
                                개선]
                              </span>
                              LocalStorage를 활용해 이미지 좋아요 기능을
                              구현하며 클라이언트 측 상태 관리의 장점을 체감할
                              수 있었습니다. 서버와의 추가적인 통신 없이 사용자
                              데이터를 로컬에 저장함으로써, 빠른 반응성과
                              지속적인 상태 유지가 가능해졌습니다. 이를 통해
                              클라이언트 중심으로 사용자 경험을 개선하는 방법을
                              배웠고, 서버 의존성을 줄이면서도 기능을 구현하는
                              효율적인 방식을 탐구할 수 있었습니다.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-bold mb-4">부족했던 점</div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [기술 선택에서의 경험 부족]
                              </span>
                              초기에는 Unsplash API의 요청 횟수 제한을 충분히
                              고려하지 못해 프로젝트 중반에 Pixabay API로
                              전환하는 작업이 필요했습니다. 또한, Vercel 무료
                              요금제의 Next.js 이미지 최적화
                              기능(next/image)에도 요청 제한이 있다는 점을 미리
                              인지하지 못해, 이미지 태그 전환과 함께 API 변경에
                              따른 추가 작업이 발생했습니다. 이러한 과정에서
                              페이징 처리와 에러 핸들링 로직을 리팩토링하며
                              프로젝트의 안정성을 확보해야 했습니다.
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                                [Next.js 패러럴 및 인터셉팅 라우팅 학습 과정]
                              </span>
                              Next.js의 패러럴 및 인터셉팅 라우팅을 학습하고
                              이를 활용해 모달을 구현했지만, 라우팅의 동작
                              방식과 병렬 처리 특성을 충분히 이해하지 못해 모달
                              활성화 시 포커스 문제를 해결하는 데 어려움을
                              겪었습니다. 이로 인해 접근성과 관련된 문제를 바로
                              처리하지 못하고 많은 시행착오를 겪어야 했습니다.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-bold mb-4">
                            부족했던 점을 개선하기 위한 방법
                          </div>
                          <p>
                            Seul Gallery 프로젝트에서는 Unsplash API의 요청 제한
                            문제와 Vercel 무료 요금제의 Next.js 이미지 최적화
                            기능(next/image) 요청 제한을 충분히 고려하지 못한
                            경험을 통해, 기술 도입 전 제한 사항과 성능을 철저히
                            검토해야 한다는 교훈을 얻었습니다. 또한, 패러럴 및
                            인터셉팅 라우팅의 병렬 처리 구조와 상태 관리 방식을
                            학습하여, 이를 활용해 모달 포커스 이동과 복원 로직을
                            설계했습니다. 이러한 과정을 통해 라우팅 특성에 대한
                            이해도를 높이고, 동적 UI 요소 설계 시 발생할 수 있는
                            문제를 효과적으로 해결하는 능력을 키워 나가겠습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex gap-8 max-md:flex-col">
                  <div className="sticky top-[148px] h-[174px] text-2xl font-semibold basis-1/4 max-md:text-center max-md:static">
                    <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                      풀스택 투두리스트
                    </span>
                    <p>Supabase_TodoList</p>
                    <ul className="font-thin text-base break-all">
                      <li>
                        Next, TS, Prisma, Supabase, Tailwind, Context API, React
                        Query
                      </li>
                      <li className="flex max-md:justify-center items-center gap-4 py-4">
                        <Link
                          href={
                            "https://supabase-todolist-psi.vercel.app/auth/login"
                          }
                          target="_blank"
                        >
                          <FaLink size={30}></FaLink>
                        </Link>
                        <Link
                          href={
                            "https://github.com/sungjaechoi/supabase_todolist"
                          }
                          target="_blank"
                        >
                          <FaSquareGithub size={38}></FaSquareGithub>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10 basis-3/4">
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주요기능
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>메일 인증으로 회원가입, 로그인 기능 구현</li>
                        <li>
                          사용자가 특정 카테고리를 선택하여 해당 카테고리에 속한
                          투두 항목을 추가할 수 있도록 기능을 구현
                        </li>
                        <li>
                          Skeleton UI를 적용하여 데이터 로딩 상태 시 사용자 경험
                          개선
                        </li>
                        <li>버튼에 로딩 상태 추가로 작업 피드백 강화</li>
                        <li>
                          Semantic HTML 및 Tab Navigation을 활용한 접근성 강화
                        </li>
                        <li>풀 반응형 대응</li>
                      </ul>
                      <div>
                        <ul className="list-disc list-inside space-y-1"></ul>
                      </div>
                      <div>
                        <ul className="list-disc list-inside space-y-1"></ul>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          Supabase 무료 플랜의 메일 발송 제한(1시간 3회
                          제한)으로 인해, 이메일 인증 제한 발생
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          Resend 메일링 서비스를 도입해 안정적인 메일 발송
                          환경을 구축
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          버셀 무료 배포 환경에서 Supabase 데이터를 조회하고
                          응답받는 데 과도한 시간으로 사용자 경험 저하
                        </li>

                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          버셀 서버 지역을 변경하여 데이터 로딩 속도를 개선하고,
                          React Query를 활용해 낙관적 업데이트를 적용하여 실시간
                          데이터 반영 속도를 향상시켰습니다. 또한, Skeleton UI와
                          버튼 로딩 UI를 추가해 로딩 시간을 시각적으로 보완하여
                          사용자 경험을 최적화했습니다.
                        </li>

                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [문제]
                          </span>
                          카테고리와 Todo 데이터 동기화 문제 발생. 특히,
                          카테고리 CRUD 작업 중 카테고리에 포함된 Todo의
                          업데이트 및 삭제 작업에서 데이터의 일관성이 깨지는
                          상황 발생.
                        </li>

                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                            [해결]
                          </span>
                          Transaction을 도입해 모든 작업이 성공적으로 완료되었을
                          때 데이터베이스에 반영되도록 구현하여 데이터의
                          일관성을 보장.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="text-sm px-2 py-1 text-center italic">
                        회고
                      </div>
                      <div>
                        <div className="font-bold mb-4">좋았던 점</div>
                        <ul className="list-inside list-disc flex flex-col gap-2">
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                              [기술 검토 능력 향상]
                            </span>
                            갤러리 프로젝트에서 Unsplash API의 요청 제한 문제를
                            경험하며, 기술 도입 전에 요구사항과 제한 사항을
                            철저히 검토해야 한다는 점을 깨달았습니다. 이 경험을
                            바탕으로 풀스택 투두리스트 프로젝트에서는 Supabase와
                            Resend 메일링 서비스의 제한 사항을 사전에 분석해
                            메일 발송 오류를 방지하고, 안정적인 서비스를 구현할
                            수 있었습니다. 또한, 데이터 로딩 지연 문제에 대비해
                            Skeleton UI와 로딩 버튼을 설계하는 등 사용자 경험을
                            보완하기 위한 방안을 초기에 고려하며 프로젝트
                            완성도를 높일 수 있었습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                              [인증 및 회원가입 구현]
                            </span>
                            Supabase의 로그인 및 회원가입 기능을 적용하며
                            매직링크 인증 메일 발송과 같은 실제 서비스에서
                            사용되는 사용자 인증 흐름을 이해하고 Resend 메일링
                            서비스와 도메인 연동 과정을 통해 도메인 기반 메일
                            발송의 필요성과 이를 설정하는 방법을 학습했습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                              [데이터 상태 관리 및 성능 최적화]
                            </span>
                            Context API로 유저 정보와 투두리스트 상태를 전역
                            관리하며, 전역 상태 관리의 복잡성을 효과적으로
                            줄이는 방법과 React Query를 활용해 Optimistic
                            Update를 구현하여 사용자 경험을 고려한 실시간 UI
                            피드백의 중요성을 깨달았습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                              [ReactQuery 도입]
                            </span>
                            ReactQuery를 도입하여 프로젝트의 API 요청을
                            캐시하고, 최적화하며 또한 낙관적업데이트를 통해
                            사용자 경험을 향상 시킬 수있는 방법을 학습할수 있어
                            좋았습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                              [백엔드 컨트롤러와 서비스로직에 대한 이해]
                            </span>
                            이 프로젝트를 진행하며 백엔드 구성과 관련된 여러
                            개념들을 깊이 이해하게 되었습니다. 특히 백엔드에서
                            컨트롤러와 서비스 로직, 레이어로 나누는 구조에 대해
                            배웠습니다. 컨트롤러는 주로 HTTP 요청을 받아 적절한
                            서비스 로직으로 전달하는 역할을 하고, 서비스 로직은
                            실제 비즈니스 로직을 처리하는 핵심 부분입니다. 이 두
                            가지를 명확하게 분리함으로써 코드의 유지보수성과
                            확장성을 크게 향상시킬 수 있다는 것을 깨달았습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                              [데이터베이스와 ORM에 대한 이해]
                            </span>
                            데이터베이스와의 연동에서 ORM(Object-Relational
                            Mapping)을 사용하면서 데이터베이스와 객체 간의
                            변환을 자동으로 처리해주는 장점이 있었습니다. 이를
                            통해 SQL 쿼리 작성이 간편해지고, 개발 속도를 높일 수
                            있었지만, ORM의 사용에 따른 한계와 성능 최적화가
                            중요한 부분임을 느끼기도 했습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                              [트랜잭션(Transaction)에 대한 이해]
                            </span>
                            프로젝트를 진행하며 데이터베이스 트랜잭션을 활용한
                            경험은 매우 유익했습니다. 특히 다중 작업이
                            순차적으로 실행되어야 하거나 중간에 실패가 발생했을
                            때 데이터의 무결성을 유지해야 하는 상황에서
                            트랜잭션을 사용하여 코드의 신뢰성을 향상 시킬수
                            있으며 한번의 연결로 여러작업을 처리함으로써
                            네트워크 및 데이터 베이스 리소스에 효율적으로
                            사용할수 있다는 것을 배웠습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                              [서버 지역 선택과 네트워크 성능 최적화에 대한
                              이해]
                            </span>
                            이 프로젝트를 진행하며 서버의 지역 간 거리와
                            네트워크 요청 간에 발생할 수 있는 성능 문제를
                            고려하는 것이 중요하다는 점을 깨달았습니다. 특히,
                            Vercel과 Supabase를 활용하면서 데이터 요청 및 응답
                            속도가 서버 지역 설정에 따라 큰 영향을 받는다는 것을
                            경험했습니다. 이러한 문제를 해결하기 위해 적절한
                            서버 지역을 선택하여 네트워크 지연 시간을 줄이고,
                            사용자 경험을 개선하는 데 성공했습니다. 이 과정을
                            통해 서버 지역과 네트워크 성능 최적화의 중요성을
                            학습 했습니다.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-bold mb-4">부족했던 점</div>
                        <ul className="list-inside list-disc flex flex-col gap-2">
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                              [상태 관리 도구의 초기 설계 한계]
                            </span>
                            Context API를 활용하여 유저 정보와 Todo 데이터를
                            전역 관리했지만, 배포 환경에서 데이터 지연 문제가
                            발생하면서 실시간 업데이트가 어려웠습니다. React
                            Query로 전환하여 낙관적인 업데이트와 캐싱을
                            도입했으나, 초기 설계에서 적합한 도구를 미리
                            선택하지 못한 점이 아쉬웠습니다.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-bold mb-4">
                          부족했던 점을 개선하기 위한 방법
                        </div>
                        <p>
                          초기 상태 관리 설계에서 실시간 업데이트와 데이터
                          동기화 요구사항을 충분히 고려하지 못했던 점을 개선하기
                          위해, 프로젝트 요구사항에 맞는 상태 관리 전략을
                          지속적으로 학습하고 활용할 계획입니다. 현재는 React
                          Query를 활용해 데이터를 동기화하고 사용자 경험을
                          개선했습니다. 앞으로도 상황에 맞는 최적의 도구와
                          방식을 적용할 수 있도록 노력하여 설계 단계에서부터
                          확장성과 효율성을 고려한 솔루션을 제공할 수 있는
                          개발자가 되고자 합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </section>

          <section className="pb-20">
            <div className="flex flex-col items-center pb-4 border-b-2 border-dashed border-[#55501a]">
              <h3 className="text-center text-3xl font-thin pb-2">Career</h3>
            </div>
            <div className="py-10">
              <div className="flex flex-col gap-10">
                <div className="flex gap-8 max-md:flex-col">
                  <div className="sticky top-[148px] h-[174px] text-2xl font-semibold  basis-1/4 max-md:text-center max-md:static">
                    <p>(주)리턴플러스</p>
                    <ul className="font-thin text-base">
                      <li>2025.05 - 현재</li>
                      <li>개발팀 - 전임(프론트엔드 리드)</li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-10  basis-3/4">
                    <div>
                      <p className="pb-4 leading-relaxed">
                        Next.js 15 기반의 홈페이지·WebView 앱·관리자 대시보드
                        3개 프론트엔드를 리드하며, 인증/권한/테이블/브릿지 같은
                        핵심 공통 영역을 모듈화해 제품 간 재사용 구조를
                        만들었습니다. 이미지·폰트 최적화로 초기 로딩 체감 성능을
                        개선했고, 메타데이터·구조화 데이터·사이트맵 자동화로
                        검색 노출 기반을 구축했습니다. 또한 SSR/CSR 환경 분리를
                        통한 API 통신 안정성 확보, middleware 기반 다단계 인증
                        플로우 구현, visualViewport API를 활용한 모바일 키보드
                        대응, TypeScript 조건부 타입 기반 타입 안전한 브릿지
                        통신 등 WebView 앱 특성에 맞는 아키텍처를 설계해
                        안정성과 UX를 확보했습니다.
                      </p>
                    </div>
                    <div className="text-sm px-2 py-1 text-center italic">
                      주 업무내용
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <strong>의료기기 투자 플랫폼 한조각</strong>
                      </div>
                      <div>
                        <strong>역할</strong>
                        <p className="mt-2 mb-4">
                          프론트엔드 리드로서 기술 스택 선정, 공통
                          아키텍처/컨벤션 수립, 핵심 공통
                          모듈(인증·권한·테이블·브릿지) 설계, 코드 리뷰 기준
                          정립을 담당했습니다. 또한 3개 제품(홈·앱·어드민)의
                          개발 우선순위를 조율하고, 운영/런칭을 위한
                          성능·SEO·안정성 요구사항을 정리해 팀과 합의된 기준으로
                          구현했습니다.
                        </p>
                      </div>
                      <div>
                        <strong>주 업무내용</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            프론트엔드 아키텍처 설계 및 기술 스택 선정 (Next.js
                            15, React 19, TypeScript, Tailwind CSS 4)
                          </li>
                          <li>
                            홈페이지, WebView 앱, 관리자 대시보드 3개 프로젝트
                            전담 개발
                          </li>
                          <li>
                            GSAP ScrollTrigger 활용 시네마틱 스크롤 애니메이션
                            구현 (홈페이지)
                          </li>
                          <li>
                            Flutter WebView Bridge 통신 구조 설계 및 구현 (앱)
                          </li>
                          <li>
                            권한 기반 멀티 대시보드 설계 및 TanStack Table 기반
                            데이터 테이블 구현 (관리자)
                          </li>
                          <li>
                            Sharp/AVIF 이미지 최적화, 폰트 서브셋 자동화로 초기
                            로딩 시간 70% 개선
                          </li>
                          <li>
                            Next.js Metadata API, JSON-LD, Sitemap.xml 활용 SEO
                            최적화
                          </li>
                        </ul>
                      </div>
                      <div>
                        <strong>성과</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            홈페이지 Lighthouse 성능 점수 72 → 95점, SEO 95/100
                            달성
                          </li>
                          <li>
                            구글 &quot;한조각&quot; 브랜드명 검색 시 상위 노출
                            (Search Console 기준, 2025년 10월)
                          </li>
                          <li>
                            관리자 대시보드 31개 모듈화된 API Hooks, 10개 이상
                            도메인 관리
                          </li>

                          <li>런칭 준비 완료 (투자 유치 진행 중)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-8 max-md:flex-col">
                  <div className="sticky top-[148px] h-[174px] text-2xl font-semibold basis-1/4 max-md:text-center max-md:static">
                    <p>(주)서로마인드</p>
                    <ul className="font-thin text-base">
                      <li>2025.01 - 2025.05</li>
                      <li>DX팀 - 연구원</li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-10 basis-3/4">
                    <div className="text-sm px-2 py-1 text-center italic">
                      주 업무내용
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <strong>Surromind Monorepo</strong>
                        <strong>UI 컴포넌트 라이브러리 개발</strong>
                        <span className="font-thin text-base">
                          (2025.01.08 ~ 2025.04.03)
                        </span>
                      </div>
                      <div>
                        <strong>주 업무내용</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            재사용 가능한 UI 컴포넌트 라이브러리 구축 및
                            유지보수 (26개 컴포넌트)
                          </li>
                          <li>
                            메뉴, Breadcrumb, AutoComplete, Badge, Modal 등 핵심
                            컴포넌트 리팩토링 및 개선
                          </li>
                          <li>상태 관리 최적화, 디버깅 시간 단축</li>
                          <li>
                            TypeScript interface 순환 참조 문제 해결 및 타입
                            안정성 강화
                          </li>
                          <li>
                            Jest + React Testing Library 기반 단위 테스트 작성
                          </li>
                          <li>
                            Storybook을 활용한 컴포넌트 문서화 및 시각적 테스트
                          </li>
                        </ul>
                      </div>
                      <div>
                        <strong>성과</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>총 119개 커밋, 7개 주요 이슈 해결</li>
                          <li>컴포넌트 재사용성 향상, 개발 생산성 증가</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <strong>AIOCR</strong>
                        <strong>AI 기반 문서 OCR 처리 시스템 프론트엔드</strong>
                        <span className="font-thin text-base">
                          (프로젝트 참여 기간)
                        </span>
                      </div>
                      <div>
                        <strong>주 업무내용</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            Next.js 14 App Router 기반 문서 OCR 처리 시스템
                            프론트엔드 개발
                          </li>
                          <li>
                            Zustand 상태 관리 및 Alova HTTP 클라이언트로 API
                            통신 구조 설계
                          </li>
                          <li>
                            문서 업로드, OCR 처리 관리, 계정 및 권한 관리, AI
                            키워드 관리 기능 구현
                          </li>
                          <li>
                            한글 검색 정규화(NFD 방식), 디바운스 검색, 다중 조건
                            필터링 구현
                          </li>
                          <li>
                            목록 상태 유지 기능 구현 (URL 쿼리 기반 페이지 관리
                            + sessionStorage 스크롤 복원)
                          </li>
                          <li>
                            @dnd-kit을 활용한 드래그앤드롭 우선순위 관리
                            인터페이스 구현
                          </li>
                        </ul>
                      </div>
                      <div>
                        <strong>성과</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            5개의 독립적인 Zustand 스토어로 관심사 분리 및 확장
                            가능한 아키텍처 구축
                          </li>
                          <li>
                            커스텀 훅(useQueryString, useScrollMemory)을 통한
                            비즈니스 로직 재사용성 향상
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-8 max-md:flex-col">
                  <div className="sticky top-[148px] h-[174px] text-2xl font-semibold  basis-1/4 max-md:text-center max-md:static">
                    <p>(주)하이브랩</p>
                    <ul className="font-thin text-base">
                      <li>2021.09 - 2023.11</li>
                      <li>UX/UI 인터렉티브팀 - 전임</li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-10  basis-3/4">
                    <div className="text-sm px-2 py-1 text-center italic">
                      주 업무내용
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <strong>NHN</strong>
                        <strong>페이코 모바일 이벤트 프로모션 매니징</strong>
                        <span className="font-thin text-base">
                          (2021.08.11 ~ 2021.12.31)
                        </span>
                      </div>
                      <div>
                        <strong>주 업무내용</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            앱 할인 프로모션 이벤트 페이지 마크업 제작, 검수,
                            배포 및 매니징
                          </li>
                          <li>
                            Notion을 활용하여 월말 기준 70~100건 이상의 고객
                            요청 내용을 체계적으로 관리하고 우선순위를 정해
                            팀원들에게 분배함으로써 요청 사항을 효과적으로 처리
                          </li>
                          <li>
                            제작된 마크업 페이지를 꼼꼼히 검수하고 수정 사항을
                            반영하여 페이지 품질 보장
                          </li>
                          <li>
                            쿠폰 마크업 페이지 제작을 위한 자동화 툴 점검 및
                            보안으로 작업 효율성 향상
                          </li>
                        </ul>
                      </div>
                      <div>
                        <strong>성과</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            클라이언트 요청 사항 100% 정확히 완료, 신뢰 구축
                          </li>
                          <li>
                            이벤트 페이지 품질 보장 및 안정적 배포로 사용자에게
                            긍정적인 경험 제공
                          </li>
                          <li>
                            자동화 툴 개선으로 작업 속도를 30% 단축, 요청 처리
                            효율 증가
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <strong>NHN</strong>
                        <strong>페이코 PC, 모바일 상시 운영</strong>
                        <span className="font-thin text-base">
                          (2022.01.01 ~ 2023.06.30)
                        </span>
                      </div>
                      <div>
                        <strong>주 업무내용</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            클라이언트 기획 및 디자인 요구 사항에 따라 PC 및
                            모바일 마크업 페이지 제작 및 수정
                          </li>
                        </ul>
                      </div>
                      <div>
                        <strong>성과</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            정해진 일정보다 신속한 제작으로 클라이언트 요구 조기
                            충족
                          </li>
                          <li>추가적인 운영 업무 수주로 회사 수익성 향상</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <strong>NAVER</strong>
                        <strong>실시간 협업 프레임워크 yorkie 프로젝트</strong>
                        <span className="font-thin text-base">
                          (2022.08.17 ~ 2022.12.23)
                        </span>
                      </div>
                      <div>
                        <strong>주 업무내용</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>웹 관리자 및 서비스 페이지 마크업 제작</li>
                          <li>
                            컴포넌트 단위 퍼블리싱으로 개발팀에 전달 및 협업
                          </li>
                          <li>웹 표준 및 시멘틱 마크업 준수</li>
                        </ul>
                      </div>
                      <div>
                        <strong>성과</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            웹 표준 및 시멘틱 마크업 준수로 높은 품질의 웹
                            페이지 제공
                          </li>
                          <li>
                            Git을 활용한 협업 중 발생한 Git 충돌 문제 해결 및
                            커밋 히스토리 정리로 코드 관리 효율성 향상
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <strong>OLIVE YOUNG</strong>
                        <strong>
                          올리브영 PC, 모바일 이벤트 마크업 페이지 제작
                        </strong>
                        <span className="font-thin text-base">
                          (2023.07.01 ~ 2023.11.30)
                        </span>
                      </div>
                      <div>
                        <strong>주 업무내용</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            클라이언트와의 월 단위 회의를 통해 업무 배정, 일정
                            산정, 기획, 디자인 후 이벤트 페이지 마크업 제작
                          </li>
                          <li>마크업 페이지 검수 및 배포</li>
                        </ul>
                      </div>
                      <div>
                        <strong>성과</strong>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            모든 작업을 기한 내 완료하여 이벤트 일정에 맞춘
                            정확한 배포 실현
                          </li>
                          <li>
                            철저한 검수와 품질 보증으로 오류 없는 안정적 운영 및
                            긍정적 클라이언트 피드백 획득
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 text-center text-sm px-2 py-1 bg-[#55501a] text-white rounded-md">
                앞으로 이곳을 함께 채워나가고 싶어요.
              </div>
            </div>
          </section>
        </article>
        <TopButton></TopButton>
      </main>
      <footer></footer>
    </>
  );
}
