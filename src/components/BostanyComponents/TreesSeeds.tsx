import { useGetProjects } from "../../utils/api/Projects/useGetProjects";
import SeedsCard from "../BaserComponent/SeedsCard";
import SeedsEmpty from "../BaserComponent/SeedsEmpty";
const TreesSeeds = () => {
    const { data } = useGetProjects({
        queryKey: ["type", "completed"]
    })

    return (
        <div className="w-full h-full">
            {
                !data || data.data.length == 0 && <SeedsEmpty From='Bostany' />
            }
            {
                data &&
                <div className={`flex flex-col gap-5 my-2 w-full`}>
                    {data.data.map((card, index) => (
                        <SeedsCard Dashboard="Bostany" data={card} key={index} index={-1} From='Tree' />
                    ))
                    }
                </div >
            }
        </div>
    )
}

export default TreesSeeds