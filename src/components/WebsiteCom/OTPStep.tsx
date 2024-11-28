import { Dispatch, SetStateAction, useEffect, useState } from "react"
import OtpInput from 'react-otp-input';
import { useAppSelector } from "../../redux/store";
import { usePostVeifyCode } from "../../utils/api/auth/usePostVerifyCode";
import { useNavigate } from "react-router-dom";
import { useGetUserProfile } from "../../utils/api/User/useGetUserProfile";
import { PiCaretRight } from "react-icons/pi";

const OTPStep = ({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) => {
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    const { data: UserData } = useGetUserProfile();
    const [OTPValue, SetOTPValue] = useState('');
    const navigate = useNavigate()
    const { data, mutate, isError, isLoading, isSuccess } = usePostVeifyCode();
    const handleClickArrowBack = () => {
        setStep(1);
    }
    useEffect(() => {
        if (isSuccess) {
            if (!data?.data.data.completed_profile) {
                setStep(3)
            } else {
                navigate(`/${data.data.data.type == 'customer' ? 'Baser' : 'Bostany'}`)
            }
        }
    }, [data, isSuccess, navigate, setStep])
    const handleClickSubmit = () => {
        mutate({
            payload: {
                code: OTPValue
            }
        })

    }
    return (
        <div className="flex flex-col items-start  justify-start gap-10 w-full">
            <div className={`p-1 cursor-pointer ${RegisterAs == 'Baser' ? ' bg-BaserSurface' : ' bg-BostanySurfaceContainer'} rounded-full  w-fit `} onClick={handleClickArrowBack}>
                <PiCaretRight className="w-6 h-6" />
            </div>
            <div className=" flex flex-col gap-5">
                <h2 className={` ${RegisterAs == 'Baser' ? 'text-BaserOnSurfase' : ' text-BostanyOnSurface'} text-3xl font-semibold `}>إدخال رمز التحقق</h2>
                <p className=" text-base font-medium text-dark">لقد أرسلنا رمز تحقق مكون من 4 أرقام إلى رقم هاتفك {UserData?.data.phone} الرجاء إدخال الرمز في الحقل أدناه لتأكيد رقم هاتفك.</p>
            </div>
            <div className="w-full otp_container" >
                <OtpInput
                    value={OTPValue}
                    onChange={SetOTPValue}
                    numInputs={4}
                    renderSeparator={<span></span>}
                    renderInput={(props) => <input {...props} className={` ${RegisterAs == 'Baser' ? ' bg-BaserSurface text-BaserOnSurfase focus:outline-BaserPrimary' : ' bg-BostanySurfaceContainer text-BostanyOnSurface focus:outline-BostanyPrimary'}  focus:ring-0    flex-1 mx-1 h-20 rounded-lg p-6 font-semibold border-none text-[22px]`} placeholder="|" />}
                />
                <span className="text-dark text-xs font-normal">تأكد من صحة رقم الهاتف أو تحقق من وجود تغطية شبكة جيدة.</span>
                <button onClick={handleClickSubmit} disabled={+OTPValue.length != 4} className={` mt-6 ${OTPValue.length != 4 ? " text-[#A9A6A9] bg-[#DAD7DA]  opacity-[38]" : `text-white   cursor-pointer ${RegisterAs == 'Baser' ? 'bg-BaserPrimary' : 'bg-BostanyPrimary'}`} w-full   rounded-full py-4 px-5  text-base font-medium`}>{isLoading ? '...loading' : 'التالي'}</button>
            </div>
            {
                isError && <p className=" text-GeneralError text-center">رمز التحقق خطا</p>
            }
        </div>
    )
}

export default OTPStep