import { useLocation } from "react-router-dom"
import MainInfoBostanyProfile from "../../components/BaserComponent/MainInfoBostanyProfile"
import StickyScheduleComponent from "../../components/BaserComponent/StickyComponent"
import { useEffect } from "react"
import { useGetShowUser } from "../../utils/api/User/useGetShowUser"


const BostanyProfile = () => {
    const BostanyId = useLocation().pathname.split('/')[3]
    const { data, isLoading, isError } = useGetShowUser({
        queryKey: ["id", BostanyId]
    });
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div className="mt-section flex gap-10 py-10 px-12 w-full relative">
            {
                !isLoading && !isError && data &&
                <>
                    <MainInfoBostanyProfile BostanyData={data} />
                    <StickyScheduleComponent BostanyData={data} />
                </>
            }
        </div>
    )
}

export default BostanyProfile