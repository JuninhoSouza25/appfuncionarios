import React from 'react'
import './chamado.css';
import Logo from '../../components/logo';
import LogoMhedTech from '../../components/logoMedtech';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Chamado(){

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        axios.post('http://localhost:3030/send', 
            data,
            {
              headers: {
                "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
              }
            })
        .then(response => {console.log(response.data)} )
        console.log(data)
    }

    return(
        <div className='home'>
            <Logo />
            <div className='nav'>
                <h1>Chamado SAP</h1>
                <div className="button-spam-container button-spam-align">
                    <Link className="button-spam link-spam" to="/">Início</Link>
                    <Link className="button-spam link-spam" to="/galeria">Galeria de Fotos</Link>
                    <Link className="button-spam link-spam" to="/chamado">Chamado SAP</Link>
                </div>
            </div>

            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label>Digite seu nome:</label>
                    <input className='input-form' text='text' name='nome' id='nome' ></input>
                    <label>Digite o Assunto do Chamado</label>
                    <input className='input-form' text='text' name='assunto' id='assunto'></input>
                    <label>Descreva o problema:</label>
                    <textarea className='input-form' text='textarea' name='mensagem' id='mensagem'></textarea>
                    <label id='input-form-button'>Anexar um arquivo:
                    <input  type="file" name="anexo" id='anexo' accept="image/png, image/jpeg, image/pdf"></input></label>
                    <button className='button-spam' type='submit'>Enviar</button>
                    <Link className="button-spam link-spam" to="/">Inicio</Link>
                </form>
            </div>

            <LogoMhedTech />
        </div>
    )
}