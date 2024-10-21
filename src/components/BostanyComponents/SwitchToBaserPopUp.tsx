import { Button } from "flowbite-react"
import { useDispatch } from "react-redux"
import { CloseSwitchToBaser } from "../../redux/Slices/PopUpSlice"

const SwitchToBaserPopUp = () => {
    const dispatch = useDispatch()
    const HandleCancel = () => {
        dispatch(CloseSwitchToBaser())
    }
    const handleSubmit = () => {
        dispatch(CloseSwitchToBaser())
    }
    return (
        <div className="flex flex-col gap-5">
            <div className=" flex flex-col gap-2 items-center text-center ">
                <h3 className=" text-xl font-semibold text-[#191C1B]">هل أنت متأكد أنك تريد التبديل للباذر؟</h3>
                <p className=" text-lg font-medium text-dark w-[80%]">سيتم تبديل الواجهة مع بعض الإعدادات والخيارات التي تظهر للباذر</p>
            </div>
            <div className="w-full flex gap-5 px-4 border-t border-[#938F94] pt-5 mt-5  ">
                <Button onClick={handleSubmit} className="bg-BostanyPrimary text-white rounded-full  w-full hover:!bg-[#167b6a]" >تاكيد </Button>
                <Button onClick={HandleCancel} className=" w-full rounded-full text-BostanyPrimary" color="light">الغاء</Button>
            </div>
        </div>
    )
}

export default SwitchToBaserPopUp