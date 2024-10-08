import CountrySelect from "./CountrySelect"
import { PiAppleLogoFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { PiTreeFill } from "react-icons/pi";
import { Dispatch, SetStateAction, useState } from "react";
import KSAFlag from '/country/KAS.png'
import EgyptFlag from '/country/eg.png'
import PalastenFlag from '/country/ps.png'
import QatterFlag from '/country/qa.png'
import { useAppSelector } from "../../redux/store";
import baserIcon from '/Icons/Baser.png'
import { useDispatch } from "react-redux";
import { changeRegisterAsState } from "../../redux/Slices/RegisterSlice";
const InterNumberStep = ({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) => {
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    const [DropDownValue, setDropDownValue] = useState(0)
    const Dispatch = useDispatch();
    const handleClick = () => {
        setStep(2);
    }
    const data = [{
        id: 1,
        name: 'السعودية',
        icon: KSAFlag,
        suffix: '+963'

    },
    {
        id: 2,
        name: 'مصر',
        icon: EgyptFlag,
        suffix: '+55'
    },
    {
        id: 3,
        name: 'فلسطين',
        icon: PalastenFlag,
        suffix: '+66'

    },
    {
        id: 4,
        name: 'قطر',
        icon: QatterFlag,
        suffix: '+32'

    },
    {
        id: 5,
        name: 'العراق',
        icon: KSAFlag,
        suffix: '+222232'

    },]
    // const SelectedValue = data.filter((ele) => {
    //     if (ele.id == DropDownValue) {
    //         return ele.id
    //     }
    // })[0] || data[0]
    const [numberValue, setNumberValue] = useState(0)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberValue(+e.target.value);
    };
    const handleRegisterChange = () => {
        if (RegisterAs == 'Baser') {
            Dispatch(changeRegisterAsState('Bostany'))
        } else {
            Dispatch(changeRegisterAsState('Baser'))
        }
    }
    return (
        <div className="flex self-center flex-col gap-5 w-full">
            <h2 className={`text-BaserOnSurfase text-3xl font-semibold ${RegisterAs == 'Bostany' ? 'pb-0' : 'pb-7'} `}>{RegisterAs == 'Baser' ? 'تسجيل حساب باذر' : 'تسجيل حساب بستاني'}</h2>
            {RegisterAs == 'Bostany' && <p className="font-medium text-base my-2 text-[#191C1B]">البستاني عندنا هو الخبير أو المتخصص أو المستشار في مجاله</p>}
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-base  text-[#191C1B]">الدولة</span>
                    <CountrySelect data={data} DropDownValue={DropDownValue}
                        setDropDownValue={setDropDownValue} />
                </div>
                <div className=" flex flex-col gap-1">
                    <span className="font-medium text-base  text-[#191C1B]">رقم الهاتف</span>
                    <input type="number" onChange={handleChange} value={numberValue == 0 ? '' : numberValue} className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="أدخل رقم الهاتف" />
                    <span className=" text-dark text-sm font-normal">سنرسل لك رمز تحقق عبر رسالة نصية</span>
                </div>
                <button onClick={handleClick} disabled={numberValue == 0} className={`  ${numberValue == 0 ? ` text-[#A9A6A9] bg-[#DAD7DA]  opacity-[38]` : ` cursor-pointer  text-white ${RegisterAs == 'Baser' ? 'bg-BaserPrimary' : 'bg-BostanyPrimary'} `} w-full   rounded-full p-3  text-base font-medium`}>استمرار</button>
            </div>
            <div className="flex relative">
                <p className=" border-BaserOutline border-b w-full h-1 " ></p>
                <span className=" absolute w-3 bg-white text-center top-[-12px] left-[48%]">او</span>
            </div>
            <div className=" flex  items-center justify-center gap-10 ">
                <div className=" p-3 border border-BaserOutline rounded-full cursor-pointer">
                    <PiAppleLogoFill className="text-3xl" />
                </div>
                <div className=" p-3 border border-BaserOutline rounded-full cursor-pointer">
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