import avaterImage from '/Images/Avatars.png'
import { PiCalendarDotsFill, PiChatCircleDotsFill, PiHeartFill, PiHouse, PiMagnifyingGlassFill, PiPlantFill, PiUserCircleFill, PiWalletFill } from "react-icons/pi";
import { PiBellFill } from "react-icons/pi";
import { PiLockFill } from "react-icons/pi";
import { PiQuestionFill } from "react-icons/pi";
import { PiInfoFill } from "react-icons/pi";
import BostanyX from "/Icons/xForBostany.png";
import Bostanyfacebook from "/Icons/FaceBookForBostany.png";
import Bostanyyoutube from "/Icons/youtubeForBostany.png";
import Bostanysnapchat from "/Icons/snapChatForBostany.png";
import Bostanyinstegram from "/Icons/instagramForBostany.png";
import BostanyLinkedIn from "/Icons/LinkedInForBostany.png";
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
import { WorlSpaceDataType } from "../Types";
import { PiHouseFill } from "react-icons/pi";
import { PiMagnifyingGlass } from "react-icons/pi";
import { PiPlant } from "react-icons/pi";
import { PiHeart } from "react-icons/pi";
import { PiWallet } from "react-icons/pi";
import { PiTreeFill } from "react-icons/pi";
import { PiChartBar } from "react-icons/pi";
import { PiCalendarDots } from "react-icons/pi";
import { PiChatCircleDotsLight } from "react-icons/pi";
import { PiTree } from "react-icons/pi";
import { PiChartBarFill } from "react-icons/pi";
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
export const socialIconsForBazer = [
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
export const socialIconsForBostany = [
  {
    icon: BostanyX,
    path: "/",
  },
  {
    icon: Bostanyfacebook,
    path: "/",
  },
  {
    icon: Bostanyyoutube,
    path: "/",
  },
  {
    icon: Bostanysnapchat,
    path: "/",
  },
  {
    icon: Bostanyinstegram,
    path: "/",
  },
  {
    icon: BostanyLinkedIn,
    path: "/",
  },
];
export const WorkSpaceData: WorlSpaceDataType[] = [
  // {
  //   id: 1,
  //   name: "الكل",
  //   icon: <PiSquaresFourDuotone />,
  //   types: [
  //     "محتوى مرئي",
  //     "قيادة إعلامية",
  //     "رقمي إداري",
  //     "إعلام مرئي",
  //     "برمجة",
  //     "رقمي",
  //     "كتابة إبداعية",
  //     "تصميم",
  //     "2محتوى مرئي",
  //     "2قيادة إعلامية",
  //     "2رقمي إداري",
  //     "2إعلام مرئي",
  //   ],
  // },
  {
    id: 2,
    name: "أعمال",
    icon: < PiBriefcaseDuotone />,
    types: ["محتوى مرئي", "قيادة إعلامية", "رقمي إداري", "إعلام مرئي"],
  },
  {
    id: 3,
    name: "فنون",
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
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
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
    icone: <PiHouse />,
    ActiveIcon: <PiHouseFill />,
    link: '/Baser'
  },
  {
    name: 'البحث',
    icone: <PiMagnifyingGlass />,
    ActiveIcon: <PiMagnifyingGlassFill />,
    link: '/Baser/search'
  },
  {
    name: 'بذوري',
    icone: <PiPlant />,
    ActiveIcon: <PiPlantFill />,
    link: '/Baser/seeds'
  },
  {
    name: 'المفضلين',
    icone: <PiHeart />,
    ActiveIcon: <PiHeartFill />,
    link: '/Baser/favorite'
  },
  {
    name: 'المحفظة',
    icone: <PiWallet />,
    ActiveIcon: <PiWalletFill />,
    link: '/Baser/wallet'
  },
]
export const BostanySidbarData = [
  {
    name: 'بستاني',
    icone: <PiTree />,
    ActiveIcon: <PiTreeFill />,
    link: '/Bostany'
  },
  {
    name: 'الاحصائيات',
    icone: <PiChartBar />,
    ActiveIcon: <PiChartBarFill />,
    link: '/Bostany/statistics'
  },
  {
    name: 'الجدول',
    icone: <PiCalendarDots />,
    ActiveIcon: <PiCalendarDotsFill />,

    link: '/Bostany/table'
  },
  {
    name: 'الرسائل',
    icone: <PiChatCircleDotsLight />,
    ActiveIcon: <PiChatCircleDotsFill />,

    link: '/Bostany/messages'
  },
  {
    name: 'المحفظة',
    icone: <PiWallet />,
    ActiveIcon: <PiWalletFill />,
    link: '/Bostany/wallet'
  },
]
export const FinancialTransaction = [
  { type: 'puy', status: 'قيد التنفيذ', title: 'دفع فاتورة كهرباء', user: { name: 'سارة علي', image: CardAvatarImage }, fullDate: '10/19/2024', time: '09:30', amount: 100 },
  { type: 'deposit', status: 'مكتلمة', title: 'شراء مواد بقالة', user: { name: 'علي الحسن', image: CardAvatarImage }, fullDate: '10/19/2024', time: '14:45', amount: 50 },
  { type: 'puy', status: 'مرفوضة', title: 'سداد رسوم جامعية', user: { name: 'أحمد السالم', image: CardAvatarImage }, fullDate: '10/18/2024', time: '16:20', amount: 500 },
  { type: 'puy', status: 'قيد التنفيذ', title: 'شراء كتب دراسية', user: { name: 'ليلى ناصر', image: CardAvatarImage }, fullDate: '10/08/2024', time: '13:00', amount: 70 },
  { type: 'puy', status: 'قيد التنفيذ', title: 'دفع فاتورة كهرباء', user: { name: 'سارة علي', image: CardAvatarImage }, fullDate: '10/18/2024', time: '09:30', amount: 100 },
  { type: 'deposit', status: 'مكتلمة', title: 'شراء مواد بقالة', user: { name: 'علي الحسن', image: CardAvatarImage }, fullDate: '10/11/2024', time: '14:45', amount: 50 },
  { type: 'puy', status: 'مرفوضة', title: 'سداد رسوم جامعية', user: { name: 'أحمد السالم', image: CardAvatarImage }, fullDate: '10/10/2024', time: '16:20', amount: 500 },
  { type: 'puy', status: 'قيد التنفيذ', title: 'شراء كتب دراسية', user: { name: 'ليلى ناصر', image: CardAvatarImage }, fullDate: '10/09/2024', time: '13:00', amount: 70 },
  { type: 'deposit', status: 'مكتملة', title: 'دفع رسوم إنترنت', user: { name: 'محمد الفهد', image: CardAvatarImage }, fullDate: '10/08/2024', time: '10:15', amount: 40 },
  { type: 'puy', status: 'مكتملة', title: 'تجديد اشتراك نادي', user: { name: 'نورة عبدالعزيز', image: CardAvatarImage }, fullDate: '10/07/2024', time: '12:30', amount: 200 },
  { type: 'deposit', status: 'مرفوضة', title: 'حجز موعد طبي', user: { name: 'خالد الزهراني', image: CardAvatarImage }, fullDate: '10/13/2024', time: '08:00', amount: 150 },
  { type: 'puy', status: 'قيد التنفيذ', title: 'شراء تذاكر سفر', user: { name: 'فاطمة سعيد', image: CardAvatarImage }, fullDate: '10/13/2024', time: '11:45', amount: 250 },
  { type: 'deposit', status: 'مكتملة', title: 'دفع فاتورة هاتف', user: { name: 'يوسف العتيبي', image: CardAvatarImage }, fullDate: '10/13/2024', time: '18:30', amount: 60 },
  { type: 'deposit', status: 'قيد التنفيذ', title: 'اشتراك في دورة تدريبية', user: { name: 'مريم الحسني', image: CardAvatarImage }, fullDate: '10/03/2024', time: '17:00', amount: 80 },
];
export const BaserProfilePageSideBar = [
  {
    name: 'معلومات الحساب',
    icon: <PiUserCircleFill />,
    link: '/Baser/profile/countInfo'
  },
  {
    name: 'الإشعارات',
    icon: <PiBellFill />,
    link: '/Baser/profile/notification'
  }, {
    name: 'الخصوصية',
    icon: <PiLockFill />,
    link: '/Baser/profile/Previce'
  }
  , {
    name: 'الدعم والمساعدة',
    icon: <PiQuestionFill />,
    link: '/Baser/profile/help'
  }, {
    name: 'عن بستن',
    icon: <PiInfoFill />,
    link: '/Baser/profile/aboutBostany'
  }
]
export const BostanyProfilePageSideBar = [
  {
    name: 'معلومات الحساب',
    icon: <PiUserCircleFill />,
    link: '/Bostany/profile/countInfo'
  },
  {
    name: 'الإشعارات',
    icon: <PiBellFill />,
    link: '/Bostany/profile/notification'
  }, {
    name: 'الخصوصية',
    icon: <PiLockFill />,
    link: '/Bostany/profile/Previce'
  }
  , {
    name: 'الدعم والمساعدة',
    icon: <PiQuestionFill />,
    link: '/Bostany/profile/help'
  }, {
    name: 'عن بستن',
    icon: <PiInfoFill />,
    link: '/Bostany/profile/aboutBostany'
  }
]
export const StatisticsDataForToday = {
  Trees: [
    { day: 'صباحا', Tree: 5 },
    { day: 'الظهيرة', Tree: 11 },
    { day: 'مساءا', Tree: 9 },
  ],
  TotalTreesCount: 30,
  RatingAvg: 4.5,
  BaserTimeAvg: 15,
  NewTreesCount: 10,
  CancelRate: 5,
  BenefitAVg: 15,
}
export const StatisticsDataForWeek = {
  Trees: [
    { day: 'الأحد', Tree: 55 },
    { day: 'الاثنين', Tree: 115 },
    { day: 'الثلاثاء', Tree: 95 },
    { day: 'الأربعاء', Tree: 115 },
    { day: 'الخميس', Tree: 45 },
    { day: 'الجمعة', Tree: 85 },
    { day: 'السبت', Tree: 35 },
  ],
  TotalTreesCount: 562,
  RatingAvg: 4.8,
  BaserTimeAvg: 120,
  NewTreesCount: 14,
  CancelRate: 22,
  BenefitAVg: 3000,
}
export const StatisticsDataForMounth = {
  Trees: [
    { day: 'الاسبوع الاول', Tree: 100 },
    { day: ' الاسبوع الثاني', Tree: 250 },
    { day: 'الاسبوع الثالث', Tree: 130 },
    { day: 'الاسبوع الرابع', Tree: 175 },
  ],
  TotalTreesCount: 1500,
  RatingAvg: 3.8,
  BaserTimeAvg: 250,
  NewTreesCount: 50,
  CancelRate: 44,
  BenefitAVg: 6700,
}
export const Chats = [
  {
    "Person": {
      "name": "سارة الشمري",
      "image": avaterImage
    },
    "Messages": [
      {
        "From": "Him",
        "text": "المعرفة قوة، وهي تفتح الأبواب التي كانت مغلقة.",
        "date": {
          "hour": 15,
          "minute": 10,
          "day": 22,
          "mounth": 10,
          "year": 2024
        },
        "received": true,
        "readed": true
      },
      {
        "From": "me",
        "text": "بالضبط، التعلم المستمر هو المفتاح.",
        "date": {
          "hour": 15,
          "minute": 15,
          "day": 22,
          "mounth": 10,
          "year": 2024
        },
        "received": true,
        "readed": true
      }
    ]
  },
  {
    "Person": {
      "name": "محمد القحطاني",
      "image": avaterImage
    },
    "Messages": [
      {
        "From": "Him",
        "text": "أحببت فيلم الأمس، كانت القصة مؤثرة جداً.",
        "date": {
          "hour": 16,
          "minute": 20,
          "day": 22,
          "mounth": 10,
          "year": 2024
        },
        "received": true,
        "readed": true
      },
      {
        "From": "me",
        "text": "نعم، كانت لحظات مؤثرة بالفعل.",
        "date": {
          "hour": 16,
          "minute": 25,
          "day": 22,
          "mounth": 10,
          "year": 2024
        },
        "received": true,
        "readed": false
      }
    ]
  },
  {
    "Person": {
      "name": "فاطمة العتيبي",
      "image": avaterImage
    },
    "Messages": [
      {
        "From": "Him",
        "text": "تذكر أن الأهداف الصغيرة تؤدي إلى إنجازات كبيرة.",
        "date": {
          "hour": 17,
          "minute": 5,
          "day": 22,
          "mounth": 10,
          "year": 2024
        },
        "received": true,
        "readed": false
      },
      {
        "From": "me",
        "text": "هذا هو السر، التركيز على التفاصيل.",
        "date": {
          "hour": 17,
          "minute": 10,
          "day": 22,
          "mounth": 10,
          "year": 2024
        },
        "received": true,
        "readed": false
      }
    ]
  },
  {
    "Person": {
      "name": "يوسف العمري",
      "image": avaterImage
    },
    "Messages": [
      {
        "From": "Him",
        "text": "هل جربت الطبخ الجديد؟ إنه لذيذ!",
        "date": {
          "hour": 18,
          "minute": 15,
          "day": 22,
          "mounth": 10,
          "year": 2024
        },
        "received": true,
        "readed": false
      },
      {
        "From": "me",
        "text": "لا، لكنني سأجربه قريبًا.",
        "date": {
          "hour": 18,
          "minute": 20,
          "day": 22,
          "mounth": 10,
          "year": 2024
        },
        "received": true,
        "readed": false
      }
    ]
  },
  {
    "Person": {
      "name": "نورة السالم",
      "image": avaterImage
    },
    "Messages": [
      {
        "From": "Him",
        "text": "أحببت حديثنا عن الكتب، لدي اقتراحات رائعة.",
        "date": {
          "hour": 19,
          "minute": 30,
          "day": 22,
          "mounth": 10,
          "year": 2024
        },
        "received": true,
        "readed": true
      },
      {
        "From": "me",
        "text": "أنتظر اقتراحاتك بفارغ الصبر!",
        "date": {
          "hour": 19,
          "minute": 35,
          "day": 22,
          "mounth": 10,
          "year": 2024
        },
        "received": true,
        "readed": false
      }
    ]
  }
]