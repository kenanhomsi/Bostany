export interface TimeBarProps {
  TimeSelected: string;
  setTimeSelected: (value: string) => void;
}
export interface ProfileDateType {
  image: string;
  name: string;
  likes: number;
  specialization: string;
  Rate: number;
  BaserCount: number;
  Price: number;
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
  type: "BuyingCoinsPop";

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
}
