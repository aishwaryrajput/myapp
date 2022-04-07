import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import {useAuth} from './Auth';
const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);
    
    const redirectPath = location.state ? location.state.path : '/';

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, { replace: true })
    }

    return (
        <>
            <input type="text" onChange={(e) => setUser(e.target.value)}/>
            <button onClick={handleLogin}>Submit</button>
        </>
    )
}
export default Login;