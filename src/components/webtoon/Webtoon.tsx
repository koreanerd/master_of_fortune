"use client";

import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import userStore from "@/stores/userStore";
import { cutData } from "@/data/cut";
import Cut from "./Cut";
import FortuneTable from "../fortune_table/FortuneTable";

function Webtoon() {
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/mock");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const userFortuneData = await res.json();

        userStore.setUserFortuneData(userFortuneData);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);

        userStore.setError(true);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full max-w-md mx-auto border-2 border-red-500">
      {cutData.map((cut, idx) => (
        <Cut key={idx} {...cut} />
      ))}

      {userStore.isLoading ? (
        <div className="absolute bottom-[350px] text-sm text-[#424242]">
          사주 정보를 불러오는 중...
        </div>
      ) : userStore.hasError ? (
        <div className="absolute bottom-[350px] text-sm text-red-500">
          사주 정보를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.
        </div>
      ) : (
        <FortuneTable />
      )}
    </div>
  );
}

export default observer(Webtoon);
