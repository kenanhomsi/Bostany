import libphonenumber from "google-libphonenumber";
const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

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

  return daysTranslation[arabicDay.arabicDay] || "Unknown day";
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
export function arabicTimeFormat(oldTime: string) {
  const newText = oldTime.replace("AM", "ص").replace("PM", "م");
  return newText;
}
export function handleNumberValidation(
  phoneNumber: string,
  countryCode: string
) {
  try {
    const number = phoneUtil.parseAndKeepRawInput(phoneNumber, countryCode);
    if (phoneUtil.isValidNumber(number)) {
      return 200;
    } else {
      return 400;
    }
  } catch (error) {
    console.log(error);
  }
}
