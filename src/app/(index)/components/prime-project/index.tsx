const features = [
  {
    title: "기존 서비스 FSD·TypeScript 마이그레이션",
    description:
      "components, hooks, utils, redux 중심의 기존 구조를 app → pages → widgets → features → entities → shared 6개 계층으로 재구성. 도메인 모델·API·데이터 파싱과 사용자 행동·화면 조합의 책임을 분리.",
  },
  {
    title: "지도 기반 부동산 탐색",
    description:
      "확대 수준에 따라 시군구·읍면동 집계와 개별 실거래 마커를 전환. 지도 범위 기반 조회, 지번 검색, 최근 검색어, 면적·거리 측정과 평·㎡ 전환 제공.",
  },
  {
    title: "토지·매물 정보 관리",
    description:
      "필지 경계, 공시지가 이력, 실거래 내역과 매물 정보를 상세 패널에 제공. 관리자 수정 결과를 지도 마커와 상세 화면에 동기화.",
  },
  {
    title: "개발구역 관리",
    description:
      "경계점 선택을 통한 개발구역 등록과 사업정보 수정·삭제 구현. Polygon·MultiPolygon을 지원하고, 사업유형과 추진단계에 따라 구역 색상과 정보를 표시.",
  },
  {
    title: "지도 이미지·교통망 편집",
    description:
      "사업 이미지를 지도 위에서 이동·회전·크기·투명도 조절 후 저장. 도로·지하철 노선의 정점, 곡선, 색상, 역명과 상세정보 편집 및 임시저장·복원 제공.",
  },
  {
    title: "추진위 목록 및 회원 기능",
    description:
      "도시개발·재개발·재건축 추진위 목록을 커서 기반 무한 스크롤로 조회하고 지도 위치와 연결. 이메일·소셜 로그인과 서버 회원 등급 기반 관리자 기능 제어 구현.",
  },
];

const troubleshooting = [
  {
    title: "기능 확장에 맞춘 기존 코드의 FSD 마이그레이션",
    problem:
      "지도, 인증, 토지, 개발사업 기능이 컴포넌트·유틸리티·전역 상태 폴더에 나뉘어 있어 하나의 업무를 수정할 때 여러 위치의 코드를 함께 추적해야 하는 구조.",
    solution:
      "공통 HTTP·유틸리티를 Shared로 구성한 뒤 사용자·토지·개발구역·교통망을 Entity로 분리. 검색·거래 수정·개발구역 등록·교통망 편집을 Feature로 옮기고, Widget과 Page에서 조합하도록 전환. 앱 진입점과 라우팅을 교체한 후 기존 모듈과 미사용 관리자·데이터·이미지 자산을 정리.",
    result:
      "마이그레이션 완료 시점 기준 6개 계층, 13개 Feature, 8개 Entity로 재구성. 슬라이스 공개 진입점과 의존성 방향을 검사하는 도구를 추가해 구조 규칙을 지속적으로 확인할 수 있도록 구성.",
  },
  {
    title: "지도 확대·이동 시 마커 깜빡임과 이전 응답 반영 문제",
    problem:
      "마커 갱신 과정에서 기존 마커를 일괄 정리하고, 현재 줌과 다른 단계의 데이터를 렌더링하면서 마커가 사라지거나 다시 나타나는 문제 발생. 비동기 요청의 응답 순서도 최신 지도 상태와 다를 수 있는 구조.",
    solution:
      "표시 단위가 바뀔 때만 전체 마커를 재구성하고, 기존 마커는 ID 기준으로 재사용하도록 개선. 현재 줌에 맞는 응답이 도착할 때까지 기존 표시를 유지하고, 요청 ID를 비교해 최신 응답만 반영. 지도 중심·줌·경계 갱신도 하나의 액션으로 통합.",
    result:
      "지도 이동에 따른 마커 유지·교체 기준을 명확히 하고, 뷰포트 상태 동기화 액션을 이벤트당 3회에서 1회로 축소.",
  },
  {
    title: "매물 수정 후 마커와 상세 패널에 이전 정보가 남는 문제",
    problem:
      "동일 ID의 마커를 재사용하면서 제목·가격·면적 변경이 표시되지 않고, 클릭 이벤트가 마커 생성 당시의 데이터를 참조하는 문제 발생.",
    solution:
      "마커 표시값으로 렌더링 키를 생성해 데이터 변경 여부를 판별하고, 변경된 마커만 갱신. 클릭 시에는 캐시에서 최신 데이터를 조회하도록 이벤트 처리 방식 수정.",
    result:
      "마커 재사용을 유지하면서 수정된 매물 정보가 지도 표시와 상세 조회에 함께 반영되도록 개선.",
  },
  {
    title: "교통망 편집 작업의 저장 실패 대응",
    problem:
      "다수의 좌표와 역 정보를 편집한 뒤 서버 저장에 실패했을 때 작업을 보존하고 다시 불러올 수 있는 복구 경로가 필요.",
    solution:
      "수동 임시저장과 서버 저장 실패 백업을 별도로 구현. 저장 데이터에 버전과 시각을 포함하고, 복원 시 노선·편집 상태를 검증하도록 구성. 서버 저장 성공 후 실패 백업을 정리하고, 브라우저 저장 실패도 구분해 안내.",
    result:
      "서버 저장과 별개로 작업을 보존·복원할 수 있는 2가지 경로를 제공해 저장 실패에 대응.",
  },
];

