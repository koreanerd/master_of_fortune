"use client";

import { useEffect } from "react";
import userStore from "@/stores/userStore";
import { cutData } from "@/data/cut";
import Cut from "./Cut";
import FortuneTableLayout from "../fortune_table/FortuneTableLayout";
import { observer } from "mobx-react-lite";

function Webtoon() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/mock");
      const userFortuneData = await res.json();

      userStore.setUserFortuneData(userFortuneData);
    }

    fetchData();
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center w-full max-w-md mx-auto px-4 border-1 border-red-500`}
    >
      {cutData.map((cut, idx) => (
        <Cut key={idx} {...cut} />
      ))}

      {userStore.isLoading ? (
        <div className="absolute bottom-[350px] text-sm text-[#424242]">
          사주 정보를 불러오는 중...
        </div>
      ) : (
        <FortuneTableLayout />
      )}
    </div>
  );
}

export default observer(Webtoon);
