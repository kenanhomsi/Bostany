import { Link, useLocation } from 'react-router-dom'
import logo from '/Logo.png'

import { PiCoinsFill } from "react-icons/pi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BaserSidbarData, BostanySidbarData } from '../../utils/data';
import { useDispatch } from 'react-redux';
import { OpenBuyingCoinsPop } from '../../redux/Slices/PopUpSlice';
import { SideBarListType } from '../../Types';

const SideBar = ({ DashBoard }: { DashBoard: string }) => {
    const pathname = useLocation().pathname
    const dispatch = useDispatch();
    const handleBuyCoinesClick = () => {
        dispatch(OpenBuyingCoinsPop());
    }
    let listData: SideBarListType[] = []
    if (DashBoard == 'Baser') {
        listData = BaserSidbarData
    } else {
        listData = BostanySidbarData
    }
    return (
        <div className={` ${DashBoard == 'Baser' ? 'bg-BaserbodyLigh' : 'bg-BostanybodyLigh'} z-[1100] py-6 px-4 w-[264px] flex h-screen flex-col   gap-10  fixed `}>
            <Link to={`/${DashBoard}`} className="">
                <img src={logo} alt="logo" className="w-[4.6rem] h-14" />
            </Link>
            <div className="flex flex-col justify-between py-2  h-full">
                <div className="flex flex-col gap-6">
                    {listData.map((ele, index) => (
                        <Link to={ele.link} key={index} className={`flex items-center  ${pathname == ele.link ? DashBoard == 'Baser' ? ' !text-BaserPrimary' : '!text-BostanyPrimary' : 'text-dark'} justify-between w-full py-3 px-4 rounded-2xl ${pathname == ele.link && `${DashBoard == 'Baser' ? ' bg-BaserSurfaceDarker' : 'bg-[#E6FFF5]'}`} `}>
                            <div className={`flex items-center  gap-2  `}>
                                {
                                    pathname == ele.link ?
                                        <span className='text-2xl'>{ele.ActiveIcon}</span> :
                                        <span className='text-2xl'>{ele.icone}</span>
                                }
                                <span className='text-xs font-medium'>{ele.name}</span>
                            </div>
                            {
                                ele.name == 'المحفظة' && <p className='text-xs font-medium'><span >0.0</span> ر.س</p>
                            }
                        </Link>
                    ))}
                </div>
                {DashBoard == 'Baser' && <div onClick={handleBuyCoinesClick} className="flex    justify-between cursor-pointer items-center bg-BaserPrimaryContainer text-BaserFoshiy rounded-2xl p-4">
                    <div className="flex items-center gap-2 ">
                        <PiCoinsFill />
                        <div className="flex flex-col">
                            <span className='text-sm font-medium'>20</span>
                            <span className='text-xs font-medium'>العملات</span>
                        </div>
                    </div>
                    <RiArrowLeftSLine />
                </div>}
            </div>
        </div>
    )
}

export default SideBar