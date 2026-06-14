// 此檔案模擬未來由 Google 表單/Sheet 同步而來的活動資料結構（見 PRD 8.2）
// 正式上線後可改為 fetch 已發布為 CSV 的 Google Sheet 並解析為相同結構

export type ActivityCategory = "elder" | "community" | "festival" | "education";

export interface Activity {
  id: string;
  date: string;
  time?: string;
  title_zh: string;
  title_en: string;
  category: ActivityCategory;
  summary_zh: string;
  summary_en: string;
  content_zh: string;
  content_en: string;
  cover_image: string;
  gallery_images: string[];
}

export const activities: Activity[] = [
  {
    id: "A001",
    date: "2026-06-17",
    time: "09:00",
    title_zh: "端香長青，端午送暖",
    title_en: "Fragrant Dumplings & Longevity: Dragon Boat Festival Warmth",
    category: "festival",
    summary_zh: "邀請社區長者與青年共同包粽子，傳承傳統文化。",
    summary_en:
      "Community elders and youth gather to make rice dumplings together, passing on tradition.",
    content_zh:
      "（佔位內容）活動當天邀請多位社區長輩示範傳統包粽手法，並由青年志工協助準備食材與場地，活動結束後共同享用成果，凝聚社區情感。",
    content_en:
      "(Placeholder) Local elders demonstrated traditional dumpling-wrapping techniques while youth volunteers helped prepare ingredients and the venue. Everyone enjoyed the results together afterward.",
    cover_image: "https://picsum.photos/seed/cunren-a001/800/600",
    gallery_images: [
      "https://picsum.photos/seed/cunren-a001-2/800/600",
      "https://picsum.photos/seed/cunren-a001-3/800/600",
    ],
  },
  {
    id: "A002",
    date: "2026-04-18",
    title_zh: "長者健康講座：居家防跌倒",
    title_en: "Elder Health Talk: Fall Prevention at Home",
    category: "elder",
    summary_zh: "邀請專業講師分享居家防跌倒的實用技巧。",
    summary_en:
      "A professional speaker shares practical tips for preventing falls at home.",
    content_zh:
      "（佔位內容）課程內容包含居家環境檢視、簡易肌力訓練動作示範，並提供防滑用品資訊，協助長輩降低跌倒風險。",
    content_en:
      "(Placeholder) The session covered home environment checks, simple strength training demos, and information on anti-slip products to help reduce fall risk for elders.",
    cover_image: "https://picsum.photos/seed/cunren-a002/800/600",
    gallery_images: ["https://picsum.photos/seed/cunren-a002-2/800/600"],
  },
  {
    id: "A003",
    date: "2026-03-22",
    title_zh: "社區環境清掃日",
    title_en: "Community Clean-up Day",
    category: "community",
    summary_zh: "全體里民共同參與,清理社區周邊環境與綠地。",
    summary_en:
      "Residents come together to clean up shared spaces and green areas in the neighborhood.",
    content_zh:
      "（佔位內容）活動分組進行社區道路、公園與水溝周邊的清掃工作，並進行垃圾分類宣導，提升社區環境品質。",
    content_en:
      "(Placeholder) Volunteers were grouped to clean roads, parks and drainage areas, alongside outreach on waste sorting to improve the community environment.",
    cover_image: "https://picsum.photos/seed/cunren-a003/800/600",
    gallery_images: [
      "https://picsum.photos/seed/cunren-a003-2/800/600",
      "https://picsum.photos/seed/cunren-a003-3/800/600",
    ],
  },
  {
    id: "A004",
    date: "2026-06-30",
    time: "14:00",
    title_zh: "毒品宣導課程",
    title_en: "Drug Prevention Awareness Course",
    category: "education",
    summary_zh: "邀請專業講師到場宣導毒品防制知識,提升居民識毒、拒毒意識。",
    summary_en:
      "A professional speaker presents drug prevention education to raise residents' awareness of drug risks and refusal skills.",
    content_zh:
      "（佔位內容）課程內容包含常見毒品辨識、危害說明與防制資源介紹,協助居民與青少年提升警覺、遠離毒品。",
    content_en:
      "(Placeholder) The course covers identification of common drugs, their dangers, and prevention resources, helping residents and youth stay alert and drug-free.",
    cover_image: "https://picsum.photos/seed/cunren-a004/800/600",
    gallery_images: ["https://picsum.photos/seed/cunren-a004-2/800/600"],
  },
  {
    id: "A005",
    date: "2026-01-05",
    title_zh: "歲末關懷物資發放",
    title_en: "Year-end Care Package Distribution",
    category: "elder",
    summary_zh: "致贈年節物資予社區獨居及弱勢長者。",
    summary_en:
      "Distributing year-end care packages to elders living alone or in need within the community.",
    content_zh:
      "（佔位內容）志工親自將物資送到獨居長者家中,並關心其生活近況,傳遞社區溫暖。",
    content_en:
      "(Placeholder) Volunteers personally delivered care packages to elders living alone and checked in on their well-being.",
    cover_image: "https://picsum.photos/seed/cunren-a005/800/600",
    gallery_images: ["https://picsum.photos/seed/cunren-a005-2/800/600"],
  },
  {
    id: "A006",
    date: "2025-12-20",
    title_zh: "聖誕節社區同樂會",
    title_en: "Community Christmas Party",
    category: "festival",
    summary_zh: "全齡共融的社區同樂活動,共度溫馨佳節。",
    summary_en:
      "An all-ages community gathering to celebrate the holiday season together.",
    content_zh:
      "（佔位內容）活動安排親子遊戲、長者表演與摸彩活動,讓社區居民齊聚一堂歡度佳節。",
    content_en:
      "(Placeholder) The event featured family games, performances by elders, and a lucky draw, bringing residents together for the holidays.",
    cover_image: "https://picsum.photos/seed/cunren-a006/800/600",
    gallery_images: [
      "https://picsum.photos/seed/cunren-a006-2/800/600",
      "https://picsum.photos/seed/cunren-a006-3/800/600",
    ],
  },
];
