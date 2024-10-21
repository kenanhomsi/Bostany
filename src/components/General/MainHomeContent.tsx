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
import { CardsBastanyData } from "../../utils/data"
import { PutBookingDayFromTimeBar } from '../../redux/Slices/BookingSlice';

const MainHomeContent = ({ place }: { place: string }) => {
    const dispatch = useDispatch();
    const [WorkSpaceSelected, setWorkSpaceSelected] = useState({
        id: 0,
        name: ''
    })
    const [WorkTypeSelected, setWorkTypeSelected] = useState('')
    const [TimeSelected, setTimeSelected] = useState(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`)
    useEffect(() => {
        dispatch(PutBookingDayFromTimeBar(TimeSelected))
    }, [TimeSelected, dispatch])
    const handleWorkSpaceClick = (selected: { id: number, name: string }) => {
        if (selected.name == 'الكل') {
            dispatch(changeCardShapState('col'))
        } else {
            dispatch(changeCardShapState('row'))
        }
        setWorkSpaceSelected(selected)
    }
    const handleWorkTypeClick = (type: string) => {
        setWorkTypeSelected(type)
    }
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref);

    return (
        <div className={`flex flex-col items-center  overflow-hidden ${place == 'website' ? 'py-24' : 'pt-40 pb-24'}  w-full  `}>
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
                <div className=" flex items-center gap-2 text-xl  text-BaserOnSurfase font-medium">
                    <img src={logosGroup} alt={logosGroup} className=' w-[53px] h-[25px]' />
                    ماذا يمكنك أن تنمي في 10 دقائق؟!
                </div>
            }
            <div className=" flex  items-center  mt-8  w-full justify-around">
                {WorkSpaceData &&
                    WorkSpaceData.map((ele, index) => (
                        <button key={index} onClick={() => handleWorkSpaceClick({ id: ele.id, name: ele.name })} className='flex flex-col  items-center gap-3'>
                            <div className={` text-[46px] ${WorkSpaceSelected.name == ele.name && 'text-BaserPrimary'}  `}>
                                {ele.icon}
                            </div>
                            <p className='text-xs font-medium text-dark'>{ele.name}</p>
                        </button>
                    ))
                }
            </div>
            <div ref={ref}    {...events}
                className="flex w-full space-x-3  my-6 overflow-x-scroll scrollbar-hide"
            >
                <div className=" flex w-fit  gap-2">
                    {
                        WorkSpaceData && WorkSpaceData[WorkSpaceSelected.id].types.map((type: string, index) => (
                            <div
                                key={index}
                                onClick={() => handleWorkTypeClick(type)}
                                className={` ${WorkTypeSelected == type ? 'bg-BaserPrimary text-white' : 'text-BaserOnSurfase bg-white'}   text-center text-sm font-medium  py-2 border-[2px] w-[115px] cursor-pointer border-BaserOutline  rounded-full`}>
                                {type}
                            </div>
                        ))
                    }
                </div>
            </div>
            <TimeBar TimeSelected={TimeSelected} setTimeSelected={setTimeSelected} />
            <CardsGrid FromWhere={place} data={CardsBastanyData} />
        </div>
    )
}

export default MainHomeContent