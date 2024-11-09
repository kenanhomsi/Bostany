import { Dispatch, SetStateAction, useEffect, useState } from "react"
import OtpInput from 'react-otp-input';
import { RiArrowRightSLine } from "react-icons/ri";
import { useAppSelector } from "../../redux/store";
import { usePostVeifyCode } from "../../utils/api/auth/usePostVerifyCode";
import { useNavigate } from "react-router-dom";
import { useGetUserProfile } from "../../utils/api/User/useGetUserProfile";

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
        //for test only
        // setStep(3)

    }
    return (
        <div className="flex flex-col items-start mt-14 justify-start gap-5 w-full">
            <div className=" p-1 cursor-pointer bg-BaserSurface rounded-full  w-fit " onClick={handleClickArrowBack}>
                <RiArrowRightSLine className="w-6 h-6" />
            </div>
            <h2 className="text-BaserOnSurfase text-3xl font-semibold ">إدخال رمز التحقق</h2>
            <p className=" text-base font-medium text-dark">لقد أرسلنا رمز تحقق مكون من 4 أرقام إلى رقم هاتفك {UserData?.data.phone} الرجاء إدخال الرمز في الحقل أدناه لتأكيد رقم هاتفك.</p>
            <div className="w-full otp_container" >
                <OtpInput
                    value={OTPValue}
                    onChange={SetOTPValue}
                    numInputs={4}
                    renderSeparator={<span></span>}
                    renderInput={(props) => <input {...props} className=" bg-BaserSurface  flex-1 mx-1 h-20 rounded-lg p-6 font-semibold border-none text-[22px]" placeholder="|" />}
                />
                <span className="text-dark text-xs font-normal">تأكد من صحة رقم الهاتف أو تحقق من وجود تغطية شبكة جيدة.</span>
            </div>
            <button onClick={handleClickSubmit} disabled={+OTPValue.length != 4} className={` ${OTPValue.length != 4 ? " text-[#A9A6A9] bg-[#DAD7DA]  opacity-[38]" : `text-white  cursor-pointer ${RegisterAs == 'Baser' ? 'bg-BaserPrimary' : 'bg-BostanyPrimary'}`} w-full   rounded-full p-3  text-base font-medium`}>{isLoading ? '...loading' : 'استمرار'}</button>
            {
                isError && <p className=" text-GeneralError text-center">رمز التحقق خطا</p>
            }
        </div>
    )
}

export default OTPStep