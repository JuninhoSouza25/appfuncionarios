import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import './styles.css'
import Loading from '../Loading'


export default function JustificativaDePonto(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [ selectField, setSelectField ] = useState(false);
    const [ sucessField, setSucessField ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    function handleSelectField(event){
        const selectField = event.target
        if( selectField.name === "selectJustify" && selectField.value === "Outros"){
            setSelectField(true)
        }else{
            setSelectField(false)
        }
    }

    async function onSubmit(data){  
        let config = {
            method: 'post',
            enctype:'multipart/form-data',
            url: `https://api-mhedica-funcionarios.vercel.app/api/justificativa-ponto`,
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
                window.location.reload(false)
            }
        } catch (err) {
            console.error(err)
        }
    };

    
    return(
        <>
            <div className='cabecalho'>
                <h2>Justificativa para Ocorrência de Registro de Ponto</h2>
                <p>RQ-016-IX</p>
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

                <label>Data da Ocorrência:
                    <input 
                        className={`input-form ${errors?.date && 'required'}` } 
                        type="date" 
                        {...register("date", {required: true})}
                        placeholder={errors?.date ? `Campo obrigatório!` : ''}/>
                </label>

                <div className='form-inline'>
                    <label>Entrada
                        <input 
                            className='input-form' 
                            type="checkbox" 
                            {...register("ingress")}>
                        </input>
                    </label>
                    <label>Horário
                        <input 
                            className='input-form' 
                            type='time' 
                            {...register("ingressTime")}>
                        </input>
                    </label>
                </div>
                <div className='form-inline'>
                    <label>Intervalo
                        <input 
                            className='input-form' 
                            type="checkbox" 
                            {...register("breakTimeStart")}>
                        </input>
                    </label>
                    <label>Horário
                        <input 
                            className='input-form' 
                            type='time'
                            {...register("breakTimeStartHour")}>
                        </input>
                    </label>
                </div>
                <div className='form-inline'>
                    <label>Retorno do Intervalo
                        <input 
                            className='input-form' 
                            type="checkbox" 
                            {...register("breakTimeEnd")}>
                        </input>
                    </label>
                    <label>Horário
                        <input 
                            className='input-form' 
                            type='time' 
                            {...register("breakTimeEndHour")}>
                        </input>
                    </label>
                </div>
                <div className='form-inline'>
                    <label>Saída
                        <input 
                            className='input-form' 
                            type="checkbox" 
                            {...register("exit")}>
                        </input>
                    </label>
                    <label>Horário
                        <input 
                            className='input-form' 
                            type='time' 
                            {...register("exitTime")}>
                        </input>
                    </label>
                </div>

                <div>
                    <label>Justificativa</label>
                    <select 
                        className={`input-form ${errors?.selectJustify && 'required'}` } 
                        {...register("selectJustify", {required: true})}  
                        onChange={handleSelectField} >
                            <option 
                                className='input-form' 
                                value={null}>
                            </option>
                            <option 
                                className='input-form' 
                                value='Esquecimento'>Esquecimento</option>
                            <option 
                                className='input-form' 
                                value='Inconstância no Aplicativo'>Inconstância no Aplicativo</option>
                            <option 
                                className='input-form' 
                                value='Serviços externos autorizado pelo gestor'>Serviços externos autorizado pelo gestor</option>
                            <option 
                                className='input-form' 
                                value='Outros' >Outros</option>
                    </select>
                </div>

                {selectField && (
                    <label>Se "Outros", qual?
                        <input 
                            className='input-form' 
                            type='text' 
                            {...register("justifyOthers")}>
                        </input>
                    </label>
                )}

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