// import BAS10Chart from "../../components/BostanyComponents/Bas10Chart"
// import { StatisticsBodyProps } from "../../Types"
import { StatisticsDataForToday } from "@/utils/data"
import { IGetStatistics } from "../../Types/api"
import BAS10Chart from "./Bas10Chart"

const StatisticsBody = ({ data }: { data: IGetStatistics }) => {
    return (
        <div className="flex flex-col gap-8 mt-5">
            <div className=" grid grid-cols-3 gap-8">
                <div className=" w-full p-8 text-white  bg-BostanyPrimary rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3">{data.completed_projects_count}</h3>
                    <p className=" text-xl font-semibold">عدد الاشجار الكلي</p>
                </div>
                <div className=" w-full p-8 text-white bg-BostanyPrimary rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3">5/<span>{data.average_rating}</span></h3>
                    <p className=" text-xl font-semibold">متوسط الازهار</p>
                </div>
                <div className=" w-full p-8 text-white bg-BostanyPrimary rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3">{data.average_meeting_duration} دقيقة</h3>
                    <p className=" text-xl font-semibold">متوسط مدة البذور</p>
                </div>
                <div className=" w-full p-8 text-dark  bg-BostanySurfaceContainer rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3 text-BostanyPrimary">{data.invitations_count}</h3>
                    <p className=" text-xl font-semibold">الاشجار الجدد</p>
                </div>
                <div className=" w-full p-8 text-dark bg-BostanySurfaceContainer rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3 text-BostanyPrimary"><span>{data.cancellation_rate}</span>%</h3>
                    <p className=" text-xl font-semibold">معدل الإلغاء</p>
                </div>
                <div className=" w-full p-8 text-dark bg-BostanySurfaceContainer rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3 text-BostanyPrimary">{data.average_income} ر.س</h3>
                    <p className=" text-xl font-semibold">متوسط الاباح</p>
                </div>
            </div>
            <div className=" w-[765px] h-[230px]">
                <div className=" flex justify-between items-center text-dark text-[25px] font-medium">
                    <p>عدد البذور</p>
                    <p>{StatisticsDataForToday.TotalTreesCount - StatisticsDataForToday.CancelRate}</p>
                </div>
                <BAS10Chart data={StatisticsDataForToday.Trees} />
            </div>
        </div>
    )
}

export default StatisticsBody