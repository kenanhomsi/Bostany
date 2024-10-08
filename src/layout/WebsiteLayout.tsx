import Footer from "../components/WebsiteCom/Footer";
import Navbar from "../components/WebsiteCom/Navbar";
import { LayoutProps } from "../Types";


const WebsiteLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div dir="rtl" className=" font-alexandria">
            <Navbar />
            <main className="px-5 lg:px-lg">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default WebsiteLayout