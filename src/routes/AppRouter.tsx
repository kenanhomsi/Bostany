import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import WebsiteLayout from "../layout/WebsiteLayout";
import AuthLayout from "../layout/AuthLayout";
import AuthRoutes from "./AuthRoutes";
import BaserDashboardLayout from "../layout/BaserDashboardLayout";
import BaserRoutes from "./BaserRoutes";
import BostanyLayout from "../layout/BostanyLayout";
import BostanyRoutes from "./BostanyRoutes";
import Bst10 from "../pages/BostanyDashboard/Bst10";
import ProtectedRoute from "../components/ProtectedRoute";


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
                            <ProtectedRoute roles={['customer']}>
                                <BaserRoutes />
                            </ProtectedRoute>
                        </BaserDashboardLayout>
                    }
                />
                <Route
                    path="/Bostany/*"
                    element={
                        <BostanyLayout>
                            <ProtectedRoute roles={['consultant']}>
                                <BostanyRoutes />
                            </ProtectedRoute>
                        </BostanyLayout>
                    }
                />
                <Route path="/Bostany/bst10" element={<Bst10 />} />

            </Routes>
        </Router>
    );
};

export default AppRoutes;
