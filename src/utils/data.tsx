import avaterImage from '/Images/Avatars.png'
import { PiUserCircleFill } from "react-icons/pi";
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
////////////////
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
import { PiTreeFill } from "react-icons/pi";
import { PiChartBar } from "react-icons/pi";
import { PiCalendarDots } from "react-icons/pi";
import { PiChatCircleDotsLight } from "react-icons/pi";

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
    id: 1,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,

    WorkSpace: ['الطب'],
    name: "علي الحسن",
    likes: 15,
    specialization: "طبيب",
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    Rate: 4.2,
    BaserCount: 20,
    Price: 15,
    FreeTime: [
      { from: 9, to: 11 },
      { from: 13, to: 16 },
      { from: 18, to: 19 },
    ],
    Certificates: [
      {
        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],

    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    checkMark: true,

  },
  {
    id: 2,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['القانون'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: false
    ,
  },
  {
    id: 3,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['الهندسة'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 4,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التعليم'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: false
    ,
  },

  {
    id: 5,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['الهندسة'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },

  {
    id: 6,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['الفنون', 'أعمال'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 7,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['أعمال', 'التسويق'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: false
    ,
  },
  {
    id: 8,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['الطب', 'التطوع'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 9,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['القانون'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: false
    ,
  },
  {
    id: 10,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التعليم'],
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
    Certificates: [
      {
        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],

    checkMark: true,

  },
  {
    id: 11,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['الهندسة'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 12,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['الفنون'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 13,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 14,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 15,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: false
    ,
  },
  {
    id: 16,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 17,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 18,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: false
    ,
  },
  {
    id: 19,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 20,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 21,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 22,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: false
    ,
  },
  {
    id: 23,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 24,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: false
    ,
  },
  {
    id: 25,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 26,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 27,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    checkMark: true,

  },
  {
    id: 28,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,

    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {

        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    checkMark: false
    ,
  },
  {
    id: 29,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {
        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],
    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],
    checkMark: true,

  },
  {
    id: 30,
    Ratings: [
      {
        total: '4',

        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }, {
        total: '4',
        SeedOwner: 'kenan',
        ProfessionalismInDealing: '4',
        QualityOfDealing: '5',
        SessionQuality: '4',
        SeedExperience: '3'
      }
    ],
    image: CardAvatarImage,
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
    WorkSpace: ['التقنية'],
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
    Certificates: [
      {
        id: 1,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 2,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 3,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 4,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 5,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
      {
        id: 6,
        title: 'خبر أعمال رقمية',
        university: "سالفورد بريطانيا",
        year: '2022'
      },
    ],

    Experiences: [
      {
        number: 5,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 8,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      },
      {
        number: 13,
        name: 'خبر أعمال رقمية',
        status: 'جلسة ناجحة'
      }
    ],

    checkMark: true,

  },
];
export const FavoriteBostanies = [

  {
    id: 1,
    image: CardAvatarImage,
    otherSpecialization: [' محتوى مرئي', 'كتابة', 'إعلام مرئي', 'رقمي إداري', 'أفكار تطويرية للعمل'],
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
    checkMark: false
    ,
  },
  {
    id: 2,
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
    id: 3,
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
    checkMark: false
    ,
  },
  {
    id: 4,
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
    id: 5,
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
]
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
export const BostanySidbarData = [
  {
    name: 'بستاني',
    icone: <PiTreeFill />,
    link: '/Bostany'
  },
  {
    name: 'الاحصائيات',
    icone: <PiChartBar />,
    link: '/Bostany/statistics'
  },
  {
    name: 'الجدول',
    icone: <PiCalendarDots />,
    link: '/Bostany/table'
  },
  {
    name: 'الرسائل',
    icone: <PiChatCircleDotsLight />,
    link: '/Bostany/messages'
  },
  {
    name: 'المحفظة',
    icone: <PiWallet />,
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
export const ProfileData = {
  img: avaterImage,
  name: 'علي العزازي',
  Role: 'Bazer',
  country: 'السعودية',
  phoneNumber: '920022222',
  email: 'ali@hotmail.com',
  birthData: '10/5/1990',
  GeneralNotification: [
    {
      name: 'AppointmentReminder',
      title: 'تذكير بالمواعيد',
      state: true
    }, {
      name: 'ConfirmSeedReservation',
      title: 'تأكيد حجز البذرة',
      state: false
    }, {
      name: 'CancellationNotice',
      title: 'إشعار بإلغاء الحجز',
      state: false
    }, {
      name: 'AppointmentReminder24Hours',
      title: 'تذكير بالموعد قبل 24 ساعة',
      state: true
    }, {
      name: 'ReminderOfAppointment1HourBefore',
      title: 'تذكير بالموعد قبل ساعة',
      state: true
    }, {
      name: 'PromotionsAndDiscounts',
      title: 'العروض الترويجية والخصومات',
      state: true
    }
  ],
  BostanyNotification: [
    {
      name: 'BostanyMessagesAndInquiries',
      title: 'رسائل واستفسارات البستانين',
      state: true
    }, {
      name: 'UpdatesOnPreferredAdvisors',
      title: 'تحديثات حول المستشارين المفضلين',
      state: false
    }
  ]
}

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

const now = new Date();
import AppointmentChap from '../components/BostanyComponents/AppointmentChap';
export const events = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2024, 8, 0),
    end: new Date(2024, 8, 1),
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2024, 8, 7),
    end: new Date(2024, 8, 10),
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2016, 2, 18, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 8,
    title: "DTS ENDS",
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 18, 0, 0, 0),
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2024, 8, 9, 0, 0, 0),
    end: new Date(2024, 8, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2024, 8, 11),
    end: new Date(2024, 8, 18),
    desc: "Big conference for important people",
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2024, 8, 12, 10, 80, 0, 0),
    end: new Date(2024, 8, 12, 12, 80, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2024, 8, 12, 12, 0, 0, 0),
    end: new Date(2024, 8, 12, 18, 0, 0, 0),
    desc: "Power lunch",
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2024, 8, 12, 14, 0, 0, 0),
    end: new Date(2024, 8, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2024, 8, 12, 17, 0, 0, 0),
    end: new Date(2024, 8, 12, 17, 80, 0, 0),
    desc: "Most important meal of the day",
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2024, 8, 12, 20, 0, 0, 0),
    end: new Date(2024, 8, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: "Planning Meeting with Paige",
    start: new Date(2024, 8, 18, 8, 0, 0),
    end: new Date(2024, 8, 18, 10, 80, 0),
  },
  {
    id: 11.1,
    title: "Inconvenient Conference Call",
    start: new Date(2024, 8, 18, 9, 80, 0),
    end: new Date(2024, 8, 18, 12, 0, 0),
  },
  {
    id: 11.2,
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2024, 8, 18, 11, 80, 0),
    end: new Date(2024, 8, 18, 14, 0, 0),
  },
  {
    id: 11.8,
    title: "Quote Follow-up - Tea by Tina",
    start: new Date(2024, 8, 18, 15, 80, 0),
    end: new Date(2024, 8, 18, 16, 0, 0),
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2024, 8, 17, 19, 80, 0),
    end: new Date(2024, 8, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: "Late Same Night Event",
    start: new Date(2024, 8, 17, 19, 80, 0),
    end: new Date(2024, 8, 17, 28, 80, 0),
  },
  {
    id: 18,
    title: "Multi-day Event",
    start: new Date(2024, 8, 20, 19, 80, 0),
    end: new Date(2024, 8, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 8)),
    end: new Date(new Date().setHours(new Date().getHours() + 8)),
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: new Date(2024, 8, 14, 16, 80, 0),
    end: new Date(2024, 8, 14, 17, 80, 0),

  },
  {
    id: 16,
    title: "Video Record",
    start: new Date(2024, 8, 14, 15, 80, 0),
    end: new Date(2024, 8, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: "Dutch Song Producing",
    start: new Date(2024, 8, 14, 16, 80, 0),
    end: new Date(2024, 8, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: "Itaewon Halloween Meeting",
    start: new Date(2024, 8, 14, 16, 80, 0),
    end: new Date(2024, 8, 14, 17, 80, 0),
  },
  {
    id: 19,
    title: "Online Coding Test",
    start: new Date(2024, 8, 14, 17, 80, 0),
    end: new Date(2024, 8, 14, 20, 80, 0),
  },
  {
    id: 20,
    title: "An overlapped Event",
    start: new Date(2024, 10, 14, 17, 0, 0),
    end: new Date(2024, 11, 14, 18, 80, 0),
  },
  {
    id: 21,
    title: <AppointmentChap image={avaterImage} name={' فراس خالد'} Workspace={{
      name: 'أعمال',
      icon: < PiBriefcaseDuotone />
    }} special={'المحتوي المرئي'} />,
    start: new Date(2024, 9, 26, 17, 0, 0),
    end: new Date(2024, 9, 26, 18, 80, 0),
  },
  {
    id: 22,
    title: <AppointmentChap image={avaterImage} name={' منير شريف'} Workspace={{
      name: 'أعمال',
      icon: < PiBriefcaseDuotone />
    }} special={'المحتوي المرئي'} />,
    start: new Date(2024, 9, 23, 17, 80, 0),
    end: new Date(2024, 9, 25, 19, 0, 0),
  },
  {
    id: 23,
    title: <AppointmentChap image={avaterImage} name={'محمد احمد'} Workspace={{
      name: 'أعمال',
      icon: < PiBriefcaseDuotone />
    }} special={'المحتوي المرئي'} />,
    start: now,
    end: new Date(2024, 9, 21, 19, 0, 0),
  },
];