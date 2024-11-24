import StaticAuthLayoutSide from "../components/WebsiteCom/StaticAuthLayoutSide"
import { LayoutProps } from "../Types"
const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div dir="rtl" className="flex h-screen bg-Baser_primary_primary98 p-4 font-alexandria">
            <div className="h-full flex-1">
                {children}
            </div>
            <div className="h-full flex-[0.9]  p-2">
                <StaticAuthLayoutSide />
            </div>
        </div>
    )
}

export default AuthLayout