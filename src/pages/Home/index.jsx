import React from "react";
import { useState } from 'react';
import './home.css'
import Logo from '../../components/logo'
import Search from '../../components/search'
import LogoMedtech from '../../components/logoMedtech'
import Error from '../../components/error'
import { pessoa } from '../../components/dados'


export default function Home() {
  const [error, setError] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [card, setCard] = useState(false);
  const [result, setResult] = useState();
  const [fieldSearch, setFieldSearch] = useState(true);
  const [buttonBack, setButtonBack] = useState(false);
  

  
  function handleCard(){
      setCard(true);
      setFieldSearch(false);
      setButtonBack(true);
      handleSearch();
      setResult(searchResult);
  }

  function handleButtonBack(){
      setCard(false);
      setFieldSearch(true);
      setButtonBack(false);
      setError(false);
      setTextInput('');
  }

  

  function handleError(){
      setCard(false);
      setError(true);
  }

  let searchResult

  function handleSearch(){
      let searchReturn = pessoa.filter((name) => {
          if (name.chave.includes(convertToSlug(textInput))){
              return searchResult = name
          }
      })

      if (!searchResult){
          handleError()
      }

      return searchReturn
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

  return (
    <div className='home'>
        <Logo />

        {error && (
            <Error />
        )}

        {fieldSearch && (
          <Search 
          value={textInput} 
          onChange={(event) => setTextInput(event.target.value)} 
          onKeyPress={event => {
            if (event.key === 'Enter') {
                handleCard()
            }}} 
          onClick={handleCard}/>
        )}

        {card && (
          <div className="card-container">
            <div className='card'>
              <div className="container-img">
                  <img className="img-individuo" src={result.foto} alt={`Imagem ${result.nome}`} />
              </div>
              <div className="container-funcionario">
                  <h1>{result.nome} {result.sobrenome} </h1>
                  <h2>{result.cargo}</h2>
                  <div className="container-info"><h3>Ramal:</h3><p>{result.ramal} </p></div>
                  <div className="container-info"><h3>E-mail:</h3><p><a className="link" href={`mailto:${result.email}`}>{result.email}</a> </p></div>
                  <div className="container-info"><h3>Telefone:</h3><p><a className="link" href={`https://api.whatsapp.com/send?phone=55${result.numero}`}>{result.numero}</a> </p></div>
                  <div className="container-info"><h3>Setor:</h3><p>{result.setor} </p></div>
              </div>
            </div>
          </div>
        )}

        {buttonBack && (
            <div className="buttonbackspam">
                <button className="buttonback" onClick={handleButtonBack}>Voltar</button>
            </div>
        )}

        <LogoMedtech />
    </div>

  );
}