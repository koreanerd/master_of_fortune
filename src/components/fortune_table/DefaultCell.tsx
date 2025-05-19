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
      style={{
        borderRight: isLast ? "1.5px solid #000" : "0.5px solid #8a8a8a",
        backgroundColor: "#fdfdfb",
      }}
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
