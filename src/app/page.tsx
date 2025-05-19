import { cutData } from "@/data/cut";
import WebtoonLayout from "@/components/webtoon/WebtoonLayout";
import Cut from "@/components/webtoon/Cut";

export default function Home() {
  return (
    <WebtoonLayout>
      {cutData.map((cut, idx) => (
        <Cut key={idx} {...cut} />
      ))}
    </WebtoonLayout>
  );
}
