import { WorkSpaceData } from "../../../utils/data"
import { CompleteProfileStepProps } from "../../../Types"


const Step3 = ({ FormData, SetFormData }: CompleteProfileStepProps) => {
    const handleWorkSpaceClick = (id: number, name: string) => {
        SetFormData({
            ...FormData,
            WorkSpace: {
                id,
                name
            }
        })
    }
    const handleWorkTypeClick = (type: string) => {
        SetFormData({
            ...FormData,
            WorkType: type
        })
    }
    return (
        <div className="flex flex-col gap-7  min-w-full">
            <div className="flex flex-col gap-2">
                <span className="font-medium text-base  text-[#191C1B]">اختيار المجال</span>
                <div className=" grid  grid-cols-5  gap-4   w-full  ">
                    {WorkSpaceData &&
                        WorkSpaceData.map((ele, index) => {
                            if (ele.id != 1) {

                                return <button key={index} onClick={() => handleWorkSpaceClick && handleWorkSpaceClick(ele.id, ele.name)} className='flex flex-col  items-center gap-3'>
                                    <div className={` text-[46px] ${FormData.WorkSpace.name == ele.name && 'text-BostanyPrimary'}  `}>
                                        {ele.icon}
                                    </div>
                                    <p className='text-xs font-medium text-dark'>{ele.name}</p>
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
                        WorkSpaceData && WorkSpaceData[FormData.WorkSpace.id - 1].types.map((type: string, index) => (
                            <div
                                key={index}
                                onClick={() => handleWorkTypeClick && handleWorkTypeClick(type)}
                                className={` ${FormData.WorkType == type ? 'bg-BostanyPrimary text-white' : 'text-BaserOnSurfase bg-white'}   text-center text-sm font-medium  py-2 border-[2px] w-[115px] cursor-pointer border-BaserOutline  rounded-full`}>
                                {type}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Step3
