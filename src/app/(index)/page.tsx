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
                  퍼블리셔로서 2년간의 경험을 통해 다양한 디자이너, 프론트 엔드
                  개발자와 협업하며, HTML, CSS, JavaScript, 크로스 브라우징,
                  반응형 웹 기술을 익혔습니다.
                </p>
                <p className="pb-2">
                  <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                    퍼블리셔에서 프론트엔드 개발자로 성장하기 위해 필요한 역량을
                    고민하며
                  </span>
                  지난 1년간 코어 자바스크립트부터 시작하여
                  <span className="text-sm p-1 mx-1 bg-[#55501a] text-white rounded-sm">
                    React
                  </span>
                  <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                    Next.js
                  </span>
                  <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                    TypeScript
                  </span>
                  집중적으로 학습하고
                  <br />
                  Seul gallery와 Supabase_TodoList 개인 프로젝트를 통해 실무적
                  경험을 쌓으며
                  <span className="text-sm p-1 ml-1 bg-[#55501a] text-white rounded-sm">
                    치열하게 준비하였습니다.
                  </span>
                </p>
                <p className="pb-2">
                  저는{" "}
                  <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                    RESTfulAPI의 가치를 알며
                  </span>
                  <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                    프론트엔드 중심의 테스트 코드의 중요성을 알고
                  </span>
                  <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                    팀의 목표를 최우선으로 생각하며
                  </span>
                  <span className="text-sm p-1 mr-1 bg-[#55501a] text-white rounded-sm">
                    이제 현업에서 팀원들과 함께 성장하고, 헌신하며, 좋은 제품을
                    만들고싶습니다.
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section className="pb-20">
            <div className="flex flex-col items-center pb-4 border-b-2 border-dashed border-[#55501a]">
              <h3 className="text-center text-3xl font-thin pb-2">Skills</h3>
            </div>
            <div className="py-10">
              <ul className="flex flex-col gap-10">
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold basis-1/4 max-md:text-center">
                    Frontend
                  </div>
                  <ul className="list-disc list-inside space-y-1 basis-3/4">
                    <li>HTML</li>
                    <li>CSS ( SCSS, StyledComponents, Tailwind ) </li>
                    <li>JavaScript ( ES6 ~ )</li>
                    <li>TypeScript</li>
                    <li>
                      React ( Context API, Redux, React Query, React Hook Form
                      ... )
                    </li>
                    <li>Next ( App Router )</li>
                    <li>AWS EC2</li>
                    <li>Docker</li>
                  </ul>
                </li>
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold basis-1/4 max-md:text-center">
                    Backend
                  </div>
                  <ul className="list-disc list-inside space-y-1 basis-3/4">
                    <li>Prisma</li>
                    <li>Supabase</li>
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
                <li className="flex gap-8 max-md:flex-col">
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
                </li>
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
                          (2023.07.01 ~ 2024.11.30)
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
