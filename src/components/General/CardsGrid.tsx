import { useAppSelector } from "../../redux/store"
// import { UserCardProfileType } from "../../Types"
import { IGetConsultants } from "../../Types/api"
import ProfileCard from "./ProfileCard"

const CardsGrid = ({ FromWhere, data }: { FromWhere: string, data: IGetConsultants }) => {
    const CardShap = useAppSelector((state) => state.homeCard.CardShap)
    return (
        <div className={`${CardShap == 'col' ? ` grid  ${FromWhere == 'website' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} grid-cols-2 ` : ' flex flex-col '} gap-5 my-10 w-full`}>
            {data.data.map((card, index) => (
                <div className="" key={index}>
                    <ProfileCard CardShap={CardShap} data={card} />
                </div>
            ))
            }
        </div >
    )
}

export default CardsGrid