// import { Link, useLocation } from "react-router-dom"
// import { BaserSidbarData } from "../../utils/data"
// import { PiBell } from "react-icons/pi";
// import { Avatar, Dropdown } from "flowbite-react";
// import avaterImage from '/Images/Avatars.png'

// type NotificationDummyItem = {
//     image: string
//     seedStatus: string
//     seedOwner: string
//     time: string
// }

// const NavBar = () => {
//     const pathname = useLocation().pathname
//     const Title = BaserSidbarData.filter((ele) => ele.link == pathname)[0]
//     const NotificationDataList: NotificationDummyItem[] = [
//         // {
//         //     image: avaterImage,
//         //     seedStatus: 'تم قبول البذرة',
//         //     seedOwner: 'مهند فارس',
//         //     time: 'منذ ساعة'
//         // },
//         // {
//         //     image: avaterImage,
//         //     seedStatus: 'تم قبول البذرة',
//         //     seedOwner: 'مهند فارس',
//         //     time: 'منذ ساعة'
//         // }
//     ]
//     return (
//         <div className="px-10 py-6   fixed  top-0  z-[500] pr-[280px]  w-full right-0  bg-BaserbodyLigh flex h-20 justify-between items-center">
//             <div className="">{Title.name}</div>
//             <div className=" flex gap-6 items-center  text-2xl">
//                 <Dropdown
//                     inline
//                     renderTrigger={() => <PiBell className=" cursor-pointer w-6 h-6" />}
//                     label=''
//                     className="w-[40%] p-7 rounded-[40px] mt-20 ml-10 DropDownShadow"
//                 >
//                     <div className="flex justify-between w-full mb-5">
//                         <span className="text-[22px] font-semibold text-BaserOnSurfase">الاشعارات</span>
//                         <span className="text-sm  font-medium cursor-pointer text-BaserPrimary">أجعل كل الرسائل مقروءة</span>
//                     </div>
//                     {
//                         NotificationDataList && NotificationDataList.length > 0 && NotificationDataList.map((not) => (
//                             <Dropdown.Item className="flex items-center my-3 gap-2 rounded-3xl">
//                                 <div className="flex justify-between items-center w-full">
//                                     <div className="flex gap-2 items-center">
//                                         <img src={not.image} alt="Organization" className="w-[72px] h-[72px] rounded-full" />
//                                         <div className="flex flex-col">
//                                             <span className="font-medium text-base text-BaserOnSurfase">{not.seedStatus}</span>
//                                             <span className="font-medium text-sm text-[#48464A]">مع {not.seedOwner}</span>
//                                         </div>
//                                     </div>
//                                     <div className=" flex flex-col items-end gap-4">
//                                         <div className=" w-3 h-3 bg-red-800  rounded-full"></div>
//                                         <span>{not.time}</span>
//                                     </div>
//                                 </div>

//                             </Dropdown.Item>
//                         ))
//                     }
//                     {
//                         NotificationDataList && NotificationDataList.length == 0 &&
//                         <div className="flex flex-col items-center gap-10 my-10  self-center">
//                             <PiBell className="text-BaserPrimary w-[100px] h-[100px]" />
//                             <p className="text-xl font-medium text-BaserOnSurfase">لا توجد إشعارات في الوقت الحالي</p>
//                         </div>
//                     }
//                 </Dropdown>
//                 <Link to='/Baser/profile'>
//                     <Avatar img={avaterImage} alt={avaterImage} rounded className="border-2 border-BaserPrimary  cursor-pointer rounded-full" />
//                 </Link>
//             </div>

//         </div>
//     )
// }

// export default NavBar
