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
    <div className="relative w-[375px] h-ful bg-[#f2f3ef]">
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
