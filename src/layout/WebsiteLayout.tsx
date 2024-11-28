import Footer from "../components/WebsiteCom/Footer";
import Navbar from "../components/WebsiteCom/Navbar";
import { LayoutProps } from "../Types";


const WebsiteLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div dir="rtl" className="font-alexandria bg-[#FFFBFF]">
            <Navbar />
            <main className="px-24 2xl:px-[188px]">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default WebsiteLayout