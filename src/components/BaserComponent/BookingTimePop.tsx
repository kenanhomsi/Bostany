import { Button } from "flowbite-react"
import { useAppSelector } from "../../redux/store"
import TimeBarProfile from "./TimeBarProfile"
import { useState } from "react"
import StopWatch from '/Icons/stopwatch_high_contrast 1.png'
import { PiPlus } from "react-icons/pi";
import { PiMinus } from "react-icons/pi";
import { useDispatch } from "react-redux"
import { CloseBookingTimePop, OpenBookingConfirmPop } from "../../redux/Slices/PopUpSlice"
import { CardsBastanyData } from "../../utils/data"
import { PutBookingData } from "../../redux/Slices/BookingSlice"

const BookingTimePop = () => {
    const dispatch = useDispatch()
    const BostanyId = useAppSelector((state) => state.booking.BostanyId)
    const BostanyData = CardsBastanyData.filter((ele) => ele.id == BostanyId)[0]
    const [TimeSelected, setTimeSelected] = useState('')
    const [FromToTimeSelected, setFromToTimeSelected] = useState('')
    const [DaySchedule] = useState(true);
    const [startOfMeeting, setstartOfMeeting] = useState(9)
    const [DurationOfMeeting, setDurationOfMeeting] = useState(10)
    const handleCancel = () => {
        dispatch(CloseBookingTimePop())
    }
    const HandleSubmit = () => {
        dispatch(PutBookingData({
            SelectedDay: TimeSelected,
            SelectTime: FromToTimeSelected,
            SelectedStartTime: startOfMeeting,
            SelectedDuration: DurationOfMeeting,
            Title: ''
        }))
        dispatch(OpenBookingConfirmPop())
        dispatch(CloseBookingTimePop())
    }
    const handleDisabled = TimeSelected == '' || FromToTimeSelected == '' ? true : false
    const handleFromToTimeSelecet = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFromToTimeSelected(e.currentTarget.id)
    }
    return (
        <div className="flex flex-col gap-8">
            <TimeBarProfile TimeSelected={TimeSelected} setTimeSelected={setTimeSelected} />
            {DaySchedule ?
                <>
                    <div className=" flex gap-3">
                        {
                            BostanyData.FreeTime.map((ele, index) => (
                                <Button id={`${ele.to!}-${ele.from!}`} key={index} onClick={handleFromToTimeSelecet} className={`${index == 0 ? 'bg-GeneralSuccessContainer text-white border-2 hover:!bg-GeneralSuccessContainer  border-GeneralSuccessContainer' : 'bg-transparent text-black border-2 border-BaserPrimary hover:!bg-transparent'}  rounded-full  w-full`} ><span>{ele.from}:00</span> - <span>{ele.to}:00</span> </Button>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-4 mr-20">
                        <div className="flex  items-center gap-8">
                            <p className="text-sm font-medium text-dark">البداية</p>
                            <div className="flex items-center gap-8">
                                <button onClick={() => setstartOfMeeting((pre) => pre + 1)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-lg text-BaserPrimary"><PiPlus /></button>
                                <p className="flex items-center flex-row-reverse gap-2"> <p><span>{startOfMeeting}</span>:00</p></p>
                                <button onClick={() => setstartOfMeeting((pre) => pre - 1)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-lg text-BaserPrimary"><PiMinus /></button>
                            </div>
                        </div>
                        <div className="flex  items-center gap-8">
                            <p className="text-sm font-medium text-dark">المدة</p>
                            <div className="flex items-center gap-8">
                                <button onClick={() => setDurationOfMeeting((pre) => pre + 10)} className="w-6 h-6 border  flex items-center  justify-center  border-BaserPrimary rounded-full text-lg text-BaserPrimary text-center"><PiPlus /></button>
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
                {
                    DaySchedule ? <>
                        <Button disabled={handleDisabled} onClick={HandleSubmit} className="bg-BaserPrimary text-white rounded-full hover:!bg-BaserFoshiy flex-1" >التالي</Button>
                        <Button onClick={handleCancel} className="  text-base font-medium border-none rounded-full " color="light" >الغاء</Button>
                    </> :
                        <Button onClick={handleCancel} className="text-BaserPrimary  text-base font-medium border w-full rounded-full " color="light" >الغاء</Button>
                }

            </div>
        </div>
    )
}

export default BookingTimePop