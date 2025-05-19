import UserInfo from "./UserInfo";
import userStore from "@/stores/userStore";
import FortuneTable from "./FortuneTable";

export default function FortuneTableLayout() {
  const userFortuneData = userStore.userFortuneData;

  return (
    <div className="absolute bottom-[80px] w-[350px] h-[620px] bg-[url(/webtoon/episode/fortune_table_bg.svg)] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col items-center justify-center gap-[25px]">
        {userFortuneData && (
          <>
            <UserInfo
              userName={userFortuneData?.name}
              birthInfo={userFortuneData?.birthInfo}
            />

            <FortuneTable rowData={userFortuneData?.rows} />
          </>
        )}
      </div>
    </div>
  );
}
