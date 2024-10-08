import { Dispatch, SetStateAction, useState } from "react"
import OtpInput from 'react-otp-input';
import { RiArrowRightSLine } from "react-icons/ri";
import { useAppSelector } from "../../redux/store";

const OTPStep = ({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) => {
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    const [OTPValue, SetOTPValue] = useState('');
    const handleClickArrowBack = () => {
        setStep(1);
    }
    const handleClickSubmit = () => {
        setStep(3);
    }
    return (
        <div className="flex flex-col items-start mt-14 justify-start gap-5 w-full">
            <div className=" p-1 cursor-pointer bg-BaserSurface rounded-full  w-fit " onClick={handleClickArrowBack}>
                <RiArrowRightSLine className="w-6 h-6" />
            </div>
            <h2 className="text-BaserOnSurfase text-3xl font-semibold ">إدخال رمز التحقق</h2>
            <p className=" text-base font-medium text-dark">لقد أرسلنا رمز تحقق مكون من 4 أرقام إلى رقم هاتفك 920022222+ الرجاء إدخال الرمز في الحقل أدناه لتأكيد رقم هاتفك.</p>
            <div className="w-full">
                <OtpInput
                    value={OTPValue}
                    onChange={SetOTPValue}
                    numInputs={4}
                    renderSeparator={<span></span>}
                    renderInput={(props) => <input {...props} className=" bg-BaserSurface flex-1 mx-1 h-20 rounded-lg p-6 font-semibold border-none text-[22px]" placeholder="|" />}
                />
                <span className="text-dark text-xs font-normal">تأكد من صحة رقم الهاتف أو تحقق من وجود تغطية شبكة جيدة.</span>
            </div>
            <button onClick={handleClickSubmit} disabled={+OTPValue.length != 4} className={` ${OTPValue.length != 4 ? " text-[#A9A6A9] bg-[#DAD7DA]  opacity-[38]" : `text-white  cursor-pointer ${RegisterAs == 'Baser' ? 'bg-BaserPrimary' : 'bg-BostanyPrimary'}`} w-full   rounded-full p-3  text-base font-medium`}>استمرار</button>
        </div>
    )
}

export default OTPStep