import './App.css'
import { HashRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home/page'
import Comite from './pages/comites/page'
import Menu_bar from './components/navbar/Menu_bar'
import Patrocinadores from './pages/patrocinadores/page'
function App() {
  return (
    <HashRouter>
      <Menu_bar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/comites" element={<Comite/>}/>
        <Route path="/patrocinadores" element={<Patrocinadores/>}/>
      </Routes>
        
    </HashRouter>
  )
}

export default App
