import { Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import { useState } from 'react';

export default () => {
    const [ user, setUser ] = useState(null);

    // useEffect(() => {

    // }, [])
    

    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Home/>}/>
        </Routes>
    )
}