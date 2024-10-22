import { useRef, useState } from "react";
import { useAppSelector } from "../../redux/store"
import { CardsBastanyData, WorkSpaceData } from "../../utils/data"
import { LiaPaperclipSolid } from "react-icons/lia";
import { PiMicrophone } from "react-icons/pi";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { CloseBookingConfirmPop, OpenBookingSuccessPop } from "../../redux/Slices/PopUpSlice";
import { PutBookingData } from "../../redux/Slices/BookingSlice";

const BookingConfirmPop = () => {
    const dispatch = useDispatch();
    const [BazerTitle, setBazerTitle] = useState('');
    const [, setAttechedFile] = useState<File | undefined>(undefined);
    const [, setAttechedAudio] = useState<File | undefined>(undefined);
    const BookingData = useAppSelector((state) => state.booking.BookingData)
    const BostanyId = useAppSelector((state) => state.booking.BostanyId)
    const BostanyData = CardsBastanyData.filter((ele) => ele.id == BostanyId)[0]
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (BazerTitle.length < 150) {
            setBazerTitle(e.target.value)
        }
    }
    const audioPickerRef = useRef<HTMLInputElement>(null);
    const filePickerRef = useRef<HTMLInputElement>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAttechedFile(file)
        }
    }
    const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAttechedAudio(file)
        }
    }
    const handleCancel = () => {
        dispatch(CloseBookingConfirmPop())
    }
    const HandleSubmit = () => {
        dispatch(PutBookingData({
            ...BookingData,
            Title: BazerTitle
        }))
        dispatch(OpenBookingSuccessPop())
        dispatch(CloseBookingConfirmPop())
    }
    const handleDisabled = BazerTitle == '' ? true : false
    return (
        <div className="flex flex-col gap-5">
            <div className=" flex flex-col gap-4 p-4 rounded-2xl bg-BaserSurface">
                <p className="flex  text-base flex-row-reverse w-full justify-between items-center"><span className="  font-medium text-BaserPrimary">{BostanyData.name}</span> <span className="font-normal text-dark">مع</span></p>
                <p className="flex  text-base flex-row-reverse w-full justify-between items-center"><span className="  font-medium text-BaserPrimary">{BookingData.SelectedDay}</span> <span className="font-normal text-dark">التاريخ</span></p>
                <p className="flex  text-base flex-row-reverse w-full justify-between items-center"><span className="  font-medium text-BaserPrimary">{BookingData.SelectTime}</span> <span className="font-normal text-dark">الوقت</span></p>
                <p className="flex  text-base flex-row-reverse w-full justify-between items-center"><span className="  font-medium text-BaserPrimary">  10 ر.س  </span> <span className="font-normal text-dark">التكلفة</span></p>
            </div>
            <div className="flex flex-col gap-5">
                <p className=" text-xl font-medium text-BaserOnSurfase">تفاصيل البذرة</p>
                <div className=" flex gap-3 items-center">
                    {
                        BostanyData.WorkSpace.map((ele, index) => (
                            <p key={index} className="flex w-fit  rounded-full border py-3  px-5  items-center gap-[10px] border-[#8E918F]">
                                <span className="text-xl">{WorkSpaceData.filter((space) => space.name == ele)[0].icon}</span>
                                <span className="text-base font-medium text-BaserOnSurfase" >{ele}</span>
                            </p>
                        ))
                    }
                </div>
                <div className=" flex  flex-wrap gap-3 items-center">
                    <p className="flex w-fit text-sm font-medium text-BaserOnSurfase  rounded-full border-2 py-[10px]  px-5  items-center  border-[#938F94]">
                        {BostanyData.specialization}
                    </p>
                    {
                        BostanyData.otherSpecialization.map((ele, index) => (
                            <p key={index} className="flex w-fit text-sm font-medium text-BaserOnSurfase  rounded-full border-2 py-[10px]  px-5  items-center  border-[#8E918F]">
                                {ele}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p className=" text-xl font-medium text-BaserOnSurfase">عنوان بذرتك</p>
                <div className="">
                    <input type="text" value={BazerTitle} onChange={handleTitleChange} className=" w-full py-4 px-6 rounded-3xl text-base font-normal text-dark bg-BaserSurface border-none" placeholder="ضع هنا عنوان لبذرتك" />
                    <p className="text-sm font-normal text-dark">150/{BazerTitle.length}</p>
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
            <div className="w-full flex gap-5 items-center px-4 border-t border-[#938F94] pt-5 ">
                <Button disabled={handleDisabled} onClick={HandleSubmit} className="bg-BaserPrimary text-white rounded-full hover:!bg-BaserFoshiy flex-1" >تاكيد</Button>
                <Button onClick={handleCancel} className="  text-base font-medium border-none rounded-full " color="light" >الغاء</Button>
            </div>
        </div>
    )
}

export default BookingConfirmPop