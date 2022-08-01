import React, {useState} from 'react'
import '../Home/home.css';
import './chamado.css';
import Logo from '../../components/logo';
import LogoMhedTech from '../../components/logoMedtech';
import { Link } from 'react-router-dom';



export default function Chamado(){
    const [ formValues, setFormValues] = useState({});
    

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value })
    }

    const handleSubmit = (event) => {
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log(data)
    }

    return(
        <div className='home'>
            <Logo />

            <h1>Chamado SAP</h1>

            <form onSubmit={handleSubmit} action="https://formsubmit.co/eugenio@mhedica.com.br" method="POST">
                <input type="hidden" name="_subject" value={'Chamado SAP ' + formValues.nome}/>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="https://appfuncionarios.vercel.app/"/>
                <label>Digite seu nome</label>
                <input className='input-form' text='text' name='nome' onChange={handleInputChange} value={formValues.nome || '' }></input>
                <label>Descreva o problema:</label>
                <textarea className='input-form' text='textarea' name='descricao' onChange={handleInputChange} value={formValues.descricao || ''}></textarea>
                <button className='button-spam' type='submit'>Enviar</button>
            </form>

            <Link className="button-spam link-spam" to="/">Inicio</Link>

            <LogoMhedTech />
        </div>
    )
}