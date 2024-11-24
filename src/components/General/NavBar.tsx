import { Link, useLocation } from "react-router-dom"
import { BaserSidbarData, BostanySidbarData } from "../../utils/data"
import { PiBell } from "react-icons/pi";
import { Avatar, Dropdown } from "flowbite-react";
import { SlArrowLeft } from "react-icons/sl";
import Bas10Image from '/Icons/Bas10.png'
import { useGetNotifications } from "../../utils/api/notifications/useGetNotificaions";
import { useGetUserProfile } from "../../utils/api/User/useGetUserProfile";
import { useDispatch } from "react-redux";
import { OpenBst10Time } from "../../redux/Slices/PopUpSlice";
import { useEffect } from "react";
const NavBar = ({ DashBoard }: { DashBoard: string }) => {
    const pathname = useLocation().pathname
    const dispatch = useDispatch()
    const { data: Notification, isLoading, refetch: notifRefetch } = useGetNotifications();
    const { data, refetch } = useGetUserProfile()
    let Title
    if (DashBoard == 'Baser') {
        if (pathname.split('/')[2] == 'bostanyProfile') {
            Title = <p className="flex items-center gap-3"> <span className="text-xl font-semibold text-BostanyOnSurface">الرئيسية</span><SlArrowLeft className="w-4 h-4" /> <span className="text-xl font-semibold text-dark">بستاني</span></p>
        }
        else {
            if (pathname.split('/')[2] == 'profile') {
                Title = 'الحساب الشخصي'
            } else {
                Title = BaserSidbarData.filter((ele) => ele.link == pathname)[0].name
            }
        }
    } else {
        if (pathname.split('/')[2] == 'profile') {
            Title = <p className="flex items-center gap-3"> <span className="text-xl font-semibold text-BostanyOnSurface">الرئيسية</span><SlArrowLeft className="w-4 h-4" /> <span className="text-xl font-semibold text-dark">بستاني</span></p>
        } else {
            if (pathname.split('/')[2] == 'bst10') {
                Title = <span className="text-BostanyPrimary">بستن الآن</span>
            } else {
                Title = BostanySidbarData.filter((ele) => ele.link == pathname)[0].name
            }
        }
    }
    const handleClick = () => {
        dispatch(OpenBst10Time())
    }
    useEffect(() => {
        notifRefetch()
        refetch()
    }, [])
    const NewNotification = Notification?.data.filter((ele) => !ele.is_read)
    return (
        <div className=" pl-24 py-6    fixed  top-0  z-[1000] pr-[280px]  w-full right-0  bg-BaserbodyLigh flex h-20 justify-between items-center">
            <div className="text-[22px] font-semibold text-BostanyOnSurface pr-5">{Title}</div>
            <div className=" flex gap-6 items-center  text-2xl">
                <Dropdown
                    inline
                    renderTrigger={() => <p className="relative">
                        <PiBell className=" cursor-pointer w-6 h-6" />
                        {
                            <span className={`w-3 h-3 absolute ${NewNotification?.length == 0 ? 'hidden' : ' block'}   rounded-full bg-red-500 top-0 right-0`}></span>
                        }
                    </p>
                    }
                    label=''
                    className="w-[40%] z-[1000] p-7 flex flex-col gap-5 min-h-[40vh] max-h-[55vh] scrollbar-hide overflow-y-scroll rounded-[40px] mt-5   DropDownShadow"
                >
                    <div className="flex justify-between w-full mb-5">
                        <span className="text-[22px] font-semibold text-BaserOnSurfase">الاشعارات</span>
                        <button type="submit" className={`text-sm  font-medium cursor-pointer ${DashBoard == 'Baser' ? ' text-BaserPrimary' : ' text-BostanyPrimary'}`}>أجعل كل الرسائل مقروءة</button>
                    </div>
                    <div className=" flex flex-col gap-5">
                        {
                            !isLoading && Notification && Notification.data.length > 0 && Notification.data.map((not, index) => (
                                <Dropdown.Item className="flex items-center hover:!bg-transparent my-3 bg-transparent z-[999] gap-2 rounded-3xl" key={index}>
                                    <Link to={not.view} className="flex  justify-between items-center w-full">
                                        <div className="flex gap-3 items-center">
                                            <img src={not.user.avatar} alt={not.user.avatar} className="w-[72px] h-[72px] rounded-full" />
                                            <div className="flex flex-col items-start">
                                                <span className="font-medium text-base text-BaserOnSurfase">{not.title}</span>
                                                <span className="font-medium text-sm text-[#48464A]">مع {not.user.name}</span>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col items-end gap-4">
                                            <div className={` ${not.is_read ? 'bg-green-500' : ' bg-red-800 '} w-3 h-3 rounded-full`}></div>
                                            <span>{not.created_at_formated}</span>
                                        </div>
                                    </Link>

                                </Dropdown.Item>
                            ))
                        }
                    </div>
                    {
                        Notification?.data.length == 0 &&
                        <div className="flex flex-col items-center gap-10 my-10  self-center">
                            <PiBell className={` ${DashBoard == 'Baser' ? 'text-BaserPrimary' : 'text-BostanyPrimary'} w-[100px] h-[100px]`} />
                            <p className="text-xl font-medium text-BaserOnSurfase">لا توجد إشعارات في الوقت الحالي</p>
                        </div>
                    }
                </Dropdown>
                <Link to={`/${DashBoard}/profile/countInfo`}>
                    {
                        data?.data &&
                        <Avatar img={data?.data.avatar} alt={data?.data.avatar} rounded className={`border-2 ${DashBoard == 'Baser' ? "border-BaserPrimary" : 'border-BostanyPrimary'}   cursor-pointer rounded-full`} />
                    }
                </Link>
            </div>
            {
                DashBoard == 'Bostany' &&
                <button onClick={handleClick} className="flex absolute cursor-pointer left-[37%] items-center gap-3 bg-BostanyPrimary rounded-full border-none py-3  px-5">
                    <img src={Bas10Image} alt={Bas10Image} className=" w-6 h-6" />
                    <p className="text-base font-medium text-white">بستن</p>
                </button>
            }
        </div>
    )
}

export default NavBar