const mockData = {
  name: "해방촌",
  birthInfo: {
    year: "1945",
    month: "6",
    day: "25",
    time: "04:10",
  },
  rows: [
    { label: "십성", values: ["겁재", "비견", "편재", "정재", "식신"] },
    { label: "천간", values: ["을", "갑", "병", "정", "무"] },
    { label: "지지", values: ["묘", "인", "오", "사", "신"] },
    { label: "십성 (지지)", values: ["편재", "정재", "식신", "상관", "정관"] },
    { label: "십이운성", values: ["장생", "목욕", "관대", "건록", "제왕"] },
    { label: "십이신살", values: ["천덕", "월살", "장성", "백호", "천을귀인"] },
    { label: "귀인", values: ["천을", "지살", "문창", "천복", "천귀"] },
  ],
};

export async function GET() {
  return Response.json(mockData);
}
