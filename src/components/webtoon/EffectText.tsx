import Image from "next/image";
import { EffectTextData } from "@/types/cut";

export default function EffectText({ data }: { data: EffectTextData }) {
  return (
    <div
      className="absolute z-20"
      style={{
        left: `${data.x}px`,
        bottom: `${data.y}px`,
      }}
    >
      <Image
        src={data.src}
        alt="effect-text"
        width={data.width}
        height={data.height}
        style={{
          width: "auto",
          height: "auto",
        }}
      />
    </div>
  );
}
