import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './routes/Home';
import ResturantDetail from './routes/ResturantDetail';
import UpdatePage from './routes/UpdatePage';
#switch throws an error
const App = () =>{
    return <div>
            <Router>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/resturants/:id/update" component={UpdatePage}/>
                <Route exact path="/resturants/:id" component={ResturantDetail}/>
                </Switch>
            </Router>
        </div>
}

export default App;
