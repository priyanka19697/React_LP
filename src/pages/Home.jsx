// import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Greeting from '../components/Greeting';
import Counter from '../components/Counter';
import Parent from '../components/Parent';
import ListView from '../components/ListView'
import RandomJokes from '../components/RandomJokes';

function Home() {
    return (
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
                <li>
                    <Link to="/listview">Listview</Link>
                </li>
                <li>
                    <Link to="/jokes">Jokes</Link>
                </li>
            </ul>
        </div>
    <hr/>
    <Routes>
      <Route path="/" element={<Greeting/>}>
      </Route> 
      <Route path="/login" element={<Parent/>}>
      </Route>
      <Route path="/counter" element={<Counter/>}>
      </Route>
      <Route path="/listview" element={<ListView/>}>
      </Route>
      <Route path="/:username" element={<Greeting/>}>
      </Route>
      <Route path="/jokes" element={<RandomJokes/>}>
      </Route>
    </Routes>
    </Router>     

    )

}

export default Home
