export const formatTime = (time: number) => String(time).padStart(2, "0");
export interface arabicDayType {
  arabicDay:
    | "الأحد"
    | "الاثنين"
    | "الثلاثاء"
    | "الأربعاء"
    | "الخميس"
    | "الجمعة"
    | "السبت";
}
export function translateDayToEnglish(arabicDay: arabicDayType): string {
  const daysTranslation: { [key: string]: string } = {
    الأحد: "Sunday",
    الاثنين: "Monday",
    الثلاثاء: "Tuesday",
    الأربعاء: "Wednesday",
    الخميس: "Thursday",
    الجمعة: "Friday",
    السبت: "Saturday",
  };

  return daysTranslation[arabicDay] || "Unknown day";
}
export function calculateEndTime(startTime: string, duration: number) {
  const [hours, minutes] = startTime.split(":").map(Number);

  const totalStartMinutes = hours * 60 + minutes;

  const totalEndMinutes = totalStartMinutes + duration;

  const endHours = Math.floor(totalEndMinutes / 60) % 24; // Wrap around using % 24
  const endMinutes = totalEndMinutes % 60;

  const endTime = `${String(endHours).padStart(2, "0")}:${String(
    endMinutes
  ).padStart(2, "0")}`;
  return endTime;
}
