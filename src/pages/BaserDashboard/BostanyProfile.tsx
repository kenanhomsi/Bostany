import { useLocation } from "react-router-dom"
import { CardsBastanyData } from "../../utils/data"
import MainInfoBostanyProfile from "../../components/BaserComponent/MainInfoBostanyProfile"
import StickyScheduleComponent from "../../components/BaserComponent/StickyComponent"
import { useEffect } from "react"


const BostanyProfile = () => {
    const BostanyId = useLocation().pathname.split('/')[3]
    const BostanyData = CardsBastanyData.filter((bostany) => bostany.id == +BostanyId)[0]
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [])
    return (
        <div className="mt-section flex gap-10 py-10 px-16 w-full relative">
            <MainInfoBostanyProfile BostanyData={BostanyData} />
            <StickyScheduleComponent />
        </div>
    )
}

export default BostanyProfile