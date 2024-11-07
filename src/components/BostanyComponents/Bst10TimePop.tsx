import { ToggleSwitch } from "flowbite-react"
import { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { CloseBst10Time, OpenBst10Table } from "../../redux/Slices/PopUpSlice";
import { formatTime } from "../../utils/Functions";
import { addSubNewSelectedTime } from "../../redux/Slices/Bst10SubSlice";

const Bst10TimePop = () => {
    const PriceArray = [0, 10, 20, 30]
    const dispatch = useDispatch()
    const [switchToFreeNow, setswitchToFreeNow] = useState(false);
    const [SelectedPrice, setSelectedPrice] = useState(0)
    const [SelectedTimeFormated, setSelectedTimeFormated] = useState(false)
    const [SelectedFromTime, setSelectedFromTime] = useState({
        minute: 0,
        hour: 0,
        period: 'ص'
    })
    const [SelectedToTime, setSelectedToTime] = useState({
        minute: 0,
        hour: 0,
        period: 'ص'
    })
    const handleFromTimeMinuteChange = (dir: string) => {
        setSelectedTimeFormated(true);
        if (dir == 'up') {
            if (SelectedFromTime.minute != 60) {
                setSelectedFromTime({
                    ...SelectedFromTime,
                    minute: SelectedFromTime.minute + 1
                })
            }
        } else {
            if (SelectedFromTime.minute != 0) {
                setSelectedFromTime({
                    ...SelectedFromTime,
                    minute: SelectedFromTime.minute - 1
                })
            }
        }
    }
    const handleFromTimeHoureChange = (dir: string) => {
        setSelectedTimeFormated(true);
        if (dir == 'up') {
            if (SelectedFromTime.hour != 12) {
                setSelectedFromTime({
                    ...SelectedFromTime,
                    hour: SelectedFromTime.hour + 1
                })
            }
        } else {
            if (SelectedFromTime.hour != 0) {
                setSelectedFromTime({
                    ...SelectedFromTime,
                    hour: SelectedFromTime.hour - 1
                })
            }
        }
    }
    const handleToTimeMinuteChange = (dir: string) => {
        setSelectedTimeFormated(true);
        if (dir == 'up') {
            if (SelectedToTime.minute != 60) {
                setSelectedToTime({
                    ...SelectedToTime,
                    minute: SelectedToTime.minute + 1
                })
            }
        } else {
            if (SelectedToTime.minute != 0) {
                setSelectedToTime({
                    ...SelectedToTime,
                    minute: SelectedToTime.minute - 1
                })
            }
        }
    }
    const handleToTimeHoureChange = (dir: string) => {
        setSelectedTimeFormated(true);
        if (dir == 'up') {
            if (SelectedToTime.hour != 12) {
                setSelectedToTime({
                    ...SelectedToTime,
                    hour: SelectedToTime.hour + 1
                })
            }
        } else {
            if (SelectedToTime.hour != 0) {
                setSelectedToTime({
                    ...SelectedToTime,
                    hour: SelectedToTime.hour - 1
                })
            }
        }
    }
    const handlechangeToTimePeriod = () => {
        const newPeriod = SelectedToTime.period == 'ص' ? 'م' : 'ص'
        setSelectedToTime({
            ...SelectedToTime,
            period: newPeriod
        })
    }
    const handlechangeFromTimePeriod = () => {
        const newPeriod = SelectedFromTime.period == 'ص' ? 'م' : 'ص'
        setSelectedFromTime({
            ...SelectedFromTime,
            period: newPeriod
        })
    }
    useEffect(() => {
        if (switchToFreeNow) {
            const date = new Date()
            const hour = +date.getHours() > 12 ? +date.getHours() - 12 : +date.getHours()
            const period = +date.getHours() > 12 ? 'م' : 'ص'
            setSelectedFromTime({
                minute: date.getMinutes(),
                hour: hour,
                period: period
            })
        }
    }, [switchToFreeNow])
    const handleSubmit = () => {
        const uniqueId = Math.random().toString(36).substring(2, 9)
        dispatch(addSubNewSelectedTime({
            id: uniqueId,
            from_time: `${formatTime(SelectedFromTime.hour)}:${formatTime(SelectedFromTime.minute)} ${SelectedFromTime.period == 'ص' ? 'AM' : 'PM'}`, //"2:00 PM"
            to_time: `${formatTime(SelectedToTime.hour)}:${formatTime(SelectedToTime.minute)} ${SelectedToTime.period == 'ص' ? 'AM' : 'PM'}`,  ///"2:00 PM"
        }))
        dispatch(OpenBst10Table());
        dispatch(CloseBst10Time());
    }
    const handleCancel = () => {
        dispatch(CloseBst10Time());
    }
    return (
        <div className="flex flex-col gap-6 ">
            <div className='flex  items-center  justify-between w-full'>
                <p className='font-semibold text-[28px] text-BostanyOnSurface'>متاح الآن</p>
                <ToggleSwitch sizing="md"
                    theme={{
                        toggle: {
                            checked: {
                                on: "after:translate-x-full after:border-white rtl:after:-translate-x-full  !bg-BostanyPrimary"
                            }
                        }
                    }}
                    checked={switchToFreeNow}
                    onChange={setswitchToFreeNow} />
            </div>
            <div className="flex flex-col gap-3">
                <p className=" text-xl font-medium text-BostanyOnSurface">المدة</p>
                <div className={`flex ${switchToFreeNow ? ' justify-center' : ' justify-between'}  `}>
                    {!switchToFreeNow &&
                        <div className="flex flex-col  gap-3">
                            <p className=" text-BostanyPrimary font-medium">من</p>
                            <div className="flex gap-3  items-end">
                                <div className=" flex flex-col gap-3">
                                    <p className=" text-dark font-medium">ساعة</p>
                                    <div className="flex flex-col items-center justify-center gap-2 mr-1">
                                        <RiArrowUpSLine className=" text-[22px] cursor-pointer text-dark"
                                            onClick={() => handleFromTimeHoureChange('up')} />
                                        <p className=" border border-[#8E918F] py-[10px] px-[17px] rounded-2xl text-lg font-medium text-BostanyOnSurface">{formatTime(SelectedFromTime.hour)}</p>
                                        <RiArrowUpSLine className=" rotate-180  text-[22px] cursor-pointer text-dark" onClick={() => handleFromTimeHoureChange('down')} />
                                    </div>
                                </div>
                                <div className=" flex flex-col gap-3">
                                    <p className=" text-dark font-medium">دقيقة</p>
                                    <div className="flex flex-col items-center justify-center gap-2 mr-1">
                                        <RiArrowUpSLine className=" text-[22px] cursor-pointer text-dark" onClick={() => handleFromTimeMinuteChange('up')} />
                                        <p className=" border border-[#8E918F] py-[10px] px-[17px] rounded-2xl text-lg font-medium text-BostanyOnSurface">{formatTime(SelectedFromTime.minute)}</p>
                                        <RiArrowUpSLine className=" rotate-180  text-[22px] cursor-pointer text-dark" onClick={() => handleFromTimeMinuteChange('down')} />
                                    </div>
                                </div>
                                <p className=" mb-12 text-dark text-sm cursor-pointer  font-medium" onClick={handlechangeFromTimePeriod}>{SelectedFromTime.period == 'ص' ? 'صباحا' : 'مساء'}</p>
                            </div>

                        </div>
                    }
                    <div className="flex flex-col gap-3">
                        <p className=" text-BostanyPrimary font-medium">الى</p>
                        <div className="flex gap-3  items-end">
                            <div className=" flex flex-col gap-3">
                                <p className=" text-dark font-medium">ساعة</p>
                                <div className="flex flex-col items-center justify-center gap-2 mr-1">
                                    <RiArrowUpSLine className=" text-[22px] cursor-pointer text-dark" onClick={() => handleToTimeHoureChange('up')} />
                                    <p className=" border border-[#8E918F] py-[10px] px-[17px] rounded-2xl text-lg font-medium text-BostanyOnSurface">{formatTime(SelectedToTime.hour)}</p>
                                    <RiArrowUpSLine className=" rotate-180  text-[22px] cursor-pointer text-dark" onClick={() => handleToTimeHoureChange('down')} />
                                </div>
                            </div>
                            <div className=" flex flex-col gap-3">
                                <p className=" text-dark font-medium">دقيقة</p>
                                <div className="flex flex-col items-center justify-center gap-2 mr-1">
                                    <RiArrowUpSLine className=" text-[22px] cursor-pointer text-dark" onClick={() => handleToTimeMinuteChange('up')} />
                                    <p className=" border border-[#8E918F] py-[10px] px-[17px] rounded-2xl text-lg font-medium text-BostanyOnSurface">{formatTime(SelectedToTime.minute)}</p>
                                    <RiArrowUpSLine className=" rotate-180  text-[22px] cursor-pointer text-dark" onClick={() => handleToTimeMinuteChange('down')} />
                                </div>
                            </div>
                            <p className=" mb-12 text-dark text-sm  cursor-pointer font-medium" onClick={handlechangeToTimePeriod}>{SelectedToTime.period == 'ص' ? 'صباحا' : 'مساء'}</p>
                        </div>

                    </div>
                </div>
                {
                    SelectedTimeFormated &&
                    <div className=" text-[22px] flex self-center my-0 text-BaserPrimary font-semibold">
                        {
                            switchToFreeNow ? 'الان' :
                                <p>{`${formatTime(SelectedFromTime.hour)}:${formatTime(SelectedFromTime.minute)} ${SelectedFromTime.period}`}</p>
                        }
                        <p className="mx-2">-</p>
                        <p>{`${formatTime(SelectedToTime.hour)}:${formatTime(SelectedToTime.minute)} ${SelectedToTime.period}`}</p>
                    </div>
                }
            </div>

            <div className=" flex flex-col gap-3">
                <p className=" text-xl font-medium text-BostanyOnSurface">السعر</p>
                <div className=" grid grid-cols-2 gap-2">
                    {
                        PriceArray.map((ele, index) => (
                            <button key={index} onClick={() => setSelectedPrice(ele)} className={` ${SelectedPrice == ele ? 'border-BostanyPrimary ' : 'border-BostanySurfaceContainer'} border-2 bg-BostanySurfaceContainer py-3  rounded-2xl text-xl font-medium text-BostanyOnSurface`}>
                                {ele == 0 ? 'مجانا' : `${ele} ر.س`}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className=" w-full flex gap-4   border-t  bordder-[#8E918F] py-5">
                <button onClick={handleSubmit} disabled={!SelectedTimeFormated} className={`${SelectedTimeFormated ? 'bg-BostanyPrimary text-white' : 'bg-BaserOutline text-BostanyOnSurface opacity-35'}  rounded-full  py-4 px-5 flex-1  font-medium `}>تاكيد</button>
                <button onClick={handleCancel} className=" rounded-full  border border-[#8E918F] py-4 px-5 flex-1 font-medium text-BostanyPrimary">جدولة لاحقة</button>
            </div>

        </div>
    )
}

export default Bst10TimePop