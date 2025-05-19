import { cutData } from "@/data/cut";
import WebtoonLayout from "@/components/webtoon/WebtoonLayout";
import FortuneTableLayout from "@/components/fortune_table/FortuneTableLayout";
import Cut from "@/components/webtoon/Cut";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/mock");
  const userFortuneData = await res.json();

  return (
    <WebtoonLayout>
      {cutData.map((cut, idx) => (
        <Cut key={idx} {...cut} />
      ))}

      <FortuneTableLayout data={userFortuneData} />
    </WebtoonLayout>
  );
}
