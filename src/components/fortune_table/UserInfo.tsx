import { BirthInfo } from "@/types/fortune_table";

export default function UserInfo({
  userName,
  birthInfo,
}: {
  userName: string;
  birthInfo: BirthInfo;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-[12px] mt-[40px] leading-tight text-[#424242]">
      <div>{userName}님의 사주</div>
      <div className="font-bold text-[20px]">
        {`${birthInfo?.year}년 ${birthInfo?.month}월 ${birthInfo?.day}일 ${birthInfo?.time}`}
      </div>
    </div>
  );
}