const achievements = [
  {
    title: "기존 JavaScript 애플리케이션을 FSD·TypeScript로 전환",
    description:
      "84개 JavaScript 앱 파일로 구성된 기존 코드를 미사용 코드 정리와 책임 분리를 거쳐 114개 TypeScript/TSX 파일로 재구성. 마이그레이션 완료 시점의 앱 소스에서 JavaScript 파일 제거.",
  },
  {
    title: "지도 상태 동기화 액션 3회 → 1회",
    description:
      "지도 중심·줌·경계를 단일 액션에서 함께 갱신하도록 변경해 동일 이벤트의 상태 동기화 dispatch 수를 약 67% 축소.",
  },
  {
    title: "회귀 테스트 5개 파일·22개 케이스 구성",
    description:
      "사용자 응답, API 주소 설정, 개발구역 파싱, 사업유형·추진단계 및 필터 선택 규칙 검증.",
  },
  {
    title: "구조와 품질 검사 자동화",
    description:
      "FSD 의존성·포맷·린트·타입 검사를 로컬 푸시 전 실행하도록 구성. 현재 150개 소스 파일에 대한 FSD 의존성 검사 통과.",
  },
  {
    title: "공간 데이터 편집 기능 확장",
    description:
      "단일 폴리곤에서 다중 폴리곤으로 표현 범위를 넓히고, 이미지 오버레이와 도로·지하철 편집을 개발사업 관리 흐름에 통합.",
  },
];

const learnings = [
  {
    title: "기능의 책임을 기준으로 구조를 바꾸는 마이그레이션",
    description:
      "기존 코드를 FSD로 옮기면서 도메인 규칙, 사용자 행동, 화면 조합의 경계를 정리. 파일 이동과 함께 공개 API·의존성 규칙·검사 도구를 갖춰야 이후 기능 추가에도 구조를 유지할 수 있음을 경험.",
  },
  {
    title: "객체 재사용과 데이터 최신성의 균형",
    description:
      "마커 재사용을 개선한 뒤 매물 수정값이 반영되지 않는 문제를 해결하면서, 객체의 동일성과 표시 데이터의 변경을 구분해야 함을 학습. 렌더링 키와 최신 데이터 참조를 함께 적용하는 방식으로 개선.",
  },
  {
    title: "지도 상태와 비동기 응답의 일관성",
    description:
      "지도 이동·줌·API 응답이 서로 다른 시점에 발생하는 환경에서 최신 요청 판별과 응답의 줌 단계 확인이 중요함을 경험. 연관 상태를 하나의 갱신 단위로 묶어 처리 흐름을 명확히 구성.",
  },
  {
    title: "실패 이후까지 고려하는 편집 기능",
    description:
      "교통망 편집에 임시저장과 실패 백업을 추가하며 저장 성공뿐 아니라 작업 보존·복원·재시도까지 사용자 흐름에 포함하는 설계 경험.",
  },
];

