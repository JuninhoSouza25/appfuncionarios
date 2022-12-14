import React, {useState} from 'react'
import Logo from '../../components/logo';
import LogoMhedTech from '../../components/logoMedtech';
import { Link } from 'react-router-dom';
import JustificativaDePonto from '../../components/justificativaDePonto';

export default function Rh(){
    
    return(
        <div className='home'>
            <Logo />
            <div className='nav'>
                <div className="button-spam-container button-spam-align">
                    <Link className="button-spam link-spam" to="/">Início</Link>
                    <Link className="button-spam link-spam" to="/galeria">Galeria de Fotos</Link>
                    <Link className="button-spam link-spam" to="/chamado">Chamado SAP</Link>
                </div>
                <h1>Formulários RH</h1>
            </div>

            <JustificativaDePonto />

            <LogoMhedTech />
        </div>
    )
}

