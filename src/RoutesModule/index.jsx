import { Route, Routes, useNavigate} from 'react-router-dom';
import { useState } from 'react';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';

export default () => {
    const [ user, setUser ] = useState(null);

    const navigate = useNavigate();



    const exit = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@KenzieHub/login");
    }
    
    return (
        <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Home user={user} exit={exit}/>}/>
        </Routes>
    )
}