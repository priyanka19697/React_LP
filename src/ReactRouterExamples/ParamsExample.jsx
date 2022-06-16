import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";

export default function BasicExample() {
    return (
        <Router>
            <div>
                <h2> Accounts</h2>
                <ul>
                    <li>
                        <Link to="/netflix">Netflix</Link>
                    </li>
                    <li>
                        <Link to="/zillow-group">Zillow Group</Link>
                    </li>
                    <li>
                        <Link to="/yahoo">Yahoo</Link>
                    </li>
                </ul>
            </div>
            <hr></hr>
            <Routes>

                <Route path="/:id"  element={<Child/>}>
                </Route>
            </Routes>
        </Router>
    )
}

function Child() {
    const {id} = useParams()
    return (
        <div>
            <h2>ID: {id}</h2>
        </div>
    )
}
