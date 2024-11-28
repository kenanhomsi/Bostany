import { FaPlus } from "react-icons/fa6";
import Subspecialty from "../Subspecialty";
import { useAppSelector } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { AddNewQualificationData, DeleteQualificationData } from "../../../redux/Slices/QualificationData";
import { PiMinus } from "react-icons/pi";

const Step4 = () => {
    const dispatch = useDispatch();
    const qualificationData = useAppSelector((state) => state.qualificationData.QualificationDataArray)
    const handleAnotherqualification = () => {
        dispatch(AddNewQualificationData())
    }
    const handleDeleteSpecialty = (id: string) => {
        dispatch(DeleteQualificationData(id))
    }
    return (
        <div className="flex flex-col gap-6  min-w-full">
            {qualificationData && qualificationData.map((ele, index) => (
                <div className=" flex flex-col gap-5" key={index}>
                    <Subspecialty index={ele.id} />
                    {
                        ele.id != '0' && <button onClick={() => handleDeleteSpecialty(ele.id)} className=" text-sm font-medium  self-end flex items-center gap-1 flex-row-reverse cursor-pointer  text-GeneralError">حذف مؤهل <PiMinus /></button>
                    }
                </div>
            ))
            }
            <button onClick={handleAnotherqualification} className=" flex-row-reverse gap-2 text-bas font-medium text-BaserOnSurfase flex  my-4 items-center justify-center">
                <p>أضافة مؤهل أخر</p> <FaPlus />
            </button>
        </div>
    )
}

export default Step4