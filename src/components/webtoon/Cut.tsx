import Image from "next/image";
import type { CutData } from "@/types/cut";
import SpeechBubble from "./SpeechBubble";
import EffectText from "./EffectText";
import EpisodeHeader from "./EpisodeHeader";

export default function Cut({
  imageData,
  speechBubbleData,
  effectTextData,
  headerData,
}: CutData) {
  return (
    <div className="relative w-[375px] h-full bg-[#f2f3ef]">
      <Image
        src={imageData.src}
        alt="cut"
        width={imageData.width}
        height={imageData.height}
        priority={imageData.isPriority}
      />
      {speechBubbleData && <SpeechBubble data={speechBubbleData} />}
      {effectTextData && <EffectText data={effectTextData} />}
      {headerData && <EpisodeHeader data={headerData} />}
    </div>
  );
}
