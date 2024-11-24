import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store";
import { changeExperiencesData } from "../../redux/Slices/experienceSlice";

const Subexperiences = ({ index, setCHangeHappend }: { index: number, setCHangeHappend: (value: boolean) => void }) => {
    const dispatch = useDispatch()
    const ExperiencesData = useAppSelector((state) => state.experiences.ExperiencesData)
    const thisExperiencesData = ExperiencesData.filter((ele) => ele.id == index)[0]
    const [experiencesData, setexperiencesData] = useState({
        id: thisExperiencesData.id,
        job_title: thisExperiencesData.job_title,
        issuer: thisExperiencesData.issuer,
        year: thisExperiencesData.year,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setexperiencesData({
            ...experiencesData,
            [e.target.name]: e.target.value
        })
        setCHangeHappend(true);
        dispatch(changeExperiencesData({
            ...experiencesData,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="flex flex-col gap-4" key={index} >
            <div className="flex flex-col gap-3">
                <span className="font-medium text-base  text-[#191C1B]">الخبرات</span>
                <input onChange={handleInputChange} value={experiencesData.job_title} type="text" name="job_title" className="w-full bg-BaserSurface text-dark  rounded-2xl border-none focus:ring-0 focus:outline-BostanyPrimary p-4" placeholder="المسمى الوظيفي" />
            </div>
            <input onChange={handleInputChange} value={experiencesData.issuer} type="text" name="issuer" className="w-full bg-BaserSurface text-dark  rounded-2xl focus:ring-0 focus:outline-BostanyPrimary border-none p-4" placeholder="الجهة" />
            <input onChange={handleInputChange} value={experiencesData.year} type="text" name="year" className="w-full bg-BaserSurface text-dark  rounded-2xl focus:ring-0 focus:outline-BostanyPrimary border-none p-4" placeholder="عدد السنوات " />
        </div>
    )
}

export default Subexperiences