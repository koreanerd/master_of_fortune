import userStore from "@/stores/userStore";
import { SpeechBubbleData } from "@/types/cut";
import { replaceNamePlaceholder } from "@/utils/fortune";

export default function SpeechBubble({ data }: { data: SpeechBubbleData }) {
  return (
    <div
      className="absolute z-20 flex items-center justify-center text-center whitespace-pre-line text-[#424242]"
      style={{
        left: data.leftX !== undefined ? `${data.leftX}px` : "auto",
        right: data.rightX !== undefined ? `${data.rightX}px` : "auto",
        top: data.topY !== undefined ? `${data.topY}px` : "auto",
        bottom: data.bottomY !== undefined ? `${data.bottomY}px` : "auto",
        width: `${data.width}px`,
        height: `${data.height}px`,
        fontSize: `${data.fontSize}px`,
        backgroundImage: `url(${data.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <p
        style={{
          marginTop: data.marginTop ? `${data.marginTop}px` : 0,
          marginBottom: data.marginBottom ? `${data.marginBottom}px` : 0,
        }}
      >
        {replaceNamePlaceholder(
          data.text,
          userStore.userFortuneData?.name ?? "000"
        )}
      </p>
    </div>
  );
}
