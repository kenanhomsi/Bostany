import checkedIcon from '/Icons/Verification-Fill.png'
import FlowerIcon from '/Icons/Flower-Fill.png'
import TreeIcon from '/Icons/Tree-Fill.png'
import WalletIcon from '/Icons/Wallet-Fill.png'
import Button_ChatIcon from '/Icons/Button_Chat.png'
import Button_phoneIcon from '/Icons/phone-fill.png'
import Button_BookIcon from '/Icons/Button_Book.png'
import { ProfileCardProps } from "../../Types"
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { PiHeart } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import { OpenBookingConfirmPop, OpenBookingTimePop } from '../../redux/Slices/PopUpSlice'
import { PutBookingBostanyId, PutBookingData } from '../../redux/Slices/BookingSlice'
import { useAppSelector } from '../../redux/store'
import { usePostToggleFavorite } from '../../utils/api/Favorites/usePostToggleFavorite'
import { useGetFollowingList } from '../../utils/api/Favorites/useGetListFollowings'
import { arabicTimeFormat, formatDate } from '../../utils/Functions'
import { useState } from 'react'
const ProfileCard = ({ CardShap, data }: ProfileCardProps) => {
    const pathname = useLocation().pathname
    const [loveProfiles, setloveProfiles] = useState<number[]>([]);
    const dispatch = useDispatch()
    const BookingData = useAppSelector((state) => state.booking.BookingData)
    const BookingDayFromTimeBar = useAppSelector((state) => state.booking.BookingDayFromTimeBar)
    const { mutate } = usePostToggleFavorite();
    const { data: FollowingList } = useGetFollowingList()
    const HandleFreetimeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(PutBookingBostanyId(data.id))
        dispatch(PutBookingData({
            ...BookingData,
            SelectedDay: BookingDayFromTimeBar,
            SelectTime: e.currentTarget.id
        }))
        if (pathname != '/') {
            dispatch(OpenBookingTimePop());
            dispatch(PutBookingBostanyId(data.id))
        }
        // dispatch(OpenBookingConfirmPop());
    }
    const HandleBookingIconClick = () => {
        if (pathname != '/') {
            dispatch(OpenBookingTimePop());
            dispatch(PutBookingBostanyId(data.id))
        }
    }
    const HandleBookingByVideCallClick = () => {
        dispatch(PutBookingBostanyId(data.id))
        dispatch(PutBookingData({
            ...BookingData,
            SelectedDay: BookingDayFromTimeBar,
            SelectTime: `${new Date().getHours()}:${new Date().getMinutes()}`
        }))
        dispatch(OpenBookingConfirmPop());
    }
    const HandleLoveiconClick = (id: number) => {
        const newLoveArray = loveProfiles.includes(id) ? loveProfiles.filter((ele) => ele != id) : [...loveProfiles, id]
        setloveProfiles(newLoveArray)
        mutate({
            payload: id
        })
    }
    return (
        <div className={`flex  relative  bg-BaserSurface ${CardShap == 'col' ? 'flex-col gap-2  2xl:!max-w-[22.8rem] !max-w-[18.1rem]  flex-1' : ' flex-row gap-10 w-full !px-6 !py-4'}  rounded-[32px]  `}>
            {/* <button className={`${CardShap == 'col' ? 'top-[0px] right-[0px]' : 'top-[0px] right-[0px]'} w-6 h-6 z-[10000] border border-white rounded-full ${data.online_until ? 'bg-GeneralWarningContainer' : ' bg-BaserTertiary'}  absolute `}></button> */}
            <div className={`${CardShap == 'col' ? '' : ' h-fit'} rounded-t-[32px] overflow-hidden`}>
                <Link to={pathname != '/' ? `/Baser/bostanyProfile/${data.id}` : '/#'} className='bg-cover bg-center'>
                    <img src={data.avatar} alt={data.avatar} className={` ${CardShap == 'col' ? 'xl:w-[22.7rem] xl:h-[18rem] h-[14rem]  w-[18rem]' : '!w-[250px] h-[205px] rounded-2xl'} bg-cover bg-center  `} />
                </Link>
            </div>
            <div className={` flex w-full ${CardShap == 'col' ? 'flex-col p-4 pt-0   ' : ' flex-row justify-between '}    `}>
                <div className={` flex flex-col ${CardShap == 'col' ? ' ' : 'justify-between '}  gap-4 w-full  `}>
                    {/* name and special */}
                    <div className=" flex justify-between">
                        <div className={` flex ${CardShap == 'col' ? 'flex-col' : 'flex-col-reverse '}  gap-1`}>
                            <p className="flex gap-2 items-center ">
                                <span className="text-BaserOnSurfase text-xl font-semibold">{data.name}</span>
                                <img src={checkedIcon} alt={checkedIcon} className="w-5 h-5 " />
                            </p>
                            <span className="text-dark flex  gap-2 flex-wrap text-sm font-medium">
                                {data.specialities && data.specialities.filter((ele, index) => ele.id != 0 && index < 3).map((ele, index) => (<span className='flex items-center gap-1'>{ele.text} {index < data.specialities.length - 1 && <p>-</p>}</span>))}
                            </span>
                        </div>
                        <div className="flex flex-col  items-center cursor-pointer">
                            <div onClick={() => HandleLoveiconClick(data.id)}
                                className='text-BaserPrimary text-2xl my-0'>
                                {
                                    FollowingList?.data.filter((ele) => ele.id == data.id)[0] != undefined || loveProfiles.includes(data.id) ?
                                        <PiHeartFill /> : <PiHeart />
                                }
                            </div>
                            <span className="text-[8px] relative ">{data.followers_count}</span>
                        </div>
                    </div>
                    {/* ratting and BaserCount */}
                    <div className={`flex gap-6 `}>
                        <div className="flex gap-2 items-center">
                            <img src={FlowerIcon} alt={FlowerIcon} className="w-[32px] h-[32px]" />
                            <p className="text-base font-normal"><span>{data.rating.avg}</span>/5</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={TreeIcon} alt={TreeIcon} className="w-[32px] h-[32px]" />
                            <span>{data.rating.count}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={WalletIcon} alt={WalletIcon} className=" w-[32px] h-[32px]" />
                            <p className="flex gap-1 text-base text-BaserTertiary"> <span>{10}</span>ر.س</p>
                        </div>
                    </div>
                    {/* Free time for booking */}
                    <div className={` flex flex-wrap ${CardShap == 'col' ? ' mb-5 min-h-16' : ' mb-2 '}   gap-[10px] w-full`}>
                        {/* for now i make only top 3 will upper */}
                        {data.settings.schedules && data.settings.schedules.filter((ele) => ele.date == formatDate(new Date())).filter((ele, index) => { if (ele) return index < 3 }).map((time, index) => {
                            return <button key={index} id={`${time.to_time!}-${time.from_time!}`} onClick={HandleFreetimeClick} className={`${index == 0 ? 'bg-GeneralSuccessContainer' : index == 1 ? 'bg-GeneralWarningContainer' : 'bg-BaserTertiary'}  ${index == 2 && ' xl:!block !hidden'}  px-4 py-3 h-fit rounded-full text-white text-xs font-medium   max-w-[170px]   truncate `}><span>{arabicTimeFormat(time.to_time)}</span>-<span>{arabicTimeFormat(time.from_time)}</span></button>
                        })}
                    </div>
                </div>
                <div className={`${CardShap == 'col' ? 'w-full' : ' self-end  left-5 absolute'}`}>
                    <div className={`${CardShap == 'col' ? 'w-full' : ' w-[252px] '}  flex h-[64px]   justify-around  rounded-xl rounded-tl-sm bg-BaserSurfaceContainerHige`}>
                        <button><img className="w-16 h-16" src={Button_ChatIcon} alt={Button_ChatIcon} /></button>
                        <button onClick={HandleBookingIconClick}><img className="w-16 h-16" src={Button_BookIcon} alt={Button_BookIcon} /></button>
                        <button className='flex justify-center items-center h-full' onClick={HandleBookingByVideCallClick}><img className="w-[42px] h-[42px]" src={Button_phoneIcon} alt={Button_phoneIcon} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard