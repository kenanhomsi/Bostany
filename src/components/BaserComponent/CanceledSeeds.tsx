import { useGetProjects } from "../../utils/api/Projects/useGetProjects";
import SeedsCard from "./SeedsCard"
import SeedsEmpty from "./SeedsEmpty"

const CanceledSeeds = () => {
    const { data } = useGetProjects({
        queryKey: ["type", "cancelled"]
    })
    return (
        <div className="w-full h-full">
            {
                !data || data.data.length == 0 && <SeedsEmpty From='Baser' />
            }
            {
                data?.data &&
                <div className={`flex flex-col gap-5 my-2 w-full`}>
                    {data.data.map((card) => (
                        <SeedsCard Dashboard="Baser" data={card} index={-1} From='Canceled' />
                    ))
                    }
                </div >
            }
        </div>
    )
}

export default CanceledSeeds