import logo from './logo.svg';
import './App.css';
import Greeting from './Greetings/Greetings';
import Counter from './Counter/Counter'

function App() {
  return (
    <div className="App">
      {/* <Greeting name="Anya"/> */}
      <Counter value= {10} />
    </div>
  );
}



export default App;
