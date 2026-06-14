export type Locale = "zh" | "en";

export const locales: Locale[] = ["zh", "en"];

export interface Dictionary {
  siteName: string;
  nav: {
    home: string;
    about: string;
    activities: string;
    vision: string;
    join: string;
    contact: string;
  };
  common: {
    lineButton: string;
    readMore: string;
    close: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    quickLinks: {
      activities: string;
      about: string;
      join: string;
      line: string;
    };
    featuredTitle: string;
    footerSummaryTitle: string;
    calendarTitle: string;
    weekdays: string[];
  };
  about: {
    title: string;
    introTitle: string;
    introParagraphs: string[];
    orgTitle: string;
    orgPlaceholder: string;
    galleryTitle: string;
    galleryPlaceholder: string;
  };
  activities: {
    title: string;
    filterAll: string;
    categories: {
      elder: string;
      community: string;
      festival: string;
      education: string;
    };
    dataNote: string;
  };
  vision: {
    title: string;
    introParagraph: string;
    items: { title: string; description: string }[];
    feedbackTitle: string;
    feedbackDescription: string;
    feedbackButton: string;
    feedbackUrl: string;
  };
  join: {
    title: string;
    introTitle: string;
    introParagraphs: string[];
    formTitle: string;
    formNote: string;
    form: {
      name: string;
      contact: string;
      message: string;
      submit: string;
    };
  };
  contact: {
    title: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    facebookLabel: string;
    facebookUrl: string;
    mapNote: string;
  };
  footer: {
    copyright: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  zh: {
    siteName: "存仁社區發展協會",
    nav: {
      home: "首頁",
      about: "關於協會",
      activities: "活動列表",
      vision: "未來願景",
      join: "加入我們",
      contact: "聯絡我們",
    },
    common: {
      lineButton: "一鍵加 LINE",
      readMore: "查看更多",
      close: "關閉",
    },
    home: {
      heroTitle: "存仁社區發展協會",
      heroSubtitle: "在地相伴、世代同行——一起守護存仁的每一天",
      quickLinks: {
        activities: "看看最新活動",
        about: "認識我們的協會",
        join: "加入我們",
        line: "一鍵加 LINE",
      },
      featuredTitle: "近期活動",
      footerSummaryTitle: "聯絡資訊",
      calendarTitle: "活動行事曆",
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    },
    about: {
      title: "關於協會",
      introTitle: "協會簡介",
      introParagraphs: [
        "存仁社區發展協會位於宜蘭縣蘇澳鎮，多年來致力於促進社區居民互動、關懷在地長者，並推動社區營造與文化傳承等相關工作。",
        "我們秉持「在地相伴、世代同行」的精神,期望透過各項活動與服務,讓社區成為一個溫暖、互助、充滿活力的大家庭。",
        "（此處文字為初版佔位內容,請協會提供正式簡介、成立背景與宗旨說明後替換。）",
      ],
      orgTitle: "組織與幹部介紹",
      orgPlaceholder:
        "（佔位內容）此處可放置理事長、總幹事及主要幹部的介紹文字與照片，協會提供名單與照片後即可補上。",
      galleryTitle: "協會歷史照片牆",
      galleryPlaceholder: "（佔位照片，待協會提供歷史活動照片後更換）",
    },
    activities: {
      title: "活動列表",
      filterAll: "全部",
      categories: {
        elder: "長者關懷",
        community: "社區營造",
        festival: "節慶活動",
        education: "教育推廣",
      },
      dataNote:
        "（此區內容未來將由管理者透過 Google 表單填寫，並自動同步至 Google Sheet 顯示，目前為示範用佔位資料。）",
    },
    vision: {
      title: "未來願景",
      introParagraph:
        "存仁社區發展協會期望在未來幾年持續深耕在地，逐步推動以下中長期發展計劃：",
      items: [
        {
          title: "環境改善",
          description:
            "（佔位內容）改善社區公共空間環境,營造更舒適、安全的生活環境。",
        },
        {
          title: "長者照護",
          description:
            "（佔位內容）擴大長者關懷服務範圍,提供更完善的日常照顧與陪伴活動。",
        },
        {
          title: "青年返鄉",
          description:
            "（佔位內容）鼓勵青年返鄉參與社區事務,注入新活力與創意。",
        },
      ],
      feedbackTitle: "有興趣參與或合作？",
      feedbackDescription: "歡迎填寫以下表單，提供您的意見或合作提案。",
      feedbackButton: "填寫意見表單",
      feedbackUrl: "https://forms.gle/PLACEHOLDER-VISION-FORM",
    },
    join: {
      title: "加入我們",
      introTitle: "如何加入存仁社區發展協會？",
      introParagraphs: [
        "凡認同本協會宗旨,願意參與社區服務與活動的在地居民或關心存仁社區發展的朋友,皆歡迎加入成為會員。",
        "成為會員後,您將可以參與協會舉辦的各項活動、共同參與社區事務討論,並享有相關權益（依協會章程規定）。",
        "（此處文字為佔位內容,請協會確認正式的加入資格與權益說明後替換。）",
      ],
      formTitle: "簡易報名表單",
      formNote:
        "（此表單為示範用,實際送出功能將於後續串接 Google 表單或 Email 通知。）",
      form: {
        name: "姓名",
        contact: "聯絡方式（電話或 Email）",
        message: "留言",
        submit: "送出報名",
      },
    },
    contact: {
      title: "聯絡我們",
      addressLabel: "地址",
      address: "宜蘭縣蘇澳鎮（佔位地址，請協會提供完整地址）",
      phoneLabel: "電話",
      phone: "(03) 000-0000（佔位電話）",
      emailLabel: "Email",
      email: "placeholder@example.com（佔位 Email）",
      facebookLabel: "Facebook 粉絲頁",
      facebookUrl: "https://www.facebook.com/PLACEHOLDER",
      mapNote: "（此處將嵌入 Google Map，待協會提供正式地址後設定）",
    },
    footer: {
      copyright: "存仁社區發展協會 版權所有",
    },
  },
  en: {
    siteName: "Cunren Community Development Association",
    nav: {
      home: "Home",
      about: "About",
      activities: "Activities",
      vision: "Vision",
      join: "Join Us",
      contact: "Contact",
    },
    common: {
      lineButton: "Add us on LINE",
      readMore: "Read more",
      close: "Close",
    },
    home: {
      heroTitle: "Cunren Community Development Association",
      heroSubtitle:
        "Together across generations — caring for Cunren, every day",
      quickLinks: {
        activities: "See latest activities",
        about: "Learn about us",
        join: "Join us",
        line: "Add us on LINE",
      },
      featuredTitle: "Recent Activities",
      footerSummaryTitle: "Contact Info",
      calendarTitle: "Activity Calendar",
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    about: {
      title: "About Us",
      introTitle: "Introduction",
      introParagraphs: [
        "The Cunren Community Development Association, located in Su'ao Township, Yilan County, has long been dedicated to fostering neighborhood connections, caring for local elders, and promoting community building and cultural heritage.",
        "Guided by the spirit of 'together across generations', we hope to make our community a warm, supportive and vibrant family through various activities and services.",
        "(Placeholder text — please replace with the official introduction, founding background, and mission once provided by the association.)",
      ],
      orgTitle: "Our Team",
      orgPlaceholder:
        "(Placeholder) Introductions and photos of the chairperson, secretary-general and key staff will go here once provided.",
      galleryTitle: "Photo Wall",
      galleryPlaceholder:
        "(Placeholder photos — to be replaced with historical activity photos.)",
    },
    activities: {
      title: "Activities",
      filterAll: "All",
      categories: {
        elder: "Elder Care",
        community: "Community Building",
        festival: "Festival Events",
        education: "Education & Outreach",
      },
      dataNote:
        "(This section will be populated by the association via a Google Form synced to a Google Sheet. Sample placeholder data shown for now.)",
    },
    vision: {
      title: "Future Vision",
      introParagraph:
        "Cunren Community Development Association aims to continue investing in the local community over the coming years, with the following mid-to-long-term plans:",
      items: [
        {
          title: "Environmental Improvement",
          description:
            "(Placeholder) Improve community public spaces for a more comfortable and safe living environment.",
        },
        {
          title: "Elder Care",
          description:
            "(Placeholder) Expand elder care services with more comprehensive daily support and companionship activities.",
        },
        {
          title: "Youth Return",
          description:
            "(Placeholder) Encourage young people to return and participate in community affairs, bringing new energy and ideas.",
        },
      ],
      feedbackTitle: "Interested in getting involved?",
      feedbackDescription:
        "Please fill out the form below to share your feedback or proposals.",
      feedbackButton: "Open feedback form",
      feedbackUrl: "https://forms.gle/PLACEHOLDER-VISION-FORM",
    },
    join: {
      title: "Join Us",
      introTitle: "How to join the association?",
      introParagraphs: [
        "Anyone who supports our mission and is willing to participate in community service and activities — whether a local resident or a friend who cares about Cunren — is welcome to become a member.",
        "As a member, you can take part in activities organized by the association, join discussions on community affairs, and enjoy related benefits (per the association's bylaws).",
        "(Placeholder text — please replace once the official membership requirements and benefits are confirmed.)",
      ],
      formTitle: "Quick Sign-up Form",
      formNote:
        "(Demo form — submission will be connected to a Google Form or email notification later.)",
      form: {
        name: "Name",
        contact: "Contact (phone or email)",
        message: "Message",
        submit: "Submit",
      },
    },
    contact: {
      title: "Contact Us",
      addressLabel: "Address",
      address: "Su'ao Township, Yilan County (placeholder — full address pending)",
      phoneLabel: "Phone",
      phone: "(03) 000-0000 (placeholder)",
      emailLabel: "Email",
      email: "placeholder@example.com (placeholder)",
      facebookLabel: "Facebook Page",
      facebookUrl: "https://www.facebook.com/PLACEHOLDER",
      mapNote: "(Google Map will be embedded here once the official address is provided.)",
    },
    footer: {
      copyright: "Cunren Community Development Association. All rights reserved.",
    },
  },
};
