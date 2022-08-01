import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Chamado from './pages/Chamado';
import Enviado from './pages/Enviado';

function RoustesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/chamado' element={<Chamado />} />
                <Route path='/enviado' element={<Enviado />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoustesApp;