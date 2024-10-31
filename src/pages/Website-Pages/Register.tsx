import { Link } from 'react-router-dom'
import RegisterPage from '../../components/WebsiteCom/RegisterPage'
import logo from '/Logo.png'

const Register = () => {
    return (
        <div className=" flex flex-col h-full w-full  py-4 px-40 gap-5">
            <Link to='/'>
                <img src={logo} alt="logo" className="w-[4.6rem] h-14" />
            </Link>
            <div className=" h-full">
                <RegisterPage />
            </div>
        </div>
    )
}

export default Register




