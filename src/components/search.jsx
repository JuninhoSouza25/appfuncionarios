import React from "react";
import { pessoa } from "./dados.js";
import { useState } from 'react';
import './search.css';
import { BiSearch } from "react-icons/bi";



export default function Search(){
    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState(false);
    const [individuo, setIndividuo] = useState();
    const [fieldSearch, setFieldSearch] = useState(true);
    const [buttonBack, setButtonBack] = useState(false);

    function handleResult(){
        setResultado(true);
        setFieldSearch(false);
        setButtonBack(true);
        acharFuncionario();
        setIndividuo(funcionario);
        
    }

    function handleButtonBack(){
        setResultado(false);
        setFieldSearch(true);
        setButtonBack(false)
    }

    let funcionario

    function Card(){
        return(
            <div className='card'>
                    <div className="container-img">
                        <img className="img-individuo" src={individuo.foto} alt={`Imagem ${individuo.nome}`} />
                    </div>
                    <div className="container-funcionario">
                        <h1>{individuo.nome} {individuo.sobrenome} </h1>
                        <h2>{individuo.cargo}</h2>
                        <div className="container-info"><h3>Ramal:</h3><p>{individuo.ramal} </p></div>
                        <div className="container-info"><h3>E-mail:</h3><p><a className="link" href={`mailto:${individuo.email}`}>{individuo.email}</a> </p></div>
                        <div className="container-info"><h3>Telefone:</h3><p><a className="link" href={`https://api.whatsapp.com/send?phone=${individuo.numero}`}>{individuo.numero}</a> </p></div>
                        <div className="container-info"><h3>Setor:</h3><p>{individuo.setor} </p></div>
                    </div>
            </div>
        );
    }

    function acharFuncionario(){
        let retornofuncionario = pessoa.map((nomeArg) => {
            if (nomeArg.chave === convertToSlug(valor.trim().toLowerCase())){
               return funcionario = nomeArg
            }
        })
        return retornofuncionario
    
    }

    const convertToSlug = (text) => {
        const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
        const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
        const p = new RegExp(a.split('').join('|'), 'g')
        return text.toString().toLowerCase().trim()
          .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
          .replace(/&/g, '-and-') // Replace & with 'and'
          .replace(/[\s\W-]+/g, '-') // Replace spaces, non-word characters and dashes with a single dash (-)
      }


    return(
        <div className="container-principal">
            {fieldSearch && (
                <div className="container-search">
                    <div className="search-component">
                        <BiSearch size={30} color="#A79A9A"/>
                        <input 
                        placeholder="Insira o nome de quem você procura"
                        type="text"
                        name="search"
                        id="search"
                        value={valor}
                        onChange={ (event) => setValor(event.target.value)}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                handleResult()
                            }
                        }}/>
                    </div>
                    <button onClick={handleResult}>Buscar</button>
                </div>
            )

            }
            {resultado && (
                <div className="card-container">
                    <Card />
                </div>
            )}
            {buttonBack && (
                <div className="buttonbackspam">
                    <button className="buttonback" onClick={handleButtonBack}>Voltar</button>
                </div>
                
            )}
        </div>
        
)}