import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import WebsiteLayout from "../layout/WebsiteLayout";
import AuthLayout from "../layout/AuthLayout";
import AuthRoutes from "./AuthRoutes";
import BaserDashboardLayout from "../layout/BaserDashboardLayout";
import BaserRoutes from "./BaserRoutes";


const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/auth/*"
                    element={
                        <AuthLayout>
                            <AuthRoutes />
                        </AuthLayout>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <WebsiteLayout>
                            <PublicRoutes />
                        </WebsiteLayout>
                    }
                />
                <Route
                    path="/Baser/*"
                    element={
                        <BaserDashboardLayout>
                            <BaserRoutes />
                        </BaserDashboardLayout>
                    }
                />
                {/* <Route
                    path="/Bostany/*"
                    element={
                        <BostanyDashboardLayout>
                            <BostanyRoutes />
                        </BostanyDashboardLayout>
                    }
                /> */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
