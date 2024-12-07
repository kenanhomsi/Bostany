import { isValidEmail } from "@/utils/Functions";
import { useAppSelector } from "../../../redux/store"
import { CompleteProfileStepProps } from "../../../Types";
import { PiCheckCircleFill } from "react-icons/pi";
import { PiCheckCircle } from "react-icons/pi";

const Step1 = ({ FormData, SetFormData }: CompleteProfileStepProps) => {
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    const handleCheckOneClick = () => {
        SetFormData({
            ...FormData,
            checkOne: !FormData.checkOne
        })
    }
    const handleCheckTwoClick = () => {
        SetFormData({
            ...FormData,
            checkTwo: !FormData.checkTwo
        })
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="flex flex-col gap-6  w-full">
            <div className="w-full flex flex-col gap-6">
                <input onChange={handleInputChange} value={FormData.FullName} type="text" name="FullName"
                    className={`w-full bg-BaserSurface placeholder:text-dark  rounded-2xl focus:outline-2   ${RegisterAs == 'Baser' ? '  focus:outline-BaserPrimary bg-BaserSurface text-BaserOnSurfase' : 'focus:outline-BostanyPrimary bg-BostanySurfaceContainer text-BostanyOnSurface'}  focus:ring-0  outline-none border-none  placeholder:text-dark  py-4 px-6`}
                    placeholder="أدخل الاسم الكامل" />
                <div className="">
                    <input onChange={handleInputChange} value={FormData.email} type="email" name="email"
                        className={`w-full  placeholder:text-dark  rounded-2xl focus:outline-2   ${RegisterAs == 'Baser' ? '  focus:outline-BaserPrimary bg-BaserSurface text-BaserOnSurfase' : 'focus:outline-BostanyPrimary bg-BostanySurfaceContainer text-BostanyOnSurface'}  focus:ring-0  outline-none border-none  placeholder:text-dark  py-4 px-6`}
                        placeholder="أدخل بريدك الإلكتروني" />
                    {
                        FormData.email.length > 6 && !isValidEmail(FormData.email) && <p className="!my-0 text-GeneralError">its not valid email</p>
                    }
                </div>
            </div>
            <div className=" flex flex-col gap-2 items-start">
                <button onClick={handleCheckOneClick} className="flex cursor-pointer flex-row-reverse h-fit items-center gap-3 text-sm font-normal "><span className=" flex">أوافق على <p className={` underline ${RegisterAs == 'Baser' ? 'text-BaserPrimary' : 'text-BostanyPrimary'}`}>الشروط والأحكام</p></span>{!FormData.checkOne ? <PiCheckCircle className={`text-2xl`} /> : <PiCheckCircleFill className={`text-2xl ${RegisterAs == 'Baser' ? 'text-BaserPrimary' : 'text-BostanyPrimary'} `} />}  </button>
                <button onClick={handleCheckTwoClick} className="flex cursor-pointer flex-row-reverse h-fit items-center gap-3 text-sm font-normal "><span>توافق على تلقي رسائل تسويقية وعروض خاصة </span>{!FormData.checkTwo ? <PiCheckCircle className={`!text-2xl`} /> : <PiCheckCircleFill className={` !text-2xl  ${RegisterAs == 'Baser' ? 'text-BaserPrimary' : 'text-BostanyPrimary'} `} />}</button>
            </div>
        </div>
    )
}

export default Step1