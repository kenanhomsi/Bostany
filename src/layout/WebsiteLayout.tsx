import Footer from "../components/WebsiteCom/Footer";
import Navbar from "../components/WebsiteCom/Navbar";

interface WebsiteLayoutProps {
    children: React.ReactNode;
}
const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ children }) => {
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