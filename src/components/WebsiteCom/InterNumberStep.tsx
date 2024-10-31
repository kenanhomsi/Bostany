import CountrySelect from "./CountrySelect"
import { PiAppleLogoFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { PiTreeFill } from "react-icons/pi";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store";
import baserIcon from '/Icons/Baser.png'
import { useDispatch } from "react-redux";
import { changeRegisterAsState } from "../../redux/Slices/RegisterSlice";
import useFetchCountries from "../../Hooks/useFetchAllCountreis";
import { usePostLogin } from "../../utils/api/auth/usePostLogin";
import { loginSuccess, User } from "../../redux/Slices/authSlice";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../../firebase'
const InterNumberStep = ({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) => {
    const auth = getAuth(app);
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    const [RegisterData, setRegisterData] = useState({
        phoneNumber: '',
        type: RegisterAs,
        phone_code: 'sy'
    })
    const { data, isSuccess, isLoading, isError, mutate } = usePostLogin();
    const { allCountries } = useFetchCountries();
    const [DropDownValue, setDropDownValue] = useState(1)
    const Dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            Dispatch(loginSuccess({
                user: data?.data.data as User,
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
                username: RegisterData.phoneNumber.toString(),//or phone number
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
    return (
        <div className="flex self-center flex-col gap-5 w-full">
            <h2 className={`text-BaserOnSurfase text-3xl font-semibold ${RegisterAs == 'Bostany' ? 'pb-0' : 'pb-7'} `}>{RegisterAs == 'Baser' ? 'تسجيل حساب باذر' : 'تسجيل حساب بستاني'}</h2>
            {RegisterAs == 'Bostany' && <p className="font-medium text-base my-2 text-[#191C1B]">البستاني عندنا هو الخبير أو المتخصص أو المستشار في مجاله</p>}
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-base  text-[#191C1B]">الدولة</span>
                    {
                        allCountries.length > 0 &&
                        <CountrySelect data={allCountries} DropDownValue={DropDownValue}
                            setDropDownValue={setDropDownValue} />
                    }
                </div>
                <div className=" flex flex-col gap-1">
                    <span className="font-medium text-base  text-[#191C1B]">رقم الهاتف</span>
                    <input type="text" onChange={handleChange} value={RegisterData.phoneNumber == '' ? '' : RegisterData.phoneNumber} className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="أدخل رقم الهاتف" />
                    <span className=" text-dark text-sm font-normal">سنرسل لك رمز تحقق عبر رسالة نصية</span>
                </div>
                <button onClick={handleSubmit} disabled={RegisterData.phoneNumber == ''} className={`  ${RegisterData.phoneNumber == '' ? ` text-[#A9A6A9] bg-[#DAD7DA]  opacity-[38]` : ` cursor-pointer  text-white ${RegisterAs == 'Baser' ? 'bg-BaserPrimary' : 'bg-BostanyPrimary'} `} w-full   rounded-full p-3  text-base font-medium`}>{isLoading ? '...loaging' : 'استمرار'}</button>
                {
                    isError && <p className=" text-GeneralError text-center my-3">هنالك خطا في البيانات الرجاء التاكد منها واعادة المحاولة</p>
                }
            </div>
            <div className="flex relative">
                <p className=" border-BaserOutline border-b w-full h-1 " ></p>
                <span className=" absolute w-3 bg-white text-center top-[-12px] left-[48%]">او</span>
            </div>
            <div className=" flex  items-center justify-center gap-10 ">
                <div className=" p-3 border border-BaserOutline rounded-full cursor-pointer">
                    <PiAppleLogoFill className="text-3xl" />
                </div>
                <div onClick={handleOuthClick} className=" p-3 border border-BaserOutline rounded-full cursor-pointer">
                    <FcGoogle className="text-3xl" />
                </div>
            </div>
            {RegisterAs == 'Baser' && <button onClick={handleRegisterChange} className={`flex  flex-row-reverse gap-2  justify-center  cursor-pointer  text-BostanyPrimary items-center `}>
                تسجيل حساب بستاني <PiTreeFill />
            </button>}
            {RegisterAs == 'Bostany' && <button onClick={handleRegisterChange} className={`flex  flex-row-reverse gap-2  justify-center  cursor-pointer  text-BaserPrimary items-center `}>
                تسجيل حساب باذر <img src={baserIcon} alt={baserIcon} className="w-[18px] h-[18px]" />
            </button>}
        </div >
    )
}

export default InterNumberStep


