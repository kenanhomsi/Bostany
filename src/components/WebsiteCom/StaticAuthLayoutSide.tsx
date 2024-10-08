import RegisterSideImage from "/Images/RegisterGroup.png"
import { useAppSelector } from "../../redux/store";
const StaticAuthLayoutSide = () => {
    // BostanyPrimary
    // BaserPrimary
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    return (
        <div className=" flex  h-full  bg-BostanybodyLigh rounded-[32px] overflow-hidden ">
            <div className={`py-20 pr-10 max-w-[70%] `}>
                <h2 className={` text-[28px] mb-16 font-bold  text-${RegisterAs}Primary  text-`}>ماذا يمكنك أن تزرع في 10 دقائق؟</h2>
                <div className={`  flex flex-col gap-6`}>
                    <div className={``}>
                        <p className={` text-[28px] font-medium`}><span className={`text-${RegisterAs}Primary`}>حدد ميعاد </span>جلستك المناسبة</p>
                        <p className={` text-base font-medium w-[80%] text-BaserOnSurfaseVarient `}>في بستن نتيح مرونة كبيرة في تحديد ميعاد الجلسات مع إمكانية تغيير المواعيد كما تحب.</p>
                    </div>
                    <div className={``}>
                        <p className={` text-[28px] font-medium`}><span className={`text-${RegisterAs}Primary`}>اختر التخصصات </span>التي تريدها</p>
                        <p className={` text-base font-medium w-[80%] text-BaserOnSurfaseVarient`}>وقم باختيارها وتحديدها بنفسك قبل إضافة البذوة لتجد البستاني المناسب.</p>
                    </div>
                    <div className={``}>
                        <p className={` text-[28px] font-medium`}><span className={`text-${RegisterAs}Primary`}>استشر </span >بستانييون محترفون</p>
                        <p className={` text-base font-medium w-[80%] text-BaserOnSurfaseVarient`}>يصلك علي بذورك العديد من الدعوات ولكن قم باختيار المحترفين فقط</p>
                    </div>
                    <div className={``}>
                        <p className={` text-[28px] font-medium`}><span className={`text-${RegisterAs}Primary`}>إبحث عن </span>بستانييون مثمرين</p>
                        <p className={` text-base font-medium w-[80%] text-BaserOnSurfaseVarient`}>جلسات استشارية عصفية فورية ختصرة لتطوير وتنمية الأفكار</p>
                    </div>
                </div>
            </div>
            <div className={``}>
                <img src={RegisterSideImage} alt={RegisterSideImage} className="h-full w-fit" />
            </div>
        </div>
    )
}

export default StaticAuthLayoutSide