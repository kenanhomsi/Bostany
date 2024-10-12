import { PiMagnifyingGlass } from "react-icons/pi";
import { WorkSpaceData } from "../../utils/data";
import { useState } from "react";
import { CardsBastanyData } from "../../utils/data"
import ProfileCard from "../../components/General/ProfileCard";
import { PiPlus } from "react-icons/pi";
import { PiCheckCircleFill } from "react-icons/pi";
import { PiCheckCircleLight } from "react-icons/pi";


const Search = () => {
    const [DropDownData, setDropDownData] = useState(WorkSpaceData[0].types);
    const [FormToSearch, SetFormToSearch] = useState({
        Space: '',
        text: '',
        FilterBy: [
            {
                name: 'متاح الآن',
                state: false
            },
            {
                name: 'متاح لاحقاً',
                state: false
            },
            {
                name: 'محتوي مرئي',
                state: false
            }, {
                name: 'إعلام مرئي',
                state: false
            }
        ],
        specialization: '',
        gender: ''
    });
    const handleWorkSpaceClick = (id: number, name: string) => {
        SetFormToSearch({
            ...FormToSearch,
            Space: name
        })
    }
    const handleCheckOneClick = () => {
        SetFormToSearch({
            ...FormToSearch,
            gender: 'ذكر'
        })
    }
    const handleCheckTwoClick = () => {
        SetFormToSearch({
            ...FormToSearch,
            gender: 'أنثي'
        })
    }
    const HandleSpecialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        SetFormToSearch({
            ...FormToSearch,
            specialization: e.target.value
        })
    }
    const handleFilterBtns = (e) => {
        const arr = FormToSearch.FilterBy.map((ele) => {
            if (ele.name == e.target.id) {
                console.log(e.target.value)
                return {
                    ...ele,
                    state: !ele.state
                }
            }
            else {
                return ele
            }

        })
        console.log(arr)
        SetFormToSearch({
            ...FormToSearch,
            FilterBy: arr
        })
    }
    const listData = CardsBastanyData.slice(0, 7)

    return (
        <div className="mt-section pt-14  pb-6 h-full flex gap-5 justify-between ">
            <div className=" h-full w-full flex flex-col gap-7">
                <div className=" relative">
                    <input type="text" className="w-full  text-right  text-lg font-medium px-14 py-4 bg-BaserSurface text-dark  rounded-full border-none" placeholder="إبحث عن البستانيون " name="SearchBar" />
                    <PiMagnifyingGlass className=" absolute top-4 right-5 w-6 h-6 " />
                </div>
                <div className=" flex flex-wrap  gap-4   w-full  ">
                    {WorkSpaceData &&
                        WorkSpaceData.map((ele, index) => {
                            if (ele.id != 1) {
                                return <button key={index} onClick={() => handleWorkSpaceClick && handleWorkSpaceClick(ele.id, ele.name)} className='flex  rounded-full border-[2px] py-2  px-3  items-center gap-2 border-[#8E918F]'>
                                    <div className={` text-[24px] ${FormToSearch.Space == ele.name && 'text-BaserPrimary'}  `}>
                                        {ele.icon}
                                    </div>
                                    <p className='text-xs font-medium  text-dark'>{ele.name}</p>
                                </button>
                            }
                        }
                        )
                    }
                </div>
                <div className={` grid grid-cols-3 gap-2 my-4 w-full`}>
                    {listData.map((card) => (
                        <ProfileCard CardShap='col' data={card} />
                    ))
                    }
                </div >
            </div>
            <div className=" w-[19.125rem] min-h-full flex flex-col gap-4 ">
                <div className="flex flex-col gap-4">
                    <p className="text-sm font-normal">فرز بواسطة</p>
                    <div className="flex gap-2 text-xs font-medium text-dark flex-wrap">
                        <button onClick={handleFilterBtns} id='متاح الآن' className={` ${FormToSearch.FilterBy[0].state && 'bg-BaserPrimary text-white'} flex gap-1 flex-row-reverse p-2 border border-[#938F94] rounded-full items-center`}>متاح الآن {FormToSearch.FilterBy[0].state ? <PiPlus className=" rotate-45 w-4 h-4" /> : <PiPlus className=" w-4 h-4" />}</button>
                        <button onClick={handleFilterBtns} id='متاح لاحقاً' className={` ${FormToSearch.FilterBy[1].state && 'bg-BaserPrimary text-white'} flex gap-1 flex-row-reverse p-2 border border-[#938F94] rounded-full items-center`}>متاح لاحقاً {FormToSearch.FilterBy[1].state ? <PiPlus className=" rotate-45 w-4 h-4" /> : <PiPlus className=" w-4 h-4" />}</button>
                        <button onClick={handleFilterBtns} id='محتوي مرئي' className={` ${FormToSearch.FilterBy[2].state && 'bg-BaserPrimary text-white'} flex gap-1 flex-row-reverse p-2 border border-[#938F94] rounded-full items-center`}>محتوي مرئي {FormToSearch.FilterBy[2].state ? <PiPlus className=" rotate-45 w-4 h-4" /> : <PiPlus className=" w-4 h-4" />}</button>
                        <button onClick={handleFilterBtns} id='إعلام مرئي' className={` ${FormToSearch.FilterBy[3].state && 'bg-BaserPrimary text-white'} flex gap-1 flex-row-reverse p-2 border border-[#938F94] rounded-full items-center`}>إعلام مرئي {FormToSearch.FilterBy[3].state ? <PiPlus className=" rotate-45 w-4 h-4" /> : <PiPlus className=" w-4 h-4" />}</button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm font-normal">اختار التخصص</p>
                    <select onChange={HandleSpecialChange} className="  bg-BaserSurface  rounded-full border-none py-4 px-6 text-sm font-normal text-dark">
                        {
                            DropDownData.map((ele) => (
                                <option value={ele} >{ele}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm font-normal">اختار الجنس</p>
                    <div className=" flex flex-col gap-3 items-start">
                        <button onClick={handleCheckOneClick} className={`${FormToSearch.gender == 'ذكر' && `text-BaserPrimary`} flex cursor-pointer flex-row-reverse items-center gap-3 text-base font-normal text-BaserOnSurfase `}><span>ذكر</span>{FormToSearch.gender == 'ذكر' ? <PiCheckCircleFill className={`   w-6 h-6`} /> : <PiCheckCircleLight className={`   w-6 h-6`} />}</button>
                        <button onClick={handleCheckTwoClick} className={` ${FormToSearch.gender == 'أنثي' && `text-BaserPrimary`} flex cursor-pointer flex-row-reverse items-center gap-3 text-base font-normal text-BaserOnSurfase `}><span>أنثي</span>{FormToSearch.gender == 'أنثي' ? <PiCheckCircleFill className={`   w-6 h-6`} /> : <PiCheckCircleLight className={`   w-6 h-6`} />}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search