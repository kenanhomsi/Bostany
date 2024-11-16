import { useAppSelector } from "../../../redux/store"
import { CompleteProfileStepProps } from "../../../Types"

const Step5 = ({ FormData, SetFormData }: CompleteProfileStepProps) => {
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        SetFormData({
            ...FormData,
            DefinitiveWords: e.target.value
        })
    }
    return (
        <div className={`flex flex-col gap-2  min-w-full  ${RegisterAs == 'Baser' ? ' text-BaserOnSurfase ' : ' text-BostanyOnSurface '}`}>
            <p className="font-medium text-base ">كلمات تعريفية تشويقية عنك</p>
            <textarea rows={5} onChange={handleChange} className={` ${RegisterAs == 'Baser' ? 'bg-BaserSurface text-BaserOnSurfase ' : 'bg-BostanySurfaceContainer text-BostanyOnSurface '} resize-none  placeholder:text-dark font-medium focus:outline-BostanyPrimary  ring-0 focus:ring-0  rounded-3xl border-none p-4`} placeholder="نص" />
        </div >
    )
}

export default Step5