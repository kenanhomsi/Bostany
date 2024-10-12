import { FaPlus } from "react-icons/fa6";
import Subspecialty from "../Subspecialty";
import { useAppSelector } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { AddNewQualificationData } from "../../../redux/Slices/QualificationData";

const Step4 = () => {
    const dispatch = useDispatch();
    const qualificationData = useAppSelector((state) => state.qualificationData.QualificationDataArray)
    const handleAnotherqualification = () => {
        dispatch(AddNewQualificationData())
    }
    return (
        <div className="flex flex-col gap-5  min-w-full">

            {qualificationData && qualificationData.map((ele) => (
                <Subspecialty index={ele.id} />
            ))
            }

            <button onClick={handleAnotherqualification} className=" flex-row-reverse gap-2 text-bas font-medium text-BaserOnSurfase flex  items-center justify-center">
                <p>أضافة مؤهل أخر</p> <FaPlus />
            </button>
        </div>
    )
}

export default Step4