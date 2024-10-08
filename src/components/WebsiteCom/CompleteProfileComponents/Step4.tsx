import { useState } from "react";
import { CompleteProfileStepProps, qualificationType } from "../../../Types"
import { FaPlus } from "react-icons/fa6";

const Step4 = ({ FormData, SetFormData }: CompleteProfileStepProps) => {
    const [QualificationData, setQualificationData] = useState({
        educational_institution: '',
        Academic_degree: '',
        Specialization: '',
        Graduation_date: '',
    });
    const [QualificationDataArray, setQualificationDataArray] = useState<qualificationType[]>([])
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setQualificationData({
            ...QualificationData,
            [e.target.name]: e.target.value
        })
    }
    const handleAnotherqualification = () => {
        const array = QualificationDataArray
        array.push(QualificationData)
        setQualificationDataArray(array)
        SetFormData({
            ...FormData,
            qualification: array
        })
        setQualificationData({
            educational_institution: '',
            Academic_degree: '',
            Specialization: '',
            Graduation_date: '',
        })
    }
    return (
        <div className="flex flex-col gap-5  min-w-full">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-base  text-[#191C1B]">اختيار المجال</span>
                    <input onChange={handleInputChange} value={QualificationData.educational_institution} type="text" name="educational_institution" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="اسم المؤسسة التعليمية" />
                </div>
                <select name="Academic_degree" value={QualificationData.Academic_degree} onChange={handleInputChange} id="Academic_degree" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4">
                    <option value="">درجة البكالوريوس</option>
                    <option value="">درجة الماجستير</option>
                    <option value="">درجة دكتوراه</option>
                </select>
                <input onChange={handleInputChange} value={QualificationData.Specialization} type="text" name="Specialization" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="التخصص" />
                <input onChange={handleInputChange} value={QualificationData.Graduation_date} type="text" name="Graduation_date" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="تاريخ التخرج" />
            </div>
            {
                FormData.qualification.length > 0 && <div className=" flex flex-col gap-2">
                    {FormData.qualification.map((ele, index) => (
                        <p className=" text-sm " key={index}> - {ele.Specialization} من {ele.educational_institution}</p>
                    ))}
                </div>
            }
            <button onClick={handleAnotherqualification} className=" flex-row-reverse gap-2 text-bas font-medium text-BaserOnSurfase flex  items-center justify-center">
                <p>أضافة مؤهل أخر</p> <FaPlus />
            </button>
        </div>
    )
}

export default Step4