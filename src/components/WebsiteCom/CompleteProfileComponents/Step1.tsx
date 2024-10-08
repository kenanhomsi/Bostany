import { useAppSelector } from "../../../redux/store"
import { FaRegCheckCircle } from "react-icons/fa";
import { CompleteProfileStepProps } from "../../../Types";

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
        <div className="flex flex-col gap-7  w-full">
            <div className="w-full flex flex-col gap-4">
                <input onChange={handleInputChange} value={FormData.FullName} type="text" name="FullName" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="أدخل الاسم الكامل" />
                <input onChange={handleInputChange} value={FormData.email} type="email" name="email" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="أدخل بريدك الإلكتروني" />
            </div>
            <div className=" flex flex-col gap-2 items-start">
                <button onClick={handleCheckOneClick} className="flex cursor-pointer flex-row-reverse items-center gap-3 text-sm font-normal "><span>أوافق على الشروط والأحكام</span><FaRegCheckCircle className={`${FormData.checkOne && `text-${RegisterAs}Primary`} w-4 h-4`} /></button>
                <button onClick={handleCheckTwoClick} className="flex cursor-pointer flex-row-reverse items-center gap-3 text-sm font-normal "><span>توافق على تلقي رسائل تسويقية وعروض خاصة</span><FaRegCheckCircle className={`${FormData.checkTwo && `text-${RegisterAs}Primary`} w-4 h-4`} /></button>
            </div>
        </div>
    )
}

export default Step1