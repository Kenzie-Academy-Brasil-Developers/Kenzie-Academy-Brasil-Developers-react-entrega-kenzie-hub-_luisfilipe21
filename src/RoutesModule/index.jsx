import { Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';

export default () => {
    
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}