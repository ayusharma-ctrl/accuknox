import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ITimelineOptions {
  value: string,
  label: string,
}

export interface ICategory {
  id: number,
  label: string,
}

export interface IWidget {
  id: number,
  label: string,
  selected: boolean,
  parentCategory: number,
}

export const categories: ICategory[] = [
  { id: 1, label: "CSPM Executive Dashboard" },
  { id: 2, label: "CWPP Dashboard" },
  { id: 3, label: "Registry Scan" },
];

export const widgets: IWidget[] = [
  { id: 1, label: "Cloud Accounts", selected: true, parentCategory: 1 },
  { id: 2, label: "Cloud Account Risk Assessment", selected: true, parentCategory: 1 },
  { id: 3, label: "Top 5 Namespace Specific Alerts", selected: true, parentCategory: 2 },
  { id: 4, label: "Workload Alerts", selected: false, parentCategory: 2 },
  { id: 5, label: "Image Risk Assessment", selected: false, parentCategory: 3 },
  { id: 6, label: "Image Security Issue", selected: true, parentCategory: 3 },
];

export const timelineOptions: ITimelineOptions[] = [
  { value: 'two', label: 'Last 2 days' },
  { value: 'week', label: 'Last week' },
  { value: 'month', label: 'Last month' },
];