import GeneralFooter from '../General/GeneralFooter'
import bostanyFooterImage from '/Images/Vector.png'
const Footer = () => {
    return (
        <div className="flex flex-col gap-5 pt-10 xl:px-lg px-[40px] bg-BaserbodyLigh">
            <GeneralFooter path='/' />
            <div className="">
                <img src={bostanyFooterImage} alt="Footer Image" />
            </div>
        </div>
    )
}

export default Footer