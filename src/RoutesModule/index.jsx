import { Route, Routes, useNavigate} from "react-router-dom";
import { useContext, useState } from "react";

import {LoginPage} from "../pages/Login";
import {HomePage} from "../pages/Home";
import {RegisterPage} from "../pages/Register";

export const RoutesModule = () => {
   
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<HomePage />}/>
        </Routes>
    )
}