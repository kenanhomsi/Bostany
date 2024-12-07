import BaserManIcon from '/Icons/Man.png'
import BaserfemaleIcon from '/Icons/female.png'
import BostanyManIcon from '/Icons/BostanyMan.png'
import BostanyfemaleIcon from '/Icons/Bostanyfemale.png'
import { CompleteProfileStepProps } from "../../../Types";
import { useAppSelector } from "../../../redux/store";
import DatePickerComponent from "../../General/DatePicker";

const Step2 = ({ FormData, SetFormData }: CompleteProfileStepProps) => {
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)


    const handleDateChange = (date: Date): void => {
        SetFormData({
            ...FormData,
            birthDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, // YYYY-MM-DD
        });
    };
    const handleGenderClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        SetFormData({
            ...FormData,
            gender: (e.target as HTMLButtonElement).value
        })
    }
    return (
        // <div className="flex flex-col gap-6  min-w-full">
        //     <div className=" relative flex-col flex gap-1 !w-full items-center">
        //         {FormData.birthDate == '' && <Label htmlFor="ToDatePicker"
        //             className="w-full bg-BaserSurface h-20 text-dark text-base px-6 py-4  rounded-3xl border-none   absolute top-0 flex items-center z-10 left-0">
        //             <span>يوم / شهر / سنة</span>
        //         </Label>}
        //         <Datepicker
        //             onChange={(val) => handleFromDateChange(val ?? new Date())}
        //             name="ToDatePicker" id="ToDatePicker"
        //             style={{ backgroundColor: '#faf5f9', outline: 'none', width: '100%', border: '0', borderRadius: '24px', padding: '16px 24px', fontSize: '16px', fontWeight: 'normal' }}
        //             theme={{
        //                 root: {
        //                     base: "relative w-full "
        //                 }, popup: {
        //                     root: {
        //                         base: 'absolute  !top-20 !w-full  left-0 z-50 block ',
        //                     }
        //                 }
        //             }} />
        //     </div>
        //     <div className="min-w-full flex  gap-6 " >
        //         <button onClick={handleGenderClick} value='ذكر' className={` ${FormData.gender == 'ذكر' && `${RegisterAs == 'Baser' ? '!border-BaserPrimary' : '!border-BostanyPrimary'}`} border-2 border-BaserSurface !h-fit flex-1 z-10 p-4 cursor-pointer bg-BaserSurface flex flex-col items-center gap-4 rounded-2xl`}>
        //             <img src={RegisterAs == 'Baser' ? BaserManIcon : BostanyManIcon} alt={RegisterAs == 'Baser' ? BaserManIcon : BostanyManIcon} className="w-20 h-20  pointer-events-none" />
        //             <p>ذكر</p>
        //         </button>
        //         <button onClick={handleGenderClick} value='أنثي' className={`${FormData.gender == 'أنثي' && `${RegisterAs == 'Baser' ? '!border-BaserPrimary' : '!border-BostanyPrimary'}`}  border-2 border-BaserSurface !h-fit flex-1 p-4 cursor-pointer bg-BaserSurface flex flex-col items-center gap-4 rounded-2xl`}>
        //             <img src={RegisterAs == 'Baser' ? BaserfemaleIcon : BostanyfemaleIcon} alt={RegisterAs == 'Baser' ? BaserfemaleIcon : BostanyfemaleIcon} className="w-20 h-20 pointer-events-none " />
        //             <p>أنثي</p>
        //         </button>
        //     </div>
        // </div>
        <div className="flex flex-col gap-6 w-full">
            <div className=" relative flex-col flex gap-1 !w-full items-center">


                <DatePickerComponent
                    name="ToDatePicker"
                    id="ToDatePicker"
                    value={FormData.birthDate}
                    onChange={handleDateChange}
                />

            </div>
            <div className="flex gap-6 w-full">
                <button
                    onClick={handleGenderClick}
                    value="ذكر"
                    className={` ${FormData.gender == 'ذكر' &&
                        `${RegisterAs == 'Baser' ? '!border-BaserPrimary ' : '!border-BostanyPrimary '}`
                        } border-2 border-BaserSurface !h-fit w-1/2 z-0 p-4 cursor-pointer  flex flex-col items-center gap-4 rounded-2xl ${RegisterAs == 'Baser' ? ' bg-BaserSurface' : ' bg-BostanySurfaceContainer'}`}
                >
                    <img
                        src={RegisterAs == 'Baser' ? BaserManIcon : BostanyManIcon}
                        alt={RegisterAs == 'Baser' ? BaserManIcon : BostanyManIcon}
                        className="w-20 h-20 pointer-events-none"
                    />
                    <p className={`${FormData.gender == 'ذكر' ? RegisterAs == 'Baser' ? '!text-BaserPrimary ' : '!text-BostanyPrimary ' : ' text-BaserOnSurfase'}`}>ذكر</p>
                </button>
                <button
                    onClick={handleGenderClick}
                    value="أنثي"
                    className={`${FormData.gender == 'أنثي' &&
                        `${RegisterAs == 'Baser' ? '!border-BaserPrimary !bg-BaserSurface' : '!border-BostanyPrimary bg-BostanySurfaceContainer'}`
                        } border-2 border-BaserSurface !h-fit w-1/2 p-4 cursor-pointer  flex flex-col items-center gap-4 rounded-2xl ${RegisterAs == 'Baser' ? ' bg-BaserSurface' : ' bg-BostanySurfaceContainer'}`}
                >
                    <img
                        src={RegisterAs == 'Baser' ? BaserfemaleIcon : BostanyfemaleIcon}
                        alt={RegisterAs == 'Baser' ? BaserfemaleIcon : BostanyfemaleIcon}
                        className="w-20 h-20 pointer-events-none "
                    />
                    <p className={`${FormData.gender == 'أنثي' ? RegisterAs == 'Baser' ? '!text-BaserPrimary ' : '!text-BostanyPrimary ' : 'text-BaserOnSurfase'}`}>أنثي</p>
                </button>
            </div>
        </div>
    )
}

