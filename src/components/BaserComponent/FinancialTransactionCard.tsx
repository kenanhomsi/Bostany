import { FinancialTransactionCardProps } from "../../Types"
import { PiHandArrowDownDuotone } from "react-icons/pi";
import { PiHandArrowUpDuotone } from "react-icons/pi";

const FinancialTransactionCard = ({ data }: FinancialTransactionCardProps) => {
    return (
        <div className="flex  justify-between px-6 py-4 bg-BaserSurface rounded-2xl">
            <div className="flex items-center gap-3">
                <div className=" w-20 h-20 bg-[#D2BCFF] text-[32px] text-[#4C00AA] rounded-full flex items-center justify-center">
                    {data.type == 'puy' ? <PiHandArrowUpDuotone /> : <PiHandArrowDownDuotone />}
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