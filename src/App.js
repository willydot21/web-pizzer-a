
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import menu from './media/food/menu.jpg';
import Menu from './pages/menu/menu';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={ <Home /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/menu" element={ <Menu /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;