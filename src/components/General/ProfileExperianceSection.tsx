import { RiArrowRightSLine } from "react-icons/ri"
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store";
import { FaPlus } from "react-icons/fa";
import Subexperiences from "../BostanyComponents/Subexperiences";
import { AddNewExperiencesData } from "../../redux/Slices/experienceSlice";
import { useEffect } from "react";

const ProfileExperianceSection = ({ SetProfileStep, setCHangeHappend }: { SetProfileStep: (id: number) => void, setCHangeHappend: (value: boolean) => void }) => {
    const dispatch = useDispatch();
    const ExperiencesData = useAppSelector((state) => state.experiences.ExperiencesData)
    const handleAnotherqualification = () => {
        dispatch(AddNewExperiencesData())
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div className="w-full">
            <div className=" p-1 cursor-pointer bg-BaserSurface mt-3 mb-7 rounded-full  w-fit " onClick={() => SetProfileStep(1)}>
                <RiArrowRightSLine className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-5  min-w-full">
                {ExperiencesData && ExperiencesData.map((ele, index) => (
                    <div className="" key={index}>
                        <Subexperiences index={ele.id!} setCHangeHappend={setCHangeHappend} />
                    </div>
                ))
                }
                <button onClick={handleAnotherqualification} className=" flex-row-reverse gap-2 my-5 text-bas font-medium text-BaserOnSurfase flex  items-center justify-center">
                    <p>أضافة خبرات أخرى</p> <FaPlus />
                </button>
            </div>

        </div>
    )
}

export default ProfileExperianceSection