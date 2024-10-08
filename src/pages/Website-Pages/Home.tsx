import MainHomeContent from "../../components/General/MainHomeContent"
import About from "../../components/WebsiteCom/About"
import Banner from "../../components/WebsiteCom/Banner"

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center gap-16 pb-24">
            <MainHomeContent place='website' />
            <About />
            <Banner />
        </div>
    )
}

export default Home