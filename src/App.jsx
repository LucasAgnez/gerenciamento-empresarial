import './App.css' 
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import Estoque from './pages/Estoque/Estoque';
import Equipe from './pages/Equipe/Equipe';
import Home from './pages/Home/Home';
import Produto from './pages/Produto/Produto';
import Reabastecimento from './pages/Reabastecimento/Reabastecimento';
import Contratacao from './pages/Contratacao/Contratacao';
import Configuracoes from './pages/Configuracoes/Configuracoes';

function App() {
    return (
      <div className='app'>
        <BrowserRouter>
        <Sidebar/>
          <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Estoque/>} path='/gerenciamento/estoque'/>
            <Route element={<Produto/>} path="/gerenciamento/estoque/:id"  />
            <Route element={<Equipe/>} path='/gerenciamento/equipe'/>
            <Route element={<Produto/>} path='/gerenciamento/equipe/:id'/>
            <Route element={<Reabastecimento/>} path='/eventos/reabastecimento'/>
            <Route element={<Contratacao/>} path='/eventos/contratacao'/>
            <Route element={<Configuracoes/>} path='/configuracoes'/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App
