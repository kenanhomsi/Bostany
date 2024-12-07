import { Button } from "flowbite-react"
import { useAppSelector } from "../../redux/store"
import TimeBarProfile from "./TimeBarProfile"
import { useEffect, useState } from "react"
import StopWatch from '/Icons/stopwatch_high_contrast 1.png'
import { PiPlus } from "react-icons/pi";
import { PiMinus } from "react-icons/pi";
import { useDispatch } from "react-redux"
import { CloseBookingTimePop, OpenBookingConfirmPop } from "../../redux/Slices/PopUpSlice"
import { PutBookingData } from "../../redux/Slices/BookingSlice"
import { arabicTimeFormat, calculateEndTime, formatTime } from "../../utils/Functions"
import { useGetShowUser } from "../../utils/api/User/useGetShowUser"
import { schedulesType } from "../../Types/api"

const BookingTimePop = () => {
    const dispatch = useDispatch()
    const BostanyId = useAppSelector((state) => state.booking.BostanyId)
    const { data } = useGetShowUser({
        queryKey: ['id', BostanyId]
    });
    const [DayScheduleArray, setDayScheduleArray] = useState<schedulesType[]>([]);

    const [TimeSelected, setTimeSelected] = useState('')
    const [FromToTimeSelected, setFromToTimeSelected] = useState('')
    const [startOfMeeting, setstartOfMeeting] = useState(9)
    const [DurationOfMeeting, setDurationOfMeeting] = useState(10)
    const handleCancel = () => {
        dispatch(CloseBookingTimePop())
    }

    useEffect(() => {
        const ScheduleArray = data?.data.settings?.schedules.filter((ele) => ele.date == TimeSelected)
        setDayScheduleArray(ScheduleArray!);
    }, [TimeSelected])
    const HandleSubmit = () => {
        dispatch(PutBookingData({
            SelectedDay: TimeSelected,
            SelectTime: FromToTimeSelected == '' ? `${`${formatTime(startOfMeeting)}:00`}-${calculateEndTime(`${startOfMeeting}:00`, +DurationOfMeeting)}` : FromToTimeSelected,
            SelectedStartTime: startOfMeeting,
            SelectedDuration: DurationOfMeeting,
            Title: ''
        }))
        dispatch(OpenBookingConfirmPop())
        dispatch(CloseBookingTimePop())
    }
    const handleDisabled = TimeSelected == '' ? true : false
    const handleFromToTimeSelecet = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFromToTimeSelected(e.currentTarget.id)
        setstartOfMeeting(+e.currentTarget.id.split('-')[1].split(':')[0])

    }
    console.log(FromToTimeSelected)
    return (
        <div className="flex flex-col gap-8 overflow-x-hidden">
            <TimeBarProfile TimeSelected={TimeSelected} setTimeSelected={setTimeSelected} />
            {DayScheduleArray && DayScheduleArray.length > 0 ?
                <>
                    <div className=" flex gap-2 px-2">
                        {DayScheduleArray.filter((ele, index) => ele.id != '' && index < 3).map((ele, index) => (
                            <Button id={`${ele.to_time!}-${ele.from_time!}`} key={index} onClick={handleFromToTimeSelecet} className={`${FromToTimeSelected == `${ele.to_time!}-${ele.from_time!}` ? 'bg-GeneralSuccessContainer text-white border-2 hover:!bg-GeneralSuccessContainer focus:outline-0   border-GeneralSuccessContainer' : 'bg-transparent text-black border-2 border-BaserPrimary focus:outline-0 hover:!bg-transparent'}  rounded-full  truncate flex items-center justify-center focus:ring-0 focus:outline-[2px] z-10  max-w-[180px]`} ><span>{arabicTimeFormat(ele.from_time)}</span>-<span>{arabicTimeFormat(ele.to_time)}</span> </Button>
                        ))
                        }
                    </div>
                    <div className="flex mr-20 flex-col gap-8">
                        <div className="flex  items-center gap-12">
                            <p className="text-sm font-medium text-dark">البداية</p>
                            <div className="flex items-center gap-10">
                                <button disabled={FromToTimeSelected != '' && startOfMeeting == +FromToTimeSelected.split('-')[0].split(':')[0]} onClick={() => setstartOfMeeting((pre) => pre + 1)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-lg text-BaserPrimary"><PiPlus /></button>
                                <p className="flex items-center flex-row-reverse gap-2"> <p><span>{startOfMeeting}</span>:00</p></p>
                                <button disabled={FromToTimeSelected != '' && startOfMeeting == +FromToTimeSelected.split('-')[1].split(':')[0]} onClick={() => setstartOfMeeting((pre) => pre - 1)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-lg text-BaserPrimary"><PiMinus /></button>
                            </div>
                        </div>
                        <div className="flex  items-center gap-12">
                            <p className="text-sm font-medium text-dark">المدة</p>
                            <div className="flex items-center gap-8">
                                <button onClick={() => setDurationOfMeeting((pre) => pre + 10)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-lg text-BaserPrimary"><PiPlus /></button>
                                <p><p><span>{DurationOfMeeting}</span></p></p>
                                <button onClick={() => setDurationOfMeeting((pre) => pre - 10)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-lg text-BaserPrimary"><PiMinus /></button>
                            </div>
                        </div>
                    </div>
                </> :
                <div className=" flex flex-col gap-4 items-center">
                    <img src={StopWatch} alt={StopWatch} className="" />
                    <p className="text-[22px] font-semibold text-BaserOnSurfase">لا يوجد أوقات متاحة اليوم</p>
                </div>
            }
            <div className="w-full flex gap-5 items-center px-4 border-t border-[#938F94] pt-5 ">
                {DayScheduleArray && DayScheduleArray.length > 0 ? <>
                    <Button disabled={handleDisabled} onClick={HandleSubmit} className="bg-BaserPrimary flex items-center text-white rounded-full  hover:!bg-BaserPrimary flex-1" >التالي</Button>
                    <Button onClick={handleCancel} className="  text-base font-medium border-none flex items-center rounded-full " color="light" >الغاء</Button>
                </> :
                    <Button onClick={handleCancel} className="text-BaserPrimary flex items-center  text-base font-medium border w-full rounded-full " color="light" >الغاء</Button>
                }

            </div>
        </div >
    )
}

export default BookingTimePop