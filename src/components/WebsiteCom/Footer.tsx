import GeneralFooter from '../General/GeneralFooter'
import bostanyFooterImage from '/Images/Vector.png'
const Footer = () => {
    return (
        <div className="flex flex-col gap-5 pt-10 px-lg bg-BaserbodyLigh">
            <GeneralFooter />
            <div className="">
                <img src={bostanyFooterImage} alt="Footer Image" />
            </div>
        </div>
    )
}

export default Footer