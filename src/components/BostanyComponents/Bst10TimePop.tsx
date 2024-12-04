import { ToggleSwitch } from "flowbite-react"
import { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { CloseBst10Time, OpenBst10Table } from "../../redux/Slices/PopUpSlice";
import { formatTime } from "../../utils/Functions";
import { useMarkAsOnline } from "@/utils/api/User/usePostMarkAsOnline";
import { useGetUserProfile } from "@/utils/api/User/useGetUserProfile";
import { useMarkAsOffline } from "@/utils/api/User/usePostMarkAsOffline";

const Bst10TimePop = () => {
    const PriceArray = [0, 10, 20, 30]
    const dispatch = useDispatch()
    const { data } = useGetUserProfile()
    const { mutate: mutateAsOffline, isLoading: isLoadingAsOffline, isSuccess: IsSuccessAsOffline, isError: isErrorAsOffline } = useMarkAsOffline();
    const { mutate, isLoading, isSuccess, isError
    } = useMarkAsOnline();
    const [switchToFreeNow, setswitchToFreeNow] = useState(false);
    useEffect(() => {
        setswitchToFreeNow(data?.data.is_online as boolean)
    }, [data])
    const [SelectedPrice, setSelectedPrice] = useState(0)
    const [SelectedTimeFormated, setSelectedTimeFormated] = useState(false)
    const [BtnDisable, setBtnDisable] = useState(false)
    const [SelectedToTime, setSelectedToTime] = useState({
        minute: 0,
        hour: 0,
        period: 'ص'
    })
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
    const handleSubmit = () => {
        if (data?.data.is_online) {
            mutateAsOffline({})
        } else {
            let hoursTo
            if (SelectedToTime.period == 'ص') {
                hoursTo = ((SelectedToTime.hour) * 60) + SelectedToTime.minute
            } else {
                hoursTo = ((SelectedToTime.hour + 12) * 60) + SelectedToTime.minute
            }
            const hoursFrom = new Date().getHours() * 60 + new Date().getMinutes()
            const online_until = hoursTo - hoursFrom
            console.log(online_until)
            mutate({
                payload: {
                    online_until: online_until
                }
            })
        }
    }
    const handleCancel = () => {
        dispatch(OpenBst10Table());
        dispatch(CloseBst10Time());
    }
    useEffect(() => {
        if (isSuccess && IsSuccessAsOffline) {
            alert('success')
            dispatch(CloseBst10Time());
        }
    }, [isSuccess, IsSuccessAsOffline])
    useEffect(() => {
        if (data?.data.is_online) {
            if (!switchToFreeNow) {
                setBtnDisable(true)
            } else {
                setBtnDisable(false)
            }
        } else {
            if (SelectedTimeFormated && switchToFreeNow) {
                setBtnDisable(true)
            } else {
                setBtnDisable(false)
            }
        }
    }, [data, switchToFreeNow])
    return (
        <div className="flex flex-col gap-6 ">
            <div className='flex  items-center  justify-between w-full'>
                <p className='font-semibold text-[28px] text-BostanyOnSurface'>متاح الآن</p>
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
                    checked={switchToFreeNow}
                    onChange={setswitchToFreeNow} />
            </div>
            <div className="flex flex-col gap-3">
                <p className=" text-xl font-medium text-BostanyOnSurface">المدة</p>
                <div className={`flex ${!switchToFreeNow ? '  opacity-35' : ' opacity-100'} justify-center  `}>
                    <div className="flex flex-col  gap-3">
                        <div className="flex gap-3  items-end">
                            <div className=" flex flex-col gap-3">
                                <p className=" text-dark font-medium">ساعة</p>
                                <div className="flex flex-col items-center justify-center gap-2 mr-1">
                                    <RiArrowUpSLine className=" text-[22px] cursor-pointer text-dark"
                                        onClick={() => handleToTimeHoureChange('up')} />
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
                            <p className=" mb-12 text-dark text-sm cursor-pointer  font-medium" onClick={handlechangeToTimePeriod}>{SelectedToTime.period == 'ص' ? 'صباحا' : 'مساء'}</p>
                        </div>
                    </div>
                </div>
                {switchToFreeNow &&
                    SelectedTimeFormated &&
                    <div className=" text-[22px] flex self-center my-0 text-BaserPrimary font-semibold">
                        {
                            'الان'
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
                            <button key={index} onClick={() => setSelectedPrice(ele)} className={` ${SelectedPrice == ele ? 'border-BostanyPrimary text-BostanyPrimary ' : 'border-BostanySurfaceContainer text-BostanyOnSurface'} border-2 bg-BostanySurfaceContainer py-3  h-[84px]  rounded-2xl text-xl font-medium text-BostanyOnSurface`}>
                                {ele == 0 ? 'مجانا' : `${ele} ر.س`}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className=" w-full flex gap-4   border-t  bordder-[#8E918F] py-5">
                <button onClick={handleSubmit} disabled={!BtnDisable} className={`${BtnDisable ? 'bg-BostanyPrimary text-white' : 'bg-BaserOutline text-BostanyOnSurface opacity-35'}  rounded-full  py-4 px-5 flex-1  font-medium `}>{isLoading && isLoadingAsOffline ? '...loading ' : 'تاكيد '}</button>
                <button onClick={handleCancel} className=" rounded-full  border border-[#8E918F] py-4 px-5 flex-1 font-medium text-BostanyPrimary">جدولة لاحقة</button>
            </div>
            {
                isError && isErrorAsOffline && <p className=" text-GeneralError">يرجى المحاولة مرة اخرى</p>
            }
        </div>
    )
}

export default Bst10TimePop