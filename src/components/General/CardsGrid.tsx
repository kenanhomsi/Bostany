import { useAppSelector } from "../../redux/store"
import { CardsBastanyData } from "../../utils/data"
import ProfileCard from "./ProfileCard"

const CardsGrid = () => {
    const CardShap = useAppSelector((state) => state.homeCard.CardShap)
    const CardList = CardsBastanyData.slice(0, 24)
    return (
        <div className={`${CardShap == 'col' ? ' grid grid-cols-4' : ' flex flex-col'} gap-3 my-10 w-full`}>
            {CardList.map((card) => (
                <ProfileCard CardShap={CardShap} data={card} />
            ))
            }
        </div>
    )
}

export default CardsGrid