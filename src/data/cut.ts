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
      leftX: 24,
      bottomY: 0,
      marginTop: 20,
    },
    headerData: {
      src: "/webtoon/episode/divider.svg",
      title: "제 1장",
      subtitle: "나의 사주팔자",
      width: 157,
      height: 20,
    },
  },
  {
    imageData: {
      src: "/webtoon/episode/cut_2.svg",
      width: 375,
      height: 345,
    },
    effectTextData: {
      src: "/webtoon/episode/effect_text_cut_2_1.svg",
      width: 70,
      height: 50,
      rightX: 110,
      topY: 50,
    },
  },
  {
    imageData: {
      src: "/webtoon/episode/cut_3.svg",
      width: 375,
      height: 984,
    },
    speechBubbleData: {
      src: "/webtoon/episode/speech_bubble_cut_3_1.svg",
      width: 240,
      height: 140,
      text: "제가 00님의 사주를\n보기 쉽게 표로 정리했어요",
      fontSize: 16,
      leftX: 24,
      topY: -50,
      marginBottom: 20,
    },
  },
];
