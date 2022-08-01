import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Chamado from './pages/Chamado';

function RoustesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/chamado' element={<Chamado />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoustesApp;