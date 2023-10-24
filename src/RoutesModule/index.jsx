import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../pages/Login";
import { HomePage } from "../pages/Home";
import { RegisterPage } from "../pages/Register";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RoutesModule = () => {

    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<HomePage />} />
            </Route>
            {/* <Route path="/news" state={{lastRoute="/news"}} element={<NewsPage />} /> */}
        </Routes>
    )
}