import React, {useState} from 'react'
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
            <div className='nav'>
                <h1>Chamado SAP</h1>
                <div className="button-spam-container button-spam-align">
                    <Link className="button-spam link-spam" to="/">Início</Link>
                    <Link className="button-spam link-spam" to="/galeria">Galeria de Fotos</Link>
                    <Link className="button-spam link-spam" to="/chamado">Chamado SAP</Link>
                </div>
            </div>


            <div className='form-container'>
                <form onSubmit={handleSubmit} action="https://formsubmit.co/eugenio@mhedica.com.br" method="POST" encType="multipart/form-data">
                    <input type="hidden" name="_template" value="box"/>
                    <input type="hidden" name="_subject" value={'Chamado SAP ' + formValues.nome + ' - ' + formValues.assunto}/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <label>Digite seu nome:</label>
                    <input className='input-form' text='text' name='nome' onChange={handleInputChange} value={formValues.nome || '' }></input>
                    <label>Digite o Assunto do Chamado</label>
                    <input className='input-form' text='text' name='assunto' onChange={handleInputChange} value={formValues.assunto || '' }></input>
                    <label>Descreva o problema:</label>
                    <textarea className='input-form' text='textarea' name='descricao' onChange={handleInputChange} value={formValues.descricao || ''}></textarea>
                    <label id='input-form-button'>Anexar um arquivo
                    <input  type="file" name="attachment" accept="image/png, image/jpeg, image/pdf"></input></label>
                    <button className='button-spam' type='submit'>Enviar</button>
                    <Link className="button-spam link-spam" to="/">Inicio</Link>
                </form>
            </div>

            

            <LogoMhedTech />
        </div>
    )
}