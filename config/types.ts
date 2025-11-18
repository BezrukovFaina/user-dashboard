// types.ts

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export enum SortField {
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
  NAME = 'name',
}

export type SortOptions = {
  field: SortField;
  direction: SortDirection;
};

export type FilterOptions = {
  name?: string;
};

export type DashboardItem = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Dashboard = {
  id: string;
  name: string;
  items: DashboardItem[];
};