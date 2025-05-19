import { krToHanja } from "@/utils/fortune";

export default function DefaultCell({
  value,
  isLast,
}: {
  value: string;
  isLast: boolean;
}) {
  return (
    <td
      className={`${
        isLast
          ? "border-r-[1.5px] border-black"
          : "border-r-[0.5px] border-[#8a8a8a]"
      } bg-[#fdfdfb]`}
    >
      <div className="flex flex-col items-center justify-center py-[5px]">
        {Array.isArray(value) ? (
          value.map((item) => (
            <div key={item} className="flex flex-col items-center">
              <div className="text-[15px] leading-tight">{krToHanja(item)}</div>
              <div className="text-[8px] leading-tight">{`(${item})`}</div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-[15px] leading-tight">{krToHanja(value)}</div>
            <div className="text-[8px] leading-tight">{`(${value})`}</div>
          </div>
        )}
      </div>
    </td>
  );
}
