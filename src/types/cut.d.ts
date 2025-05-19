import { ImageData } from "./public";

export type SpeechBubbleData = {
  src: string;
  width: number;
  height: number;
  text: string;
  fontSize: number;
  x: number;
  y: number;
  marginTop?: number;
  marginBottom?: number;
};

export type EffectTextData = {
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
};

export type CutData = {
  imageData: ImageData;
  speechBubbleData?: SpeechBubbleData;
  effectTextData?: EffectTextData;
};
