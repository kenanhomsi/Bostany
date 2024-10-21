// import { SeedsCardProps } from "../../Types"
// import { WorkSpaceData } from "../../utils/data";
// import { PiVideoCameraFill } from "react-icons/pi";
// import { PiChatTeardropDotsFill } from "react-icons/pi";
// import { PiClockClockwise } from "react-icons/pi";
// import { PiXCircleFill } from "react-icons/pi";
// const SeedsCardForBostany = ({ data, index, From, Dashboard }: SeedsCardProps) => {
//     return (
//         <div className={`flex  relative ${index == 0 ? `${Dashboard == 'Baser' ? ' bg-BaserPrimary' : 'bg-BostanyPrimary'}  text-white` : 'bg-BaserSurface'} flex-row w-full pl-3  rounded-[32px] `}>
//             <div className={` p-4`}>
//                 <img src={data.image} alt={data.image} className={`w-[208px] h-[205px] rounded-2xl `} />
//             </div>
//             <div className={` flex w-full  flex-row justify-between  p-4`}>
//                 <div className={` flex flex-col  justify-between  gap-4  my-3 `}>
//                     <div className={` flex ${Dashboard == 'Baser' ? "flex-col-reverse" : "flex-col"} gap-4`}>
//                         <p className=" font-medium">{data.name}</p>
//                         <div className="flex flex-col gap-4">
//                             <span className={` ${index == 0 ? 'text-white' : 'text-dark'} text-xl  font-medium`}>{data.title}</span>
//                             <p className={`flex gap-2 items-center  ${index == 0 ? 'text-white' : 'text-dark'}  text-xl font-semibold `}>
//                                 <span>{data.time.from}</span>
//                                 -
//                                 <span >{data.time.to}</span>
//                             </p>
//                         </div>
//                     </div>
//                     <div className={` ${index == 0 ? ' text-white' : `${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'}`} flex gap-3 text-sm font-normal items-center`}>
//                         <div className={` ${index == 0 ? '' : `${Dashboard == 'Baser' ? ' border-BaserPrimary' : 'border-BostanyPrimary'}`} flex gap-1 items-center border  rounded-full p-3`}>
//                             {WorkSpaceData[data.workSpaceID].icon}
//                             <p className="">{WorkSpaceData[data.workSpaceID].name}</p>
//                         </div>
//                         <span>{data.type}</span>
//                     </div>

//                 </div>
//                 <div className="flex gap-5 items-end">
//                     <div className={`${index == 0 ? `${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} gap-4` : ' text-white gap-8'} flex  justify-around  text-2xl rounded-full p-3 text-white bg-BostanyPrimary`}>
//                         {From == 'Comming' &&
//                             <> <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
//                                 <PiVideoCameraFill className={`  cursor-pointer`} />
//                             </div>
//                                 <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
//                                     <PiChatTeardropDotsFill className={`  cursor-pointer`} />
//                                 </div>
//                                 <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
//                                     <PiClockClockwise className={`  cursor-pointer`} />
//                                 </div>
//                                 <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
//                                     <PiXCircleFill className={`  cursor-pointer`} />
//                                 </div>
//                             </>}
//                         {
//                             From != 'Comming' &&
//                             <div className={` ${index == 0 ? `bg-white ${Dashboard == 'Baser' ? ' text-BaserPrimary' : 'text-BostanyPrimary'} p-2 rounded-full` : ''}`}>
//                                 <PiChatTeardropDotsFill className={`  cursor-pointer`} />
//                             </div>
//                         }
//                     </div>
//                     <div className=" flex flex-col mb-5  gap-3">
//                         <p className={`rounded-full p-3 ${From == 'Comming' ? `${Dashboard == 'Baser' ? 'bg-GeneralStable' : ' bg-GeneralError'} ` : 'bg-GeneralSuccessContainer'} border-none text-white text-[10px]`}> باقي ساعة </p>
//                         <div className="">
//                             <div className={`border ${index == 0 ? ' border-white' : 'border-[#938F94]'}  text-center p-3 rounded-t-2xl`}>
//                                 {data.date.month}
//                             </div>
//                             <div className={`border ${index == 0 ? ' border-white' : 'border-[#938F94]'} text-center p-3 rounded-b-2xl`}>
//                                 {data.date.day}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SeedsCardForBostany