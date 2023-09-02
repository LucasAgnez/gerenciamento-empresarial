import './App.css' 
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import Estoque from './pages/Estoque/Estoque';
import Home from './pages/Home/Home';

function App() {
    return (
      <div className='app'>
        <BrowserRouter>
        <Sidebar/>
          <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Estoque/>} path='/gerenciamento/estoque'/>
            <Route element={<Estoque/>} path='/gerenciamento/equipe'/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App
