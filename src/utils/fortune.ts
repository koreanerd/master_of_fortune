import { HANJA_MAP, ELEMENTAL_COLOR, ELEMENTAL_MAP } from "@/constants/fortune";

export function krToHanja(str: string) {
  const normalized = str.replace(" (지지)", "");

  return HANJA_MAP[normalized] || str;
}

export function elementalColor(value: string) {
  const element = ELEMENTAL_MAP[value];

  return ELEMENTAL_COLOR[element];
}
