import { ImageData } from "./public";

export type SpeechBubbleData = {
  src: string;
  width: number;
  height: number;
  text: string;
  fontSize: number;
  leftX?: number;
  rightX?: number;
  topY?: number;
  bottomY?: number;
  marginTop?: number;
  marginBottom?: number;
};

export type EffectTextData = {
  src: string;
  width: number;
  height: number;
  leftX?: number;
  rightX?: number;
  topY?: number;
  bottomY?: number;
};

export type HeaderData = {
  src: string;
  width: number;
  height: number;
  title: string;
  subtitle: string;
};

export type CutData = {
  imageData: ImageData;
  speechBubbleData?: SpeechBubbleData;
  effectTextData?: EffectTextData;
  headerData?: HeaderData;
};
