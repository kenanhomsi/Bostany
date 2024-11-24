import { useRef } from "react";
import classNames from 'classnames';
import { daysOfWeek } from "../../utils/data";
import { useDraggable } from "react-use-draggable-scroll";
import { TimeBarProps } from "../../Types";
import useSticky from "../../Hooks/useSticky";
import { useLocation } from "react-router-dom";
const TimeBar = ({ TimeSelected, setTimeSelected }: TimeBarProps) => {
    const pathname = useLocation().pathname
    const { sticky, stickyRef } = useSticky();
    // const ref = useRef<HTMLDivElement>(null);
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
            Fulldate: `${yearNumber}-${monthNumber}-${dayNumber}`,
            dayName: dayName
        });
    }
    const handleClick = (date: string) => {
        if (date == TimeSelected) {
            setTimeSelected('')
        } else {
            setTimeSelected(date)
        }
    }
    return (
        <>
            {pathname == '/' ? <div
                ref={ref}
                {...events}
                className={` gap-5 flex w-full space-x-3 overflow-x-scroll scrollbar-hide  `}
            >
                {DateArray.map((dateItem, index) => (
                    <div
                        onClick={() => handleClick(dateItem.Fulldate)}
                        className="flex flex-col gap-2 items-center  " key={index}>
                        <p className={` ${TimeSelected == dateItem.Fulldate ? 'bg-BaserPrimary text-white ' : ''} cursor-pointer text-xl  rounded-full w-10 h-10 flex items-center justify-center`}>{dateItem.dayNumber}</p>
                        <p className={`${TimeSelected == dateItem.Fulldate ? 'text-BaserPrimary' : ''} cursor-pointer text-sm font-normal`}>{today.getDate() == dateItem.dayNumber ? 'اليوم' : dateItem.dayName}</p>
                    </div>
                ))
                }
            </div > : <div ref={stickyRef}
                className={classNames('beforsticky ', { sticky })} >
                <div
                    ref={ref}
                    {...events}
                    className={` gap-5 flex w-full space-x-3 overflow-x-scroll scrollbar-hide  `}
                >
                    {DateArray.map((dateItem, index) => (
                        <div
                            onClick={() => handleClick(dateItem.Fulldate)}
                            className="flex flex-col gap-2 items-center  " key={index}>
                            <p className={` ${TimeSelected == dateItem.Fulldate ? 'bg-BaserPrimary text-white ' : ''} cursor-pointer text-xl  rounded-full w-10 h-10 flex items-center justify-center`}>{dateItem.dayNumber}</p>
                            <p className={`${TimeSelected == dateItem.Fulldate ? 'text-BaserPrimary' : ''} cursor-pointer text-sm font-normal`}>{today.getDate() == dateItem.dayNumber ? 'اليوم' : dateItem.dayName}</p>
                        </div>
                    ))
                    }
                </div>

            </div>
            }
        </>
    )
}

export default TimeBar