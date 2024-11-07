import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { TimeBarProps } from "../../Types";
import { daysOfWeek } from "../../utils/data";
import { formatTime } from "../../utils/Functions";

const TimeBarProfile = ({ TimeSelected, setTimeSelected }: TimeBarProps) => {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref);
    const DateArray = [];
    const today = new Date()
    for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        const dayName = daysOfWeek[date.getDay()];
        const dayNumber = date.getDate();
        const monthNumber = date.getMonth() + 1;
        const yearNumber = date.getFullYear();
        DateArray.push({
            dayNumber: dayNumber,
            Fulldate: `${yearNumber}-${formatTime(monthNumber)}-${formatTime(dayNumber)}`,
            dayName: dayName
        });
    }
    const handleClick = (date: string) => {
        setTimeSelected(date)
    }
    return (
        <div
            ref={ref}
            {...events}
            className={` gap-2 flex w-full space-x-3 overflow-x-scroll scrollbar-hide  `}
        >
            {DateArray.map((dateItem, index) => (
                <div onClick={() => handleClick(dateItem.Fulldate)}
                    className={` ${TimeSelected == dateItem.Fulldate ? 'bg-BaserPrimary text-white ' : ' text-BaserOnSurfase border-[#9966FF]'} flex flex-col gap-1 items-center justify-center  rounded-full border !cursor-pointer   min-w-20 h-20 `} key={index}>
                    <p className={` text-sm font-medium`}>{today.getDate() == dateItem.dayNumber ? 'اليوم' : dateItem.dayName}</p>
                    <p className={`  text-xs  font-normal `}>{dateItem.dayNumber} / {dateItem.Fulldate.split('-')[1]} </p>
                </div>
            ))
            }
        </div>
    )
}

export default TimeBarProfile