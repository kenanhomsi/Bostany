import { WorkSpaceData } from "../../utils/data";
import { PiVideoCameraFill } from "react-icons/pi";
import { PiChatTeardropDotsFill } from "react-icons/pi";
import { PiClockClockwise } from "react-icons/pi";
import { PiXCircleFill } from "react-icons/pi";
import { SeedsCardProps } from "../../Types";
import { PiCheckCircleFill } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import { PiFlagBannerFill } from "react-icons/pi";
import { useAcceptProject } from "../../utils/api/Projects/Invitations/usePostAcceptInitation";
import { useRejectProject } from "../../utils/api/Projects/Rejections/usePostRejectProject";
const SeedsCard = ({ data, index, From, Dashboard }: SeedsCardProps) => {
    const { mutate } = useAcceptProject();
    const { mutate: PejectMutate, } = useRejectProject();
    const handleAcceptProject = (id: number) => {
        mutate({
            id: id
        })
    }
    const handleRejectProject = (id: number) => {
        console.log(id)
        PejectMutate({
            payload: {
                message: 'sorry'
            },
            id: id
        })
    }
    console.log(data)
    return (
        <>
            {
                data.accepted_request != null &&
                <div key={index} className={`flex  relative ${index == 0 ? `${Dashboard == 'Baser' ? ' bg-BaserPrimary' : 'bg-BostanyPrimary'}  text-white` : 'bg-BaserSurface'} flex-row w-full pl-3  rounded-[32px] `
                }>
                    <div className={` p-4`}>
                        <img src={Dashboard == 'Baser' ? data.accepted_request.consultant.avatar : data.user.avatar} alt='user_image' className={`w-[208px] h-[205px] rounded-2xl `} />
                    </div>
                    <div className={` flex w-full  flex-row justify-between  p-4`}>
                        <div className={` flex flex-col  justify-between  gap-4  my-3 `}>
                            <div className={` flex ${Dashboard == 'Baser' ? "flex-col-reverse" : "flex-col"} gap-4`}>
                                <p className=" font-medium">{Dashboard == 'Baser' ? data.accepted_request.consultant.name : data.name}</p>
                                <div className="flex flex-col gap-4">
                                    <span className={` ${index == 0 ? 'text-white' : 'text-dark'} text-xl  font-medium`}>{Dashboard == 'Baser' ? data.name : data.description}</span>
                                    <p className={`flex gap-2 items-center  ${index == 0 ? 'text-white' : 'text-dark'}  text-xl font-semibold `}>
                                        <span>{data.invitation.start_at}</span>
                                        -
                                        <span >{data.invitation.end_at}</span>
                                    </p>
                                </div>
                            </div>
                            <div className={` ${index == 0 ? ' text-white' : `${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'}`} flex gap-3 text-sm font-normal items-center`}>
                                {data.specialities.length > 0 && data.specialities.map((ele) => (
                                    <div className={` ${index == 0 ? '' : `${Dashboard == 'Baser' ? ' border-BaserPrimary' : 'border-BostanyPrimary'}`} flex gap-1 items-center border  rounded-full p-3`}>
                                        {WorkSpaceData.filter((work) => work.name == ele.text)[0].icon}
                                        <p className="">{ele.text}</p>
                                    </div>
                                ))}
                                {
                                    data.labels &&
                                    <span className="flex gap-1">{data.labels.map((ele) => (<p>{ele}</p>))}</span>
                                }
                            </div>

                        </div>
                        <div className="flex gap-5 items-end">
                            <div className={`${index == 0 ? `${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} gap-4` : ' text-white gap-8'} flex  justify-around  text-2xl rounded-full p-3 text-white ${Dashboard == 'Baser' ? ' bg-BaserPrimary' : 'bg-BostanyPrimary'}`}>
                                {From == 'Comming' &&
                                    <> <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
                                        <PiVideoCameraFill className={`  cursor-pointer`} />
                                    </div>
                                        <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
                                            <PiChatTeardropDotsFill className={`  cursor-pointer`} />
                                        </div>
                                        <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
                                            <PiClockClockwise className={`  cursor-pointer`} />
                                        </div>
                                        <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
                                            <PiXCircleFill onClick={() => handleRejectProject(data.id)} className={`  cursor-pointer`} />
                                        </div>
                                    </>}
                                {
                                    From != 'Comming' && From != 'Requests' &&
                                    <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
                                        <PiChatTeardropDotsFill className={`  cursor-pointer`} />
                                    </div>
                                }
                                {
                                    From == 'Requests' &&
                                    <> <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
                                        <PiCheckCircleFill onClick={() => handleAcceptProject(data.id)} className={`  cursor-pointer`} />
                                    </div>
                                        <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
                                            <PiChatTeardropDotsFill className={`  cursor-pointer`} />
                                        </div>
                                        <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
                                            <MdCancel onClick={() => handleRejectProject(data.id)} className={`  cursor-pointer`} />
                                        </div>
                                        <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
                                            <PiFlagBannerFill className={`  cursor-pointer`} />
                                        </div>
                                    </>}
                            </div>
                            <div className=" flex flex-col mb-5  gap-3">
                                <p className={`rounded-full p-3 ${From == 'Comming' ? `${Dashboard == 'Baser' ? 'bg-GeneralError' : '  bg-GeneralStable'}  ` : 'bg-GeneralSuccessContainer'} border-none text-white text-[10px]`}> باقي  ساعة </p>
                                <div className="">
                                    <div className={`border ${index == 0 ? ' border-white' : 'border-[#938F94]'}  text-center p-3 rounded-t-2xl`}>
                                        {data.created_at.split('-')[1]}
                                    </div>
                                    <div className={`border ${index == 0 ? ' border-white' : 'border-[#938F94]'} text-center p-3 rounded-b-2xl`}>
                                        {data.created_at.split('-')[2]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SeedsCard