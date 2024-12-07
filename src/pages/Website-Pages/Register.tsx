import { Link } from 'react-router-dom'
import RegisterPage from '../../components/WebsiteCom/RegisterPage'
import logo from '/Logo.png'

const Register = () => {
    return (
        <div className=" flex flex-col h-full w-full  py-4 xl:px-40 px-10 gap-5">
            <div className=" flex gap-5 items-center">
                <Link to='/'>
                    <img src={logo} alt="logo" className="w-[4.6rem] h-14" />
                </Link>
                <div className=" text-BaserPrimary text-sm    bg-BaserSurface px-5 py-3 rounded-full">نسخة تجريبية</div>
            </div>
            <div className=" h-full">
                <RegisterPage />
            </div>
        </div>
    )
}

export default Register




