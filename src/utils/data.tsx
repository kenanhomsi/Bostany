import x from "/Icons/x.png";
import facebook from "/Icons/facebook.png";
import youtube from "/Icons/youtube.png";
import snapchat from "/Icons/snapchat.png";
import instegram from "/Icons/instegram.png";
import LinkedIn from "/Icons/LinkedIn.png";
import CardAvatarImage from "/Images/Avatars.png";
import ClockImage from "/Icons/Clock.png";
import SketchLogoImage from "/Icons/SketchLogo.png";
import MagnifyingGlassImage from "/Icons/MagnifyingGlass.png";
import SquaresFourImage from "/Icons/SquaresFour.png";
import { PiScalesDuotone } from "react-icons/pi";
import { PiPillDuotone } from "react-icons/pi";
import { PiGraphDuotone } from "react-icons/pi";
import { PiBriefcaseDuotone } from "react-icons/pi";
import { PiPencilRulerDuotone } from "react-icons/pi";
import { PiPenNibStraightDuotone } from "react-icons/pi";
import { PiCrownSimpleDuotone } from "react-icons/pi";
import { PiStudentDuotone } from "react-icons/pi";
import { PiHandHeartDuotone } from "react-icons/pi";
import { PiSquaresFourDuotone } from "react-icons/pi";
import { WorlSpaceDataType } from "../Types";
import { PiHouseFill } from "react-icons/pi";
import { PiMagnifyingGlass } from "react-icons/pi";
import { PiPlant } from "react-icons/pi";
import { PiHeart } from "react-icons/pi";
import { PiWallet } from "react-icons/pi";
export const WebsiteNavData = [
  {
    name: "الرئيسية",
    path: "/",
  },
  {
    name: "من نحن",
    path: "/aboutUs",
  },
  {
    name: "الأسئلة الشائعة",
    path: "/Fq",
  },
  {
    name: "المدونة",
    path: "/blog",
  },
  {
    name: "اتصل بنا",
    path: "/contactWithUs",
  },
];
export const socialIcons = [
  {
    icon: x,
    path: "/",
  },
  {
    icon: facebook,
    path: "/",
  },
  {
    icon: youtube,
    path: "/",
  },
  {
    icon: snapchat,
    path: "/",
  },
  {
    icon: instegram,
    path: "/",
  },
  {
    icon: LinkedIn,
    path: "/",
  },
];

export const WorkSpaceData: WorlSpaceDataType[] = [
  {
    id: 1,
    name: "الكل",
    icon: <PiSquaresFourDuotone />,
    types: [
      "محتوى مرئي",
      "قيادة إعلامية",
      "رقمي إداري",
      "إعلام مرئي",
      "برمجة",
      "رقمي",
      "كتابة إبداعية",
      "تصميم",
      "2محتوى مرئي",
      "2قيادة إعلامية",
      "2رقمي إداري",
      "2إعلام مرئي",
    ],
  },
  {
    id: 2,
    name: "أعمال",
    icon: < PiBriefcaseDuotone />,
    types: ["محتوى مرئي", "قيادة إعلامية", "رقمي إداري", "إعلام مرئي"],
  },
  {
    id: 3,
    name: "الفنون",
    icon: < PiPenNibStraightDuotone />,
    types: ["كتابة إبداعية", "تصميم", "محتوى مرئي"],
  },
  {
    id: 4,
    name: "التقنية",
    icon: < PiGraphDuotone />,
    types: ["برمجة", "رقمي", "كتابة إبداعية", "تصميم"],
  },
  {
    id: 5,
    name: "التطوع",
    icon: < PiHandHeartDuotone />,
    types: ["تصميم", "محتوى مرئي", "قيادة إعلامية", "رقمي إداري", "إعلام مرئي"],
  },
  {
    id: 6,
    name: "التعليم",
    icon: < PiStudentDuotone />,
    types: ["قيادة إعلامية", "رقمي إداري"],
  },
  {
    id: 7,
    name: "القانون",
    icon: < PiScalesDuotone />,
    types: ["قيادة إعلامية"],
  },
  {
    id: 8,
    name: "الطب",
    icon: < PiPillDuotone />,
    types: ["قيادة إعلامية", "رقمي إداري"],
  },
  {
    id: 9,
    name: "التسويق",
    icon: < PiGraphDuotone />,
    types: ["تصميم", "محتوى مرئي", "قيادة إعلامية", "رقمي إداري", "إعلام مرئي"],
  },
  {
    id: 10,
    name: "الهندسة",
    icon: < PiPencilRulerDuotone />,
    types: ["برمجة", "رقمي", "كتابة إبداعية", "تصميم"],
  },
  {
    id: 11,
    name: "القيادة",
    icon: < PiCrownSimpleDuotone />,
    types: ["برمجة", "رقمي", "كتابة إبداعية", " 22تصميم"],
  },
];

