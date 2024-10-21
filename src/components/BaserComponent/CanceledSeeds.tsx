import SeedsCard from "./SeedsCard"
import SeedsEmpty from "./SeedsEmpty"
import CardAvatarImage from "/Images/Avatars.png";

const CanceledSeeds = () => {
    const data = [
        {
            image: CardAvatarImage,
            title: 'إشكالية في تحديد نسبة الشراكة',
            time: {
                from: '13:00', to: '16:00'
            },
            name: "علي الحسن",
            workSpaceID: 2,
            type: 'المحتوي المرئي',
            date: {
                month: '7',
                day: '15'
            }
        },
        {
            image: CardAvatarImage,
            title: 'إشكالية في تحديد نسبة الشراكة',
            time: {
                from: '13:00', to: '16:00'
            },
            name: "علي الحسن",
            workSpaceID: 2,
            type: 'المحتوي المرئي',
            date: {
                month: '7',
                day: '15'
            }
        },
    ]
    return (
        <div className="w-full h-full">
            {
                !data || data.length == 0 && <SeedsEmpty />
            }
            {
                data &&
                <div className={`flex flex-col gap-5 my-2 w-full`}>
                    {data.map((card) => (
                        <SeedsCard Dashboard="Baser" data={card} index={-1} From='Canceled' />
                    ))
                    }
                </div >
            }
        </div>
    )
}

export default CanceledSeeds