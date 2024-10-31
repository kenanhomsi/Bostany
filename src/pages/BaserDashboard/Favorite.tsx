import EmptyFavoritePage from "../../components/BaserComponent/EmptyFavoritePage"
import ProfileCard from "../../components/General/ProfileCard"
import { useGetFollowingList } from "../../utils/api/Favorites/useGetListFollowings"

const Favorite = () => {
    const { data } = useGetFollowingList()
    return (
        <div className="mt-section px-5">
            {
                data?.data.length == 0 &&
                <EmptyFavoritePage />
            }
            {data && data.data.length > 0 &&
                <div className=" grid grid-cols-3 w-fit gap-4 self-start pt-10 mb-10">
                    {data.data.map((card) => (
                        <ProfileCard CardShap='col' data={card} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Favorite