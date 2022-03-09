import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Menu from './Components/Menu';

const Home = lazy(() => import('./Components/Home'));
const Brand = lazy(() => import('./Components/Brand'));

const App = () => {
    return <div className="App">
        <Router>
            <Menu />
            <Switch>
                <Suspense fallback={<div>loading...</div>}>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/brand' component={Brand}/>
                </Suspense>
            </Switch>
        </Router>
    </div>
}

export default App;