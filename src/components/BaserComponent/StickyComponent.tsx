// import { Button } from 'flowbite-react';
import { useState, useEffect } from 'react';
// import TimeBarProfile from './TimeBarProfile';
// import StopWatch from '/Icons/stopwatch_high_contrast 1.png'
// import { useDispatch } from 'react-redux';
// import { PutBookingBostanyId, PutBookingData } from '../../redux/Slices/BookingSlice';
// import { OpenBookingConfirmPop } from '../../redux/Slices/PopUpSlice';
// import { useAppSelector } from '../../redux/store';
import { IGetProfile } from '../../Types/api';
import BookingFromBostanyProfile from './BookingFromBostanyProfile';
const StickyScheduleComponent = ({ BostanyData }: { BostanyData: IGetProfile }) => {
    // const BookingData = useAppSelector((state) => state.booking.BookingData)
    // const [TimeSelected, setTimeSelected] = useState(``)
    // const [DayScheduleArray, setDayScheduleArray] = useState<schedulesType[]>([]);
    // const [startOfMeeting, setstartOfMeeting] = useState(9)
    // const [TimeGetSelect, setTimeGetSelect] = useState(false);
    // const [DurationOfMeeting, setDurationOfMeeting] = useState(10)
    const [isFixed, setIsFixed] = useState(false);
    // const dispatch = useDispatch()
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        // Check if we should fix the component
        if (scrollY > 0 && scrollY < documentHeight - windowHeight - 250) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };
    // const HandleFreetimeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     dispatch(PutBookingBostanyId(BostanyData.data.id))
    //     dispatch(PutBookingData({
    //         ...BookingData,
    //         SelectedDay: TimeSelected,
    //         SelectTime: e.currentTarget.id
    //     }))
    //     setstartOfMeeting(+BookingData.SelectTime.split('-')[0].split(':')[0])
    //     setTimeGetSelect(true);
    // }
    // const handleSubmit = () => {
    //     dispatch(OpenBookingConfirmPop())
    // }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     const ScheduleArray = BostanyData.data.settings?.schedules.filter((ele) => ele.date == TimeSelected)
    //     setDayScheduleArray(ScheduleArray!);
    // }, [TimeSelected])
    return (
        <div
            style={{
                position: isFixed ? 'fixed' : 'absolute',
                top: isFixed ? '150px' : 'auto', // Adjust as needed
                left: '100px',
                transition: 'position 0.3s',
                zIndex: 30,
            }}
        >
            <BookingFromBostanyProfile BostanyData={BostanyData} />
            {/* <div className=" flex flex-col h-fit max-w-[576px]     bg-BaserSurface p-8 rounded-[32px] gap-8">
                <p className=" text-[22px] font-semibold text-BaserOnSurfase">جدول المواعيد</p>
                <TimeBarProfile TimeSelected={TimeSelected} setTimeSelected={setTimeSelected} />
                {DayScheduleArray.length > 0 ?
                    <>
                        <div className=" flex flex-col gap-6">
                            {DayScheduleArray.map((time, index) => (
                                <Button key={index} id={`${time.from_time} - ${time.to_time}`} onClick={HandleFreetimeClick} className={`${index == 0 ? 'text-GeneralSuccessContainer focus:ring-0  focus:outline-GeneralSuccessContainer hover:!bg-white  border-GeneralSuccessContainer bg-white' : index == 1 ? 'bg-transparent focus:ring-0 focus:outline-GeneralWarningContainer  hover:!bg-white  text-GeneralWarningContainer  border-GeneralWarningContainer bg-white' : 'bg-white focus:ring-0  hover:!bg-white focus:outline-[#808080]  text-[#808080]  border-[#808080] '}  border  rounded-full  w - full`}><span>{time.to_time}</span>-<span>{time.from_time}</span></Button>
                            ))}
                        </div>
                        {
                            TimeGetSelect && BookingData.SelectTime != '' &&
                            <div className="flex flex-col gap-4">
                                <div className="flex  items-center gap-4">
                                    <p className="text-sm font-medium text-dark">البداية</p>
                                    <div className="flex items-center gap-3">
                                        <button disabled={startOfMeeting == +BookingData.SelectTime.split('-')[1].split(':')[0]} onClick={() => setstartOfMeeting((pre) => pre + 1)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-2xl text-BaserPrimary">+</button>
                                        <p className="flex items-center flex-row-reverse gap-2"> <p><span>{startOfMeeting}</span>:00</p></p>
                                        <button disabled={startOfMeeting < +BookingData.SelectTime.split('-')[0].split(':')[0]} onClick={() => setstartOfMeeting((pre) => pre - 1)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-2xl text-BaserPrimary">-</button>
                                    </div>
                                </div>
                                <div className="flex  items-center gap-4">
                                    <p className="text-sm font-medium text-dark">المدة</p>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => setDurationOfMeeting((pre) => pre + 10)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-2xl text-BaserPrimary">+</button>
                                        <p><p><span>{DurationOfMeeting}</span></p></p>
                                        <button onClick={() => setDurationOfMeeting((pre) => pre - 10)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-2xl text-BaserPrimary">-</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </> :
                    <div className=" flex flex-col gap-8 items-center">
                        <img src={StopWatch} alt={StopWatch} className="" />
                        <p className="text-[22px] font-semibold text-BaserOnSurfase">لا يوجد أوقات متاحة اليوم</p>
                    </div>
                }
                <div className="w-full flex gap-5 items-center px-4 border-t border-[#938F94] pt-5 ">
                    <Button onClick={handleSubmit} disabled={DayScheduleArray.length == 0 || !TimeGetSelect} className={` ${!TimeGetSelect || DayScheduleArray.length == 0 && 'opacity-35'} bg-BaserPrimary text-white rounded-full  hover:!bg-BaserPrimary px-5 py-3 h-fit w-[80%]`} >طلب موعد</Button>
                    <p className=" flex gap-2">10 ر.س</p>
                </div>
            </div> */}
        </div>
    );
};

export default StickyScheduleComponent;