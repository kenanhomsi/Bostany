import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { PiCaretRight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { CompleteProfileFormData } from "../../Types";
import Step1 from "./CompleteProfileComponents/Step1";
import Step2 from "./CompleteProfileComponents/Step2";
import Step3 from "./CompleteProfileComponents/Step3";
import Step4 from "./CompleteProfileComponents/Step4";
import Step5 from "./CompleteProfileComponents/Step5";
import { useUpdateProfile } from "../../utils/api/User/usePutProfile";
import { loginSuccess } from "../../redux/Slices/authSlice";
import { useDispatch } from "react-redux";
import { EmptyQualificationData } from "../../redux/Slices/QualificationData";
import { IGetProfile } from "../../Types/api";
import { isValidEmail } from "@/utils/Functions";
const CompleteProfile = ({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) => {
    const navigate = useNavigate()
    const Dispatch = useDispatch()
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    const QualificationDataArray = useAppSelector((state) => state.qualificationData.QualificationDataArray)
    const [FinalSend, SetFinalSend] = useState(false)
    const [CompleteProfileStep, SetCompleteProfileStep] = useState(1)
    const [PassState, SetPassState] = useState(false)
    const { mutate, isError, error, isLoading, isSuccess, data } = useUpdateProfile();
    const [FormData, SetFormData] = useState<CompleteProfileFormData>({
        FullName: '',
        email: '',
        checkOne: false,
        checkTwo: false,
        birthDate: '',
        gender: '',
        specialities: [],
        category: [],
        qualification: [],
        DefinitiveWords: ''
    });
    useEffect(() => {
        if (CompleteProfileStep == 1) {
            if (FormData.FullName != '' && isValidEmail(FormData.email) && FormData.checkOne) {
                SetPassState(true)
            } else {
                SetPassState(false)
            }
        } else if (CompleteProfileStep == 2) {
            if (FormData.birthDate != '' && FormData.gender != '') {
                SetPassState(true)
            } else {
                SetPassState(false)
            }
        } else if (CompleteProfileStep == 3) {
            if (FormData.specialities.length > 0 && FormData.category.length > 0) {
                SetPassState(true)
            } else {
                SetPassState(false)
            }
        }
        else if (CompleteProfileStep == 4) {
            if (FormData.qualification.length > 0) {
                SetPassState(true)
            } else {
                SetPassState(false)
            }
        }
        else if (CompleteProfileStep == 5) {
            if (FormData.DefinitiveWords != '') {
                SetPassState(true)
            } else {
                SetPassState(false)
            }
        }
    }, [CompleteProfileStep, FormData])
    const handleClickArrowBack = () => {
        if (CompleteProfileStep == 1) {
            setStep(2)
        } else {
            SetCompleteProfileStep((pre) => pre - 1);
        }
    }
    useEffect(() => {
        SetFormData({
            ...FormData,
            qualification: QualificationDataArray,
        })
    }, [QualificationDataArray])
    useEffect(() => {
        if (isSuccess && RegisterAs == 'Baser') {
            Dispatch(loginSuccess({
                user: data?.data as IGetProfile,
            }))
            navigate('/Baser');
        }
        else if (FinalSend && isSuccess && RegisterAs == 'Bostany' && CompleteProfileStep == 5) {
            Dispatch(loginSuccess({
                user: data?.data as IGetProfile,
            }))
            Dispatch(EmptyQualificationData())
            navigate('/Bostany');
        }
        // else if (isSuccess && RegisterAs == 'Bostany' && CompleteProfileStep == 2) {
        //     SetCompleteProfileStep((pre) => pre + 1)
        // }
    }, [CompleteProfileStep, Dispatch, RegisterAs, data, isSuccess, navigate])
    const handleContinousBtn = () => {
        if (RegisterAs == 'Baser') {
            if (CompleteProfileStep < 2) return SetCompleteProfileStep((pre) => pre + 1)

            mutate({
                payload: {
                    name: FormData.FullName,
                    email: FormData.email,
                    birthdate: FormData.birthDate,
                    gender: FormData.gender
                }
            })
        } else {
            if (CompleteProfileStep == 2) {
                mutate({
                    payload: {
                        name: FormData.FullName,
                        email: FormData.email,
                        birthdate: FormData.birthDate,
                        gender: FormData.gender
                    }
                })
                Dispatch(EmptyQualificationData());
                SetCompleteProfileStep((pre) => pre + 1)
            } else {
                SetCompleteProfileStep((pre) => pre + 1)
            }
        }

    }
    const handleSendAModelBtn = () => {
        mutate({
            payload: {
                bio: FormData.DefinitiveWords,
                certificates: FormData.qualification,
                categories: FormData.category,
                specialities: FormData.specialities,
                name: FormData.FullName,
                email: FormData.email,
                birthdate: FormData.birthDate,
                gender: FormData.gender
            }
        })
        SetFinalSend(true)
    }
    return (
        <div className="flex flex-col items-start  justify-start gap-6 w-full">
            {<div className={` p-1 cursor-pointer ${RegisterAs == 'Baser' ? "bg-BaserSurface text-BaserOnSurfase" : " bg-BostanySurfaceContainer text-BostanyOnSurface"}  rounded-full  w-fit `} onClick={handleClickArrowBack}>
                <PiCaretRight className="w-6 h-6" />
            </div>}
            <h2 className={` ${RegisterAs == 'Baser' ? 'text-BaserOnSurfase' : ' text-BostanyOnSurface'}  text-3xl my-4 font-semibold `}> {RegisterAs == 'Baser' ? 'إكمال الملف الشخصي' : 'عرفنا بشخصك الكريم'}</h2>
            {
                CompleteProfileStep == 1 && <Step1 FormData={FormData} SetFormData={SetFormData} />
            }
            {
                CompleteProfileStep == 2 && <Step2 FormData={FormData} SetFormData={SetFormData} />
            }
            {
                CompleteProfileStep == 3 && <Step3 FormData={FormData} SetFormData={SetFormData} />
            }
            {
                CompleteProfileStep == 4 && <Step4 />
            }
            {
                CompleteProfileStep == 5 && <Step5 FormData={FormData} SetFormData={SetFormData} />
            }
            {CompleteProfileStep < 5 &&
                <>
                    <button onClick={handleContinousBtn} disabled={!PassState} className={` ${!PassState ? " text-[#A9A6A9] bg-[#DAD7DA]  opacity-[38]" : `text-white cursor-pointer  ${RegisterAs == 'Baser' ? 'bg-BaserPrimary' : 'bg-BostanyPrimary'}`} w-full   rounded-full py-4 px-5  text-base font-medium`}> {RegisterAs == 'Baser' && CompleteProfileStep == 2 ? isLoading ? '...loading' : 'إتمام التسجيل' : isLoading ? '...loading' : 'التالي'}</button>
                    {
                        isError &&
                        <>
                            <p className=" text-GeneralError">{error?.response.data.message}</p>
                        </>
                    }
                    {
                        RegisterAs == 'Baser' && CompleteProfileStep == 2 &&
                        <Link to='/Baser' className="font-medium self-center mb-5">تخطي</Link>
                    }
                    {
                        RegisterAs != 'Baser' && CompleteProfileStep == 5 &&
                        <Link to='/Bostany' className="font-medium self-center mb-5">تخطي</Link>

                    }
                </>
            }
            {CompleteProfileStep == 5 &&
                <button onClick={handleSendAModelBtn} disabled={!PassState} className={` ${!PassState ? " text-[#A9A6A9] bg-[#DAD7DA]  opacity-[38]" : `text-white cursor-pointer  bg-BostanyPrimary `} w-full   rounded-full p-3  text-base font-medium`}> {isLoading ? '...loading' : 'إرسال النموذج'} </button>
            }
        </div>
    )
}

export default CompleteProfile