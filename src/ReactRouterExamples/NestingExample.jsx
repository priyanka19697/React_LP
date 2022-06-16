import React from "react";
import { Router, Link, Routes, Route, useParams, useMatch } from "react-router-dom";


export default function NestingExample(){
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/"topics>Topics</Link>
                    </li>
                </ul>
                <hr />
                <Routes>
                    <Route exact path="/" element={<Home/>}>
                    </Route>
                    <Route exact path="/topics" element={<Topics/>}>
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }

function Topics(){
    let {path, url} = useMatch();
    console.log(path, url,"path", "url" )
    return(
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with react</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Routes>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Routes>
        </div>
    )
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
    console.log(topicId)
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }