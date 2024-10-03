import { Link, useLocation } from "react-router-dom"
import logo from '/Logo.png'
import { WebsiteNavData } from "../../utils/data"
const Navbar = () => {
    const pathname = useLocation().pathname
    return (
        <div className="px-lg  bg-BaserbodyLigh flex h-20 justify-between items-center">
            <Link to='/' className="">
                <img src={logo} alt="logo" className="w-[4.6rem] h-14" />
            </Link>
            <div className=" flex  items-center h-full gap-5">
                {
                    WebsiteNavData.map((ele, index) => (
                        <Link to={ele.path} key={index} className={`${ele.path == pathname ? ' text-BaserPrimary border-b-[2px] border-BaserPrimary py-7  h-full ' : ''} text-base  font-normal`}>
                            {ele.name}
                        </Link>
                    ))
                }
            </div>
            <div className=" flex gap-5 items-center text-base  font-normal">
                <Link to='/' className=" bg-BaserPrimary px-5 py-3 text-white rounded-full">انشاء حساب</Link >
                <Link to='/'>تسجيل دخول</Link >
            </div>
        </div>
    )
}

export default Navbar