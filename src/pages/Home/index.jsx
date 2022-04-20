import React, { useState } from "react";
import './home.css';
import Logo from '../../components/logo';
import Search from '../../components/search';
import LogoMedtech from '../../components/logoMedtech';
import Error from '../../components/error';
import { pessoa, grupos } from '../../components/dados';
import Birthday from "../../components/birthday";

export default function Home() {
  const [error, setError] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [card, setCard] = useState(false);
  const [result, setResult] = useState();
  const [fieldSearch, setFieldSearch] = useState(true);
  const [buttonBack, setButtonBack] = useState(false);
  const [isBirthday, setIsBirthDay] = useState();
  const [group, setGroup] = useState([])
  const [grupoOn, setGrupoOn] = useState(false)
  const [buttonGroup, setButtonGroup] = useState(true)
  const [logoOn, setLogoOn] = useState(true)

  function handleCard(){
      setCard(true);
      setFieldSearch(false);
      setButtonBack(true);
      setButtonGroup(false);
      handleSearch();
      setResult(searchResult);
      compareDates(searchResult.aniversario);
      return result
  }

  function handleButtonBack(){
      setCard(false);
      setFieldSearch(true);
      setButtonBack(false);
      setError(false);
      setTextInput('');
      setIsBirthDay(false);
      setButtonGroup(true);
      setGrupoOn(false);
      setGroup([''])
      setLogoOn(true)
  }

  function handleButtonGroup(){
    setButtonGroup(false);
    setGrupoOn(true);
    setButtonBack(true);
    setFieldSearch(false);
    setLogoOn(false)
  }

  function handleError(){
      setCard(false);
      setError(true);
  }

  function compareDates(date){
    let birthday = new Date(date);
    let today = new Date().setHours(0,0,0,0);
    setIsBirthDay(birthday.setFullYear(2022) === today ? true : false)
  }

  let searchResult
  let grupoEmail = []

  function handleSearch(){
  
      pessoa.map((name) => {
          if (name.chave.includes(convertToSlug(textInput))){
              searchResult = name
              console.log(searchResult.nome)
          }
      })

      grupos.map((element) => {
        if (element.membros.includes(searchResult.nome)){
          grupoEmail.push(element.grupo)
          grupoEmail.push(', ')
          setGroup([...group, grupoEmail])
        }
      })

      if (!searchResult){
          handleError()
      }
      return searchResult
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
        {logoOn && (
          <Logo />
        )}

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

        {isBirthday && (
          <Birthday />
        )}

        {card && (
          <div className="card-container" key={result.chave}>
            <div className='card'>
              <div className="container-img">
                  <img className="img-individuo" src={result.foto} alt={`Imagem ${result.nome}`} />
              </div>
              <div className="container-funcionario">
                  <h1>{result.nome} {result.sobrenome} </h1>
                  <h2>{result.cargo}</h2>
                  <div className="container-info"><h3>Ramal:</h3><p>{result.ramal} </p></div>
                  <div className="container-info"><h3>E-mail:</h3><p><a className="link" href={`mailto:${result.email}`}>{result.email}</a> </p></div>
                  <div className="container-info"><h3>Telefone:</h3><p><a className="link" target="_blank" href={`https://api.whatsapp.com/send?phone=55${result.numero}`}>{result.numero}</a> </p></div>
                  <div className="container-info"><h3>Setor:</h3><p>{result.setor} </p></div>
                  <div className="container-info"><h3>Grupos de Email:</h3><p>{group}</p></div>

              </div>
            </div>
          </div>
        )}

        {grupoOn && (
          <>
            <ul style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
              {grupos.map((grupos) => 
              <div>
                  <h3 style={{marginTop: "5px"}}>{grupos.grupo}</h3>
                  <div className="container-info"><h3>E-mail:</h3><p><a className="link" href={`mailto:${grupos.email}`}>{grupos.email}</a></p></div>
                  <div className="container-info"><h3>Membros:</h3><p>{`${grupos.membros}`}</p></div>
              </div>)}
            </ul>
          </>
        )}

        {buttonBack && (
            <div className="button-spam-container">
                <button className="button-spam" onClick={handleButtonBack}>Voltar</button>
            </div>
        )} 

        {buttonGroup && (
            <div className="button-spam-container button-spam-center">
                <button className="button-spam" onClick={handleButtonGroup}>Grupos de Emails</button>
            </div>
        )}

        {logoOn && (
          <LogoMedtech />
        )}
    </div>

  );
}