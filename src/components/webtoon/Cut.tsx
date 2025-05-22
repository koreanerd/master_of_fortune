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
    <div className="relative w-full h-full bg-[#f2f3ef] border-1 border-blue-400">
      {headerData && (
        <div className="absolute mt-[80px] left-1/2 transform -translate-x-1/2">
          <EpisodeHeader data={headerData} />
        </div>
      )}

      <Image
        src={imageData.src}
        alt="cut"
        width={imageData.width}
        height={imageData.height}
        priority={imageData.isPriority}
        className="w-full h-auto"
      />
      {speechBubbleData && <SpeechBubble data={speechBubbleData} />}
      {effectTextData && <EffectText data={effectTextData} />}
    </div>
  );
}
