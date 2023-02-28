export type constantsType = {
  id: number;
  icon: string;
  name: string;
  url: string;
  type: string;
  permission: boolean;
  angleDown?: boolean;
  child?: {
    id: number;
    name: string;
  }[];
};
