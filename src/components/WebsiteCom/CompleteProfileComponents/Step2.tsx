import { Datepicker, Label } from "flowbite-react";
import BaserManIcon from '/Icons/Man.png'
import BaserfemaleIcon from '/Icons/female.png'
import BostanyManIcon from '/Icons/BostanyMan.png'
import BostanyfemaleIcon from '/Icons/Bostanyfemale.png'
import { CompleteProfileStepProps } from "../../../Types";
import { useAppSelector } from "../../../redux/store";

const Step2 = ({ FormData, SetFormData }: CompleteProfileStepProps) => {
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)

    const handleFromDateChange = (date: Date) => {
        SetFormData({
            ...FormData,
            birthDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`,//YYYY-MM-DD
        })
    };
    const handleGenderClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        SetFormData({
            ...FormData,
            gender: (e.target as HTMLButtonElement).value
        })
    }
    return (
        <div className="flex flex-col gap-7  min-w-full">
            <div className=" relative flex-col flex gap-1 w-full items-center">
                {FormData.birthDate == '' && <Label htmlFor="ToDatePicker"
                    className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4  absolute top-0 z-10 left-0">
                    <span>يوم / شهر / سنة</span>
                </Label>}
                <Datepicker
                    onChange={handleFromDateChange}
                    name="ToDatePicker" id="ToDatePicker"
                    style={{ backgroundColor: '#faf5f9', width: '100%', border: '0', borderRadius: '30px', padding: '15px 40px', fontSize: '16px', fontWeight: 'normal' }}
                    theme={{
                        root: {
                            base: "relative w-full"
                        }, popup: { root: { base: 'absolute top-0 min-w-full  left-0 z-50 block ' } }
                    }} />
            </div>
            <div className="min-w-full flex  gap-3 " >
                <button onClick={handleGenderClick} value='ذكر' className={` ${FormData.gender == 'ذكر' && `${RegisterAs == 'Baser' ? '!border-BaserPrimary' : '!border-BostanyPrimary'}`} border-2 border-BaserSurface flex-1 z-10 p-4 cursor-pointer bg-BaserSurface flex flex-col items-center gap-4 rounded-2xl`}>
                    <img src={RegisterAs == 'Baser' ? BaserManIcon : BostanyManIcon} alt={RegisterAs == 'Baser' ? BaserManIcon : BostanyManIcon} className="w-20 h-20  pointer-events-none" />
                    <p>ذكر</p>
                </button>
                <button onClick={handleGenderClick} value='أنثي' className={`${FormData.gender == 'أنثي' && `${RegisterAs == 'Baser' ? '!border-BaserPrimary' : '!border-BostanyPrimary'}`}  border-2 border-BaserSurface flex-1 p-4 cursor-pointer bg-BaserSurface flex flex-col items-center gap-4 rounded-2xl`}>
                    <img src={RegisterAs == 'Baser' ? BaserfemaleIcon : BostanyfemaleIcon} alt={RegisterAs == 'Baser' ? BaserfemaleIcon : BostanyfemaleIcon} className="w-20 h-20 pointer-events-none " />
                    <p>أنثي</p>
                </button>
            </div>
        </div>
    )
}

export default Step2