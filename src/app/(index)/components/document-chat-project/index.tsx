import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const studyTopics = [
  {
    title: "RAG의 전체 흐름 구현",
    description:
      "PDF에서 페이지별 텍스트를 추출하고 임베딩을 저장한 뒤, 질문과 유사한 문맥을 검색해 LLM에 전달. 답변과 함께 페이지 번호·발췌문을 표시하며 문서 처리 → 검색 → 답변 생성의 연결 과정을 학습.",
  },
  {
    title: "벡터 저장소와 파일 저장 방식 전환",
    description:
      "초기 ChromaDB 컬렉션 검색을 Supabase pgvector의 SQL RPC 호출로 변경하고, 로컬 PDF 저장을 Supabase Storage로 전환. 로컬 실습 코드를 웹 배포 환경에 맞추는 과정을 경험.",
  },
  {
    title: "대화 맥락과 상태 관리",
    description:
      "세션별 대화를 저장하고 최근 메시지 10개를 기본값으로 답변 생성에 전달. Container/View 패턴과 Zustand를 적용해 업로드·임베딩·채팅 상태와 화면 표시를 나누어 구현.",
  },
  {
    title: "인증과 API 사용량 기록 실습",
    description:
      "Google OAuth, Supabase Auth와 RLS 정책을 연결하고, 임베딩·답변 생성 시 토큰 사용량과 비용 추정값을 기록. LLM 호출 외에 웹앱을 구성하는 인증·데이터 접근·사용량 관리 흐름까지 학습 범위를 확장.",
  },
];

const practiceIssues = [
  {
    title: "로컬 저장 구조를 배포 환경에 맞게 변경",
    problem:
      "초기 구현이 로컬 파일 시스템과 ChromaDB 서버에 의존해, 웹 배포를 위해 파일 저장과 벡터 검색 구조를 바꿀 필요가 있었음.",
    solution:
      "PDF는 브라우저에서 Supabase Storage로 직접 업로드하고 API에는 파일 경로와 메타데이터를 전달. 서버가 파일을 읽어 텍스트를 추출하고 pgvector에 저장하도록 전환.",
    learning:
      "로컬에서 동작하는 코드와 배포 가능한 구조 사이에는 저장 위치·데이터 접근 방식·실행 환경을 함께 고려해야 한다는 점을 학습.",
  },
  {
    title: "PDF 추출 텍스트의 null byte 처리",
    problem:
      "PDF에서 추출한 텍스트에 PostgreSQL이 지원하지 않는 null byte가 포함되는 저장 문제를 확인.",
    solution:
      "페이지 텍스트를 추출하는 단계에서 null byte를 제거한 뒤 임베딩과 DB 저장에 사용하도록 전처리 추가.",
    learning:
      "문서 파싱 결과를 그대로 저장하는 대신, 저장소가 허용하는 형식으로 정리하는 과정이 필요함을 경험.",
  },
  {
    title: "단일 질문에서 연속 대화로 확장",
    problem:
      "초기에는 현재 질문과 검색 문맥만 LLM에 전달해, 앞선 대화의 내용을 이어서 질문하는 흐름을 처리하기 어려웠음.",
    solution:
      "저장된 대화에서 오류 메시지를 제외하고 최근 N개를 role과 함께 전달. 히스토리가 없는 첫 질문은 기존 단일 프롬프트로 처리하도록 분기.",
    learning:
      "문서에서 관련 내용을 찾는 검색 문맥과 대화를 이어가기 위한 메시지 히스토리의 역할을 구분해 학습.",
  },
];

const practiceLabels = [
  ["problem", "문제"],
  ["solution", "해결"],
  ["learning", "배운 점"],
] as const;

const evaluationRows = [
  { metric: "자동 평가 OK 판정", topK6: "19 / 20", topK10: "20 / 20" },
  { metric: "Hit@K", topK6: "85%", topK10: "85%" },
  { metric: "MRR", topK6: "0.494", topK10: "0.462" },
];

const reflections = [
  {
    title: "검색과 답변을 나누어 평가하기",
    description:
      "답변만 읽고 판단하는 데서 나아가 검색된 문맥과 답변의 근거를 함께 확인하도록 평가 흐름을 구성. 검색 실패와 생성 실패를 구분해 기록하는 방법을 실습.",
  },
  {
    title: "검색 개수 증가와 품질 개선 구분하기",
    description:
      "Top-K 6·10 비교에서 자동 평가의 OK 판정 수는 늘었지만 Hit@K는 같고 MRR은 낮아짐. 검색량을 늘리는 것만으로 품질 개선을 단정할 수 없으며, 여러 지표와 실제 답변을 함께 확인해야 한다는 점을 정리.",
  },
  {
    title: "학습 결과의 검증 범위 남기기",
    description:
      "20개 질문과 LLM 자동 평가 기록은 해당 실험을 돌아보는 자료로 활용. 질문셋 확장, 평가 기준 검토, 저장소 전환 후 재평가를 통해 추가로 확인할 부분을 구분.",
  },
];

