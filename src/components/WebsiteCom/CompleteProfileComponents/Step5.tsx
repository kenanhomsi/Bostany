import { CompleteProfileStepProps } from "../../../Types"

const Step5 = ({ FormData, SetFormData }: CompleteProfileStepProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        SetFormData({
            ...FormData,
            DefinitiveWords: e.target.value
        })
    }
    return (
        <div className="flex flex-col gap-2  min-w-full">
            <p className=" font-medium text-base text-[#191C1B]">كلمات تعريفية تشويقية عنك</p>
            <textarea rows={5} onChange={handleChange} className=" resize-none bg-BaserSurface text-dark font-medium focus:border-BostanyPrimary  rounded-3xl border-none p-4" />
        </div>
    )
}

export default Step5