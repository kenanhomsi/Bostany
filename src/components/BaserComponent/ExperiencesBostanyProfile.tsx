import { ProfileDateType } from "../../Types"

const ExperiencesBostanyProfile = ({ BostanyData }: { BostanyData: ProfileDateType }) => {
    return (
        <div className="flex flex-col gap-4 text-BaserOnSurfase">
            <span className="text-[22px] font-semibold ">الخبرات</span>
            {
                BostanyData.Experiences.map((experience) => (
                    <div className="p-6 rounded-3xl bg-BaserSurfaceContainer flex justify-between">
                        <div className="flex gap-4 items-center">
                            <span className=" text-[28px] font-bold text-BostanyPrimary">{experience.number}</span>
                            <span className="text-base font-medium text-[#191C1B]">{experience.name}</span>
                        </div>
                        <div className=" flex gap-3 text-sm font-normal items-center text-dark">
                            <p>{experience.status}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ExperiencesBostanyProfile