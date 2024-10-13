import { PiHeart } from "react-icons/pi";
import { Link } from "react-router-dom";

const EmptyFavoritePage = () => {
    return (
        <div className="w-full   h-[70vh]  flex flex-col gap-4  text-center items-center justify-center">
            <PiHeart className=" text-BaserPrimary w-28 h-28" />
            <h3 className=" text-xl font-medium text-BaserOnSurfase">ليس لديك بستانيين في المفضلة حاليًا </h3>
            <p className="text-base font-medium text-dark w-80">لتفضيل أي بستاني اضغط على أيقونة القلب في بطاقته أو صفحته</p>
            <Link to='/Baser' className=" p-3 bg-BaserPrimary text-white  rounded-full">البستانيون</Link>
        </div>
    )
}

export default EmptyFavoritePage