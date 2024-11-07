import { PiFlowerFill } from "react-icons/pi"

const RatingBostanyProfile = ({ Ratings }: {
    Ratings: {
        avg: number;
        count: number;
        professionalism: number | string | null;
        communication: number;
        experience: number;
        quality: number;
    }
}) => {
    return (
        <div className="flex flex-col gap-4 text-BaserOnSurfase">
            <span className="text-[22px] font-semibold ">التقيمات</span>
            <div className="p-6 rounded-3xl bg-BaserSurface text-base font-medium flex flex-col gap-4">
                <div className=" flex gap-3 items-end">
                    <PiFlowerFill className=" text-BaserPrimary w-10 h-10" />
                    <p className="text-BaserOnSurfase mb-2 text-[22px] font-semibold "><span>5 /</span> {Ratings.avg} </p>
                    <p className=" text-base font-medium text-dark"><span>{Ratings.count}</span> <span>بذور</span></p>
                </div>
                <div className="flex flex-col gap-2  text-baser font-medium text-dark">
                    <div className="flex justify-between items-center">
                        <p>الاحترافية بالتعامل</p>
                        <div className="flex gap-2">
                            {Array.from({ length: +Ratings.professionalism! }).map(() => (
                                <PiFlowerFill className=" text-BaserPrimary w-6 h-6" />))
                            }
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>جودة التعامل</p>
                        <div className="flex gap-2">
                            {Array.from({ length: +Ratings.communication! }).map(() => (
                                <PiFlowerFill className=" text-BaserPrimary w-6 h-6" />))
                            }
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>جودة الجلسة</p>
                        <div className="flex gap-2">
                            {Array.from({ length: +Ratings.quality! }).map(() => (
                                <PiFlowerFill className=" text-BaserPrimary w-6 h-6" />))
                            }
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>الخبرة بمجال البذرة</p>
                        <div className="flex gap-2">
                            {Array.from({ length: +Ratings.experience! }).map(() => (
                                <PiFlowerFill className=" text-BaserPrimary w-6 h-6" />))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* {
                BostanyData.Ratings.map((Rate) => (
                    <div className="p-6 rounded-3xl bg-BaserSurface text-base font-medium flex flex-col gap-4">
                        <div className=" flex gap-3 items-end">
                            <p>{Rate.SeedOwner}</p>
                            <p>12 مايو, 2024</p>
                        </div>
                        <div className="flex flex-col gap-2  text-baser font-medium text-dark">
                            <div className="flex justify-between items-center">
                                <p>الاحترافية بالتعامل</p>
                                <div className="flex gap-2">
                                    {Array.from({ length: 5 - +Rate.ProfessionalismInDealing }).map(() => (
                                        <PiFlowerFill className=" text-BaserTertiary w-6 h-6" />))
                                    }
                                    {Array.from({ length: +Rate.ProfessionalismInDealing }).map(() => (
                                        <PiFlowerFill className=" text-BaserPrimary w-6 h-6" />))
                                    }
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>جودة التعامل</p>
                                <div className="flex gap-2">
                                    {Array.from({ length: 5 - +Rate.QualityOfDealing }).map(() => (
                                        <PiFlowerFill className=" text-BaserTertiary w-6 h-6" />))
                                    }
                                    {Array.from({ length: +Rate.QualityOfDealing }).map(() => (
                                        <PiFlowerFill className=" text-BaserPrimary w-6 h-6" />))
                                    }
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>جودة الجلسة</p>
                                <div className="flex gap-2">
                                    {Array.from({ length: 5 - +Rate.SessionQuality }).map(() => (
                                        <PiFlowerFill className=" text-BaserTertiary w-6 h-6" />))
                                    }
                                    {Array.from({ length: +Rate.SessionQuality }).map(() => (
                                        <PiFlowerFill className=" text-BaserPrimary w-6 h-6" />))
                                    }
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>الخبرة بمجال البذرة</p>
                                <div className="flex gap-2">
                                    {Array.from({ length: 5 - +Rate.SeedExperience }).map(() => (
                                        <PiFlowerFill className=" text-BaserTertiary w-6 h-6" />))
                                    }
                                    {Array.from({ length: +Rate.SeedExperience }).map(() => (
                                        <PiFlowerFill className=" text-BaserPrimary w-6 h-6" />))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            } */}

        </div>
    )
}

export default RatingBostanyProfile