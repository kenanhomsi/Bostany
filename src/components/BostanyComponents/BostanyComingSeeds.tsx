import SeedsCard from '../BaserComponent/SeedsCard';
import { useGetProjects } from "../../utils/api/Projects/useGetProjects";
import SeedsEmpty from '../BaserComponent/SeedsEmpty';

const BostanyComingSeeds = () => {
    const { data } = useGetProjects({
        queryKey: ["type", "seeding"]
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
                        <SeedsCard Dashboard='Bostany' data={card} index={index} From="Comming" />
                    ))
                    }
                </div >
            }
        </div>
    )
}

export default BostanyComingSeeds






