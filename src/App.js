import './App.css';
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Home></Home>
      </QueryClientProvider>
    </div>
  );
}

export default App;
