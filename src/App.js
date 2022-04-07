import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from './Components/Menu';
import {AuthProvider} from './Components/Auth';
import { RequireAuth } from './Components/RequireAuth';

import Home from './Components/Home';
import Brand from './Components/Brand';
import Login from './Components/Login';

const App = () => {
    return <div className="App">
        <Router>
            <AuthProvider>
            <Menu />
            <Routes>
                {/* <Suspense fallback={<div>loading...</div>}> */}
                    {/* <Route exact path='/home' component={Home}/> */}
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/home" element={<Home />} exact />
                    <Route
                        path='/brand'
                        element={
                            <RequireAuth>
                            <Brand />
                            </RequireAuth>
                        }
                    />
                    {/* <RequireAuth exact path='/brand' component={Brand}/> */}
                    <Route exact path='/login' element={<Login />}/>
                {/* </Suspense> */}
            </Routes>
            </AuthProvider>
        </Router>
    </div>
}

export default App;