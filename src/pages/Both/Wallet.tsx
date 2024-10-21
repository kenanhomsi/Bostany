import { useState } from 'react'
import moneyBagImage from '/Images/money_bag_high_contrast 1.png'
import BostanyMoneyBagImage from '/Images/Bostany_money_bag_high_contrast.png'
import EmptyWalletOp from '../../components/BaserComponent/EmptyWalletOp';
import { FinancialTransaction } from '../../utils/data';
import FinancialTransactionCard from '../../components/BaserComponent/FinancialTransactionCard';
import PopUpModal from '../../components/General/PopUpModal';
import { CloseBuycredit, OpenBuycredit } from '../../redux/Slices/PopUpSlice';
import { useDispatch } from 'react-redux';
import BuycreditPopUp from '../../components/BaserComponent/BuycreditPopUp';
import { useLocation } from 'react-router-dom';
const Wallet = () => {
    const Dashboard = useLocation().pathname.split('/')[1]
    const [MonyAamount] = useState(0.01);
    const dispatch = useDispatch();
    // let FinancialTransaction = []

    const FinancialTransactionForToday = FinancialTransaction?.filter((chat) => +chat.fullDate.split('/')[1] == new Date().getDate());
    const FinancialTransactionForYesterday = FinancialTransaction?.filter((chat) => +chat.fullDate.split('/')[1] == new Date().getDate() - 1)
    const FinancialTransactionForWeakAgo = FinancialTransaction?.filter((chat) => +chat.fullDate.split('/')[1] < new Date().getDate() - 1)
    const handleBuycredit = () => {
        dispatch(OpenBuycredit())
    }
    return (
        <div className="mt-section py-14 px-16 ">
            <div className="flex justify-between items-center py-4 px-6">
                <div className="flex items-center gap-4">
                    <img src={Dashboard == 'Baser' ? moneyBagImage : BostanyMoneyBagImage} alt={Dashboard == 'Baser' ? moneyBagImage : BostanyMoneyBagImage} className='w-24 h-24' />
                    <div className="flex flex-col">
                        <p className=' text-sm font-medium text-dark'>متوسط الرصيد</p>
                        <p className='font-bold text-[34px] text-BaserOnSurfase'><span>{MonyAamount}</span> ر.س</p>
                    </div>
                </div>
                <div className=" flex flex-col gap-2">
                    <button onClick={handleBuycredit} className={`w-80 ${Dashboard == 'Baser' ? 'bg-BaserPrimary' : ' bg-BostanyPrimary'}  py-3 text-white rounded-full`}>شحن رصيد</button>
                    {
                        Dashboard == 'Bostany' &&
                        <button className=' py-3 border-[#8E918F] border bg-white rounded-full w-80 text-BostanyPrimary' >أخراج المال</button>
                    }
                </div>
            </div>
            <div className="">
                {
                    FinancialTransaction.length == 0 && <EmptyWalletOp />
                }
                {
                    FinancialTransaction && FinancialTransaction.length != 0 &&
                    <div className="  mt-10">
                        <p className='text-xl font-medium'>التعاملات المالية</p>
                        {/* المعاملات اليوم */}
                        <div className="flex flex-col  my-7">
                            <p className='text-sm font-medium text-dark'>اليوم</p>
                            <div className=" flex flex-col gap-7 my-7">
                                {FinancialTransactionForToday.map((card) => (
                                    <FinancialTransactionCard data={card} />))
                                }
                            </div>
                        </div>
                        {/* المعاملات الامس */}
                        <div className="flex flex-col  my-7">
                            <p className='text-sm font-medium text-dark'>أمس</p>
                            <div className=" flex flex-col gap-7 my-7">
                                {FinancialTransactionForYesterday.map((card) => (
                                    <FinancialTransactionCard data={card} />))
                                }
                            </div>
                        </div>
                        {/* المعاملات القديمة */}
                        <div className="flex flex-col  my-7">
                            <p className='text-sm font-medium text-dark'>قبل ذالك</p>
                            <div className=" flex flex-col gap-7 my-7">
                                {FinancialTransactionForWeakAgo.map((card) => (
                                    <FinancialTransactionCard data={card} />))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
            <PopUpModal
                title={<h2 className=' text-xl font-semibold text-dark text-center self-center mr-28'>أختيار طريقة الدفع</h2>}
                type="Buycredit"
                PopSize="lg"
                closeIconState={true}
                closeAction={CloseBuycredit}
            >
                <BuycreditPopUp />
            </PopUpModal>
        </div>
    )
}

export default Wallet