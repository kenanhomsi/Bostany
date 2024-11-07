import { Link } from "react-router-dom"

const SeedsEmpty = ({ From }: { From: string }) => {
    return (
        <div className="w-full h-[42vh] flex items-center justify-center">
            <div className="flex flex-col gap-4 items-center">
                <h3 className="text-BaserOnSurfase text-xl font-medium">ليس لديك ثمار في بستانك حاليًا</h3>
                <p className="text-dark font-medium text-base">كل بذرة (أو جلسة) تتمها تنمو لتكون ثمارًا</p>
                {
                    From == 'Baser' &&
                    <Link to='/Baser' className="bg-BaserPrimary w-fit  text-white p-3 rounded-full">تصفح البستانين</Link>
                }
            </div>
        </div>
    )
}

export default SeedsEmpty