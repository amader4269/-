// 首頁行事曆活動清單。想到新的活動就直接在這裡新增一筆即可。
export interface CalendarEvent {
  date: string; // YYYY-MM-DD
  title_zh: string;
  title_en: string;
}

export const calendarEvents: CalendarEvent[] = [
  { date: "2026-06-17", title_zh: "包肉粽", title_en: "Rice Dumpling Wrapping" },
  { date: "2026-06-30", title_zh: "毒品宣導", title_en: "Drug Prevention Talk" },
];
