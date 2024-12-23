import { PiMagnifyingGlass } from "react-icons/pi";
import { WorkSpaceData } from "../../utils/data";
import { useEffect, useState } from "react";
import ProfileCard from "../../components/General/ProfileCard";
import { PiPlus } from "react-icons/pi";
import { PiX } from "react-icons/pi";
import { PiCheckCircleFill } from "react-icons/pi";
import { PiCheckCircleLight } from "react-icons/pi";
import { useGetConsultantsList } from "../../utils/api/select/useGetConsultants";
import { useGetCategoriestList } from "../../utils/api/select/useGetCategories";
import { useGetSpecialitiestList } from "../../utils/api/select/useGetspecialities";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Search = () => {
    const [FormToSearch, SetFormToSearch] = useState({
        categories: 0,
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
        specialization: 0,
        gender: ''
    });
    const { data: SpecialitiesList } = useGetSpecialitiestList();
    const { data: categories, refetch } = useGetCategoriestList({
        queryKey: ["Categories", FormToSearch.specialization]
    });
    useEffect(() => {
        refetch()
    }, [FormToSearch.specialization, refetch])
    const { data, refetch: ConsultantsRefetch } = useGetConsultantsList({
        queryKey: ["Filters", `${FormToSearch.specialization != 0 ? `specialities=${FormToSearch.specialization}` : ''}${FormToSearch.categories != 0 ? `&categories=${FormToSearch.categories}` : ''}${FormToSearch.text != '' ? `&name=${FormToSearch.text}` : ''}`]
    });
    useEffect(() => {
        ConsultantsRefetch()
    }, [FormToSearch.specialization, FormToSearch.categories, FormToSearch.text, ConsultantsRefetch])
    const [DropDownData, setDropDownValue] = useState(categories?.data);

    const handleWorkSpaceClick = (id: number) => {
        SetFormToSearch({
            ...FormToSearch,
            specialization: id
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
    const HandleSpecialChange = (e: string) => {
        SetFormToSearch({
            ...FormToSearch,
            categories: +e
        })
    }
    const handleFilterBtns = (e: React.MouseEvent<HTMLButtonElement>) => {
        const arr = FormToSearch.FilterBy.map((ele) => {
            if (ele.name == e.currentTarget.id) {
                return {
                    ...ele,
                    state: !ele.state
                }
            }
            else {
                return ele
            }

        })
        SetFormToSearch({
            ...FormToSearch,
            FilterBy: arr
        })
    }
    useEffect(() => {
        refetch();
        setDropDownValue(categories?.data)
    }, [FormToSearch.specialization])
    return (
        <div className="mt-section pt-14 2xl:pr-10 2xl:pl-24 md:pr-5 md:pl-14 pb-6 h-full flex gap-5 justify-between  ">
            <div className=" h-full w-full flex flex-col gap-7">
                <div className=" relative border-none">
                    <input type="text" value={FormToSearch.text} onChange={(e) => SetFormToSearch({
                        ...FormToSearch,
                        text: e.target.value
                    })} className="w-full  text-right h-fit  text-lg font-medium px-14 py-4 bg-BaserSurface text-BaserOnSurfase  rounded-full focus:!outline-BaserPrimary focus:!outline focus:ring-0 focus:border-none  !outline-none !border-none  placeholder:text-dark" placeholder="إبحث عن البستانيون " name="SearchBar" />
                    <PiMagnifyingGlass className=" absolute top-4 right-5 w-6 h-6 " />
                </div>
                <div className=" flex flex-wrap  gap-4   w-full  ">
                    {SpecialitiesList &&
                        SpecialitiesList.data.map((ele, index) => {
                            return <button key={index} onClick={() => handleWorkSpaceClick && handleWorkSpaceClick(ele.id)} className='flex  rounded-full border-[2px] py-3  px-4 h-12  items-center gap-2 border-[#8E918F]'>
                                <div className={` text-[24px] ${FormToSearch.specialization == ele.id && 'text-BaserPrimary'}  `}>
                                    {WorkSpaceData &&
                                        WorkSpaceData.filter((work) => work.name === ele.text)[0]?.icon
                                    }
                                </div>
                                <p className='text-sm font-medium text-BaserOnSurfase'>{ele.text}</p>
                            </button>
                        }
                        )
                    }
                </div>
                <div className={` grid 2xl:!grid-cols-3 md:!grid-cols-2 !grid-cols-1 gap-2 my-4 w-full`}>
                    {data?.data.map((card) => (
                        <ProfileCard CardShap='col' data={card} />
                    ))
                    }
                </div >
            </div>
            <div className=" max-w-[19.125rem] min-w-[19rem] min-h-full flex flex-col gap-4 ">
                <div className="flex flex-col gap-4">
                    <p className="text-sm font-normal">فرز بواسطة</p>
                    <div className="flex gap-4 text-xs font-medium text-dark flex-wrap">
                        <button onClick={handleFilterBtns} id='متاح الآن' className={` ${FormToSearch.FilterBy[0].state && 'bg-BaserPrimary border-BaserPrimary text-white'} flex gap-1 flex-row-reverse p-3 h-10 border border-[#938F94] rounded-full items-center`}>متاح الآن {FormToSearch.FilterBy[0].state ? <PiX className="  w-4 h-4" /> : <PiPlus className=" w-4 h-4" />}</button>
                        <button onClick={handleFilterBtns} id='متاح لاحقاً' className={` ${FormToSearch.FilterBy[1].state && 'bg-BaserPrimary border-BaserPrimary text-white'} flex gap-1 flex-row-reverse p-3 h-10 border border-[#938F94] rounded-full items-center`}>متاح لاحقاً {FormToSearch.FilterBy[1].state ? <PiX className="  w-4 h-4" /> : <PiPlus className=" w-4 h-4" />}</button>
                        <button onClick={handleFilterBtns} id='محتوي مرئي' className={` ${FormToSearch.FilterBy[2].state && 'bg-BaserPrimary border-BaserPrimary text-white'} flex gap-1 flex-row-reverse p-3 h-10 border border-[#938F94] rounded-full items-center`}>محتوي مرئي {FormToSearch.FilterBy[2].state ? <PiX className="  w-4 h-4" /> : <PiPlus className=" w-4 h-4" />}</button>
                        <button onClick={handleFilterBtns} id='إعلام مرئي' className={` ${FormToSearch.FilterBy[3].state && 'bg-BaserPrimary border-BaserPrimary text-white'} flex gap-1 flex-row-reverse p-3 h-10 border border-[#938F94] rounded-full items-center`}>إعلام مرئي {FormToSearch.FilterBy[3].state ? <PiX className="  w-4 h-4" /> : <PiPlus className=" w-4 h-4" />}</button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm font-normal">اختار التخصص</p>
                    <Select onValueChange={HandleSpecialChange}  >
                        <SelectTrigger dir="rtl" className="!w-[90%] !bg-BaserSurface focus:!ring-0 !rounded-3xl !h-fit shadow-none  !py-4 !pl-3 !pr-6">
                            <SelectValue placeholder="ابحث عن تخصصك" />
                        </SelectTrigger>
                        <SelectContent className=" shadow-none">
                            {
                                DropDownData &&
                                DropDownData.map((ele) => (
                                    <SelectItem value={String(ele.id)} className=" hover:!bg-BaserSurface">{ele.text}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm font-normal" > اختار الجنس</p>
                    <div className=" flex flex-col gap-3 items-start">
                        <button onClick={handleCheckOneClick} className={`${FormToSearch.gender == 'ذكر' && `text-BaserPrimary`} flex cursor-pointer h-fit flex-row-reverse items-center gap-3 text-base font-normal text-BaserOnSurfase `}><span>ذكر</span>{FormToSearch.gender == 'ذكر' ? <PiCheckCircleFill className={`   w-6 h-6`} /> : <PiCheckCircleLight className={`   w-6 h-6`} />}</button>
                        <button onClick={handleCheckTwoClick} className={` ${FormToSearch.gender == 'أنثي' && `text-BaserPrimary`} flex cursor-pointer h-fit flex-row-reverse items-center gap-3 text-base font-normal text-BaserOnSurfase `}><span>أنثي</span>{FormToSearch.gender == 'أنثي' ? <PiCheckCircleFill className={`   w-6 h-6`} /> : <PiCheckCircleLight className={`   w-6 h-6`} />}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search