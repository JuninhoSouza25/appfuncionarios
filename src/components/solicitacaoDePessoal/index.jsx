import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import './styles.css'
import Loading from '../Loading'

export default function SolicitacaoDePessoal(){
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [ sucessField, setSucessField ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    async function onSubmit(data){  
        let config = {
            method: 'post',
            enctype:'multipart/form-data',
            url: `https://api-mhedica-funcionarios.vercel.app/api/solicitacao-de-ferias`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        setIsLoading(true)

        try {
            const response = await axios(config);
            if(response.status === 200){
                setSucessField(true)
                console.log("sucesso")
                window.location.reload(false)
            }
        } catch (err) {
            console.error(err)
        }
    };

    
    return(
        <>
            <div className='cabecalho'>
                <h2>Ficha de Solicitação de Pessoal</h2>
                <p>RQ-016-X</p>
                <p>Versão: 1.0</p>
            </div>

            <div>
                <div className='form-inline'>

                    <label>Nome:
                        <input 
                            className={`input-form ${errors?.name && 'required'}` } 
                            type='text' 
                            {...register("name", {required: true})} 
                            placeholder={errors?.name ? `Campo obrigatório!` : ''}>
                        </input>
                    </label>
                    <label>Cargo:
                        <input 
                            className={`input-form ${errors?.office && 'required'}` }
                            type='text' 
                            {...register("office", {required: true})} 
                            placeholder={errors?.office ? `Campo obrigatório!` : ''}>
                        </input>
                    </label>

                </div>

                <div className='form-inline'>

                    <label>Setor:
                        <input 
                            className={`input-form ${errors?.sector && 'required'}` } 
                            type='text' 
                            {...register("sector", {required: true})}
                            placeholder={errors?.sector ? `Campo obrigatório!` : ''}>
                        </input>
                    </label>
                    <label>Gestor Responsável:
                        <input 
                            className={`input-form ${errors?.manager && 'required'}` } 
                            type='text' 
                            {...register("manager", {required: true})}
                            placeholder={errors?.manager ? `Campo obrigatório!` : ''}>
                        </input>
                    </label>

                </div>

                <div className='form-inline'>
                    <label>Total de dias que pretende gozar:
                        <input 
                            className={`input-form ${errors?.total && 'required'}` } 
                            type='num' 
                            {...register("total", {required: true})}
                            placeholder={errors?.total ? `Campo obrigatório!` : ''}>
                        </input>
                    </label>
                    <label>Data de Início:
                        <input 
                            className={`input-form ${errors?.startDate && 'required'}` } 
                            type="date" 
                            {...register("startDate", {required: true})}
                            placeholder={errors?.startDate ? `Campo obrigatório!` : ''}/>
                    </label>
                    <label>Data do Término:
                        <input 
                            className={`input-form ${errors?.endDate && 'required'}` } 
                            type="date" 
                            {...register("endDate", {required: true})}
                            placeholder={errors?.endDate ? `Campo obrigatório!` : ''}/>
                    </label>
                </div>

                {isLoading && !sucessField ? (
                    <div className='form-inline'>
                        <Loading /> Enviando email...
                    </div>
                ) : null}      

                {sucessField && (<h3 className='sucess'>Email enviado com sucesso!</h3>)}

                {!sucessField && (
                    <button 
                        onClick={() => handleSubmit(onSubmit)()} 
                        className='button-spam' 
                        type='submit' >Enviar
                    </button>
                )}
            </div>
        </>
    )
}