import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store";
import { AddNewQualificationData } from "../../redux/Slices/QualificationData";
import Subspecialty from "../WebsiteCom/Subspecialty";
import { FaPlus } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { useEffect } from "react";

const ProfileCertificationSection = ({ SetProfileStep, setCHangeHappend }: { SetProfileStep: (id: number) => void, setCHangeHappend: (value: boolean) => void }) => {
    const dispatch = useDispatch();
    const qualificationData = useAppSelector((state) => state.qualificationData.QualificationDataArray)
    const handleAnotherqualification = () => {
        dispatch(AddNewQualificationData())
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [])

    return (
        <div className=" w-full flex flex-col gap-6 mt-3 mb-7">
            <div className=" p-1 cursor-pointer bg-BostanySurfaceContainer rounded-full  w-fit " onClick={() => SetProfileStep(1)}>
                <RiArrowRightSLine className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-5  min-w-full">
                {qualificationData && qualificationData.map((ele, index) => (
                    <div className="" key={index}>
                        <Subspecialty index={ele.id} setCHangeHappend={setCHangeHappend} />
                    </div>
                ))
                }
                <button onClick={handleAnotherqualification} className=" flex-row-reverse gap-2 text-bas font-medium text-BaserOnSurfase flex  items-center justify-center">
                    <p>أضافة مؤهل أخر</p> <FaPlus />
                </button>
            </div>
        </div>
    )
}

export default ProfileCertificationSection