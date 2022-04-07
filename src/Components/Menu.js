import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from './Auth';

const Menu = () => {
    const auth = useAuth();
    const navigate = useNavigate;

    const handleLogout = () => {
        auth.logout();
        navigate('/home');
    }

    console.log(auth);

    return (
        <>
        <Link to='/home' >Home</Link>
        <Link to='/brand' >Brand</Link>
        <Link to="/login" >Login</Link>
        {auth && auth.user ? <button onClick={handleLogout}>Logout</button> : null}
        </>
    )
}
export default Menu;