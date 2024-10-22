/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TimeBarProps {
  TimeSelected: string;
  FromProfile?: boolean;
  setTimeSelected: (value: string) => void;
}
export interface ProfileDateType {
  id: number;
  Ratings?: {
    total: string;
    SeedOwner: string;
    ProfessionalismInDealing: string;
    QualityOfDealing: string;
    SessionQuality: string;
    SeedExperience: string;
  }[];
  Experiences?: {
    number: number;
    name: string;
    status: string;
  }[];
  WorkSpace?: string[];
  otherSpecialization?: string[];
  image: string;
  name: string;
  likes: number;
  specialization: string;
  Rate: number;
  BaserCount: number;
  Price: number;
  Certificates?: {
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
  data: ProfileDateType;
}
export interface LayoutProps {
  children: React.ReactNode;
}
export interface DropDownSelectionTypes {
  data: {
    id: number;
    name: string;
    icon: string;
    suffix: string;
  }[];
  DropDownValue?: number;
  setDropDownValue?: (index: number) => void;
  setDropDownState?: (value: boolean) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick?: () => void;
}
export interface qualificationType {
  id: number;
  educational_institution: string;
  Academic_degree: string;
  Specialization: string;
  Graduation_date: string;
}
export interface CompleteProfileFormData {
  FullName: string;
  email: string;
  checkOne: boolean;
  checkTwo: boolean;
  birthDate: Date | string;
  gender: string;
  WorkType: string;
  WorkSpace: {
    id: number;
    name: string;
  };
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
    | "SwitchToBaser";
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
  data: SeedsCardData;
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
