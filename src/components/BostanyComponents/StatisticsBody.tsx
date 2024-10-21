import BAS10Chart from "../../components/BostanyComponents/Bas10Chart"
import { StatisticsBodyProps } from "../../Types"

const StatisticsBody = ({ data }: { data: StatisticsBodyProps }) => {
    return (
        <div className="flex flex-col gap-8 mt-5">
            <div className=" grid grid-cols-3 gap-8">
                <div className=" w-full p-8 text-white  bg-BostanyPrimary rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3">{data.TotalTreesCount}</h3>
                    <p className=" text-xl font-semibold">عدد الاشجار الكلي</p>
                </div>
                <div className=" w-full p-8 text-white bg-BostanyPrimary rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3">5/<span>{data.RatingAvg}</span></h3>
                    <p className=" text-xl font-semibold">متوسط الازهار</p>
                </div>
                <div className=" w-full p-8 text-white bg-BostanyPrimary rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3">{data.BaserTimeAvg} دقيقة</h3>
                    <p className=" text-xl font-semibold">متوسط مدة البذور</p>
                </div>
                <div className=" w-full p-8 text-dark  bg-BostanySurfaceContainer rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3 text-BostanyPrimary">{data.NewTreesCount}</h3>
                    <p className=" text-xl font-semibold">الاشجار الجدد</p>
                </div>
                <div className=" w-full p-8 text-dark bg-BostanySurfaceContainer rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3 text-BostanyPrimary"><span>{data.CancelRate}</span>%</h3>
                    <p className=" text-xl font-semibold">معدل الإلغاء</p>
                </div>
                <div className=" w-full p-8 text-dark bg-BostanySurfaceContainer rounded-3xl">
                    <h3 className=" text-3xl font-semibold mb-3 text-BostanyPrimary">{data.BenefitAVg} ر.س</h3>
                    <p className=" text-xl font-semibold">متوسط الاباح</p>
                </div>
            </div>
            <div className=" w-[765px] h-[230px]">
                <div className=" flex justify-between items-center text-dark text-[25px] font-medium">
                    <p>عدد البذور</p>
                    <p>{data.TotalTreesCount - data.CancelRate}</p>
                </div>
                <BAS10Chart data={data.Trees} />
            </div>
        </div>
    )
}

export default StatisticsBody