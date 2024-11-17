import { useEffect } from "react"
import MainHomeContent from "../../components/General/MainHomeContent"
import About from "../../components/WebsiteCom/About"
import Banner from "../../components/WebsiteCom/Banner"
import { useAppSelector } from "../../redux/store"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const user = useAppSelector((state) => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (user.token && user.isAuthenticated) {
            if (user.user?.data) {
                if (user.user?.data.type == 'consultant') {
                    navigate('/Bostany')
                } else {
                    navigate('/Baser')
                }
            }
        }
    }, [user])
    console.log(user.user)
    return (
        <div className="min-h-screen flex flex-col items-center gap-16 pb-24">
            <MainHomeContent place='website' />
            <About />
            <Banner />
        </div>
    )
}

export default Home