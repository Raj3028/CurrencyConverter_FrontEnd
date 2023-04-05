import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/homePage'

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        
        <div className='route'>
          <Routes>
            

          <Route path='/' element={<Home />} />


          </Routes>
        </div>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
