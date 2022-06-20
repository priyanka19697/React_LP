import './App.css';
import RandomJokes from './RandomJokes/RandomJokes';
// import Greeting from './Greetings/Greetings';
// import Counter from './Counter/Counter'
// import ListView  from './ListView/ListView';
// import SignupForm from './SignupForm/SignupForm';
// import Parent from './Parent/Parent';
// import ReactRouterApp from './ReactRouter/ReactRouterApp';
import { QueryClient, QueryClientProvider } from 'react-query'



function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
          <div className="App">
      {/* <Greeting name="Anya"/> */}
      {/* <Counter value= {10} /> */}
      {/* <ListView numbers = {[1,2,3,4,5]}></ListView> */}
      {/* <SignupForm/> */}
      {/* <Parent/> */}
      {/* <ReactRouterApp></ReactRouterApp> */}
      <RandomJokes></RandomJokes>
      </div>
    </QueryClientProvider>

  );
}

export default App;
