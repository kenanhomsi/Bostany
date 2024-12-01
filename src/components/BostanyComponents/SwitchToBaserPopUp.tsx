import { Button } from "flowbite-react"
import { useDispatch } from "react-redux"
import { CloseSwitchToBaser } from "../../redux/Slices/PopUpSlice"
import { useAppSelector } from "@/redux/store"
import { changeRegisterAsState } from "@/redux/Slices/RegisterSlice"

const SwitchToBaserPopUp = () => {
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    const dispatch = useDispatch()
    const HandleCancel = () => {
        dispatch(CloseSwitchToBaser())
    }
    const handleSubmit = () => {
        if (RegisterAs == 'Baser') {
            dispatch(changeRegisterAsState('Bostany'))
        } else {
            dispatch(changeRegisterAsState('Baser'))
        }
        dispatch(CloseSwitchToBaser())
    }
    return (
        <div className="flex flex-col gap-14">
            <div className=" flex flex-col gap-4 items-center text-center ">
                <h3 className=" text-xl font-semibold text-[#191C1B]">هل أنت متأكد أنك تريد التبديل للباذر؟</h3>
                <p className=" text-lg font-medium text-dark w-[80%]">سيتم تبديل الواجهة مع بعض الإعدادات والخيارات التي تظهر للباذر</p>
            </div>
            <div className="w-full flex gap-5 px-4 border-t border-[#938F94] pt-5 mt-5  ">
                <Button onClick={handleSubmit} className="bg-BostanyPrimary h-14 flex items-center justify-center text-white rounded-full  w-full hover:!bg-BostanyPrimary focus:ring-0" > {'تاكيد'} </Button>
                <Button onClick={HandleCancel} className=" w-full rounded-full h-14 flex items-center justify-center text-BostanyPrimary focus:ring-0" color="light">الغاء</Button>
            </div>
        </div>
    )
}

export default SwitchToBaserPopUp