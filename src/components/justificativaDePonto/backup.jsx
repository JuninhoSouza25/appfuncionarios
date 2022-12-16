
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


<form onSubmit={handleSubmit} action="https://formsubmit.co/eugenio@mhedica.com.br" method="POST" encType="multipart/form-data">

                <input type="hidden" name="_template" value="box"/>
                <input type="hidden" name="_subject" value={`Solicitação de compensação/descanso de Banco de Horas - ${formValues.nome}`}/>
                <input type="hidden" name="_captcha" value="false"/>

                <div className='form-cabecalho'>

                    <label>Nome:
                        <input className='input-form' type='text' name='nome' onChange={handleInputChange} value={formValues.nome || '' }></input>
                    </label>
                    <label>Cargo:
                        <input className='input-form' type='text' name='cargo' onChange={handleInputChange} value={formValues.cargo || '' }></input>
                    </label>

                </div>

                <div className='form-cabecalho'>

                    <label>Setor:
                        <input className='input-form' type='text' name='setor' onChange={handleInputChange} value={formValues.setor || '' }></input>
                    </label>
                    <label>Gestor Responsável:
                        <input className='input-form' type='text' name='gestor' onChange={handleInputChange} value={formValues.gestor || '' }></input>
                    </label>

                </div>

                <label>Data da Ocorrência:
                    <input className='input-form' type="date" name='dataInicio' onChange={handleInputChange}  value={formValues.dataInicio || '' }/>
                </label>

                <div className='form-cabecalho'>
                    <label>Entrada
                        <input className='input-form' type="checkbox" id='entrada' name='entrada'></input>
                    </label>
                    <label>Horário
                        <input className='input-form' type='time' id='dataEntrada' name='dataEntrada'></input>
                    </label>
                </div>
                <div className='form-cabecalho'>
                    <label>Intervalo
                        <input className='input-form' type="checkbox" id='intervalo' name='intervalo'></input>
                    </label>
                    <label>Horário
                        <input className='input-form' type='time' id='dataIntervalo' name='dataIntervalo'></input>
                    </label>
                </div>
                <div className='form-cabecalho'>
                    <label>Retorno do Intervalo
                        <input className='input-form' type="checkbox" id='retorno' name='retorno'></input>
                    </label>
                    <label>Horário
                        <input className='input-form' type='time' id='dataRetorno' name='dataRetorno'></input>
                    </label>
                </div>
                <div className='form-cabecalho'>
                    <label>Saída
                        <input className='input-form' type="checkbox" id='saida' name='saida'></input>
                    </label>
                    <label>Horário
                        <input className='input-form' type='time' id='dataSaida' name='dataSaida'></input>
                    </label>
                </div>

                <div>
                    <label>Justificativa</label>
                    <select className='input-form' name='justificativa' id='justificativa'  onChange={handleSelectField} >
                        <option className='input-form' value={null}></option>
                        <option className='input-form' value='Esquecimento'>Esquecimento</option>
                        <option className='input-form' value='Inconstância no Aplicativo'>Inconstância no Aplicativo</option>
                        <option className='input-form' value='Serviços externos autorizado pelo gestor'>Serviços externos autorizado pelo gestor</option>
                        <option className='input-form' value='Outros' >Outros</option>
                    </select>
                </div>

                {selectField && (
                    <label>Se "Outros", qual?
                        <input className='input-form' type='text'></input>
                    </label>
                )}

                <button className='button-spam' type='submit'>Enviar</button>
            </form>