import { FinancialTransactionCardProps } from "../../Types"
import { PiHandArrowDownDuotone } from "react-icons/pi";
import { PiHandArrowUpDuotone } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { PiHandArrowUpFill } from "react-icons/pi";
import { PiHandArrowDownFill } from "react-icons/pi";

const FinancialTransactionCard = ({ data }: FinancialTransactionCardProps) => {
    const Dashboard = useLocation().pathname.split('/')[1]
    return (
        <div className={` flex  justify-between px-6 py-4 ${Dashboard == 'Baser' ? 'bg-BaserSurface' : 'bg-BostanySurfaceContainer'}   rounded-2xl`}>
            <div className="flex items-center gap-3">
                <div className={`w-20 h-20 ${Dashboard == 'Baser' ? 'bg-[#D2BCFF] text-[#4C00AA]' : ' bg-BostanyPrimaryContainer text-BostanyOnPrimaryContainer'}  text-[32px]  rounded-full flex items-center justify-center`}>
                    {
                        Dashboard == 'Baser' ?
                            data.type == 'puy' ? <PiHandArrowUpDuotone /> : <PiHandArrowDownDuotone />
                            :
                            data.type == 'puy' ? <PiHandArrowUpFill /> : <PiHandArrowDownFill />
                    }
                </div>
                <div className="flex gap-4 flex-col">
                    <span className="text-xs font-medium text-dark">{data.status}</span>
                    <p className=" font-medium text-base text-BaserOnSurfase">{data.title}</p>
                    <div className="flex gap-3 items-center">
                        <img src={data.user.image} alt={data.user.image} className="w-8 h-8 rounded-full" />
                        <p className=" text-sm text-dark font-medium">{data.user.name}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end">
                <p className="text-sm text-dark font-normal">{data.time}</p>
                <p className="text-base font-medium text-BaserOnSurfase"><span>{data.amount}</span> ر.س</p>
            </div>
        </div>
    )
}

export default FinancialTransactionCard