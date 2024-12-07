import { useEffect, useState } from "react";
import StopWatch from '/Icons/stopwatch_Bostany.png'
import { useDispatch } from "react-redux";
import { CloseBst10Table, OpenBst10Time } from "../../redux/Slices/PopUpSlice";
import { ToggleSwitch } from "flowbite-react";
import { useUpdateProfileSettings } from "../../utils/api/User/usePatchProfileSettings";
import { useGetUserProfile } from "../../utils/api/User/useGetUserProfile";
import { convertArabicDayToEnglish, convertDayToArabic, convertTo12HourFormat, convertTo24HourFormat, getNextDayDate } from "../../utils/Functions";
import { daysOfWeek } from "../../utils/data";
import {
    timeToSelect,
    WeeklyScheduleType
} from "../../Types";
import { PiTrash } from "react-icons/pi";
import { PiPlusCircle } from "react-icons/pi";
import { schedulesType } from "@/Types/api";


const Bst10TablePop = () => {
    const dispatch = useDispatch()
    const { data } = useGetUserProfile();
    const [WeeklySchedal, setWeeklySchedal] = useState<WeeklyScheduleType>({
        Saturday: [
            {
                id: Math.random().toString(16).slice(4),
                From: '',
                To: '',
            }
        ],
        Sunday: [
            {
                id: Math.random().toString(16).slice(4),
                From: '',
                To: '',
            }
        ],
        Monday: [
            {
                id: Math.random().toString(16).slice(4),
                From: '',
                To: '',
            }
        ],
        Tuesday: [
            {
                id: Math.random().toString(16).slice(4),
                From: '',
                To: '',
            }
        ],
        Wednesday: [
            {
                id: Math.random().toString(16).slice(4),
                From: '',
                To: '',
            }
        ],
        Thursday: [
            {
                id: Math.random().toString(16).slice(4),
                From: '',
                To: '',
            }
        ],
        Friday: [
            {
                id: Math.random().toString(16).slice(4),
                From: '',
                To: ''
            }
        ],
    });
    const { mutate, isLoading, isSuccess } = useUpdateProfileSettings();
    const [switchToRepetWeekly, setswitchToRepetWeekly] = useState(['']);
    const [DaySelect, setDaySelect] = useState<timeToSelect[]>([]);
    const handleDaySelectClick = (date: timeToSelect) => {
        const existingIndex = DaySelect.findIndex(ele => ele.Fulldate === date.Fulldate);
        let updatedDays;
        if (existingIndex !== -1) {
            updatedDays = DaySelect.filter((_, index) => index !== existingIndex);
        } else {
            updatedDays = [...DaySelect, date];
        }
        setDaySelect(updatedDays);
    };
    useEffect(() => {
        data?.data.settings?.schedules.map((ele) => {
            if (WeeklySchedal[ele.day_name as keyof typeof WeeklySchedal] && WeeklySchedal[ele.day_name as keyof typeof WeeklySchedal].filter((week) => week.From == convertTo24HourFormat(ele.from_time) && week.To == convertTo24HourFormat(ele.to_time))[0] == undefined) {
                if (WeeklySchedal[ele.day_name as keyof typeof WeeklySchedal][0].From == '') {
                    WeeklySchedal[ele.day_name as keyof typeof WeeklySchedal] = []
                }
                WeeklySchedal[ele.day_name as keyof typeof WeeklySchedal].push({
                    id: ele.id!,
                    From: convertTo24HourFormat(ele.from_time),
                    To: convertTo24HourFormat(ele.to_time)
                })
            }
            if (ele.repeat && !switchToRepetWeekly.includes(convertDayToArabic(ele.day_name))) {
                setswitchToRepetWeekly((pre) => [...pre, convertDayToArabic(ele.day_name)])
            }
        })
    }, [data])
    useEffect(() => {
        if (isSuccess) {
            dispatch(CloseBst10Table());
        }
    }, [isSuccess])
    const handleSubmit = () => {
        const keysOFWeeklySchedal = Object.keys(WeeklySchedal)
        const schedulesTime: schedulesType[] = []
        keysOFWeeklySchedal.map((day) => {
            WeeklySchedal[day as keyof typeof WeeklySchedal].map((ele) => {
                if (ele.From !== '') {
                    const isRepet = switchToRepetWeekly.includes(convertDayToArabic(day))
                    const schedalObj = {
                        from_time: convertTo12HourFormat(ele.From, 'en'),
                        to_time: convertTo12HourFormat(ele.To, 'en'),
                        date: getNextDayDate(day),
                        day_name: day,
                        repeat: isRepet,
                    }
                    schedulesTime.push(schedalObj)
                }
            })
        })
        mutate({
            payload: {
                schedules: schedulesTime
            }
        })
    }
    const handleCancel = () => {
        dispatch(OpenBst10Time())
        dispatch(CloseBst10Table())
    }
    const HandleWeeklySwitch = (day: string) => {
        const newArry = switchToRepetWeekly.includes(day) ? switchToRepetWeekly.filter((ele) => ele != day) : [...switchToRepetWeekly, day]
        setswitchToRepetWeekly(newArry)

    }
    const handleDeleteThisTime = (id: string, dayName: string) => {
        const dayArray = WeeklySchedal[dayName as keyof typeof WeeklySchedal].filter((ele) => ele.id != id)
        setWeeklySchedal((prev) => ({
            ...prev,
            [dayName]: dayArray,
        }));
    }
    const DateArray = [];
    for (let i = 0; i < 7; i++) {
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
    const handleChange = (day: string, field: string, value: string, id: string) => {
        const dayArray = WeeklySchedal[day as keyof typeof WeeklySchedal].map((ele) => {
            if (ele.id == id) {
                return {
                    ...ele, [field]: value
                }
            } else {
                return ele
            }
        })
        setWeeklySchedal((prev) => ({
            ...prev,
            [day]: dayArray,
        }));
    };
    const handleAddNewTime = (dayName: string) => {
        const dayArray = WeeklySchedal[dayName as keyof typeof WeeklySchedal]
        if (dayArray.length < 3) {
            dayArray.push({
                id: Math.random().toString(16).slice(4),
                From: '',
                To: ''
            })
            setWeeklySchedal((prev) => ({
                ...prev,
                [dayName]: dayArray,
            }));
        } else {
            return 0
        }
    }
    return (
        <div className=" max-h-[80vh] overflow-y-scroll  scrollbar-hide">
            <div className={` gap-2 flex w-full space-x-3 overflow-x-scroll scrollbar-hide  `}>
                {DateArray.map((dateItem, index) => (
                    <div
                        onClick={() => handleDaySelectClick(dateItem)}
                        className={` ${DaySelect.findIndex(ele => ele.Fulldate === dateItem.Fulldate) != -1 ? 'bg-BostanyPrimary text-white ' : ' text-BaserOnSurfase border-BostanyPrimary'} flex flex-col gap-1 items-center justify-center  rounded-full border !cursor-pointer   min-w-20 h-20 `} key={index}>
                        <p className={` text-sm font-medium`}>{dateItem.dayName}</p>

                    </div>
                ))
                }
            </div>
            {
                DaySelect.length == 0 &&
                <div className=" flex flex-col my-5 gap-8 items-center">
                    <img src={StopWatch} alt={StopWatch} className="" />
                    <p className="text-[22px] font-semibold text-BostanyOnSurface">لم يتم تحديد ايام حتي الان!</p>
                    <p className=" text-dark font-medium">يرجى اختيار يوم من أيام الأسبوع لتحديد  الأوقات المتاحة</p>
                </div>
            }
            {
                DaySelect.length > 0 &&
                <div className="flex flex-col max-h-[400px] min-h-[250px] overflow-y-scroll scrollbar-hide gap-3 my-3">
                    {
                        DaySelect.map((day, index) => (
                            <div className="flex flex-col gap-2 px-3" key={index}>
                                <div className="flex justify-between items-center">
                                    <p className=" text-[22px] font-medium">{day.dayName}</p>
                                    <div className='flex   gap-4'>
                                        <p className='font-medium text-sm text-dark'>تكرار اسبوعي</p>
                                        <ToggleSwitch sizing="md"
                                            className="h-fit"
                                            theme={{
                                                toggle: {
                                                    base: "relative rounded-full  border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-0 ",

                                                    checked: {
                                                        on: "after:translate-x-full after:border-white rtl:after:-translate-x-full  !bg-BostanyPrimary"
                                                    }
                                                }
                                            }}
                                            checked={switchToRepetWeekly.includes(day.dayName)}
                                            onChange={() => HandleWeeklySwitch(day.dayName)}
                                        />
                                    </div>
                                </div>
                                <div className=" my-3 flex flex-col gap-3">

                                    {WeeklySchedal &&
                                        WeeklySchedal[convertArabicDayToEnglish(day.dayName)].map((ele, index) => (
                                            <div className="flex gap-4 items-center " key={index}>
                                                <div className="flex-1 flex  justify-center items-center  rounded-2xl py-4  bg-BostanySurfaceContainer">
                                                    <p className=" text-dark font-medium">من</p>
                                                    <div className=" text-BostanyPrimary text-xl cursor-pointer font-medium flex">
                                                        <input
                                                            type="time"
                                                            placeholder="00:00:00"
                                                            value={ele.From}
                                                            onChange={(e) => handleChange(convertArabicDayToEnglish(day.dayName), 'From', e.target.value, ele.id)}
                                                            className="h-fit w-fit bg-transparent m-0 p-0  border-none focus:ring-0"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-1 flex gap-3  justify-center rounded-2xl py-4  bg-BostanySurfaceContainer">
                                                    <p className=" text-dark font-medium">الى</p>
                                                    <div className=" text-BostanyPrimary text-xl cursor-pointer font-medium flex">
                                                        <input
                                                            type="time"
                                                            placeholder="00:00:00"
                                                            value={ele.To}
                                                            onChange={(e) => handleChange(convertArabicDayToEnglish(day.dayName), 'To', e.target.value, ele.id)}
                                                            className="h-fit w-fit bg-transparent m-0 p-0  border-none focus:ring-0"
                                                        />
                                                    </div>
                                                </div>
                                                {
                                                    index == 0 ?
                                                        <PiPlusCircle className="  text-3xl cursor-pointer" onClick={() => handleAddNewTime(convertArabicDayToEnglish(day.dayName))} />
                                                        :
                                                        <PiTrash className=" text-GeneralError text-3xl cursor-pointer" onClick={() => handleDeleteThisTime(ele.id, convertArabicDayToEnglish(day.dayName))} />

                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }

                </div>
            }
            <div className=" w-full flex gap-4   border-t  bordder-[#8E918F] py-5">
                <button onClick={handleSubmit} disabled={DaySelect.length == 0} className={`${DaySelect.length > 0 ? 'bg-BostanyPrimary text-white' : 'bg-BaserOutline text-BostanyOnSurface opacity-35'}  rounded-full  py-4 px-5 flex-1  font-medium `}>{isLoading ? '...loading' : 'تاكيد'}</button>
                <button onClick={handleCancel} className=" rounded-full  border border-[#8E918F] py-4 px-5 flex-1 font-medium text-BostanyPrimary">رجوع</button>
            </div>
        </div>
    )
}

export default Bst10TablePop