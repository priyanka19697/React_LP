import {Routes, BrowserRouter as Router, Link , Route} from "react-router-dom";
import React from "react";
import Greetings from "../Greetings/Greetings"
import Counter from "../Counter/Counter"
import Parent from "../Parent/Parent";

export default function ReactRouterApp() {
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                </ul>
            </div>
        <hr/>
        <Routes>
          <Route path="/" element={<Greetings/>}>
          </Route> 
          <Route path="/:username" element={<Greetings/>}>
          </Route>
          <Route path="/login" element={<Parent/>}>
          </Route>
          <Route path="/counter" element={<Counter/>}>
          </Route>
        </Routes>
        </Router>

        
    )

}