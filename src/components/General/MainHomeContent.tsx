import bostanyImage from '/Images/bostanyImage.png'
import baserImage from '/Images/baserImage.png'
import { WorkSpaceData } from '../../utils/data'
import { useEffect, useRef, useState } from 'react'
import { useDraggable } from "react-use-draggable-scroll";
import TimeBar from '../WebsiteCom/TimeBar';
import CardsGrid from './CardsGrid';
import { useDispatch } from 'react-redux';
import { changeCardShapState } from '../../redux/Slices/HomeCardSlice';
import logosGroup from '/Icons/LogosGroup.png'
import { PutBookingDayFromTimeBar } from '../../redux/Slices/BookingSlice';
import { useGetConsultantsList } from '../../utils/api/select/useGetConsultants';
import { PiSquaresFourDuotone } from "react-icons/pi";
import { useGetSpecialitiestList } from '../../utils/api/select/useGetspecialities';
import { useGetCategoriestList } from '../../utils/api/select/useGetCategories';

const MainHomeContent = ({ place }: { place: string }) => {
    const [TimeSelected, setTimeSelected] = useState(``)
    const { data: SpecialitiesList } = useGetSpecialitiestList();
    const [SelectedSpecialities, setSelectedSpecialities] = useState(0)
    const [SelectedCategory, setSelectedCategory] = useState<number[]>([])
    const { data: categories, refetch } = useGetCategoriestList({
        queryKey: ["Categories", SelectedSpecialities]
    });
    useEffect(() => {

        if (place === 'website') {
            setTimeSelected('')
        } else {
            setTimeSelected(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`)
        }
    }, [place])
    useEffect(() => {
        refetch()
    }, [SelectedSpecialities, refetch])
    const { data, refetch: ConsultantsRefetch } = useGetConsultantsList({
        queryKey: ["Filters", `${SelectedSpecialities != 0 ? `specialities=${SelectedSpecialities}` : ''}${SelectedCategory.length != 0 ? `&categories=${SelectedCategory}` : ''}${TimeSelected != '' ? `&date=${TimeSelected}` : ''}`]
    });
    useEffect(() => {
        ConsultantsRefetch()
    }, [SelectedSpecialities, SelectedCategory, TimeSelected, ConsultantsRefetch])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PutBookingDayFromTimeBar(TimeSelected))
    }, [TimeSelected, dispatch])
    const handleWorkSpaceClick = (selected: { id: number, name: string }) => {
        if (selected.name == 'الكل') {
            dispatch(changeCardShapState('col'))
        } else {
            dispatch(changeCardShapState('row'))
        }
        setSelectedSpecialities(selected.id)
    }
    const handleWorkTypeClick = (id: number) => {
        setSelectedCategory((pre) => {
            if (pre.includes(id)) {
                return pre.filter((ele) => ele !== id)
            } else {
                return [...pre, id]
            }
        }
        )
    }
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref);
    return (
        <div className={`flex flex-col items-center 
          overflow-hidden ${place == 'website' ? '!pt-24' : 'pt-40 pb-24 pl-24 pr-10'}  w-full  `}>
            {
                place == 'website' &&
                <div className='flex flex-col gap-8 items-center'>
                    <div className=" bg-BaserSurfaceDarker flex gap-2 items-center w-fit  rounded-full p-3">
                        <span className=" bg-BaserPrimary p-2 px-4 text-white rounded-full">بستن</span>
                        ماذا يمكنك أن تزرع في 10 دقائق؟
                    </div>
                    <div className=" font-bold text-[34px] flex items-center  justify-center flex-wrap text-center w-[60%] leading-[66px]">
                        ابدأ رحلتك بزرع
                        <span className=" text-BaserPrimary ">  بذرتك </span>
                        <img src={baserImage} alt={baserImage} className='w-[46px] h-[46px]' />
                        اليوم مع
                        <span className="text-BostanyPrimary ">بستاني</span>
                        <img src={bostanyImage} alt={bostanyImage} className='w-[46px] h-[46px]' />
                        وراقب أفكارك تنمو وتزدهر!
                    </div>
                    <p className=' text-center w-[50%] font-medium text-base text-dark'>هل لديك فكرة وتحتاج إلى توجيه متخصص لتنميتها؟ في بستن، البستانيون مستعدون لمساعدتك في زراعة أفكارك وتطويرها. احصل على جلسات استشارية عصفية، فورية ومختصرة، لتحويل بذور أفكارك إلى إبداعات ناجحة</p>
                </div>

            }
            {
                place == 'BaserDashboard' &&
                <div className=" flex items-center gap-2 text-sm bg-BaserbodyLigh p-2 pl-2 rounded-full   text-BaserOnSurfase font-medium">
                    <p className=' rounded-full p-3 bg-BaserSurface'>
                        <img src={logosGroup} alt={logosGroup} className=' w-[53px] h-[25px] ' />
                    </p>
                    ماذا يمكنك أن تنمي في 10 دقائق؟!
                </div>
            }
            <div className=" flex  items-center  mt-8  w-full justify-evenly">
                <button onClick={() => handleWorkSpaceClick({ id: 0, name: 'الكل' })} className='flex h-fit flex-col  items-center gap-3'>
                    <div className={` text-[56px] ${SelectedSpecialities == 0 ? 'text-BaserPrimary' : 'text-dark'}  `}>
                        <PiSquaresFourDuotone />
                    </div>
                    <p className='text-xs font-medium text-dark'>الكل</p>
                </button>
                {SpecialitiesList &&
                    SpecialitiesList.data.map((ele, index) => {
                        return <button key={index} onClick={() => handleWorkSpaceClick({ id: ele.id, name: ele.text })} className='flex flex-col h-fit  items-center gap-3'>
                            <div className={` text-[56px] ${ele.id == SelectedSpecialities ? 'text-BaserPrimary' : 'text-dark'}  `}>
                                {WorkSpaceData &&
                                    WorkSpaceData.filter((work) => work.name === ele.text)[0]?.icon
                                }
                            </div>
                            <p className='text-xs font-medium text-dark'>{ele.text}</p>
                        </button>
                    }
                    )
                }
            </div>
            <div ref={ref}    {...events}
                className="flex w-full space-x-3  my-6 overflow-x-scroll scrollbar-hide"
            >
                <div className=" flex w-fit  gap-2">
                    {SelectedSpecialities != 0 &&
                        categories && categories.data.map((ele) => (
                            <div
                                key={ele.id}
                                onClick={() => handleWorkTypeClick(ele.id)}
                                className={` ${SelectedCategory.length > 0 && SelectedCategory.includes(ele.id) ? 'bg-BaserPrimary text-white' : 'text-BaserOnSurfase border-[2px] border-BaserOutline bg-white'}   text-center text-sm font-medium  py-2  w-[115px] cursor-pointer   rounded-full`}
                            >
                                {ele.text}
                            </div>
                        ))
                    }
                </div>
            </div>
            <TimeBar TimeSelected={TimeSelected} setTimeSelected={setTimeSelected} />
            {
                data &&
                <CardsGrid FromWhere={place} data={data} />
            }
        </div>
    )
}

export default MainHomeContent