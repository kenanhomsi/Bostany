import checkedIcon from '/Icons/Verification-Fill.png'
import { PiHeart } from "react-icons/pi";
import { PiChatCircleDots } from "react-icons/pi";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { PiFlowerFill } from "react-icons/pi";
import { PiTreeFill } from "react-icons/pi";
import { PiLeafFill } from "react-icons/pi";
import x from "/Icons/x.png";
import LinkedIn from "/Icons/LinkedIn.png";
import { ProfileDateType } from "../../Types"
import { Link } from 'react-router-dom';
import CertificatesBostanyProfile from './CertificatesBostanyProfile';
import ExperiencesBostanyProfile from './ExperiencesBostanyProfile';
import RatingBostanyProfile from './RatingBostanyProfile';
import { WorkSpaceData } from '../../utils/data';

const MainInfoBostanyProfile = ({ BostanyData }: { BostanyData: ProfileDateType }) => {
    return (
        <div className="flex flex-col gap-10 w-[650px]">
            <div className="flex gap-6 items-start">
                <img src={BostanyData.image} alt={BostanyData.image} className=" w-[198px] h-[198px] rounded-full overflow-hidden" />
                <div className=" flex flex-col  gap-6 h-full">
                    <div className=" flex items-end gap-9">
                        <p className="flex gap-2 items-center ">
                            <span className="text-BaserOnSurfase text-[32px] font-semibold">{BostanyData.name}</span>
                            {BostanyData.checkMark &&
                                <img src={checkedIcon} alt={checkedIcon} className="w-5 h-5 " />
                            }
                        </p>
                        <PiHeart className="w-7 h-7" />
                        <PiChatCircleDots className="w-7 h-7" />
                        <PiDotsThreeOutlineVertical className="text-3xl" />
                    </div>
                    <div className=" flex flex-wrap gap-4">
                        {
                            BostanyData.WorkSpace.map((ele, index) => (
                                <p key={index} className="flex w-fit  rounded-full border-[2px] py-2  px-4  items-center gap-2 border-[#8E918F]">
                                    <span className="text-xl text-BaserPrimary">{WorkSpaceData.filter((space) => space.name == ele)[0].icon}</span>
                                    <span className="text-sm font-medium text-BaserOnSurfase" >{ele}</span>
                                </p>
                            ))
                        }
                    </div>
                    <div className=" flex flex-wrap text-base w-[400px] font-medium text-dark">
                        <span>{BostanyData.specialization} - </span>
                        {
                            BostanyData.otherSpecialization.map((special, index) => (
                                <span>{special} {BostanyData.otherSpecialization.length - 1 != index && <span> - </span>}</span>
                            ))
                        }
                    </div>
                    <div className="flex gap-4">
                        <Link to='/' className=" w-[54px] h-[54px] border rounded-full border-[#938F94] flex items-center justify-center">
                            <img src={LinkedIn} alt={LinkedIn} className=" w-[30px] h-[30px] text-BaserPrimary" />
                        </Link>
                        <Link to='/' className=" w-[54px] h-[54px] border rounded-full border-[#938F94] flex items-center justify-center">
                            <img src={x} alt={x} className=" w-[30px] h-[30px] text-BaserPrimary" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex gap-6">
                <div className=" flex-1 flex flex-col gap-3 px-6 py-4 rounded-3xl bg-BaserSurface">
                    <PiTreeFill className=" text-BostanyPrimary w-6 h-6" />
                    <p className="text-base font-normal text-dark">الاشجار</p>
                    <p className="text-BostanyPrimary text-base font-normal">{BostanyData.BaserCount}</p>
                </div>
                <div className=" flex-1 flex flex-col gap-3 px-6 py-4 rounded-3xl bg-BaserSurface">
                    <PiFlowerFill className=" text-BaserPrimary w-6 h-6" />
                    <p className="text-base font-normal text-dark">الازهار</p>
                    <p className="text-BaserPrimary text-base font-normal "><span>5 /</span> {BostanyData.Rate} </p>

                </div>
                <div className=" flex-1 flex flex-col gap-3 px-6 py-4 rounded-3xl bg-BaserSurface">
                    <PiLeafFill className=" text-[#808080] w-6 h-6" />
                    <p className="text-base font-normal text-dark">التمديد</p>
                    <p className="text-[#808080] text-base font-normal">{BostanyData.BaserCount}%</p>
                </div>

            </div>
            <div className="flex flex-col gap-4 text-BaserOnSurfase">
                <span className="text-[22px] font-semibold ">نبذة عني</span>
                <div className="p-6 rounded-3xl bg-BaserSurface text-base font-normal">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                </div>
            </div>
            <CertificatesBostanyProfile BostanyData={BostanyData} />
            <ExperiencesBostanyProfile BostanyData={BostanyData} />
            <RatingBostanyProfile BostanyData={BostanyData} />
        </div>
    )
}

export default MainInfoBostanyProfile