import Image from "next/image";
import { EffectTextData } from "@/types/cut";

export default function EffectText({ data }: { data: EffectTextData }) {
  return (
    <div
      className="absolute z-20"
      style={{
        left: data.leftX !== undefined ? `${data.leftX}px` : "auto",
        right: data.rightX !== undefined ? `${data.rightX}px` : "auto",
        top: data.topY !== undefined ? `${data.topY}px` : "auto",
        bottom: data.bottomY !== undefined ? `${data.bottomY}px` : "auto",
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
