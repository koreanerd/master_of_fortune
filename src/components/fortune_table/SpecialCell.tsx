import { elementalColor, krToHanja } from "@/utils/fortune";

export default function SpecialCell({
  value,
  isLast,
}: {
  value: string;
  isLast: boolean;
}) {
  return (
    <td
      style={{
        borderRight: isLast ? "1.5px solid #000" : "1px solid #8a8a8a",
        backgroundColor: "#fdfdfb",
      }}
    >
      <div className="py-[5px] flex items-center justify-center">
        <div
          className="flex flex-col items-center justify-center w-[55px] h-[55px] bg-amber-500 rounded-xl"
          style={{ backgroundColor: elementalColor(value) }}
        >
          <div className="text-[8px] leading-tight text-white">{value}</div>
          <div className="text-[25px] leading-tight text-white">
            {krToHanja(value)}
          </div>
        </div>
      </div>
    </td>
  );
}
