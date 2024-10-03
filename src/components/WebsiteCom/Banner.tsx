import websiteBannerImage from '/Images/Website_SuBiM.png'
const Banner = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 overflow-hidden relative text-white   min-h-[500px] rounded-[52px] bg-BaserPrimary">
            <h2 className="text-[64px] font-bold">بستن الآن!</h2>
            <p className="text-[40px] font-normal">ماذا يمكنك أن تزرع في 10 دقائق؟</p>
            <div className=" flex gap-5 text-BaserPrimary">
                <button className="py-4 px-6 rounded-full bg-white">انشاء حساب</button>
                <button className="py-4 px-6 rounded-full bg-white">تصفح البستانين</button>
            </div>
            {/* orignal width and hight is 25.27rem according to  figma but it does't look fine  */}
            <img src={websiteBannerImage} alt={websiteBannerImage} className=' w-[22.27rem] h-[22.27rem] absolute top-0 right-0' />
            <img src={websiteBannerImage} alt={websiteBannerImage} className=' w-[22.27rem] h-[22.27rem] absolute  bottom-0  left-0  rotate-180' />

        </div>
    )
}

export default Banner