import MainHomeContent from "../../components/General/MainHomeContent"
import { useAppSelector } from "../../redux/store"


const BaserHome = () => {
    const userData = useAppSelector((state) => state.auth.user)
    console.log(userData)
    return (
        <div className="min-h-screen ">
            <MainHomeContent place='BaserDashboard' />
        </div>
    )
}

export default BaserHome