import { useAppSelector } from "../../redux/store"
import { CardsBastanyData } from "../../utils/data"
import ProfileCard from "./ProfileCard"

const CardsGrid = ({ FromWhere }: { FromWhere: string }) => {
    const CardShap = useAppSelector((state) => state.homeCard.CardShap)
    const CardList = CardsBastanyData.slice(0, 24)
    return (
        <div className={`${CardShap == 'col' ? ` grid  ${FromWhere == 'website' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} grid-cols-2 ` : ' flex flex-col '} gap-5 my-10 w-full`}>
            {CardList.map((card) => (
                <ProfileCard CardShap={CardShap} data={card} />
            ))
            }
        </div >
    )
}

export default CardsGrid