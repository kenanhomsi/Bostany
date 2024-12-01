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
import { useAppSelector } from '@/redux/store';
const Wallet = () => {
    const Dashboard = useLocation().pathname.split('/')[1]
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)
    const [MonyAamount] = useState(0.01);
    const dispatch = useDispatch();
    const FinancialTransactionForToday = FinancialTransaction?.filter((chat) => +chat.fullDate.split('/')[1] == new Date().getDate());
    const FinancialTransactionForYesterday = FinancialTransaction?.filter((chat) => +chat.fullDate.split('/')[1] == new Date().getDate() - 1)
    const FinancialTransactionForWeakAgo = FinancialTransaction?.filter((chat) => +chat.fullDate.split('/')[1] < new Date().getDate() - 1 || +chat.fullDate.split('/')[0] < new Date().getMonth() + 1)
    const handleBuycredit = () => {
        dispatch(OpenBuycredit())
    }
    return (
        <div className="mt-section py-14   2xl:pr-10 2xl:pl-24 md:pr-5 md:pl-14 ">
            <div className="flex justify-between items-center py-4 ">
                <div className={`flex items-center ${RegisterAs == 'Baser' ? 'bg-BaserbodyLigh' : ' bg-BostanybodyLigh'}  xl:!w-[44rem] md:!w-[25rem] py-6 px-4 rounded-2xl gap-4`}>
                    <img src={Dashboard == 'Baser' ? moneyBagImage : BostanyMoneyBagImage} alt={Dashboard == 'Baser' ? moneyBagImage : BostanyMoneyBagImage} className='w-24 h-24' />
                    <div className="flex flex-col">
                        <p className=' text-sm font-medium text-dark'>متوسط الرصيد</p>
                        <p className={`font-bold text-[34px] ${RegisterAs == 'Baser' ? 'text-BaserOnSurfase' : ' text-BostanyOnSurface'} `}><span>{MonyAamount}</span> ر.س</p>
                    </div>
                </div>
                <div className=" flex flex-col gap-2">
                    <button onClick={handleBuycredit} className={`w-80 ${Dashboard == 'Baser' ? 'bg-BaserPrimary' : ' bg-BostanyPrimary'}  py-3 px-5  h-14 font-medium text-white rounded-full`}>شحن رصيد</button>
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
                        <div className="flex flex-col  my-8">
                            <p className='text-sm font-medium text-dark'>اليوم</p>
                            <div className=" flex flex-col gap-8 my-6">
                                {FinancialTransactionForToday.map((card) => (
                                    <FinancialTransactionCard data={card} />))
                                }
                            </div>
                        </div>
                        {/* المعاملات الامس */}
                        <div className="flex flex-col  my-8">
                            <p className='text-sm font-medium text-dark'>أمس</p>
                            <div className=" flex flex-col gap-8 my-6">
                                {FinancialTransactionForYesterday.map((card) => (
                                    <FinancialTransactionCard data={card} />))
                                }
                            </div>
                        </div>
                        {/* المعاملات القديمة */}
                        <div className="flex flex-col  my-8">
                            <p className='text-sm font-medium text-dark'>قبل ذالك</p>
                            <div className=" flex flex-col gap-8 my-6">
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
                PopSize="xl"
                closeIconState={true}
                closeAction={CloseBuycredit}
            >
                <BuycreditPopUp />
            </PopUpModal>
        </div>
    )
}

export default Wallet