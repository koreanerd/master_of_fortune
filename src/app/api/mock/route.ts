const mockData = {
  name: "김봉곤",
  birthInfo: {
    year: 1980,
    month: 12,
    day: 25,
    time: "04:00",
  },
  rows: [
    { label: "십성", values: ["겁재", "비견", "편재", "정재"] },
    { label: "천간", values: ["을", "갑", "병", "정"] },
    { label: "지지", values: ["묘", "인", "오", "사"] },
    { label: "십성 (지지)", values: ["편재", "정재", "식신", "상관"] },
    { label: "십이운성", values: ["장생", "목욕", "관대", "건록"] },
    { label: "십이신살", values: ["천덕", "월살", "장성", "백호"] },
    {
      label: "귀인",
      values: ["천을", "지살", "문창", ["지살", "문창", "천복"]],
    },
  ],
};

export async function GET() {
  return Response.json(mockData);
}
