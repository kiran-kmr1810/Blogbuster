import React,{useEffect}from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import App from './App';
import Admin from "./admin";
import Art from "./art"

function Path(){
    useEffect(() => {
        document.title = "BlogBuster"
      }, [])
    return (
        <Router>
            <div>
                <Switch>
                <Route path="/" exact component = {App} />
                <Route path="/admin" exact component = {Admin} />
                <Route path="/article" component = {Art} />
                <Route path="/h" component = {Art} />
                </Switch>
            </div>
        </Router>
    );
}

export default Path;