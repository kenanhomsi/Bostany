import { Link } from 'react-router-dom'
import logo from '/Logo.png'
import { socialIcons } from '../../utils/data'
import appleLogo from '/Icons/Apple.png'
import Playstore from '/Icons/Playstore.png'

const GeneralFooter = () => {
    return (
        <div className="flex justify-between">
            <div className="flex  flex-col w-[25%] gap-5">
                <img src={logo} alt="Logo" className="w-[4.6rem] h-14" />
                <p className='text-dark text-base font-medium'>في بستن، البستانيون مستعدون لمساعدتك في زراعة أفكارك وتطويرها</p>
                <label htmlFor="">النشرة الإخبارية</label>
                <input type='email' name="email" id="email" placeholder='البريد الاكتروني' className=' border-none bg-BaserSurface p-4 rounded-3xl' />
                <button className=" bg-BaserPrimary px-5 py-3 text-white rounded-full">أشتراك</button>
            </div>
            <div className="flex w-[45%] justify-between">
                <div className=" flex flex-col gap-6">
                    <h3 className=' text-lg font-medium  text-BaserOnSurfase'>عنا</h3>
                    <Link to='/' className='text-dark text-base'>من نحن</Link>
                    <Link to='/' className='text-dark text-base'>الأسئلة الشائعة</Link>
                    <Link to='/' className='text-dark text-base'>اتصل بنا</Link>
                </div>
                <div className=" flex flex-col gap-6">
                    <h3 className=' text-lg font-medium'>روابط هامة</h3>
                    <Link to='/' className='text-dark'>المدونة</Link>
                    <Link to='/' className='text-dark'>خريطة الموقع</Link>
                </div>
                <div className=" flex flex-col gap-6">
                    <h3 className=' text-lg font-medium'>السياسات</h3>
                    <Link to='/' className='text-dark'>الشروط والأحكام</Link>
                    <Link to='/' className='text-dark'>سياسة الخصوصية</Link>
                    <Link to='/' className='text-dark'>سياسة الاسترجاع</Link>
                </div>
            </div>
            <div className="w-[15%] flex flex-col gap-12">
                <div className=" grid  grid-cols-3 gap-5">
                    {
                        socialIcons.map((ele, index) => (
                            <Link to={ele.path} className=" border border-BaserPrimary  rounded-full w-fit p-2" key={index}>
                                <img src={ele.icon} alt={ele.icon} className='w-6 h-6' />
                            </Link>
                        ))
                    }
                </div>
                <div className=" flex flex-col gap-3">
                    <h3>تحميل التطبيق</h3>
                    <Link to='/' className='flex gap-5 border-2 px-4 py-3 border-BaserOutline rounded-md    items-center'>
                        <img src={appleLogo} alt={appleLogo} className=' w-5 h-6' />
                        <div className="flex flex-col">
                            <span className=' text-[9px] font-medium'>متوفر على</span>
                            <p>App Store</p>
                        </div>
                    </Link>
                    <Link to='/' className='flex gap-5 border-2 border-BaserOutline rounded-md px-4 py-3  items-center'>
                        <img src={Playstore} alt={Playstore} className=' w-5 h-6' />
                        <div className="flex flex-col">
                            <span className=' text-[9px] font-medium'>متوفر على</span>
                            <p>Goole Play</p>
                        </div></Link>
                </div>
            </div>
        </div>
    )
}

export default GeneralFooter