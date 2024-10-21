import moneyWingsImage from '/Images/money_with_wings_high_contrast 1.png'
import BostanymoneyWingsImage from '/Images/Bostany_money_with_wings_high_contrast 1.png'
import { useLocation } from 'react-router-dom'
const EmptyWalletOp = () => {
    const Dashboard = useLocation().pathname.split('/')[1]
    return (
        <div className='w-full h-[40vh] flex flex-col gap-10 items-center justify-center'>
            <img src={Dashboard == 'Baser' ? moneyWingsImage : BostanymoneyWingsImage} alt={Dashboard == 'Baser' ? moneyWingsImage : BostanymoneyWingsImage} className=' w-[112px] h-[112px]' />
            <p className=' w-[47%] text-center text-xl font-medium text-BaserOnSurfase'>حاليًا، لا توجد أي تعاملات في محفظتك. ستظهر هنا جميع تفاصيل معاملاتك.</p>
        </div>
    )
}

export default EmptyWalletOp