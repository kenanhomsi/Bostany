import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { changeQualificationData } from "../../redux/Slices/QualificationData";
export interface SubspecialtyProps {
    index: string;
    setCHangeHappend?: (value: boolean) => void
}
const Subspecialty = ({ index, setCHangeHappend }: SubspecialtyProps) => {
    const dispatch = useDispatch()
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    const qualificationDataArry = useAppSelector((state) => state.qualificationData.QualificationDataArray)
    const thisqualificationData = qualificationDataArry.filter((ele) => ele.id == index)[0]
    const [QualificationData, setQualificationData] = useState({
        id: thisqualificationData.id,
        issuer: thisqualificationData.issuer,
        // Academic_degree: 'البكالوريوس',
        cartificate: thisqualificationData.cartificate,
        year: thisqualificationData.year,
    });
    useEffect(() => {
        setQualificationData({
            id: thisqualificationData.id,
            issuer: thisqualificationData.issuer,
            // Academic_degree: 'البكالوريوس',
            cartificate: thisqualificationData.cartificate,
            year: thisqualificationData.year,
        })
    }, [thisqualificationData, index])
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
        <div className={`flex flex-col gap-4 ${RegisterAs == 'Baser' ? ' text-BaserOnSurfase' : ' text-BostanyOnSurface'}`} key={index} >
            <div className="flex flex-col gap-2">
                <span className={`font-medium text-base  `}>المؤهلات الاكاديمية</span>
                <input onChange={handleInputChange} value={QualificationData.issuer} type="text" name="issuer" className={`w-full ${RegisterAs == 'Baser' ? 'bg-BaserSurface focus:outline-BaserPrimary ' : 'bg-BostanySurfaceContainer focus:outline-BostanyPrimary '} placeholder:text-dark   focus:ring-0  rounded-2xl border-none py-4 px-6`} placeholder="اسم المؤسسة التعليمية" />
            </div>
            <select name="Academic_degree" defaultValue='البكالوريوس'
                // value={QualificationData.Academic_degree}
                // onChange={handleInputChange}
                id="Academic_degree" className={`w-full h-20 ${RegisterAs == 'Baser' ? 'bg-BaserSurface focus:outline-BaserPrimary ' : 'bg-BostanySurfaceContainer focus:outline-BostanyPrimary '} focus:ring-0  placeholder:text-dark   rounded-2xl border-none py-4 px-6`}>
                <option value="البكالوريوس" >درجة البكالوريوس</option>
                <option value="الماجستير">درجة الماجستير</option>
                <option value="دكتوراه">درجة دكتوراه</option>
            </select>
            <input onChange={handleInputChange} value={QualificationData.cartificate} type="text" name="cartificate" className={`w-full ${RegisterAs == 'Baser' ? 'bg-BaserSurface ' : 'bg-BostanySurfaceContainer '}  focus:ring-0 focus:outline-BostanyPrimary  placeholder:text-dark   rounded-2xl border-none py-4 px-6`} placeholder="التخصص" />
            <input onChange={handleInputChange} value={QualificationData.year} type="text" name="year" className={`w-full ${RegisterAs == 'Baser' ? 'bg-BaserSurface ' : 'bg-BostanySurfaceContainer '} placeholder:text-dark focus:ring-0 focus:outline-BostanyPrimary    rounded-2xl border-none py-4 px-6`} placeholder="تاريخ التخرج" />
        </div>
    )
}

export default Subspecialty