export default Step2

// {
//     "root": {
//         "base": "relative"
//     },
//     "popup": {
//         "root": {
//             "base": "absolute top-10 z-50 block pt-2",
//                 "inline": "relative top-0 z-auto",
//                     "inner": "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
//         },
//         "header": {
//             "base": "",
//                 "title": "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
//                     "selectors": {
//                 "base": "mb-2 flex justify-between",
//                     "button": {
//                     "base": "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
//                         "prev": "",
//                             "next": "",
//                                 "view": ""
//                 }
//             }
//         },
//         "view": {
//             "base": "p-1"
//         },
//         "footer": {
//             "base": "mt-2 flex space-x-2",
//                 "button": {
//                 "base": "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
//                     "today": "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
//                         "clear": "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
//             }
//         }
//     },
//     "views": {
//         "days": {
//             "header": {
//                 "base": "mb-1 grid grid-cols-7",
//                     "title": "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
//             },
//             "items": {
//                 "base": "grid w-64 grid-cols-7",
//                     "item": {
//                     "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
//                         "selected": "bg-cyan-700 text-white hover:bg-cyan-600",
//                             "disabled": "text-gray-500"
//                 }
//             }
//         },
//         "months": {
//             "items": {
//                 "base": "grid w-64 grid-cols-4",
//                     "item": {
//                     "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
//                         "selected": "bg-cyan-700 text-white hover:bg-cyan-600",
//                             "disabled": "text-gray-500"
//                 }
//             }
//         },
//         "years": {
//             "items": {
//                 "base": "grid w-64 grid-cols-4",
//                     "item": {
//                     "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
//                         "selected": "bg-cyan-700 text-white hover:bg-cyan-600",
//                             "disabled": "text-gray-500"
//                 }
//             }
//         },
//         "decades": {
//             "items": {
//                 "base": "grid w-64 grid-cols-4",
//                     "item": {
//                     "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
//                         "selected": "bg-cyan-700 text-white hover:bg-cyan-600",
//                             "disabled": "text-gray-500"
//                 }
//             }
//         }
//     }
// }