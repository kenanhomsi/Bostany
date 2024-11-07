import SeedsEmpty from "./SeedsEmpty"
import SeedsCard from "./SeedsCard";
import { useGetProjects } from "../../utils/api/Projects/useGetProjects";

const ComingSeeds = () => {
    const { data } = useGetProjects({
        queryKey: ["type", "waiting"]
    })
    console.log(data)
    return (
        <div className="w-full h-full">
            {
                !data || data.data.length == 0 && <SeedsEmpty From='Baser' />
            }
            {
                data?.data != undefined && data.data.length > 0 &&
                <div className={`flex flex-col gap-5 my-2 w-full`}>
                    {data.data.map((card, index) => (
                        <SeedsCard Dashboard="Baser" data={card} index={index} From="Comming" />
                    ))
                    }
                </div >
            }
        </div>
    )
}

export default ComingSeeds