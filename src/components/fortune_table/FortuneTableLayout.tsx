import { UserFortuneData } from "@/types/fortune_table";
import UserInfo from "./UserInfo";
import FortuneTable from "./FortuneTable";

export default function FortuneTableLayout({
  data,
}: {
  data: UserFortuneData;
}) {
  return (
    <div className="absolute bottom-[80px] w-[350px] h-[620px] bg-[url(/webtoon/episode/fortune_table_bg.svg)] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col items-center justify-center gap-[25px]">
        <UserInfo userName={data.name} birthInfo={data.birthInfo} />
        <FortuneTable rowData={data.rows} />
      </div>
    </div>
  );
}
