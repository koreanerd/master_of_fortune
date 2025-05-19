import { krToHanja } from "@/utils/fortune";

export default function LabelCell({ label }: { label: string }) {
  return (
    <td className="border-r-[1.5px] border-black">
      <div className="flex flex-col items-center justify-center">
        <div className="text-[12px]">{krToHanja(label)}</div>
        <div className="text-[8px]">{`(${label.replace(" (지지)", "")})`}</div>
      </div>
    </td>
  );
}
