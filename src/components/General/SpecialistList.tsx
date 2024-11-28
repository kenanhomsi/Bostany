import { SpecialistListProps } from "../../Types"
import { WorkSpaceData } from "../../utils/data"

const SpecialistList = ({ data, handleWorkSpaceClick, SelectedSpecialitiest, From }: SpecialistListProps) => {
    return (
        <div className="flex  items-center gap-2 flex-wrap">
            {data &&
                data.map((ele, index) => (
                    <p key={index} onClick={() => handleWorkSpaceClick(ele.id)} className={`flex w-fit  cursor-pointer rounded-full border-2 py-3  px-5  items-center gap-[10px] border-[#8E918F]`}>
                        <span className={`${SelectedSpecialitiest.includes(ele.id) ? `${From == 'Baser' ? 'text-BaserPrimary' : ' text-BostanyPrimary'}` : 'text-BaserOnSurfase'} text-xl`}>{WorkSpaceData.filter((space) => space.name == ele.text)[0].icon}</span>
                        <span className={` ${SelectedSpecialitiest.includes(ele.id) ? `${From == 'Baser' ? 'text-BaserPrimary' : ' text-BostanyPrimary'}` : 'text-BaserOnSurfase'} text-base font-medium `}>{ele.text}</span>
                    </p>
                )
                )
            }
        </div>
    )
}

export default SpecialistList