import { useState } from "react"
import { DropDownSelectionTypes } from "../../Types"
import SearchableDropdown from "./SearchableDropdown"
import { useAppSelector } from "@/redux/store"

const DropDownSelection = ({ data, setDropDownValue, setDropDownState }: DropDownSelectionTypes) => {
    const [Value, setValue] = useState('')
    const handleClick = (index: number) => {
        setDropDownValue!(index)
        setDropDownState!(false)
        setValue('')
    }
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)

    return (
        <div className={` w-full h-[300px] overflow-y-auto border ${RegisterAs == 'Baser' ? ' bg-[#FFFBFF]' : 'bg-[#FAFFFE]'}   z-10 absolute top-20 left-0 mt-1  rounded-2xl rounded-b-2xl p-4 flex flex-col gap-5`}>
            <SearchableDropdown
                options={data}
                label="name"
                id="id"
                selectedVal={Value}
                handleClick={handleClick}
            />
        </div>
    )
}

export default DropDownSelection