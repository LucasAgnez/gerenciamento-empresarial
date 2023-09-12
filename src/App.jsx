import './App.css' 
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import Estoque from './pages/Estoque/Estoque';
import Equipe from './pages/Equipe/Equipe';
import Home from './pages/Home/Home';
import Produto from './pages/Produto/Produto';
import ProdutoCreate from './pages/Produto/ProdutoCreate';

function App() {
    return (
      <div className='app'>
        <BrowserRouter>
        <Sidebar/>
          <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Estoque/>} path='/gerenciamento/estoque'/>
            <Route element={<ProdutoCreate/>} path='/gerenciamento/estoque/create'/>
            <Route element={<Produto/>} path="/gerenciamento/estoque/:id"  />
            <Route element={<Equipe/>} path='/gerenciamento/equipe'/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App
