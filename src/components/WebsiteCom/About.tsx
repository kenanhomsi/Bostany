import { AboutCardsData } from "../../utils/data"
import { Card } from "flowbite-react";
const About = () => {
    return (
        <div className="grid grid-cols-2 w-full  gap-5">
            {AboutCardsData.map((card, index) => (
                <Card className="flex items-start flex-col shadow-none border-none rounded-[32px] bg-BaserSurface" key={index}>
                    <img src={card.icon} alt={card.icon} className="w-20 h-20" />
                    <h2 className="text-3xl font-semibold flex gap-2"><span className="text-BaserPrimary">{card.MainTitle}</span>{card.Subtitle}</h2>
                    <p className="w-[70%] text-dark text-base font-medium">{card.description}</p>
                </Card>
            ))}
        </div>
    )
}

export default About