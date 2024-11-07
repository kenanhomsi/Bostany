import { useGetProjects } from "../../utils/api/Projects/useGetProjects"
import SeedsCard from "../BaserComponent/SeedsCard"
import SeedsEmpty from "../BaserComponent/SeedsEmpty"

const RequestsSeeds = () => {
    const { data } = useGetProjects({
        queryKey: ["type", "all"]//just for now
    })
    return (
        <div className="w-full h-full">
            {
                !data || data.data.length == 0 && <SeedsEmpty From='Bostany' />
            }
            {
                data?.data && data?.data.length > 0 &&
                <div className={`flex flex-col gap-5 my-2 w-full`}>
                    {data.data.map((card) => (
                        <SeedsCard Dashboard="Bostany" data={card} index={-1} From='Requests' />
                    ))
                    }
                </div >
            }
        </div>
    )
}

export default RequestsSeeds