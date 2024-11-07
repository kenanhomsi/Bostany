import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store"
import StopWatch from '/Icons/stopwatch_Bostany.png'
import { useDispatch } from "react-redux";
import { CloseBst10Table, OpenBst10Table, OpenBst10Time } from "../../redux/Slices/PopUpSlice";
import { ToggleSwitch } from "flowbite-react";
import { PiTrash } from "react-icons/pi";
import { addNewSelectedTime, SetSelectedTimeFromApi } from "../../redux/Slices/Bst10Slice";
import { useUpdateProfileSettings } from "../../utils/api/User/usePatchProfileSettings";
import { useGetUserProfile } from "../../utils/api/User/useGetUserProfile";
import { DeleteSubNewSelectedTime, EmptyAllSubNewSelectedTime } from "../../redux/Slices/Bst10SubSlice";
import { arabicDayType, translateDayToEnglish } from "../../utils/Functions";
import { daysOfWeek } from "../../utils/data";
import { timeToSelect } from "../../Types";

const Bst10TablePop = () => {
    const dispatch = useDispatch()
    const [SubmitTime, setSubmitTime] = useState(false)
    const { data } = useGetUserProfile();
    useEffect(() => {
        if (data?.data) {
            dispatch(SetSelectedTimeFromApi(data.data.settings?.schedules))
        }
    }, [data])
    const { mutate, isLoading } = useUpdateProfileSettings();
    const [switchToRepetWeekly, setswitchToRepetWeekly] = useState(['']);
    const [DaySelect, setDaySelect] = useState<timeToSelect[]>([]);
    const TimeSelected = useAppSelector((state) => state.Bst10.SelectedTime)
    const SubTimeSelected = useAppSelector((state) => state.BstSub10.SubNewSelectedTime)
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
        if (SubmitTime && TimeSelected) {
            mutate({
                payload: {
                    schedules: TimeSelected
                }
            })
            setSubmitTime(false);
            dispatch(OpenBst10Table());
            dispatch(CloseBst10Table());

        }

    }, [TimeSelected, SubmitTime])
    const handleSubmit = () => {
        SubTimeSelected.map((ele) => (
            DaySelect.map((day) => {
                const repeatValue = switchToRepetWeekly.includes(day.dayName)
                dispatch(addNewSelectedTime({
                    from_time: ele.from_time, //"2:00 PM"
                    to_time: ele.to_time,  ///"2:00 PM"
                    date: day.Fulldate, //"2024-11-08"
                    day_name: translateDayToEnglish(day.dayName as unknown as arabicDayType),// "monday"
                    repeat: repeatValue,
                }))
            })
        ))
        setSubmitTime(true);
        dispatch(EmptyAllSubNewSelectedTime());
    }
    const handleCancel = () => {
        dispatch(OpenBst10Time())
        dispatch(CloseBst10Table())
    }
    const HandleWeeklySwitch = (day: string) => {
        const newArry = switchToRepetWeekly.includes(day) ? switchToRepetWeekly.filter((ele) => ele != day) : [...switchToRepetWeekly, day]
        setswitchToRepetWeekly(newArry)
    }
    const handleDeleteThisTime = (id: string) => {
        dispatch(DeleteSubNewSelectedTime(id))
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
            Fulldate: `${yearNumber}-${monthNumber + 1}-${dayNumber}`,
            dayName: dayName
        });
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
                <div className="flex flex-col gap-3 my-3">
                    {
                        DaySelect.map((day, index) => (
                            <div className="flex flex-col gap-2 px-3" key={index}>
                                <div className="flex justify-between items-center">
                                    <p className=" text-[22px] font-medium">{day.dayName}</p>
                                    <div className='flex   gap-4'>
                                        <p className='font-medium text-sm text-dark'>تكرار اسبوعي</p>
                                        <ToggleSwitch sizing="md"
                                            theme={{
                                                toggle: {
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
                                    {SubTimeSelected &&
                                        SubTimeSelected.map((ele, index) => (
                                            <div className="flex gap-4 items-center " key={index}>
                                                <div className="flex-1 flex  justify-center  gap-3 rounded-2xl py-4  bg-BostanySurfaceContainer">
                                                    <p className=" text-dark font-medium">من</p>
                                                    <p className=" text-BostanyPrimary text-xl font-medium">{`${ele.from_time.split(' ')[0]} ${ele.from_time.split(' ')[1] == 'AM' ? 'ص' : 'م'}`}</p>
                                                </div>
                                                <div className="flex-1 flex gap-3  justify-center rounded-2xl py-4  bg-BostanySurfaceContainer">
                                                    <p className=" text-dark font-medium">الى</p>
                                                    <p className=" text-BostanyPrimary text-xl font-medium">{`${ele.to_time.split(' ')[0]} ${ele.to_time.split(' ')[1] == 'AM' ? 'ص' : 'م'}`}</p>
                                                </div>
                                                <PiTrash className=" text-GeneralError text-3xl cursor-pointer" onClick={() => handleDeleteThisTime(ele.id)} />
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