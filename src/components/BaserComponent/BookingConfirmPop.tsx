import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../redux/store"
import { LiaPaperclipSolid } from "react-icons/lia";
import { PiMicrophone } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { CloseBookingConfirmPop, OpenBookingSuccessPop } from "../../redux/Slices/PopUpSlice";
import { PutBookingData } from "../../redux/Slices/BookingSlice";
import { useUploadMedia } from "../../utils/api/Media/usePutUploadMedia";
import { BookingFormType } from "../../Types";
import { useCreateProject } from "../../utils/api/Projects/usePostCreateProject";
import SpecialistList from "../General/SpecialistList";
import { categorySelect, SpecialitiesType } from "../../Types/api";
import CategoryList from "../General/CategoryList";
import { useGetShowUser } from "../../utils/api/User/useGetShowUser";

const BookingConfirmPop = () => {
    const dispatch = useDispatch();
    const BostanyId = useAppSelector((state) => state.booking.BostanyId)
    const { data } = useGetShowUser({
        queryKey: ['id', BostanyId]
    });
    const [FormData, SetFormData] = useState<BookingFormType>({
        Title: "",
        FileAttchToken: [],
        specialities: [],
        category: [],
    });
    const [BazerTitle, setBazerTitle] = useState('');
    const [, setAttechedAudio] = useState<null | File>(null);
    const { mutate, isError, isLoading, isSuccess, data: DataFromBooking } = useCreateProject();
    const { mutate: MutateUploadMedia, data: uploadMediaData } = useUploadMedia();
    const BookingData = useAppSelector((state) => state.booking.BookingData)
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (BazerTitle.length < 150) {
            setBazerTitle(e.target.value)
        }
    }

    const audioPickerRef = useRef<HTMLInputElement>(null);
    const filePickerRef = useRef<HTMLInputElement>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        MutateUploadMedia({
            payload: {
                file: file!,
                collection: 'file',
            }
        })
    }
    const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAttechedAudio(file)
        }
        // MutateUploadMedia({
        //     payload: {
        //         file: file!,
        //         collection: 'file',
        //     }
        // })
    }
    const handleCancel = () => {
        dispatch(CloseBookingConfirmPop())
    }
    const HandleSubmit = () => {
        dispatch(PutBookingData({
            ...BookingData,
            Title: BazerTitle
        }))

        mutate({
            payload: {
                name: BazerTitle,
                description: BazerTitle,
                attachments: [FormData.FileAttchToken[0]],
                consultants: [BostanyId],
                start_at: `${BookingData.SelectTime.split('-')[1]}`,
                specialities: FormData.specialities,
            }
        })

    }
    useEffect(() => {
        if (isSuccess && DataFromBooking) {
            dispatch(OpenBookingSuccessPop())
            dispatch(CloseBookingConfirmPop())
        }
    }, [isSuccess, DataFromBooking])
    useEffect(() => {
        if (uploadMediaData) {
            const newArray = FormData.FileAttchToken
            newArray.push(uploadMediaData.data.token)
            SetFormData({
                ...FormData,
                FileAttchToken: newArray
            })
        }

    }, [uploadMediaData])
    const handleSpecialitiesClick = (id: number) => {
        SetFormData({
            ...FormData,
            specialities: FormData.specialities.includes(id) ? FormData.specialities.filter((ele) => ele !== id) : [...FormData.specialities, id]
        })
    }
    const handleCategoryClick = (id: number) => {
        SetFormData({
            ...FormData,
            category: FormData.category.includes(id) ? FormData.category.filter((ele) => ele !== id) : [...FormData.category, id]
        })
    }
    const handleDisabled = BazerTitle == '' ? true : false
    return (
        <div className="flex flex-col max-h-[76vh] overflow-y-scroll scrollbar-hide gap-10">
            <div className=" flex flex-col gap-4 p-4 rounded-2xl bg-BaserbodyLigh">
                <p className="flex  text-base flex-row-reverse w-full justify-between items-center"><span className="  font-medium text-BaserPrimary">{data?.data?.name}</span> <span className="font-normal text-dark">مع</span></p>
                <p className="flex  text-base flex-row-reverse w-full justify-between items-center"><span className="  font-medium text-BaserPrimary">{BookingData.SelectedDay}</span> <span className="font-normal text-dark">التاريخ</span></p>
                <p className="flex  text-base flex-row-reverse w-full justify-between items-center"><span className="  font-medium text-BaserPrimary">{BookingData.SelectTime}</span> <span className="font-normal text-dark">الوقت</span></p>
                <p className="flex  text-base flex-row-reverse w-full justify-between items-center"><span className="  font-medium text-BaserPrimary">  10 ر.س  </span> <span className="font-normal text-dark">التكلفة</span></p>
            </div>
            <div className="flex flex-col gap-5">
                <p className=" text-xl font-medium text-BaserOnSurfase">تفاصيل البذرة</p>
                <SpecialistList From="Baser" data={data?.data?.specialities as SpecialitiesType[]} handleWorkSpaceClick={handleSpecialitiesClick} SelectedSpecialitiest={FormData.specialities} />
                <CategoryList From='Baser' CategoryList={FormData.category} handleCategoryClick={handleCategoryClick} Data={data?.data?.category as categorySelect[]} />
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                    <p className=" text-xl font-medium text-BaserOnSurfase">عنوان بذرتك</p>
                    <div className=" px-1">
                        <input type="text" value={BazerTitle} onChange={handleTitleChange} className=" w-full py-4 px-6 rounded-3xl text-base font-normal text-BaserOnSurfase  placeholder:text-dark focus:ring-0 focus:outline-BaserPrimary bg-BaserSurface border-none" placeholder="اشكالية في تحديد نسبة الشركة" />
                        <p className="text-sm mt-1 font-normal text-dark">150/{BazerTitle.length}</p>
                    </div>
                </div>
                <div className="flex items-center  gap-32 w-full" >
                    <p className="text-sm font-medium text-BaserOnSurfase">إرفاق ملفات</p>
                    <div className=" flex gap-2 self-center">
                        <input className=' hidden' type='file' ref={filePickerRef} onChange={handleFileChange} />
                        <button className="rounded-full flex items-center justify-center bg-white text-2xl   w-10 h-10" onClick={() => filePickerRef.current?.click()}>
                            <LiaPaperclipSolid />
                        </button>
                        <input className=' hidden' type='file' accept="audio/*" ref={audioPickerRef} onChange={handleAudioChange} />
                        <button className="rounded-full flex items-center justify-center bg-white text-2xl   w-10 h-10" onClick={() => audioPickerRef.current?.click()}>
                            <PiMicrophone />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-5 items-center justify-start  border-t border-[#938F94] pb-6 pt-4 ">
                <button disabled={handleDisabled} onClick={HandleSubmit} className={` ${handleDisabled ? 'bg-BaserPrimary/35 text-BaserOnSurfase/35 hover:!bg-BaserPrimary/35' : 'bg-BaserPrimary text-white hover:!bg-BaserPrimary'}  text-center h-14   rounded-full  flex-1`} >{isLoading ? '...Loading' : 'تاكيد'}</button>
                <button onClick={handleCancel} className="  text-base w-[15%] flex items-center font-medium border-none rounded-full " color="light" >الغاء</button>
            </div>
            {
                isError && <p className=" text-GeneralError">there is an error with submit</p>
            }
        </div>
    )
}

export default BookingConfirmPop