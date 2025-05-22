import { RowData } from "@/types/fortune_table";
import { TABLE_HEADER } from "@/constants/fortune";
import LabelCell from "./LabelCell";
import SpecialCell from "./SpecialCell";
import DefaultCell from "./DefaultCell";

export default function Table({ rowData }: { rowData: RowData[] }) {
  return (
    <div className="w-full h-full px-[40px] pb-[60px]">
      <table className="w-full h-full">
        <thead>
          <tr className="border-b-[1.5px] border-black">
            <th className="py-[15px] w-[48px] border-r-[1.5px] border-black leading-tight">
              <div className="hidden">구분</div>
            </th>
            {TABLE_HEADER.map((header, idx) => {
              const isLast = TABLE_HEADER.length - 1 === idx;

              return (
                <th
                  className={`py-[15px] w-[65px] border-r ${
                    isLast
                      ? "border-r-[1.5px] border-black"
                      : "border-[#8a8a8a]"
                  } leading-tight text-[20px]`}
                  key={idx}
                >
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, idx) => (
            <tr
              key={idx}
              style={{
                borderTop: row.label === "천간" ? "1.5px solid #000" : "none",
                borderBottom:
                  row.label === "천간"
                    ? "1px solid #8a8a8a"
                    : "1.5px solid #000",
              }}
            >
              <LabelCell label={row.label} />
              {row.values.map((value, idx) => {
                const isLast = row.values.length - 1 === idx;

                return row.label.replace(" (지지)", "") === "지지" ||
                  row.label.replace(" (지지)", "") === "천간" ? (
                  <SpecialCell key={idx} value={value} isLast={isLast} />
                ) : (
                  <DefaultCell key={idx} value={value} isLast={isLast} />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
