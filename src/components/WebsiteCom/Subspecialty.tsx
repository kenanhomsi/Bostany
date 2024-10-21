import { useState } from "react";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { changeQualificationData } from "../../redux/Slices/QualificationData";
export interface SubspecialtyProps {
    index: number;
}
const Subspecialty = ({ index }: SubspecialtyProps) => {
    const dispatch = useDispatch()
    const qualificationDataArry = useAppSelector((state) => state.qualificationData.QualificationDataArray)
    const thisqualificationData = qualificationDataArry.filter((ele) => ele.id == index)[0]
    const [QualificationData, setQualificationData] = useState({
        id: thisqualificationData.id,
        educational_institution: "",
        Academic_degree: 'البكالوريوس',
        Specialization: '',
        Graduation_date: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setQualificationData({
            ...QualificationData,
            [e.target.name]: e.target.value
        })

        dispatch(changeQualificationData({
            ...QualificationData,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="flex flex-col gap-2" key={index} >
            <div className="flex flex-col gap-1">
                <span className="font-medium text-base  text-[#191C1B]">اختيار المجال</span>
                <input onChange={handleInputChange} value={QualificationData.educational_institution} type="text" name="educational_institution" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="اسم المؤسسة التعليمية" />
            </div>
            <select name="Academic_degree" defaultValue='البكالوريوس' value={QualificationData.Academic_degree} onChange={handleInputChange} id="Academic_degree" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4">
                <option value="البكالوريوس" >درجة البكالوريوس</option>
                <option value="الماجستير">درجة الماجستير</option>
                <option value="دكتوراه">درجة دكتوراه</option>
            </select>
            <input onChange={handleInputChange} value={QualificationData.Specialization} type="text" name="Specialization" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="التخصص" />
            <input onChange={handleInputChange} value={QualificationData.Graduation_date} type="text" name="Graduation_date" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="تاريخ التخرج" />
        </div>
    )
}

export default Subspecialty