const developmentApproach = [
  "공통 기반 → 도메인 → 사용자 기능 → 화면 조합 → 앱 진입점 순서로 마이그레이션 커밋을 분리하고, 전환 후 레거시 코드 정리.",
  "운영 중 발생한 지도 표시·데이터 동기화 문제를 수정하면서, 반복되는 줌 정책과 API 응답 변환을 공통 규칙으로 정리.",
  "외부 입력은 런타임에 검증하고, 주요 파서와 업무 규칙은 단위 테스트 및 정적 검사로 확인.",
];

const troubleshootingLabels = [
  ["problem", "문제"],
  ["solution", "해결"],
  ["result", "결과"],
] as const;

export default function PrimeProject() {
  return (
    <li
      id="prime"
      className="flex scroll-mt-60 gap-8 max-md:flex-col md:scroll-mt-40"
    >
      <div className="sticky top-[148px] min-w-0 basis-1/4 self-start text-2xl font-semibold max-md:static max-md:w-full max-md:text-center">
        <span className="inline-block rounded-sm bg-[#55501a] p-1 text-sm text-white">
          지도 기반 부동산·개발사업 플랫폼
        </span>
        <h4>Prime</h4>
        <ul className="space-y-1 break-words text-base font-thin">
          <li>React 18, TypeScript, Redux Toolkit</li>
          <li>Naver Maps API, Tailwind CSS, Axios</li>
        </ul>
      </div>

      <div className="flex min-w-0 basis-3/4 flex-col gap-10">
        <div>
          <p className="py-2 leading-relaxed">
            토지 실거래, 매물, 개발구역과 교통망 정보를 지도에서 탐색하고
            관리하는 부동산 플랫폼. 기존 JavaScript 기반 서비스의 UI와 모바일
            사용성을 개선하고, FSD·TypeScript 구조로 마이그레이션. 지도 렌더링
            오류와 데이터 동기화 문제를 해결하면서 개발구역 등록, 이미지
            오버레이, 교통망 편집 기능을 확장.
          </p>
          <p className="pt-2 leading-relaxed">
            <strong className="font-semibold">담당 업무</strong> — 기존
            프론트엔드 개선, FSD·TypeScript 마이그레이션, 지도 기능 및 개발사업
            관리 기능 개발
          </p>
        </div>

        <div>
          <h5 className="px-2 py-1 text-center text-sm italic">주요 기능</h5>
          <ul className="list-inside list-disc space-y-1">
            {features.map(({ title, description }) => (
              <li key={title}>
                <strong className="font-semibold">{title}</strong> —{" "}
                {description}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="px-2 py-1 text-center text-sm italic">트러블슈팅</h5>
          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <div key={item.title}>
                <h6 className="mb-3 font-semibold">
                  {index + 1}. {item.title}
                </h6>
                <ul className="list-inside list-disc space-y-2">
                  {troubleshootingLabels.map(([key, label]) => (
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
          <h5 className="px-2 py-1 text-center text-sm italic">성과</h5>
          <ul className="list-inside list-disc space-y-1">
            {achievements.map(({ title, description }) => (
              <li key={title}>
                <strong className="font-semibold">{title}</strong> —{" "}
                {description}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed">
            ※ 파일 수는 2026.08.07 마이그레이션 전후 기준이며 테스트·타입
            선언·개발 프록시 파일은 제외. 액션 감소율은 뷰포트 상태 동기화
            dispatch 수 기준.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="px-2 py-1 text-center text-sm italic">회고</h5>
          <div>
            <h6 className="mb-4 font-bold">배운 점</h6>
            <ul className="flex list-inside list-disc flex-col gap-2">
              {learnings.map(({ title, description }) => (
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
            <h6 className="mb-4 font-bold">개발 방식</h6>
            <ul className="flex list-inside list-disc flex-col gap-2">
              {developmentApproach.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
