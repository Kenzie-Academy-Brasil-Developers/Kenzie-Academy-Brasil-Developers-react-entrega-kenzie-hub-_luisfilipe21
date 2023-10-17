import { Route, Routes, useNavigate} from "react-router-dom";
import { useState } from "react";

import {LoginPage} from "../pages/Login";
import {HomePage} from "../pages/Home";
import {RegisterPage} from "../pages/Register";

export const RoutesModule = () => {
    const [ user, setUser ] = useState(null);

    const navigate = useNavigate();



    const exit = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@KenzieHub/login");
    }
    
    return (
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<HomePage user={user} exit={exit}/>}/>
        </Routes>
    )
}