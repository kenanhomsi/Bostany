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
import { useAppSelector } from "@/redux/store";
const Profile = () => {
    const RegsiterAs = useAppSelector((state) => state.register.RegisterAs)
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
        <div className="flex gap-20  mt-section  py-14  2xl:pr-10 2xl:pl-24 md:pr-5 md:pl-14   ">
            {
                !isLoading && data && <div className=" flex flex-col 2xl:!w-[27rem] md:!w-[15rem]">
                    <div className={`flex flex-col gap-8 items-center justify-center ${RegsiterAs == 'Baser' ? 'bg-BaserSurface text-BaserOnSurfase' : ' bg-BostanySurfaceContainer text-BostanyOnSurface'}  rounded-3xl py-20 px-2  `}>
                        <img src={data?.data.avatar} alt={data?.data.avatar} className={`w-[113px] h-[113px] rounded-full border-4 ${RegsiterAs == 'Baser' ? 'border-BaserPrimary' : 'border-BostanyPrimary'}`} />
                        <p className="text-[22px] font-medium ">{data?.data.name}</p>
                        <div className="">
                            {data.data.type != "consultant"
                                ? <p className={`!text-BaserPrimary  text-xl font-medium`}>باذر</p> :
                                <div className="flex !items-center justify-center gap-4 text-xl font-medium">
                                    <span>باذر</span>

                                    <ToggleSwitch sizing="md"
                                        className="h-fit"
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
                                </div>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 my-10">
                        {ProfileSideBar.map((ele, index) => (
                            <Link to={ele.link} key={index} className={` ${pathname == ele.link ? RegsiterAs == 'Baser' ? ' bg-[#F6EDFF] text-BaserOnSurfase' : 'bg-[#E6FFF5] text-BostanyOnSurface' : 'bg-transparent'}  w-full rounded-3xl py-5 px-6 flex items-center gap-5 `}>
                                <p className=" !text-dark text-[22px]">{ele.icon}</p>
                                <p className="text-lg font-medium ">{ele.name}</p>
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
                PopSize="xl"
                closeIconState={true}
                closeAction={CloseSwitchToBaser}
            >
                <SwitchToBaserPopUp />
            </PopUpModal>
        </div>
    )
}

export default Profile