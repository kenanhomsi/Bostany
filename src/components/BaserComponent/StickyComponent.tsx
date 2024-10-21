import { Button } from 'flowbite-react';
import { useState, useEffect } from 'react';
import TimeBarProfile from './TimeBarProfile';
import StopWatch from '/Icons/stopwatch_high_contrast 1.png'
import { useDispatch } from 'react-redux';
import { PutBookingBostanyId, PutBookingData } from '../../redux/Slices/BookingSlice';
import { OpenBookingConfirmPop } from '../../redux/Slices/PopUpSlice';
import { useLocation } from 'react-router-dom';
import { CardsBastanyData } from '../../utils/data';
import { useAppSelector } from '../../redux/store';

const StickyScheduleComponent = () => {
    const BostanyId = useLocation().pathname.split('/')[3]
    const BostanyData = CardsBastanyData.filter((bostany) => bostany.id == +BostanyId)[0]
    const BookingData = useAppSelector((state) => state.booking.BookingData)
    const [TimeSelected, setTimeSelected] = useState(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`)
    const [DaySchedule] = useState(true);
    const [startOfMeeting, setstartOfMeeting] = useState(9)
    const [DurationOfMeeting, setDurationOfMeeting] = useState(10)
    const [isFixed, setIsFixed] = useState(false);
    const dispatch = useDispatch()

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
    const HandleFreetimeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(PutBookingBostanyId(BostanyData.id))
        dispatch(PutBookingData({
            ...BookingData,
            SelectedDay: TimeSelected,
            SelectTime: e.currentTarget.id
        }))
    }
    const handleSubmit = () => {
        dispatch(OpenBookingConfirmPop())
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                position: isFixed ? 'fixed' : 'static',
                top: isFixed ? '200px' : 'auto', // Adjust as needed
                left: '50px',
                transition: 'position 0.3s',
                zIndex: 30,
            }}
        >
            <div className="flex flex-col h-fit max-w-[500px] bg-BaserSurface p-8 rounded-[32px] gap-5">
                <p className=" text-[22px] font-semibold text-BaserOnSurfase">جدول المواعيد</p>
                <TimeBarProfile TimeSelected={TimeSelected} setTimeSelected={setTimeSelected} />
                {DaySchedule ?
                    <>
                        <div className=" flex flex-col gap-6">
                            {BostanyData.FreeTime.map((time, index) => (
                                <Button key={index} id={`${time.to!}-${time.from!}`} onClick={HandleFreetimeClick} className={`${index == 0 ? 'bg-GeneralSuccessContainer hover:!bg-GeneralSuccessContainer  border-GeneralSuccessContainer text-white' : index == 1 ? 'bg-transparent  border-GeneralWarningContainer hover:!bg-transparent text-GeneralWarningContainer' : 'bg-transparent text-[#808080]  border-[#808080]  hover:!bg-transparent'}  border  rounded-full  w-full  `}><span>{time.to}:00</span>-<span>{time.from}:00</span> صباحًا </Button>
                            ))}
                        </div>
                        {
                            TimeSelected != '' &&
                            <div className="flex flex-col gap-4">
                                <div className="flex  items-center gap-4">
                                    <p className="text-sm font-medium text-dark">البداية</p>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => setstartOfMeeting((pre) => pre + 1)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-2xl text-BaserPrimary">+</button>
                                        <p className="flex items-center flex-row-reverse gap-2"> <p><span>{startOfMeeting}</span>:00</p></p>
                                        <button onClick={() => setstartOfMeeting((pre) => pre - 1)} className="w-6 h-6 border  flex items-center  justify-center border-BaserPrimary rounded-full text-2xl text-BaserPrimary">-</button>
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
                    <Button onClick={handleSubmit} className="bg-BaserPrimary text-white rounded-full hover:!bg-BaserFoshiy w-[80%]" >بستن الآن</Button>
                    <p className=" flex gap-2">10 ر.س</p>
                </div>
            </div>
        </div>
    );
};

export default StickyScheduleComponent;