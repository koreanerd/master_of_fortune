import { SpeechBubbleData } from "@/types/cut";

export default function SpeechBubble({ data }: { data: SpeechBubbleData }) {
  return (
    <div
      className="absolute z-20 flex items-center justify-center text-center whitespace-pre-line text-[#424242]"
      style={{
        left: `${data.x}px`,
        bottom: `${data.y}px`,
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
        {data.text}
      </p>
    </div>
  );
}
