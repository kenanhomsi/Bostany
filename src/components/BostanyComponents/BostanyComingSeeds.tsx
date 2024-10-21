import CardAvatarImage from "/Images/Avatars.png";
import SeedsCard from '../BaserComponent/SeedsCard';

const BostanyComingSeeds = () => {
    const data = [
        {
            image: CardAvatarImage,
            title: 'إشكالية في تحديد نسبة الشراكة',
            time: {
                from: '13:00', to: '16:00'
            },
            name: "علي العزازي",
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
                data &&
                <div className={`flex flex-col gap-5 my-2 w-full`}>
                    {data.map((card, index) => (
                        <SeedsCard Dashboard='Bostany' data={card} index={index} From="Comming" />
                    ))
                    }
                </div >
            }
        </div>
    )
}

export default BostanyComingSeeds






