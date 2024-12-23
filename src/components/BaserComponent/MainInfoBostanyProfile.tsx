import checkedIcon from '/Icons/Verification-Fill.png'
import { PiHeart } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import { PiChatCircleDots } from "react-icons/pi";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { PiFlowerFill } from "react-icons/pi";
import { PiTreeFill } from "react-icons/pi";
import { PiLeafFill } from "react-icons/pi";
import x from "/Icons/x.png";
import LinkedIn from "/Icons/LinkedIn.png";
import facebook from "/Icons/facebook.png";
import { Link } from 'react-router-dom';
import CertificatesBostanyProfile from './CertificatesBostanyProfile';
import ExperiencesBostanyProfile from './ExperiencesBostanyProfile';
import RatingBostanyProfile from './RatingBostanyProfile';
import { WorkSpaceData } from '../../utils/data';
import { IGetProfile } from '../../Types/api';
import { usePostToggleFavorite } from '../../utils/api/Favorites/usePostToggleFavorite';
import { useGetFollowingList } from '../../utils/api/Favorites/useGetListFollowings';
import BookingFromBostanyProfile from './BookingFromBostanyProfile';

const MainInfoBostanyProfile = ({ BostanyData }: { BostanyData: IGetProfile }) => {
    const { mutate } = usePostToggleFavorite();
    const { data: FollowingList } = useGetFollowingList()
    const HandleLoveiconClick = (id: number) => {
        mutate({
            payload: id
        })
    }
    return (
        <div className="flex flex-col gap-6 2xl:w-[650px] md:w-full">
            <div className="flex gap-8 items-start">
                <div className="min-w-[198px] min-h-[198px] max-w-[200px] max-h-[200px] rounded-full overflow-hidden">
                    <img
                        src={BostanyData.data.avatar}
                        alt={BostanyData.data.avatar}
                        className=" min-h-full min-w-full object-cover"
                    />
                </div>
                {/* <img src={BostanyData.data.avatar} alt={BostanyData.data.avatar} className=" !w-[198px]   inset-0 object-cover  !h-[198px] rounded-full overflow-hidden" /> */}
                <div className=" flex flex-col w-full   gap-6 h-full">
                    <div className=" flex items-center justify-between gap-4">
                        <p className="flex gap-1 items-center ">
                            <span className="text-BaserOnSurfase text-[32px] font-semibold">{BostanyData.data.name}</span>
                            {/* {BostanyData.checkMark && */}
                            <img src={checkedIcon} alt={checkedIcon} className="w-5 h-5 " />
                            {/* } */}
                        </p>
                        <div className=" flex items-center justify-between gap-8 ml-2">
                            <p onClick={() => HandleLoveiconClick(BostanyData.data.id)}
                                className=''>
                                {FollowingList?.data.filter((ele) => ele.id == BostanyData.data.id)[0] == undefined ?
                                    <PiHeart className={`  text-BaserOnSurfase  cursor-pointer w-8 h-8 my-0`} />
                                    :
                                    <PiHeartFill className={`  text-BaserPrimary  cursor-pointer w-8 h-8 my-0`} />
                                }
                            </p>
                            <PiChatCircleDots className="w-8 h-8" />
                            <PiDotsThreeOutlineVertical className="text-3xl" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-wrap gap-4">
                            {
                                BostanyData.data.specialities &&
                                BostanyData.data.specialities.map((ele, index) => (
                                    <p key={index} className="flex w-fit  rounded-full border-[2px] py-2  px-4  items-center gap-2 border-[#8E918F]">
                                        <span className="text-xl text-BaserPrimary">{WorkSpaceData.filter((space) => space.name == ele.text)[0].icon}</span>
                                        <span className="text-sm font-medium text-BaserOnSurfase" >{ele.text}</span>
                                    </p>
                                ))
                            }
                        </div>
                        <div className=" flex flex-wrap text-base w-[400px] font-medium text-dark">
                            {BostanyData.data.category &&
                                BostanyData.data.category.map((category, index) => (
                                    <span>{category.text} {BostanyData.data.category && BostanyData.data.category.length - 1 != index && <span> - </span>}</span>
                                ))
                            }
                        </div>
                        <div className="flex gap-4">
                            {
                                BostanyData.data.linkedin &&
                                <Link to={BostanyData.data.linkedin} className=" w-[54px] h-[54px] border rounded-full border-[#938F94] flex items-center justify-center">
                                    <img src={LinkedIn} alt={LinkedIn} className=" w-[30px] h-[30px] text-BaserPrimary" />
                                </Link>
                            }
                            {
                                BostanyData.data.twitter &&
                                <Link to={BostanyData.data.twitter} className=" w-[54px] h-[54px] border rounded-full border-[#938F94] flex items-center justify-center">
                                    <img src={x} alt={x} className=" w-[30px] h-[30px] text-BaserPrimary" />
                                </Link>
                            }
                            {
                                BostanyData.data.facebook &&
                                <Link to={BostanyData.data.facebook} className=" w-[54px] h-[54px] border rounded-full border-[#938F94] flex items-center justify-center">
                                    <img src={facebook} alt={facebook} className=" w-[30px] h-[30px] text-BaserPrimary" />
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-10">
                <div className=" flex-1 flex flex-col gap-3 px-6 py-4 rounded-3xl bg-BaserSurface">
                    <PiTreeFill className=" text-BostanyPrimary w-6 h-6" />
                    <p className="text-base font-normal text-dark">الاشجار</p>
                    <p className="text-BostanyPrimary text-base font-normal">{BostanyData.data.counts?.completed_projects}</p>
                </div>
                <div className=" flex-1 flex flex-col gap-3 px-6 py-4 rounded-3xl bg-BaserSurface">
                    <PiFlowerFill className=" text-BaserPrimary w-6 h-6" />
                    <p className="text-base font-normal text-dark">الازهار</p>
                    <p className="text-BaserPrimary text-base font-normal "><span>5 /</span> {BostanyData.data.rating?.avg} </p>

                </div>
                <div className=" flex-1 flex flex-col gap-3 px-6 py-4 rounded-3xl bg-BaserSurface">
                    <PiLeafFill className=" text-[#808080] w-6 h-6" />
                    <p className="text-base font-normal text-dark">التمديد</p>
                    <p className="text-[#808080] text-base font-normal">{BostanyData.data.projects?.extension_percentage}%</p>
                </div>
            </div>
            <div className=" 2xl:!hidden !flex">
                <BookingFromBostanyProfile BostanyData={BostanyData} />
            </div>
            <div className="flex flex-col gap-4 text-BaserOnSurfase">
                <span className="text-[22px] font-semibold ">نبذة عني</span>
                <div className="p-6 rounded-3xl bg-BaserSurface text-base font-normal">
                    {
                        BostanyData.data.bio
                    }
                </div>
            </div>
            <CertificatesBostanyProfile Certificates={BostanyData.data.cetificates!} />
            <ExperiencesBostanyProfile Experiences={BostanyData.data.experiences!} />
            <RatingBostanyProfile Ratings={BostanyData.data.rating!} />
        </div>
    )
}

export default MainInfoBostanyProfile