export default function DocumentChatProject() {
  return (
    <li
      id="document-chat"
      className="flex scroll-mt-60 gap-8 max-md:flex-col md:scroll-mt-40"
    >
      <div className="sticky top-[148px] min-w-0 basis-1/4 self-start text-2xl font-semibold max-md:static max-md:w-full max-md:text-center">
        <span className="inline-block rounded-sm bg-[#55501a] p-1 text-sm text-white">
          RAG 스터디 · 토이 프로젝트
        </span>
        <h4>Document Chat</h4>
        <ul className="space-y-1 break-words text-base font-thin">
          <li>Next.js 15, React 19, TypeScript</li>
          <li>Vercel AI SDK, Supabase, Zustand</li>
          <li className="flex items-center gap-4 py-4 max-md:justify-center">
            <Link
              href="https://chatbot-zeta-five-34.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Document Chat 데모 열기"
            >
              <FaLink size={30} aria-hidden="true" />
            </Link>
            <Link
              href="https://github.com/sungjaechoi/chatbot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Document Chat GitHub 저장소 열기"
            >
              <FaSquareGithub size={38} aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex min-w-0 basis-3/4 flex-col gap-10">
        <p className="py-2 leading-relaxed">
          RAG의 동작 원리와 LLM 애플리케이션 개발 과정을 공부하고, 학습한 내용을
          PDF 질의응답 웹앱으로 구현한 개인 스터디·토이 프로젝트. 문서 처리부터
          검색·답변 생성까지 연결하고, 검색 설정을 바꾼 평가 실험과 저장소 전환
          과정을 기록.
        </p>

        <div>
          <h5 className="px-2 py-1 text-center text-sm italic">학습 목표</h5>
          <ul className="list-inside list-disc space-y-1">
            <li>
              문서 임베딩과 유사도 검색으로 외부 문맥을 LLM에 전달하는 RAG 구조
              이해.
            </li>
            <li>
              검색 결과와 생성된 답변을 나누어 살펴보고, 검색 개수와 대화 기록이
              답변에 미치는 영향을 확인.
            </li>
            <li>
              스터디한 내용을 프론트엔드·API·데이터 저장소가 연결된 웹앱으로
              구현하고 개발 과정과 실험 결과를 남기기.
            </li>
          </ul>
        </div>

        <div>
          <h5 className="px-2 py-1 text-center text-sm italic">
            학습 내용 및 구현
          </h5>
          <ul className="list-inside list-disc space-y-2">
            {studyTopics.map(({ title, description }) => (
              <li key={title}>
                <strong className="font-semibold">{title}</strong> — {description}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="px-2 py-1 text-center text-sm italic">
            실습 중 해결한 문제
          </h5>
          <div className="space-y-6">
            {practiceIssues.map((item, index) => (
              <div key={item.title}>
                <h6 className="mb-3 font-semibold">
                  {index + 1}. {item.title}
                </h6>
                <ul className="list-inside list-disc space-y-2">
                  {practiceLabels.map(([key, label]) => (
                    <li key={key}>
                      <span className="mr-1 rounded-sm bg-[#55501a] p-1 text-sm text-white">
                        [{label}]
                      </span>
                      {item[key]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h5 className="px-2 py-1 text-center text-sm italic">실험과 결과물</h5>
          <ul className="list-inside list-disc space-y-2">
            <li>
              PDF 업로드 → 페이지별 텍스트 추출 → 임베딩 저장 → 관련 문맥 검색 →
              답변·출처 확인까지 연결한 웹앱 구현.
            </li>
            <li>
              사실 확인·복합 질문·추론·문서에 없는 질문·모호한 질문의 5개 유형,
              20개 질문으로 평가 스크립트와 Top-K 6·10 비교 로그 작성.
            </li>
            <li>
              질문별 검색 문맥, 답변, 근거 판정과 실패 원인을 JSON으로 저장해
              실험을 돌아볼 수 있는 자료 구성.
            </li>
          </ul>
          <table className="mt-5 w-full border-collapse text-left text-sm">
            <caption className="pb-2 text-left font-semibold">
              초기 RAG 실험 기록 비교
            </caption>
            <thead>
              <tr className="border-b border-[#55501a]">
                <th scope="col" className="py-2 pr-3 font-semibold">지표</th>
                <th scope="col" className="px-2 py-2 font-semibold">Top-K 6</th>
                <th scope="col" className="px-2 py-2 font-semibold">Top-K 10</th>
              </tr>
            </thead>
            <tbody>
              {evaluationRows.map(({ metric, topK6, topK10 }) => (
                <tr key={metric} className="border-b border-[#55501a]/20">
                  <th scope="row" className="py-2 pr-3 font-normal">{metric}</th>
                  <td className="whitespace-nowrap px-2 py-2">{topK6}</td>
                  <td className="whitespace-nowrap px-2 py-2">{topK10}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-relaxed">
            ※ 2026.01 초기 ChromaDB 버전의 동일한 20개 질문에 대한 LLM 자동 평가
            기록. 제한된 질문셋의 비교 결과이며, 현재 Supabase 버전은 별도
            재평가가 필요. MRR은 근거의 검색 순위를 요약한 지표.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="px-2 py-1 text-center text-sm italic">회고</h5>
          <div>
            <h6 className="mb-4 font-bold">배운 점</h6>
            <ul className="flex list-inside list-disc flex-col gap-2">
              {reflections.map(({ title, description }) => (
                <li key={title}>
                  <span className="mr-1 rounded-sm bg-[#55501a] p-1 text-sm text-white">
                    [{title}]
                  </span>
                  {description}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="mb-4 font-bold">AI 도구를 활용한 개발 실습</h6>
            <p className="leading-relaxed">
              Claude Code에 작업 조율·스키마·백엔드·프론트엔드·리뷰의 5개 역할을
              정의하고, 요청 분석 → 구현 → 리뷰 → 수정 흐름을 실습. PDF 업로드와
              대화 히스토리 작업에서 입력값 검증·예외 처리를 보완한 과정과
              작업별 요청 분석·최종 결과 문서를 기록.
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