export const daysOfWeek = [
  "الاحد",
  "الاثنين",
  "الثلاثاء",
  "الاربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

export const CardsBastanyData = [
  {
    image: CardAvatarImage,
    name: "علي الحسن",
    likes: 15,
    specialization: "طبيب",
    Rate: 4.2,
    BaserCount: 20,
    Price: 15,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 16 },
      { from: 18, to: 19 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "سارة الكعبي",
    likes: 22,
    specialization: "محامية",
    Rate: 4.5,
    BaserCount: 18,
    Price: 20,
    FreeTime: [
      { from: 8, to: 10 },
      { from: 12, to: 15 },
      { from: 17, to: 18 },
    ],
    checkMark: false,
  },
  {
    image: CardAvatarImage,
    name: "محمد العتيبي",
    likes: 30,
    specialization: "مبرمج",
    Rate: 4.8,
    BaserCount: 25,
    Price: 25,
    FreeTime: [
      { from: 10, to: 12 },
      { from: 14, to: 17 },
      { from: 19, to: 20 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "فاطمة الزهراء",
    likes: 12,
    specialization: "معلمة",
    Rate: 3.9,
    BaserCount: 10,
    Price: 12,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 15 },
      { from: 18, to: 19 },
    ],
    checkMark: false,
  },
  {
    image: CardAvatarImage,
    name: "خالد السعدي",
    likes: 18,
    specialization: "مهندس معماري",
    Rate: 4.1,
    BaserCount: 14,
    Price: 18,
    FreeTime: [
      { from: 8, to: 10 },
      { from: 12, to: 14 },
      { from: 16, to: 17 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "ريم الشمري",
    likes: 25,
    specialization: "مصممة",
    Rate: 4.6,
    BaserCount: 22,
    Price: 22,
    FreeTime: [
      { from: 10, to: 12 },
      { from: 14, to: 16 },
      { from: 18, to: 19 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "عبدالله الفهد",
    likes: 20,
    specialization: "محاسب",
    Rate: 4.0,
    BaserCount: 16,
    Price: 16,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 15 },
      { from: 17, to: 18 },
    ],
    checkMark: false,
  },
  {
    image: CardAvatarImage,
    name: "نورة العبدالله",
    likes: 28,
    specialization: "طبيبة",
    Rate: 4.7,
    BaserCount: 24,
    Price: 24,
    FreeTime: [
      { from: 8, to: 10 },
      { from: 12, to: 14 },
      { from: 16, to: 17 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "حسن البلوشي",
    likes: 14,
    specialization: "محامي",
    Rate: 3.8,
    BaserCount: 12,
    Price: 14,
    FreeTime: [
      { from: 10, to: 12 },
      { from: 14, to: 16 },
      { from: 18, to: 19 },
    ],
    checkMark: false,
  },
  {
    image: CardAvatarImage,
    name: "ليلى السالم",
    likes: 19,
    specialization: "معلمة",
    Rate: 4.3,
    BaserCount: 17,
    Price: 17,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 15 },
      { from: 17, to: 18 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "ماجد العلي",
    likes: 23,
    specialization: "مبرمج",
    Rate: 4.4,
    BaserCount: 20,
    Price: 20,
    FreeTime: [
      { from: 8, to: 10 },
      { from: 12, to: 14 },
      { from: 16, to: 17 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "هدى الشمري",
    likes: 21,
    specialization: "مصممة",
    Rate: 4.5,
    BaserCount: 19,
    Price: 19,
    FreeTime: [
      { from: 8, to: 10 },
      { from: 12, to: 14 },
      { from: 16, to: 17 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "عبدالرحمن الفهد",
    likes: 22,
    specialization: "مهندس",
    Rate: 4.3,
    BaserCount: 19,
    Price: 19,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 15 },
      { from: 17, to: 18 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "ليلى العتيبي",
    likes: 27,
    specialization: "طبيبة",
    Rate: 4.7,
    BaserCount: 23,
    Price: 23,
    FreeTime: [
      { from: 8, to: 10 },
      { from: 12, to: 14 },
      { from: 16, to: 17 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "ماجد السالم",
    likes: 14,
    specialization: "محامي",
    Rate: 3.9,
    BaserCount: 12,
    Price: 14,
    FreeTime: [
      { from: 10, to: 12 },
      { from: 14, to: 16 },
      { from: 18, to: 19 },
    ],
    checkMark: false,
  },
  {
    image: CardAvatarImage,
    name: "نورة الحسن",
    likes: 18,
    specialization: "معلمة",
    Rate: 4.2,
    BaserCount: 16,
    Price: 16,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 15 },
      { from: 17, to: 18 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "علي العبدالله",
    likes: 21,
    specialization: "مبرمج",
    Rate: 4.4,
    BaserCount: 19,
    Price: 19,
    FreeTime: [
      { from: 8, to: 10 },
      { from: 12, to: 14 },
      { from: 16, to: 17 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "سلمى الشمري",
    likes: 25,
    specialization: "مصممة",
    Rate: 4.6,
    BaserCount: 22,
    Price: 22,
    FreeTime: [
      { from: 10, to: 12 },
      { from: 14, to: 16 },
      { from: 18, to: 19 },
    ],
    checkMark: false,
  },
  {
    image: CardAvatarImage,
    name: "عبدالله الفهد",
    likes: 20,
    specialization: "محاسب",
    Rate: 4.0,
    BaserCount: 16,
    Price: 16,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 15 },
      { from: 17, to: 18 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "ريم الشمري",
    likes: 25,
    specialization: "مصممة",
    Rate: 4.6,
    BaserCount: 22,
    Price: 22,
    FreeTime: [
      { from: 10, to: 12 },
      { from: 14, to: 16 },
      { from: 18, to: 19 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "خالد السعدي",
    likes: 18,
    specialization: "مهندس معماري",
    Rate: 4.1,
    BaserCount: 14,
    Price: 18,
    FreeTime: [
      { from: 8, to: 10 },
      { from: 12, to: 14 },
      { from: 16, to: 17 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "فاطمة الزهراء",
    likes: 12,
    specialization: "معلمة",
    Rate: 3.9,
    BaserCount: 10,
    Price: 12,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 15 },
      { from: 18, to: 19 },
    ],
    checkMark: false,
  },
  {
    image: CardAvatarImage,
    name: "محمد العتيبي",
    likes: 30,
    specialization: "مبرمج",
    Rate: 4.8,
    BaserCount: 25,
    Price: 25,
    FreeTime: [
      { from: 10, to: 12 },
      { from: 14, to: 17 },
      { from: 19, to: 20 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "سارة الكعبي",
    likes: 22,
    specialization: "محامية",
    Rate: 4.5,
    BaserCount: 18,
    Price: 20,
    FreeTime: [
      { from: 8, to: 10 },
      { from: 12, to: 15 },
      { from: 17, to: 18 },
    ],
    checkMark: false,
  },
  {
    image: CardAvatarImage,
    name: "علي الحسن",
    likes: 15,
    specialization: "طبيب",
    Rate: 4.2,
    BaserCount: 20,
    Price: 15,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 16 },
      { from: 18, to: 19 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "مهند الفارس",
    likes: 9,
    specialization: "مهندس",
    Rate: 3.4,
    BaserCount: 12,
    Price: 10,
    FreeTime: [
      { from: 10, to: 12 },
      { from: 14, to: 17 },
      { from: 20, to: 21 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "نادية الحسن",
    likes: 26,
    specialization: "معلمة",
    Rate: 4.5,
    BaserCount: 23,
    Price: 23,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 15 },
      { from: 17, to: 18 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "يوسف السعدي",
    likes: 13,
    specialization: "محامي",
    Rate: 3.7,
    BaserCount: 11,
    Price: 13,
    FreeTime: [
      { from: 10, to: 12 },
      { from: 14, to: 16 },
      { from: 18, to: 19 },
    ],
    checkMark: false,
  },
  {
    image: CardAvatarImage,
    name: "منى العتيبي",
    likes: 24,
    specialization: "طبيبة",
    Rate: 4.6,
    BaserCount: 21,
    Price: 21,
    FreeTime: [
      { from: 8, to: 10 },
      { from: 12, to: 14 },
      { from: 16, to: 17 },
    ],
    checkMark: true,
  },
  {
    image: CardAvatarImage,
    name: "سعيد الحربي",
    likes: 16,
    specialization: "مهندس",
    Rate: 4.1,
    BaserCount: 15,
    Price: 15,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 15 },
      { from: 17, to: 18 },
    ],
    checkMark: true,
  },
];
export const AboutCardsData = [
  {
    MainTitle: "حدد ميعاد",
    Subtitle: "جلستك المناسبة",
    icon: ClockImage,
    description:
      "في بستن نتيح مرونة كبيرة في تحديد ميعاد الجلسات مع إمكانية تغيير المواعيد كما تحب.",
  },
  {
    MainTitle: "اختر التخصصات",
    Subtitle: "التي تريدها",
    icon: SquaresFourImage,
    description:
      "وقم باختيارها وتحديدها بنفسك قبل إضافة البذوة لتجد البستاني المناسب.",
  },
  {
    MainTitle: "استشر",
    Subtitle: " بستانييون محترفون",
    icon: SketchLogoImage,
    description:
      "يصلك علي بذورك العديد من الدعوات ولكن قم باختيار المحترفين فقط",
  },
  {
    MainTitle: "إبحث عن",
    Subtitle: "بستانييون مثمرين",
    icon: MagnifyingGlassImage,
    description: "جلسات استشارية عصفية فورية ختصرة لتطوير وتنمية الأفكار",
  },
];
export const BaserSidbarData = [
  {
    name: 'الرئيسية',
    icone: <PiHouseFill />,
    link: '/Baser'
  },
  {
    name: 'البحث',
    icone: <PiMagnifyingGlass />,
    link: '/Baser/search'
  },
  {
    name: 'بذوري',
    icone: <PiPlant />,
    link: '/Baser/seeds'
  },
  {
    name: 'المفضلين',
    icone: <PiHeart />,
    link: '/Baser/favorite'
  },
  {
    name: 'المحفظة',
    icone: <PiWallet />,
    link: '/Baser/wallet'
  },
]