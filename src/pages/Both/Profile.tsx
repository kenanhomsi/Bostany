import { ToggleSwitch } from "flowbite-react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import {
    BaserProfilePageSideBar, BostanyProfilePageSideBar,
} from "../../utils/data";
import { useDispatch } from "react-redux";
import PopUpModal from "../../components/General/PopUpModal";
import SwitchToBaserPopUp from "../../components/BostanyComponents/SwitchToBaserPopUp";
import { CloseSwitchToBaser, OpenSwitchToBaser } from "../../redux/Slices/PopUpSlice";
import { useGetUserProfile } from "../../utils/api/User/useGetUserProfile";
import { logout } from "../../redux/Slices/authSlice";
const Profile = () => {
    const pathname = useLocation().pathname
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { data, isLoading } = useGetUserProfile();
    const Dashboard = pathname.split('/')[1]
    const [switchToBaser, setswitchToBaser] = useState(false);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
    useEffect(() => {
        if (switchToBaser) {
            dispatch(OpenSwitchToBaser())
        }
    }, [switchToBaser, dispatch])

    let ProfileSideBar
    if (Dashboard == 'Baser') {
        ProfileSideBar = BaserProfilePageSideBar
    } else {
        ProfileSideBar = BostanyProfilePageSideBar

    }
    const HandleLogOutCLick = () => {
        dispatch(logout())
        navigate('/');
    }
    return (
        <div className="flex gap-20  mt-section py-14 pr-10 pl-24  bg-[#FFFBFF]">
            {
                !isLoading && data && <div className=" flex flex-col  w-[27rem]">
                    <div className="flex flex-col gap-8 items-center justify-center bg-BaserSurface rounded-3xl py-20 px-2  ">
                        <img src={data?.data.avatar} alt={data?.data.avatar} className={`w-[113px] h-[113px] rounded-full border-4 ${Dashboard == 'Baser' ? 'border-BaserPrimary' : 'border-BostanyPrimary'}`} />
                        <p className="text-[22px] font-medium text-[#191C1B]">{data?.data.name}</p>
                        <div className="">
                            {Dashboard == 'Baser' ? <p className={`text-BaserPrimary  text-xl font-medium`}>باذر</p> :
                                <p className="flex items-center gap-4 text-xl font-medium">
                                    <span>باذر</span>

                                    <ToggleSwitch sizing="md"
                                        theme={{
                                            toggle: {
                                                checked: {
                                                    on: "after:translate-x-full after:border-white rtl:after:-translate-x-full  !bg-BostanyPrimary"
                                                }
                                            }
                                        }}
                                        checked={switchToBaser}
                                        onChange={setswitchToBaser} />
                                    <span className="text-BostanyPrimary ">بستاني</span>
                                </p>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 my-10">
                        {ProfileSideBar.map((ele, index) => (
                            <Link to={ele.link} key={index} className={` ${pathname == ele.link ? Dashboard == 'Baser' ? ' bg-[#F6EDFF]' : 'bg-[#E6FFF5]' : 'bg-white'}  w-full rounded-3xl py-5 px-6 flex items-center gap-5 `}>
                                <p className=" text-dark text-[22px]">{ele.icon}</p>
                                <p className="text-lg font-medium text-[#191C1B]">{ele.name}</p>
                            </Link>
                        ))}
                    </div>
                    <button onClick={HandleLogOutCLick} className=" text-GeneralError border-none text-start px-5 text-lg font-medium">تسجيل الخروج</button>
                </div>
            }
            <Outlet />
            <PopUpModal
                title=''
                type="SwitchToBaser"
                PopSize="lg"
                closeIconState={true}
                closeAction={CloseSwitchToBaser}
            >
                <SwitchToBaserPopUp />
            </PopUpModal>
        </div>
    )
}

export default Profile