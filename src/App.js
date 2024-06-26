
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/menu/menu';
import Home from './pages/home';
import NotFound from './pages/404';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={ <Home /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/menu" element={ <Menu /> } />
          <Route path="/404" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;