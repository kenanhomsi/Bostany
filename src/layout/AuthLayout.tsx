import StaticAuthLayoutSide from "../components/WebsiteCom/StaticAuthLayoutSide"
import { LayoutProps } from "../Types"

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div dir="rtl" className="flex h-screen p-4">
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