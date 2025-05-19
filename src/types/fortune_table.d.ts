export type BirthInfo = {
  year: number;
  month: number;
  day: number;
  time: string;
};

export type RowData = {
  label: string;
  values: string[];
};

export type UserFortuneData = {
  name: string;
  birthInfo: BirthInfo;
  rows: RowData[];
};
