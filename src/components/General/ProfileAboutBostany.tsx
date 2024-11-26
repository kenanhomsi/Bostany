import { useLocation } from "react-router-dom"

const ProfileAboutBostany = () => {
    const Dashboard = useLocation().pathname.split('/')[1]

    return (
        <div className=" xl:w-[44rem] md:!w-[37rem]  flex flex-col gap-5" >
            <h2 className={`text-2xl font-bold ${Dashboard == 'Baser' ? 'text-BaserPrimary' : 'text-BostanyPrimary'} `}>عن بستن</h2>
            <p className=" text-lg font-medium text-BostanyOnSurface">جلسات استشارية عصفية فورية مختصرة لتطوير وتنمية الأفكار!</p>
            <h3 className=" text-xl font-medium text-BostanyOnSurface">الأهداف</h3>
            <p className=" text-lg font-medium text-dark">جلسات استشارية عصفية فورية مختصرة لتطوير وتنمية الأفكار!</p>
            <h3 className=" text-xl font-medium text-BostanyOnSurface">الرسالة</h3>
            <p className=" text-lg font-medium text-dark"> الحاجة إلى العطاء والمشاركة موجودة لدى كل البشر، وهذه الشبكة تحفز الخبير إلى المشاركة بجزء محدود جداً من وقته وحسب وقت فراغه، وكذا تمنحه دخلاً مالياً يحدده مقابل تمديد الجلسات الاستشارية بطلب من الباذر.
                شبكة اجتماعية استشارية عصفية، تربط بين صاحب أي فكرة أولية (الباذر) وخبير في مجالها (البستاني) عبر جلسة استشارة وتطوير افتراضية قصيرة (10 دقائق) بالصوت أو بالصورة في تقييم وتوجيه تطوير الفكرة. الجلسات مجانية في هذه الفترة، ويمكن تمديدها بجلسات مماثلة لكن بمقابل (بعد الإطلاق الرسمي بإذن الله).</p>
        </div>
    )
}

export default ProfileAboutBostany