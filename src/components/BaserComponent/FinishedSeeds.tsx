import SeedsCard from "../../components/BaserComponent/SeedsCard"
import { useGetProjects } from "../../utils/api/Projects/useGetProjects"
import SeedsEmpty from "./SeedsEmpty"

const FinishedSeeds = () => {
    const { data } = useGetProjects({
        queryKey: ["type", "completed"]
    })
    // const data: SeedsCardData[] = []
    return (
        <div className="w-full h-full">
            {
                data?.data.length == 0 && <SeedsEmpty />
            }
            {
                data &&
                <div className={`flex flex-col gap-5 my-2 w-full`}>
                    {data.data.map((card) => (
                        <SeedsCard Dashboard="Baser" data={card} index={-1} From='Finished' />
                    ))
                    }
                </div >
            }
        </div>
    )
}

export default FinishedSeeds