import moneyWingsImage from '/Images/money_with_wings_high_contrast 1.png'

const EmptyWalletOp = () => {
    return (
        <div className='w-full h-[40vh] flex flex-col gap-10 items-center justify-center'>
            <img src={moneyWingsImage} alt={moneyWingsImage} className=' w-[112px] h-[112px]' />
            <p className=' w-[47%] text-center text-xl font-medium text-BaserOnSurfase'>حاليًا، لا توجد أي تعاملات في محفظتك. ستظهر هنا جميع تفاصيل معاملاتك.</p>
        </div>
    )
}

export default EmptyWalletOp