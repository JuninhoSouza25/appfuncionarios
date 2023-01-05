import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Chamado from './pages/Chamado';
import Enviado from './pages/Enviado';
import Galeria from './pages/Galeria';
import Rh from './pages/Rh';
import Upload from './pages/Upload';

function RoustesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/chamado' element={<Chamado />} />
                <Route path='/enviado' element={<Enviado />} />
                <Route path='/galeria' element={<Galeria />} />
                <Route path='/rh' element={<Rh />} />
                <Route path='/upload' element={<Upload />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoustesApp;