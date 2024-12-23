import checkedImage from '/Images/check_mark_color 1.png'
import { useDispatch } from 'react-redux'
import { CloseBookingSuccessPop } from '../../redux/Slices/PopUpSlice'
const BookingSuccessPop = () => {
    const dispatch = useDispatch()
    const HandleSubmit = () => {
        dispatch(CloseBookingSuccessPop())
    }
    const handleCancel = () => {
        dispatch(CloseBookingSuccessPop())
    }
    return (
        <div className=' flex flex-col gap-8' >
            <div className="flex flex-col gap-4 items-center ">
                <img src={checkedImage} alt={checkedImage} className='w-[128px] h-[128px]' />
                <p className=' text-xl font-semibold  text-BaserOnSurfase'>بذرتك الآن في طريقها للنموّ!</p>
                <p className=' text-lg font-medium text-dark'>كن مستعدًا وجاهزًا قبل الجلسة بوقت كاف.</p>
            </div>
            <div className="w-full flex gap-5 items-center px-4 border-t border-[#938F94] pt-5 ">
                <button onClick={HandleSubmit} className="bg-BaserPrimary text-white rounded-full h-14 hover:!bg-BaserPrimary  w-full" >أضف البذرة للتقويم</button>
                <button onClick={handleCancel} className="  text-base font-medium border-[#938F94] border h-14 text-BaserPrimary rounded-full w-full "  >تم</button>
            </div>
        </div>
    )
}

export default BookingSuccessPop