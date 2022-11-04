import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Chamado from './pages/Chamado';
import Enviado from './pages/Enviado';
import Galeria from './pages/Galeria';
import Halloween2022 from './pages/Galeria/Halloween22';
import Halloween2021 from './pages/Galeria/Halloween21';

function RoustesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/chamado' element={<Chamado />} />
                <Route path='/enviado' element={<Enviado />} />
                <Route path='/galeria' element={<Galeria />} />
                <Route path='/galeria/halloween-2022' element={<Halloween2022 />} />
                <Route path='/galeria/halloween-2021' element={<Halloween2021 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoustesApp;