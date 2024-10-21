import EmptyFavoritePage from "../../components/BaserComponent/EmptyFavoritePage"
import ProfileCard from "../../components/General/ProfileCard"
import { FavoriteBostanies } from "../../utils/data"

const Favorite = () => {

    return (
        <div className="mt-section px-5">
            {
                FavoriteBostanies.length == 0 &&
                <EmptyFavoritePage />
            }
            {FavoriteBostanies && FavoriteBostanies.length > 0 &&
                <div className=" grid grid-cols-3 w-fit gap-4 self-start pt-10 mb-10">
                    {FavoriteBostanies.map((card) => (
                        <ProfileCard CardShap='col' data={card} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Favorite