"use client";

import { useLanguage } from "@/lib/language-context";
import { calendarEvents } from "@/lib/calendar-events";

export default function Calendar() {
  const { locale, t } = useLanguage();

  // 以第一筆活動所在的年月作為預設顯示月份，之後新增活動時可自行調整
  const [year, month] = calendarEvents[0].date.split("-").map(Number); // month: 1-12

  const firstWeekday = new Date(year, month - 1, 1).getDay(); // 0 = 週日
  const daysInMonth = new Date(year, month, 0).getDate();

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const eventsByDay = new Map<number, typeof calendarEvents>();
  for (const event of calendarEvents) {
    const [eYear, eMonth, eDay] = event.date.split("-").map(Number);
    if (eYear === year && eMonth === month) {
      const list = eventsByDay.get(eDay) ?? [];
      list.push(event);
      eventsByDay.set(eDay, list);
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h2 className="text-2xl font-bold text-ink mb-4">{t.home.calendarTitle}</h2>
      <p className="text-lg font-semibold text-primary-dark mb-3">
        {year}{locale === "zh" ? "年" : "-"}
        {locale === "zh" ? `${month}月` : String(month).padStart(2, "0")}
      </p>

      <div className="rounded-2xl bg-white shadow p-3 sm:p-4">
        <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center">
          {t.home.weekdays.map((w) => (
            <div key={w} className="text-sm sm:text-base font-bold text-ink/60 py-1">
              {w}
            </div>
          ))}
          {cells.map((day, i) => {
            const dayEvents = day ? eventsByDay.get(day) : undefined;
            return (
              <div
                key={i}
                className={`min-h-16 sm:min-h-20 rounded-lg p-1 flex flex-col items-center text-center ${
                  dayEvents
                    ? "bg-primary/10 border-2 border-primary"
                    : day
                      ? "bg-cream"
                      : ""
                }`}
              >
                {day && (
                  <>
                    <span className="text-sm sm:text-base font-semibold text-ink">
                      {day}
                    </span>
                    {dayEvents?.map((event, idx) => (
                      <span
                        key={idx}
                        className="text-xs sm:text-sm leading-tight font-bold text-primary-dark mt-1"
                      >
                        {locale === "zh" ? event.title_zh : event.title_en}
                      </span>
                    ))}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
