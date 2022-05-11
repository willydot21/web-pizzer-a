
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import menu from './media/food/menu.jpg';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={ <Home /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/menu" element={ <img src={menu} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;