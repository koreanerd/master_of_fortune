import localFont from "next/font/local";

export const gyeonggiBatang = localFont({
  src: [
    {
      path: "../../public/fonts/Batang_Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Batang_Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const gapyeongHanseokbong = localFont({
  src: [
    {
      path: "../../public/fonts/GapyeongHanseokbongR.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/GapyeongHanseokbongB.otf",
      weight: "700",
    },
  ],
});
