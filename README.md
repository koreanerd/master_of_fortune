## 목차

- [과제 목표 및 달성 현황](#과제-목표-및-달성-현황)
- [데모 사이트](#데모-사이트)
- [과제 분석](#과제-분석)
- [개발 과정](#개발-과정)
  - [1. Mcok data 모델링](#1-Mock-data-모델링)
  - [2. 폴더구조](#2-폴더구조)
  - [3. 컴포넌트 계층도](#3-컴포넌트-계층도)
    - [웹툰기능 핵심 컴포넌트](#웹툰기능-핵심-컴포넌트)
    - [사주 풀이표 기능 핵심 컴포넌트](#사주-풀이표-기능-핵심-컴포넌트)
  - [4. 중앙 상태 관리](#4-중앙-상태-관리)
  - [5. 디자인 에셋 활용방식](#5-디자인-에셋-활용방식)
- [프로젝트 회고](#프로젝트-회고)
  - [1. 사주라는 도메인에 대한 낯섦, 모델링의 힘](#1-사주라는-도메인에-대한-낯섦-모델링의-힘)
  - [2. 중앙 상태 관리에 대한 고민](#2-중앙-상태-관리에-대한-고민)
  - [3. 시각 중심 사고를 코드로 번역하는 과정](#3-시각-중심-사고를-코드로-번역하는-과정)
- [프로젝트 실행 방법](#프로젝트-실행-방법)

## 과제 목표 및 달성 현황

### 필수

- [✓] ~~프레임워크는 Next.js를 이용해야한다.~~
- [✓] ~~결과물은 Vercel을 이용해 배포해야 한다.~~
- [✓] ~~맨 하단의 사주팔자 표는 반드시 컴포넌트로 구현해야 한다.~~
  - 사주팔자 표에 사용되는 데이터는 더미데이터를 사용하되 이미지 삽입은 금지한다.

### 반응형

- [✓] ~~화면은 최대 너비가 max-w-md (448px)를 넘지 않아야 한다.~~
- [✓] ~~화면의 너비가 줄어들어도 말풍선 안의 문자열 위치가 유지되어야 한다.~~
- [✓] ~~모든 화면은 늘이거나 줄였을 때 위화감이 없어야 하며 일정한 사용자 경험을 제공해야 한다.~~

### 그 외

- [✓] ~~디자인 에셋은 반드시 피그마 내보내기를 통해서만 사용한다.~~
- [✓] ~~말풍선 안의 대화는 실제 텍스트로 삽입한다.~~

## 데모 사이트

https://master-of-fortune.vercel.app/

## 과제 분석

> 해당 테스트는 웹툰 형태의 사주 풀이 서비스를 구현하는 과제로, Figma로 제공된 디자인을 바탕으로 Next.js를 활용하여 개발하고, Vercel을 통해 배포하는 실무형 테스트로 이해하였습니다.
>
> 과제 지문에 따르면, 평가 항목은 다음과 같은 구현 역량을 중점적으로 평가한다고 생각했습니다:
>
> - 디자인 에셋을 직접 내보내고 활용하는 능력
> - 반응형 퍼블리싱을 통해 다양한 화면 크기에서 일관된 사용자 경험을 제공하는 능력
> - 말풍선 안의 텍스트를 실제 텍스트로 구현하여 정적 콘텐츠로 구성하는 능력
>
> 표의 데이터는 더미 데이터를 활용해도 무방하지만, 이미지로 대체하지 않고 컴포넌트로만 구성해야 하며, 실제 서비스에서도 그대로 활용할 수 있을 만큼 구조화와 추상화가 잘 되어 있어야 할 것 같다고 느꼈습니다.

## 개발 과정

### 1. Mcok data 모델링

> 본격적인 개발에 앞서, Figma에 제공된 디자인과 지문을 바탕으로 사주풀이 표에 사용될 Mock 데이터를 사전에 모델링하였습니다.
>
> 과제 지침에 따르면 데이터는 한자나 사주와 관련 없는 임의의 값으로 대체해도 무방하다고 되어 있었지만,사주풀이 표를 논리적으로 컴포넌트화하기 위해서는 일관된 구조와 기준이 있는 것이 개발 단계에서 훨씬 효율적이라 판단하였습니다.
>
> 다만, 사주에 대한 배경 지식이 부족한 상황이었기 때문에, 표의 헤더에 사용된 항목들을 기준으로 GPT를 활용해 각 항목에 들어갈 수 있는 예시 데이터를 조사하고, 이를 기반으로 유사한 형태의 목업 모델을 구현하였습니다.

```javascript
const mockData = {
  name: "해방촌",
  birthInfo: {
    year: 1945,
    month: 6,
    day: 5,
    time: "04:00",
  },
  rows: [
    { label: "십성", values: ["겁재", "비견", "편재", "정재"] },
    { label: "천간", values: ["을", "갑", "병", "정"] },
    { label: "지지", values: ["묘", "인", "오", "사"] },
    { label: "십성 (지지)", values: ["편재", "정재", "식신", "상관"] },
    { label: "십이운성", values: ["장생", "목욕", "관대", "건록"] },
    { label: "십이신살", values: ["천덕", "월살", "장성", "백호"] },
    {
      label: "귀인",
      values: ["천을", "지살", "문창", ["지살", "문창", "천복"]],
    },
  ],
};
```

---

### 2. 폴더구조

#### 초기 폴더구조

> 초기 폴더구조의 경우 아래와 같이 설정해두고 개발을 시작 하였습니다. 이렇게 한 이유는 어느정도 머릿속에 틀을 잡아놓을 수 있기 때문에 중간에 다시 이어서 생각하기에도 용이하다고 생각했기 때문입니다.

```bash
root
├── public
│   └── fonts               # 웹폰트 파일(.woff/.woff2/.otf 등)을 저장하는 정적 폴더
│
└── src                     # 소스 코드 루트
    ├── app                 # Next.js App Router 페이지 진입점
    │   └── api             # API 라우트 정의
    │       └── mock        # 더미 응답을 제공하는 route.ts 포함
    │
    ├── components          # 재사용 가능한 UI 컴포넌트 모음
    │
    ├── styles              # 글로벌 스타일, 폰트 정의
    │
    ├── types               # 인터페이스, 타입 선언 파일 포함
    │
    │
    └── utils               # 유틸리티 함수
```

#### 마무리 단계의 폴더 구조

> 마무리 단계에 가까워질수록 모듈화 하거나 분리되는 로직이 많아 폴더 구조가 다소 복잡해지긴 했지만 초반에 설정한 구조에서 크게 벗어나지 않았습니다.

```bash
rocket-ai-subject/
├── README.md                # 프로젝트에 대한 설명과 사용법
├── .git/                    # Git 버전 관리 디렉토리
├── src/                     # 소스 코드 디렉토리
│   ├── app/                 # 애플리케이션의 주요 구조
│   │   ├── page.tsx         # 메인 페이지 컴포넌트
│   │   ├── layout.tsx       # 레이아웃 컴포넌트
│   │   └── api/             # API 관련 디렉토리
│   │       └── mock/        # 모의 데이터 관련 디렉토리
│   │           └── route.ts # 모의 API 라우트
│   ├── components/          # 재사용 가능한 컴포넌트 디렉토리
│   │   ├── fortune_table/   # 운세 테이블 관련 컴포넌트
│   │   │   ├── DefaultCell.tsx
│   │   │   ├── FortuneTableL.tsx
│   │   │   ├── SpecialCell.tsx
│   │   │   ├── Table.tsx
│   │   │   ├── LabelCell.tsx
│   │   │   └── UserInfo.tsx
│   │   └── webtoon/         # 웹툰 관련 컴포넌트
│   │       ├── Webtoon.tsx
│   │       ├── EffectText.tsx
│   │       ├── EpisodeHeader.tsx
│   │       ├── SpeechBubble.tsx
│   │       └── Cut.tsx
│   ├── data/                # 데이터 관련 디렉토리
│   │   └── cut.ts           # 컷 데이터 정의
│   ├── stores/              # 상태 관리 관련 디렉토리
│   │   └── userStore.ts     # 사용자 상태 관리
│   ├── constants/           # 상수 관련 디렉토리
│   │   └── fortune.ts       # 운세 관련 상수
│   ├── types/               # 타입 정의 관련 디렉토리
│   │   ├── cut.d.ts
│   │   ├── fortune_table.d.ts
│   │   └── public.d.ts
│   ├── utils/               # 유틸리티 함수 관련 디렉토리
│   │   └── fortune.ts       # 운세 관련 유틸리티 함수
│   └── styles/              # 스타일 관련 디렉토리
│       ├── fonts.ts         # 폰트 설정
│       └── globals.css      # 전역 스타일
└── public/                  # 정적 파일(이미지, 아이콘 등) 디렉토리
```

---

### 3. 컴포넌트 계층도

> 컴포넌트 계층의 경우 실제 웹툰의 구조를 생각하면서도 과제의 핵심 기능들과 어우러질 수 있게 구성하였습니다. 예를들어 추후 애니메이션이 들어가거나 다양한 데이터를 기반으로 재사용 가능할 것으로 판단되는 '말풍선'이나 '효과음'같은 요소는 별도의 컴포넌트로 분리하였습니다.

```bash
Home (page.tsx)
└── Webtoon (Webtoon.tsx)
    ├── Cut (Cut.tsx)
    │   ├── SpeechBubble (SpeechBubble.tsx) (선택적)
    │   ├── EffectText (EffectText.tsx) (선택적)
    │   └── EpisodeHeader (EpisodeHeader.tsx) (선택적)
    └── FortuneTable (FortuneTable.tsx)
        ├── UserInfo (UserInfo.tsx)
        └── Table (Table.tsx)
            ├── LabelCell (LabelCell.tsx)
            ├── SpecialCell (SpecialCell.tsx)
            └── DefaultCell (DefaultCell.tsx)
```

#### 웹툰기능 핵심 컴포넌트

> 웹툰관련 기능중 핵심 컴포넌트는 `Cut`컴포넌트라 할 수 있습니다. 아래와 같이 사전에 작성해둔 `cut.ts`파일의 정보를 바탕으로 렌더링만 수행하는 로직으로 구성하였습니다.

`Cut.tsx`

```javascript
import Image from "next/image";
import type { CutData } from "@/types/cut";
import SpeechBubble from "./SpeechBubble";
import EffectText from "./EffectText";

export default function Cut({
  imageData,
  speechBubbleData,
  effectTextData,
}: CutData) {
  return (
    <div className="relative...">
      <Image
        src={imageData.src}
        alt="cut"
        width={imageData.width}
        height={imageData.height}
      />
      {speechBubbleData && <SpeechBubble data={speechBubbleData} />}
      {effectTextData && <EffectText data={effectTextData} />}
    </div>
  );
}
```

`cut.ts`

```javascript
import type { CutData } from "@/types/cut";

export const cutData: CutData[] = [
  {
    imageData: {
      src: "/webtoon/episode/cut_1.svg",
      width: 375,
      height: 752,
      isPriority: true,
    },
    speechBubbleData: {
      src: "/webtoon/episode/speech_bubble_cut_1_1.svg",
      width: 215,
      height: 139,
      text: "이제 본격적으로\n00님의 사주팔자를\n분석해볼 차례네요",
      fontSize: 16,
      x: 24,
      y: 0,
      marginTop: 20,
    },
    headerData: {
      src: "/webtoon/episode/divider.svg",
      title: "제 1장",
      subtitle: "나의 사주팔자",
      width: 157,
      height: 20,
      x: 109,
      y: 584,
    },
  },
  ...
];

```

---

### 4. 중앙 상태 관리

> 개발 초반에는 과제의 규모상 전역상태가 크게 필요할까 라는 생각이 들었습니다. 하지만 후반부로 가면서 '웹툰'컴포넌트와 '사주풀이 표'컴포넌트 양쪽에서 사용자 데이터를 필요로 하게 되었고 전역 상태 관리를 위해 MobX를 사용하게 되었습니다. 그결과 복잡하게 프롭을 내리거나 추가로직을 작성해야 하는 부분에서 편의성을 크게 확보할 수 있었습니다.

```javascript
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import userStore from "@/stores/userStore";



function Webtoon() {
  useEffect(() => {
    async function fetchData() {
      ...
      userStore.setError(true);
      ...
    }

    fetchData();
  }, []);

  return (
    ...
  )
}

export default observer(Webtoon);
```

### 5. 디자인 에셋 활용방식

> 피그마의 디자인 에셋은 다음과 같이 분리하여 사용하였습니다. 주로 착안한 점은 실제 웹툰에서 반응형 요소가 들어가면 어떨까 라고 생각하며 진행 하였습니다. 예를들어 말풍선이나 효과음 텍스트와 같은 요소들을 별도로 분리한다면 좀더 생동감있는 서비스를 제공할 수 있기 때문입니다.
>
> (이미지 삽입 핋요 Github에서 직접 넣기)

## 프로젝트 회고

> 이번 과제는 단순한 UI 구현이 아니라 실제 서비스를 가정한 구조적 구현이 요구되었습니다. 웹툰과 사주풀이라는 정적 콘텐츠 형태 속에서도 컴포넌트 분리, 데이터 추상화, 반응형 대응, 정적 자원 최적화 등 실무에서 자주 마주하는 고민들을 풀어보는 좋은 기회였습니다.

### 1. 사주라는 도메인에 대한 낯섦, 모델링의 힘

> 사주에 대한 배경 지식이 전무했기 때문에, 처음에는 단순히 데이터를 채우는 것조차 막막했습니다.
>
> 하지만 GPT와 함께 항목의 의미를 하나씩 탐색하고, 사주풀이표의 구조를 논리적으로 나누고 추상화하면서 점점 “개발자의 눈”으로 해석해나갈 수 있었습니다.
>
> 이 경험을 통해, 모르는 도메인을 잘게 쪼개고 구조화하여 개발로 풀어가는 능력을 체감할 수 있었습니다.

### 2. 중앙 상태 관리에 대한 고민

> 처음에는 중앙 상태 관리의 필요성을 크게 느끼지 못했지만,컴포넌트 간 사용자 데이터를 공유해야 하는 상황이 생기면서 자연스럽게 MobX를 도입하게 되었습니다.
>
> 이 과정에서 단순히 도구를 도입하는 것이 아니라, 왜 필요한지, 어디에 적용할지, 복잡도를 얼마나 줄이는지에 대해 고민할 수 있었던 점이 인상 깊었습니다.
> MobX의 observer, makeAutoObservable 등의 기능을 통해 다시한번 옵저버 패턴의 구조에 대하여 생각해보며 상태관리의 간편함을 느낄 수 있었습니다.

### 3. 시각 중심 사고를 코드로 번역하는 과정

> 순수미술 전공자로서 시각적 구조와 흐름을 먼저 상상한 뒤, 이를 코드로 구현하는 방식이 이번 프로젝트에 잘 녹아들었다고 생각합니다.
>
> 컷 단위의 레이아웃, 말풍선의 위치 제어, 배경 이미지와의 상호작용, 오행 색상의 시각화 등은 모두 디자인적 감각과 개발이 만나는 지점이었습니다.

## 프로젝트 실행 방법

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```
