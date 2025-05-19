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

export type HeaderData = {
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
  title: string;
  subtitle: string;
};

export type CutData = {
  imageData: ImageData;
  speechBubbleData?: SpeechBubbleData;
  effectTextData?: EffectTextData;
  headerData?: HeaderData;
};
