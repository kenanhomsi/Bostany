import checkedIcon from '/Icons/Verification-Fill.png'
import FlowerIcon from '/Icons/Flower-Fill.png'
import TreeIcon from '/Icons/Tree-Fill.png'
import WalletIcon from '/Icons/Wallet-Fill.png'
import Button_ChatIcon from '/Icons/Button_Chat.png'
import Button_BookIcon from '/Icons/Button_Book.png'
import Button_VideoIcon from '/Icons/Button_Video.png'
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
import { arabicTimeFormat } from '../../utils/Functions'
const ProfileCard = ({ CardShap, data }: ProfileCardProps) => {
    const pathname = useLocation().pathname
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
        dispatch(OpenBookingConfirmPop());
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
        mutate({
            payload: id
        })
    }
    return (
        <div className={`flex  relative pb-4  bg-BaserSurface ${CardShap == 'col' ? 'flex-col 2xl:max-w-[22.8rem] max-w-[18.1rem]  flex-1' : ' flex-row w-full px-6 py-4'}  rounded-[32px]  `}>
            {/* <button className={`${CardShap == 'col' ? 'top-[0px] right-[0px]' : 'top-[0px] right-[0px]'} w-6 h-6 z-[10000] border border-white rounded-full ${data.online_until ? 'bg-GeneralWarningContainer' : ' bg-BaserTertiary'}  absolute `}></button> */}
            <div className={`${CardShap == 'col' ? '' : ' h-fit'} rounded-t-[32px] overflow-hidden`}>
                <Link to={pathname != '/' ? `/Baser/bostanyProfile/${data.id}` : '/#'} className='bg-cover bg-center'>
                    <img src={data.avatar} alt={data.avatar} className={` ${CardShap == 'col' ? 'xl:w-[22.6rem] xl:h-[18rem] h-[14rem]  w-[18rem]' : '!w-[250px] h-[205px] rounded-2xl'}  bg-cover bg-center `} />
                </Link>
            </div>
            <div className={` flex w-full ${CardShap == 'col' ? 'flex-col ' : ' flex-row justify-between '}  px-4   `}>
                <div className={` flex flex-col ${CardShap == 'col' ? ' ' : 'justify-between '}  gap-4 w-full my-3 `}>
                    {/* name and special */}
                    <div className=" flex justify-between">
                        <div className={` flex ${CardShap == 'col' ? 'flex-col' : 'flex-col-reverse '}  gap-1`}>
                            <p className="flex gap-2 items-center ">
                                <span className="text-BaserOnSurfase text-xl font-semibold">{data.name}</span>
                                <img src={checkedIcon} alt={checkedIcon} className="w-5 h-5 " />
                            </p>
                            <span className="text-dark flex gap-2 flex-wrap text-sm font-medium">
                                {data.specialities.map((ele, index) => (<span className='flex items-center gap-1'>{ele.text} {index < data.specialities.length - 1 && <p>-</p>}</span>))}
                            </span>
                        </div>
                        <div className="flex flex-col  items-center cursor-pointer">
                            <div onClick={() => HandleLoveiconClick(data.id)}
                                className='text-BaserPrimary text-2xl my-0'>
                                {
                                    FollowingList?.data.filter((ele) => ele.id == data.id)[0] != undefined ?
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
                    <div className={` flex flex-wrap ${CardShap == 'col' ? 'h-[84px]' : ' '}   gap-1 w-full`}>
                        {/* for now i make only top 3 will upper */}
                        {data.settings.schedules.filter((ele, index) => { if (ele) return index < 3 }).map((time, index) => {
                            return <button key={index} id={`${time.to_time!}-${time.from_time!}`} onClick={HandleFreetimeClick} className={`${index == 0 ? 'bg-GeneralSuccessContainer' : index == 1 ? 'bg-GeneralWarningContainer' : 'bg-BaserTertiary'}   px-4 py-3 h-fit rounded-full text-white text-xs font-medium`}><span>{arabicTimeFormat(time.to_time)}</span>-<span>{arabicTimeFormat(time.from_time)}</span></button>
                        })}
                    </div>
                </div>
                <div className={`${CardShap == 'col' ? 'w-full' : ' self-end  left-5 absolute'}`}>
                    <div className={`${CardShap == 'col' ? 'w-full' : ' w-[252px] '}  flex h-[64px]   justify-around rounded-xl rounded-tl-sm bg-BaserSurfaceContainerHige`}>
                        <button><img className="w-14 h-14" src={Button_ChatIcon} alt={Button_ChatIcon} /></button>
                        <button onClick={HandleBookingIconClick}><img className="w-14 h-14" src={Button_BookIcon} alt={Button_BookIcon} /></button>
                        <button onClick={HandleBookingByVideCallClick}><img className="w-14 h-14" src={Button_VideoIcon} alt={Button_VideoIcon} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard