import CountrySelect from "./CountrySelect"
import AppleIcon from '../../../public/Icons/Apple.svg'
import BosatnyIcon from '../../../public/Icons/BosatnyIcon.svg'
import { FcGoogle } from "react-icons/fc";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store";
import baserIcon from '/Icons/Baser.png'
import { useDispatch } from "react-redux";
import { changeRegisterAsState } from "../../redux/Slices/RegisterSlice";
import useFetchCountries from "../../Hooks/useFetchAllCountreis";
import { usePostLogin } from "../../utils/api/auth/usePostLogin";
import { loginSuccess } from "../../redux/Slices/authSlice";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../../firebase'
import { IGetProfile } from "../../Types/api";
import { handleNumberValidation } from "../../utils/Functions";
const InterNumberStep = ({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) => {
    const auth = getAuth(app);
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    const [PhoneError, setPhoneError] = useState(false);
    const [RegisterData, setRegisterData] = useState({
        phoneNumber: '',
        type: RegisterAs,
        phone_code: 'sy',
    })
    const { data, isSuccess, isLoading, isError, mutate } = usePostLogin();
    const { allCountries } = useFetchCountries();
    const [DropDownValue, setDropDownValue] = useState(1)
    const Dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            const newData = { data: data?.data.data }
            Dispatch(loginSuccess({
                user: newData as IGetProfile,
                token: data?.data.token as string
            }))
            setStep(2)
        }
    }, [Dispatch, data, isSuccess, navigate, setStep])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            ...RegisterData,
            phoneNumber: e.target.value
        });
        setPhoneError(false);
    };
    const handleRegisterChange = () => {
        if (RegisterAs == 'Baser') {
            Dispatch(changeRegisterAsState('Bostany'))
        } else {
            Dispatch(changeRegisterAsState('Baser'))
        }
    }
    const handleSubmit = () => {
        const SelectedCountry = allCountries.filter((ele) => {
            if (ele.id == DropDownValue) {
                return ele.id
            }
        })[0]
        mutate({
            payload: {
                username: `${SelectedCountry.key}${RegisterData.phoneNumber.toString()}`,//or phone number
                phone_code: SelectedCountry.code,
                type: RegisterData.type == 'Baser' ? 'customer' : 'consultant',
            }
        })
    }
    const handleOuthClick = async () => {
        // console.log('yess')
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultFromGoogle = await signInWithPopup(auth, provider)
            console.log(resultFromGoogle)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        setRegisterData({
            ...RegisterData,
            type: RegisterAs
        })
    }, [RegisterAs])
    useEffect(() => {
        if (isError) {
            setPhoneError(true)
        }
    }, [isError])
    return (
        <div className="flex self-center flex-col gap-10 w-full">
            <div className=" flex flex-col gap-6">
                <h2 className={`${RegisterAs == 'Baser' ? 'text-BaserOnSurfase' : 'text-BaserOnSurfase'}  m-0 text-3xl font-semibold `}>{RegisterAs == 'Baser' ? 'تسجيل حساب باذر' : 'تسجيل حساب بستاني'}</h2>
                <p className="font-medium text-base  text-dark" >{RegisterAs == 'Bostany' ? "البستاني عندنا هو الخبير أو المتخصص أو المستشار في مجاله " : "الباذر عندنا هو الطالب للاستشارة"}</p>
            </div>
            <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-1">
                    {
                        allCountries.length > 0 &&
                        <CountrySelect data={allCountries} DropDownValue={DropDownValue}
                            setDropDownValue={setDropDownValue} />
                    }
                </div>
                <div className=" flex flex-col gap-2">
                    <input type="text" onChange={handleChange} value={RegisterData.phoneNumber == '' ? '' : RegisterData.phoneNumber} className={`w-full ${RegisterAs == 'Baser' ? 'bg-BaserSurface text-BaserOnSurfase' : ' bg-BostanySurfaceContainer text-BostanyOnSurface'}  placeholder:text-dark  rounded-2xl focus:outline-2  ${PhoneError && ' focus:outline focus:outline-GeneralError outline outline-GeneralError !border-GeneralError !border  !text-GeneralError'}   ${!isError ? RegisterAs == 'Baser' ? '  focus:outline-BaserPrimary' : 'focus:outline-BostanyPrimary' : ''}  focus:ring-0  outline-none border-none  placeholder:text-dark  p-4`} placeholder="أدخل رقم الهاتف" />
                    <span className=" text-dark text-sm font-normal">سنرسل لك رمز تحقق عبر رسالة نصية</span>
                </div>
                <div className="">
                    <button onClick={handleSubmit}
                        disabled={handleNumberValidation(RegisterData.phoneNumber.toString(), RegisterData.phone_code.toUpperCase().toString()) != 200}
                        className={`  ${handleNumberValidation(RegisterData.phoneNumber.toString(), RegisterData.phone_code.toUpperCase().toString()) != 200 ? ` text-[#A9A6A9] bg-[#DAD7DA]  opacity-[38]` : ` cursor-pointer  text-white ${RegisterAs == 'Baser' ? 'bg-BaserPrimary' : 'bg-BostanyPrimary'} `} w-full   rounded-full px-[20px] py-4  text-base font-medium`}>{isLoading ? '...loaging' : 'استمرار'}</button>
                    {
                        PhoneError && <p className=" text-GeneralError text-sm  font-normal  my-3">الرجاء ادخال رقم هاتف صالح</p>
                    }
                </div>
            </div>
            <div className="flex relative">
                <p className=" border-BaserOutline border-b w-full h-1 " ></p>
                <span className=" absolute w-3 bg-white text-center top-[-12px] left-[48%]">او</span>
            </div>
            <div className=" flex  items-center justify-center gap-10 ">
                <div className=" p-3 border border-BaserOutline rounded-full cursor-pointer">
                    <img src={AppleIcon} alt={AppleIcon} className="w-[30px] h-[30px]" />
                </div>
                <div onClick={handleOuthClick} className=" p-3 border border-BaserOutline rounded-full cursor-pointer">
                    <FcGoogle className="text-3xl" />
                </div>
            </div>
            {
                RegisterAs == 'Baser' && <button onClick={handleRegisterChange} className={`flex  flex-row-reverse gap-2 font-medium  justify-center  cursor-pointer  text-BostanyPrimary items-center `}>
                    تسجيل حساب  / دخول بستاني
                    <img src={BosatnyIcon} alt={BosatnyIcon} className="w-[18px] h-[18px]" />
                </button>
            }
            {
                RegisterAs == 'Bostany' && <button onClick={handleRegisterChange} className={`flex  flex-row-reverse gap-2 font-medium  justify-center  cursor-pointer  text-BaserPrimary items-center `}>
                    تسجيل حساب  / دخول باذر <img src={baserIcon} alt={baserIcon} className="w-[18px] h-[18px]" />
                </button>
            }
        </div >
    )
}

export default InterNumberStep


