import { useState } from "react"
import DropDownSelection from "./DropDownSelection"
import { RiArrowDownSLine } from "react-icons/ri";
import { DropDownSelectionTypes } from "../../Types";

const CountrySelect = ({ data, DropDownValue, setDropDownValue }: DropDownSelectionTypes) => {
    const [DropDownState, setDropDownState] = useState(false)

    const SelectedValue = data.filter((ele) => {
        if (ele.id == DropDownValue) {
            return ele.id
        }
    })[0] || data[0]
    return (
        <div className=" relative">
            <div className=" w-full bg-BaserSurface text-dark flex justify-between items-center  rounded-2xl border-none p-4"
                onClick={() => setDropDownState((pre) => !pre)}>
                <div className="flex items-center gap-3">
                    <div className=" rounded-full  overflow-hidden">
                        <img src={SelectedValue.icon} alt={SelectedValue.icon} className="w-8 h-8 " />
                    </div>
                    <span>{SelectedValue.name}</span>
                </div>
                <RiArrowDownSLine />
            </div>
            {
                DropDownState &&
                <DropDownSelection data={data} DropDownValue={DropDownValue} setDropDownValue={setDropDownValue} setDropDownState={setDropDownState} />
            }
        </div>
    )
}

export default CountrySelect