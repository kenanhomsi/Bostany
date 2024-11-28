import StaticAuthLayoutSide from "../components/WebsiteCom/StaticAuthLayoutSide"
import { useAppSelector } from "../redux/store"
import { LayoutProps } from "../Types"
const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)

    return (
        <div dir="rtl" className={`flex min-h-screen ${RegisterAs == 'Baser' ? 'bg-[#FFFBFF]' : 'bg-[#FAFFFE]'}  p-4 font-alexandria`}>
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