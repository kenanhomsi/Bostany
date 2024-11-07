
const ExperiencesBostanyProfile = ({ Experiences }: {
    Experiences: {
        year: string;
        job_title: string;
        issuer: string;
    }[]
}) => {
    return (
        <div className="flex flex-col gap-4 text-BaserOnSurfase">
            <span className="text-[22px] font-semibold ">الخبرات </span>
            {
                Experiences.map((experience) => (
                    <div className="p-6 rounded-3xl bg-BaserSurfaceContainer flex justify-between">
                        <div className="flex gap-4 items-center">
                            <span className=" text-[28px] font-bold text-BostanyPrimary">{experience.year}</span>
                            <span className="text-base font-medium text-[#191C1B]">{experience.job_title}</span>
                        </div>
                        <div className=" flex gap-3 text-sm font-normal items-center text-dark">
                            <p>{experience.issuer} </p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ExperiencesBostanyProfile