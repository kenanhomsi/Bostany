import SeedsCard from "../../components/BaserComponent/SeedsCard"
import { SeedsCardData } from "../../Types"
import SeedsEmpty from "./SeedsEmpty"

const FinishedSeeds = () => {
    const data: SeedsCardData[] = []
    return (
        <div className="w-full h-full">
            {
                data.length == 0 && <SeedsEmpty />
            }
            {
                data &&
                <div className={`flex flex-col gap-5 my-2 w-full`}>
                    {data.map((card) => (
                        <SeedsCard data={card} index={-1} From='Finished' />
                    ))
                    }
                </div >
            }
        </div>
    )
}

export default FinishedSeeds