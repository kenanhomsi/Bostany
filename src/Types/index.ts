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
