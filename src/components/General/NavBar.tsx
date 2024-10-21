import { Link, useLocation } from "react-router-dom"
import { BaserSidbarData, BostanySidbarData } from "../../utils/data"
import { PiBell } from "react-icons/pi";
import { Avatar, Dropdown } from "flowbite-react";
import avaterImage from '/Images/Avatars.png'
import { SlArrowLeft } from "react-icons/sl";


const NavBar = ({ DashBoard }: { DashBoard: string }) => {
    const pathname = useLocation().pathname
    let Title
    if (DashBoard == 'Baser') {
        if (pathname.split('/')[2] == 'bostanyProfile') {
            Title = <p className="flex items-center gap-3"> <span className="text-xl font-semibold text-dark">الرئيسية</span><SlArrowLeft className="w-4 h-4" /> <span className="text-xl font-semibold text-dark">بستاني</span></p>
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
            Title = <p className="flex items-center gap-3"> <span className="text-xl font-semibold text-dark">الرئيسية</span><SlArrowLeft className="w-4 h-4" /> <span className="text-xl font-semibold text-dark">بستاني</span></p>
        } else {
            Title = BostanySidbarData.filter((ele) => ele.link == pathname)[0].name
        }
    }
    const NotificationDataList = [
        {
            image: avaterImage,
            seedStatus: 'تم قبول البذرة',
            seedOwner: 'مهند فارس',
            time: 'منذ ساعة'
        },
        {
            image: avaterImage,
            seedStatus: 'تم قبول البذرة',
            seedOwner: 'مهند فارس',
            time: 'منذ ساعة'
        }
    ]
    return (
        <div className="px-10 py-6   fixed  top-0  z-[500] pr-[280px]  w-full right-0  bg-BaserbodyLigh flex h-20 justify-between items-center">
            <div className="text-xl font-semibold text-dark pr-5">{Title}</div>
            <div className=" flex gap-6 items-center  text-2xl">
                <Dropdown
                    inline
                    renderTrigger={() => <p className="relative"><PiBell className=" cursor-pointer w-6 h-6" /><span className={`w-3 h-3 absolute ${NotificationDataList.length == 0 ? 'hidden' : ' block'}   rounded-full bg-red-500 top-0 right-0`}></span> </p>
                    }
                    label=''
                    className="w-[40%] p-7 rounded-[40px] mt-5   DropDownShadow"
                >
                    <div className="flex justify-between w-full mb-5">
                        <span className="text-[22px] font-semibold text-BaserOnSurfase">الاشعارات</span>
                        <span className={`text-sm  font-medium cursor-pointer ${DashBoard == 'Baser' ? ' text-BaserPrimary' : ' text-BostanyPrimary'}`}>أجعل كل الرسائل مقروءة</span>
                    </div>
                    {
                        NotificationDataList && NotificationDataList.length > 0 && NotificationDataList.map((not, index) => (
                            <Dropdown.Item className="flex items-center my-3 gap-2 rounded-3xl" key={index}>
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex gap-2 items-center">
                                        <img src={not.image} alt="Organization" className="w-[72px] h-[72px] rounded-full" />
                                        <div className="flex flex-col">
                                            <span className="font-medium text-base text-BaserOnSurfase">{not.seedStatus}</span>
                                            <span className="font-medium text-sm text-[#48464A]">مع {not.seedOwner}</span>
                                        </div>
                                    </div>
                                    <div className=" flex flex-col items-end gap-4">
                                        <div className=" w-3 h-3 bg-red-800  rounded-full"></div>
                                        <span>{not.time}</span>
                                    </div>
                                </div>

                            </Dropdown.Item>
                        ))
                    }
                    {
                        NotificationDataList && NotificationDataList.length == 0 &&
                        <div className="flex flex-col items-center gap-10 my-10  self-center">
                            <PiBell className={` ${DashBoard == 'Baser' ? 'text-BaserPrimary' : 'text-BostanyPrimary'} w-[100px] h-[100px]`} />
                            <p className="text-xl font-medium text-BaserOnSurfase">لا توجد إشعارات في الوقت الحالي</p>
                        </div>
                    }
                </Dropdown>
                <Link to={`/${DashBoard}/profile/countInfo`}>
                    <Avatar img={avaterImage} alt={avaterImage} rounded className={`border-2 ${DashBoard == 'Baser' ? "border-BaserPrimary" : 'border-BostanyPrimary'}   cursor-pointer rounded-full`} />
                </Link>
            </div>
        </div>
    )
}

export default NavBar