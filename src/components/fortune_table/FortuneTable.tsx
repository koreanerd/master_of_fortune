import UserInfo from "./UserInfo";
import userStore from "@/stores/userStore";
import Table from "./Table";
import Image from "next/image";

export default function FortuneTable() {
  const userFortuneData = userStore.userFortuneData;

  return (
    <div className="absolute bottom-[80px] w-full h-fit p-[10px]">
      <div className="relative">
        <Image
          src={"/webtoon/episode/fortune_table_bg.svg"}
          alt={""}
          width={351}
          height={612}
          className="w-full"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[25px]">
          {userFortuneData && (
            <>
              <UserInfo
                userName={userFortuneData?.name}
                birthInfo={userFortuneData?.birthInfo}
              />

              <Table rowData={userFortuneData?.rows} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
