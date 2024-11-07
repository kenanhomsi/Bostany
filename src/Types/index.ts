import { categorySelect, IGetBostany, SpecialitiesType } from "./api";

export interface TimeBarProps {
  TimeSelected: string;
  FromProfile?: boolean;
  setTimeSelected: (value: string) => void;
}
export interface ProfileDateType {
  id: number;
  Ratings: {
    total: string;
    SeedOwner: string;
    ProfessionalismInDealing: string;
    QualityOfDealing: string;
    SessionQuality: string;
    SeedExperience: string;
  }[];
  Experiences: {
    number: number;
    name: string;
    status: string;
  }[];
  WorkSpace: string[];
  otherSpecialization: string[];
  image: string;
  name: string;
  likes: number;
  specialization: string;
  Rate: number;
  BaserCount: number;
  Price: number;
  Certificates: {
    id: number;
    title: string;
    university: string;
    year: string;
  }[];
  FreeTime: { from: number; to: number }[];
  checkMark: boolean;
}
export interface ProfileCardProps {
  CardShap: string;
  data: IGetBostany;
}
export interface LayoutProps {
  children: React.ReactNode;
}
export interface DropDownSelectionTypes {
  data: {
    code: string;
    currency: string;
    flag: string;
    id: number;
    is_default: boolean;
    key: string;
    name: string;
  }[];
  DropDownValue?: number;
  setDropDownValue?: (index: number) => void;
  setDropDownState?: (value: boolean) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick?: () => void;
}
export interface ExperiencesType {
  id?: number;
  issuer: string;
  job_title: string;
  year: string;
}
export interface qualificationType {
  id: number;
  issuer: string;
  Academic_degree?: string;
  cartificate: string;
  year: string;
}
export interface CompleteProfileFormData {
  FullName: string;
  email: string;
  checkOne: boolean;
  checkTwo: boolean;
  birthDate: string;
  gender: string;
  specialities: number[];
  category: number[];
  qualification: qualificationType[];
  DefinitiveWords: string;
}
export interface CompleteProfileStepProps {
  FormData: CompleteProfileFormData;
  SetFormData: (value: CompleteProfileFormData) => void;
}
export interface WorlSpaceDataType {
  id: number;
  name: string;
  icon: React.ReactNode;
  types: string[];
}
export interface PopUpParams {
  title: React.ReactNode;
  closeAction?: any;
  children: React.ReactNode;
  closeIconState?: boolean;
  type:
    | "BuyingCoinsPop"
    | "Buycredit"
    | "BookingTimePop"
    | "BookingConfirmPop"
    | "BookingSuccessPop"
    | "SwitchToBaser"
    | "Bst10Time"
    | "Bst10Table";
  PopSize:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
}
export type UserCardProfileType = {
  id: number;
  WorkSpace: string[];
  Certificates: {
    id: number;
    title: string;
    university: string;
    year: string;
  }[];
  Experiences: {
    number: number;
    name: string;
    status: string;
  }[];
  otherSpecialization: string[];
  Ratings: {
    total: string;
    SeedOwner: string;
    ProfessionalismInDealing: string;
    QualityOfDealing: string;
    SessionQuality: string;
    SeedExperience: string;
  }[];
  image: string;
  name: string;
  likes: number;
  specialization: string;
  Rate: number;
  BaserCount: number;
  Price: number;
  FreeTime: { from: number; to: number }[];
  checkMark: boolean;
};
export interface SeedsCardData {
  image: string;
  title: string;
  time: { from: string; to: string };
  name: string;
  workSpaceID: number;
  type: string;
  date: {
    month: string;
    day: string;
  };
}
export interface SeedsCardProps {
  data: {
    accepted_request: {
      consultant: IGetBostany;
      created_at: string;
      created_at_formatted: string;
      extension_request_id: string;
      extension_requested: false;
      id: number;
      rating: null;
      remaining_formatted: string;
      remaining_hours: number;
      start_at: string;
    };
    authorize: {
      change_time: boolean;
      reject: boolean;
      report: boolean;
      start_meeting: boolean;
    };
    id: number;
    name: string;
    description: string;
    invitation: {
      end_at: string;
      start_at: string;
    };
    is_closed: boolean;
    is_favorited: boolean;
    labels: string[];
    participants_count: number;
    specialities: {
      id: number;
      text: string;
    }[];
    status: string;
    status_localed: string;
    stage: string;
    stage_localed: string;
    user: {
      id: number;
      name: string;
      type: string;
      avatar: string;
      rating: {
        avg: string;
        count: number;
      };
      localed_type: string;
      created_at: string;
      created_at_formatted: string;
    };
    created_at: string;
    created_at_formatted: string;
  };
  index: number;
  From?: string;
  Dashboard: string;
}
export interface FinancialTransactionCardProps {
  data: {
    type: string;
    status: string;
    title: string;
    user: { name: string; image: string };
    fullDate: string;
    time: string;
    amount: number;
  };
}
export interface SideBarListType {
  name: string;
  icone: JSX.Element;
  link: string;
}
export interface BAS10ChartType {
  day: string;
  Tree: number;
}
export interface StatisticsBodyProps {
  Trees: {
    day: string;
    Tree: number;
  }[];
  TotalTreesCount: number;
  RatingAvg: number;
  BaserTimeAvg: number;
  NewTreesCount: number;
  CancelRate: number;
  BenefitAVg: number;
}
export interface chatType {
  id: number;
  Person: {
    name: string;
    image: string;
  };
  Messages: {
    From: string;
    text: string;
    date: {
      hour: number;
      minute: number;
      day: number;
      mounth: number;
      year: number;
    };
    received: boolean;
    readed: boolean;
  }[];
}
export interface ChatRoomProps {
  SelectedChat: chatType;
}
export interface HistoryChatsProps {
  Chats: chatType[];
}
export interface ProfileFormType {
  avatarToken: string;
  XUrl: string;
  experiences: ExperiencesType[];
  certificates: qualificationType[];
  LinkedInUrl: string;
  DefinitiveWords: string;
  gender: string;
  category: number[];
  specialities: number[];
  name: string | undefined;
  imageFile: File | null;
  avatar: string | undefined;
  birthdate: string | undefined;
  country:
    | {
        id: number;
        name: string;
        code: string;
        key: string;
        is_default: boolean;
        currency: string;
        flag: string;
      }
    | undefined;
  email: string | undefined;
  phone: string | undefined;
}
export interface ProfileNotifiHandleSwitchProps {
  notif: {
    key: string;
    name: string;
    mail: boolean;
    database: boolean;
    webpush: boolean;
    firebase: boolean;
  };
  value: boolean;
}
export interface BookingFormType {
  Title: string;
  FileAttchToken: string[];
  specialities: number[];
  category: number[];
}
export interface CategoryListProps {
  CategoryList: number[];
  handleCategoryClick: (id: number) => void;
  Data: categorySelect[];
  From: string;
}
export interface SpecialistListProps {
  handleWorkSpaceClick: (id: number) => void;
  SelectedSpecialitiest: number[];
  data: SpecialitiesType[];
  From: string;
}
export interface timeToSelect {
  dayNumber: number;
  Fulldate: string;
  dayName: string;
}
export interface eventsDataType {
  id: string;
  title: string;
  allDay: boolean;
  start: Date;
  end: Date;
}
