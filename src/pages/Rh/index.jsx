import React, {useState} from 'react'
import Logo from '../../components/logo';
import LogoMhedTech from '../../components/logoMedtech';
import { Link } from 'react-router-dom';
import SolicitacaoDeFerias from '../../components/solicitacaoDeFerias';
import JustificativaDePonto from '../../components/justificativaDePonto';
import './styles.css'

export default function Rh(){
    const [ form, setForm ] = useState()
    const [ formExists, setFormExists ] =useState(false)

    function handleClickForm(e){
        const clickedForm = e.target.id
        setFormExists(true)

        if (clickedForm === "justificativa-ponto"){
            setForm(<JustificativaDePonto />)
        }else if (clickedForm === "solicitacao-ferias"){
            setForm(<SolicitacaoDeFerias />)
        }

    }
    
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
            
            {!formExists ? (
                <div className='forms-container' onClick={handleClickForm}>
                    <div className='form-item' id="justificativa-ponto">Justificativa de Ponto</div>
                    <div className='form-item' id="solicitacao-ferias">Solicitação de Férias</div>
                </div>
            ) : form}

            <LogoMhedTech />
        </div>
    )
}

