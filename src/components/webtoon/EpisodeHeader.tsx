import Image from "next/image";
import { HeaderData } from "@/types/cut";
import { gyeonggiBatang } from "@/styles/fonts";

export default function EpisodeHeader({ data }: { data: HeaderData }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[12px]">
      <div className={`${gyeonggiBatang.className} text-[20px] text-white`}>
        {data.title}
      </div>
      <Image
        src={data.src}
        alt="divider"
        width={data.width}
        height={data.height}
      />
      <div className={`${gyeonggiBatang.className} text-[20px] text-white`}>
        {data.subtitle}
      </div>
    </div>
  );
}
