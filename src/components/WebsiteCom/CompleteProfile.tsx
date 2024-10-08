import { useEffect, useState } from "react"
import { RiArrowRightSLine } from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import Step1 from "./CompleteProfileComponents/Step1";
import Step2 from "./CompleteProfileComponents/Step2";
import { CompleteProfileFormData } from "../../Types";
import Step3 from "./CompleteProfileComponents/Step3";
import Step4 from "./CompleteProfileComponents/Step4";
import Step5 from "./CompleteProfileComponents/Step5";
const CompleteProfile = () => {
    const navigate = useNavigate()
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    const [CompleteProfileStep, SetCompleteProfileStep] = useState(1)
    const [PassState, SetPassState] = useState(false)
    const [FormData, SetFormData] = useState<CompleteProfileFormData>({
        FullName: '',
        email: '',
        checkOne: false,
        checkTwo: false,
        birthDate: '',
        gender: '',
        WorkType: '',
        WorkSpace: {
            id: 2,
            name: ''
        },
        qualification: [],
        DefinitiveWords: ''
    });
    useEffect(() => {
        if (CompleteProfileStep == 1) {
            if (FormData.FullName != '' && FormData.email != '' && FormData.checkOne && FormData.checkTwo) {
                SetPassState(true)
            } else {
                SetPassState(false)
            }
        }
        else if (CompleteProfileStep == 2) {
            if (FormData.birthDate != null && FormData.gender != '') {
                SetPassState(true)
            } else {
                SetPassState(false)
            }
        } else if (CompleteProfileStep == 3) {
            if (FormData.WorkType != '' && FormData.WorkSpace.name != '') {
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
    }, [FormData, CompleteProfileStep])
    const handleClickArrowBack = () => {
        console.log(CompleteProfileStep)
        SetCompleteProfileStep((pre) => pre - 1);
    }
    const handleContinousBtn = () => {
        console.log(CompleteProfileStep)
        if (RegisterAs == 'Baser') {
            if (CompleteProfileStep < 2) return SetCompleteProfileStep((pre) => pre + 1)
            navigate('/');
        } else {
            if (CompleteProfileStep < 5) return SetCompleteProfileStep((pre) => pre + 1)
            navigate('/');
        }

    }
    const handleSendAModelBtn = () => {
        navigate('/');
    }
    return (
        <div className="flex flex-col items-start mt-5 justify-start gap-5 w-full">
            {CompleteProfileStep > 1 && <div className=" p-1 cursor-pointer bg-BaserSurface rounded-full  w-fit " onClick={handleClickArrowBack}>
                <RiArrowRightSLine className="w-6 h-6" />
            </div>}
            <h2 className="text-BaserOnSurfase text-3xl font-semibold ">إكمال الملف الشخصي</h2>
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
                CompleteProfileStep == 4 && <Step4 FormData={FormData} SetFormData={SetFormData} />
            }
            {
                CompleteProfileStep == 5 && <Step5 FormData={FormData} SetFormData={SetFormData} />
            }
            {CompleteProfileStep < 5 &&
                <>
                    <button onClick={handleContinousBtn} disabled={!PassState} className={` ${!PassState ? " text-[#A9A6A9] bg-[#DAD7DA]  opacity-[38]" : `text-white cursor-pointer  ${RegisterAs == 'Baser' ? 'bg-BaserPrimary' : 'bg-BostanyPrimary'}`} w-full   rounded-full p-3  text-base font-medium`}> {CompleteProfileStep < 3 ? 'إتمام التسجيل' : 'التالي'}</button>
                    <Link to='/' className="font-medium self-center mb-5">تخطي</Link>
                </>
            }
            {CompleteProfileStep == 5 &&
                <button onClick={handleSendAModelBtn} disabled={!PassState} className={` ${!PassState ? " text-[#A9A6A9] bg-[#DAD7DA]  opacity-[38]" : `text-white cursor-pointer  bg-BostanyPrimary `} w-full   rounded-full p-3  text-base font-medium`}> إرسال النموذج</button>
            }
        </div>
    )
}

export default CompleteProfile