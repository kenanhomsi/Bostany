import { WorkSpaceData } from "../../../utils/data"
import { CompleteProfileStepProps } from "../../../Types"
import { useEffect, useState } from "react"
import { useGetSpecialitiestList } from "../../../utils/api/select/useGetspecialities"
import { useGetCategoriestList } from "../../../utils/api/select/useGetCategories"
const Step3 = ({ FormData, SetFormData }: CompleteProfileStepProps) => {
    const { data } = useGetSpecialitiestList();
    const [SelectedCategory, setSelectedCategory] = useState<number>()
    const { data: categories, refetch } = useGetCategoriestList({
        queryKey: ["Categories", SelectedCategory]
    });
    useEffect(() => {
        refetch()
    }, [SelectedCategory, refetch])
    const handleWorkSpaceClick = (id: number) => {
        setSelectedCategory(id)
        SetFormData({
            ...FormData,
            specialities: FormData.specialities.includes(id) ? FormData.specialities.filter((ele) => ele !== id) : [...FormData.specialities, id]
        })
    }
    const handleWorkTypeClick = (id: number) => {
        SetFormData({
            ...FormData,
            category: FormData.category.includes(id) ? FormData.category.filter((ele) => ele !== id) : [...FormData.category, id],
        })
    }
    return (
        <div className="flex flex-col gap-7  w-full">
            <div className="flex flex-col gap-2">
                <span className="font-medium text-base  text-[#191C1B]">اختيار المجال</span>
                <div className=" grid  grid-cols-5  gap-8   w-full  ">
                    {data &&
                        data.data.map((ele, index) => {
                            if (ele.id != 1) {
                                return <button key={index} onClick={() => handleWorkSpaceClick && handleWorkSpaceClick(ele.id)} className='flex !h-fit flex-col  items-center gap-3'>
                                    <div className={` text-[64px] text-BaserOnSurfaseVarient ${FormData.specialities.includes(ele.id) && 'text-BostanyPrimary'}  `}>
                                        {WorkSpaceData &&
                                            WorkSpaceData.filter((work) => work.name === ele.text)[0]?.icon
                                        }
                                    </div>
                                    <p className='text-xs font-medium text-dark'>{ele.text}</p>
                                </button>
                            }
                        }
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-medium text-base  text-[#191C1B]">اختيار التخصص</span>
                <div className="flex flex-wrap  w-full  gap-2">
                    {
                        categories && categories.data.map((ele) => (
                            <div
                                key={ele.id}
                                onClick={() => handleWorkTypeClick && handleWorkTypeClick(ele.id)}
                                className={` ${FormData.category.includes(ele.id) ? 'bg-BostanyPrimary text-white' : 'text-BaserOnSurfase bg-transparent border-[2px] border-BaserOutline'}   text-center text-sm font-medium  py-[10px] px-5  cursor-pointer   rounded-full`}
                            >
                                {ele.text}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Step3
