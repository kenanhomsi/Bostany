import { useState } from "react";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { changeQualificationData } from "../../redux/Slices/QualificationData";
export interface SubspecialtyProps {
    index: number;
    setCHangeHappend?: (value: boolean) => void
}
const Subspecialty = ({ index, setCHangeHappend }: SubspecialtyProps) => {
    const dispatch = useDispatch()
    const qualificationDataArry = useAppSelector((state) => state.qualificationData.QualificationDataArray)
    const thisqualificationData = qualificationDataArry.filter((ele) => ele.id == index)[0]
    const [QualificationData, setQualificationData] = useState({
        id: thisqualificationData.id,
        issuer: thisqualificationData.issuer,
        // Academic_degree: 'البكالوريوس',
        cartificate: thisqualificationData.cartificate,
        year: thisqualificationData.year,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setQualificationData({
            ...QualificationData,
            [e.target.name]: e.target.value
        })
        if (setCHangeHappend) setCHangeHappend(true);
        dispatch(changeQualificationData({
            ...QualificationData,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="flex flex-col gap-4" key={index} >
            <div className="flex flex-col gap-3">
                <span className="font-medium text-base  text-[#191C1B]">اختيار المجال</span>
                <input onChange={handleInputChange} value={QualificationData.issuer} type="text" name="issuer" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="اسم المؤسسة التعليمية" />
            </div>
            <select name="Academic_degree" defaultValue='البكالوريوس'
                // value={QualificationData.Academic_degree}
                // onChange={handleInputChange}
                id="Academic_degree" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4">
                <option value="البكالوريوس" >درجة البكالوريوس</option>
                <option value="الماجستير">درجة الماجستير</option>
                <option value="دكتوراه">درجة دكتوراه</option>
            </select>
            <input onChange={handleInputChange} value={QualificationData.cartificate} type="text" name="cartificate" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="التخصص" />
            <input onChange={handleInputChange} value={QualificationData.year} type="text" name="year" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4" placeholder="تاريخ التخرج" />
        </div>
    )
}

export default Subspecialty

