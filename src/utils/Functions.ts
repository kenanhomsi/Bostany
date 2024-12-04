import { WeeklyScheduleType } from "@/Types";
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
export function convertArabicDayToEnglish(
  arabicDay: string
): keyof WeeklyScheduleType {
  const arabicToEnglishDays: { [key: string]: keyof WeeklyScheduleType } = {
    الأحد: "Sunday",
    الاثنين: "Monday",
    الثلاثاء: "Tuesday",
    الأربعاء: "Wednesday",
    الخميس: "Thursday",
    الجمعة: "Friday",
    السبت: "Saturday",
  };

  return arabicToEnglishDays[arabicDay] || "Invalid day";
}
export function convertTo12HourFormat(time: string, lan: string): string {
  // Split the time into hours and minutes
  const [hoursString, minutes] = time.split(":");
  let hours = parseInt(hoursString, 10);

  // Determine AM or PM suffix
  let suffix;
  if (lan == "ar") {
    suffix = hours >= 12 ? "م" : "ص";
  } else {
    suffix = hours >= 12 ? "PM" : "AM";
  }

  // Convert hours to 12-hour format
  hours = hours % 12 || 12; // Convert 0 to 12 for midnight

  // Format hours and minutes to ensure two digits
  const formattedTime = `${hours
    .toString()
    .padStart(2, "0")}:${minutes} ${suffix}`;

  return formattedTime;
}
export function convertDayToArabic(day: string): string {
  const daysMap: { [key: string]: string } = {
    Monday: "الإثنين",
    Tuesday: "الثلاثاء",
    Wednesday: "الأربعاء",
    Thursday: "الخميس",
    Friday: "الجمعة",
    Saturday: "السبت",
    Sunday: "الأحد",
  };

  return daysMap[day] || "Invalid day";
}
// export function getNextDayDate(dayName: string): string {
//   const daysOfWeek: { [key: string]: number } = {
//     Sunday: 0,
//     Monday: 1,
//     Tuesday: 2,
//     Wednesday: 3,
//     Thursday: 4,
//     Friday: 5,
//     Saturday: 6,
//   };

//   const targetDay = daysOfWeek[dayName];

//   if (targetDay === undefined) {
//     throw new Error("Invalid day name");
//   }

//   const today = new Date();
//   const todayDay = today.getDay();
//   const daysUntilNext = (targetDay + 7 - todayDay) % 7 || 7; // Ensure we get the next occurrence

//   const nextDate = new Date(today);
//   nextDate.setDate(today.getDate() + daysUntilNext);

//   // Format the date to "YYYY-MM-DD"
//   const year = nextDate.getFullYear();
//   const month = String(nextDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
//   const date = String(nextDate.getDate()).padStart(2, "0");

//   return `${year}-${month}-${date}`;
// }
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
export function getNextDayDate(dayName: string): string {
  const daysOfWeek: { [key: string]: number } = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const targetDay = daysOfWeek[dayName];

  if (targetDay === undefined) {
    throw new Error("Invalid day name");
  }

  const today = new Date();
  const todayDay = today.getDay();

  // Determine if today is the target day
  if (todayDay === targetDay) {
    return formatDate(today);
  }

  // Calculate days until next occurrence
  const daysUntilNext = (targetDay + 7 - todayDay) % 7 || 7; // Ensure we get the next occurrence

  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + daysUntilNext);

  return formatDate(nextDate);
}
export function convertTo24HourFormat(time: string): string {
  const [timePart, modifier] = time.split(" "); // Split time and AM/PM
  let [hours] = timePart.split(":").map(Number); // Extract hours and minutes
  const minutes = timePart.split(":").map(Number);
  if (modifier === "PM" && hours < 12) {
    hours += 12; // Convert PM hours
  } else if (modifier === "AM" && hours === 12) {
    hours = 0; // Convert 12 AM to 0 hours
  }

  // Format hours and minutes to ensure two digits
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
}
