import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './home.css';
import Logo from '../../components/logo';
import Search from '../../components/search';
import LogoMedtech from '../../components/logoMedtech';
import Error from '../../components/error';
import { pessoa, grupos } from '../../components/dados';
import Birthday from "../../components/birthday";
import Card from "../../components/card";
import Grupos from "../../components/grupos";

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
          }
      })

      if (!searchResult){
        handleError()
      }

      grupos.map((element) => {
        if (element.key.includes(searchResult.chave)){
          grupoEmail.push(element.grupo)
          grupoEmail.push(', ')
          setGroup([...group, grupoEmail])
        }
      })

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

        

        {buttonGroup && (
            <div className="button-spam-container button-spam-align">
                <button className="button-spam" onClick={handleButtonGroup}>Grupos de Emails</button>
                <Link className="button-spam link-spam" to="/chamado">Chamado SAP</Link>
            </div>
        )}

        {fieldSearch && (
          <>
            <Search 
              value={textInput} 
              onChange={(event) => setTextInput(event.target.value)} 
              onKeyPress={event => {
                if (event.key === 'Enter') {
                    handleCard()
                }}} 
              onClick={handleCard}/>
          </>
        )}

        {error && (
            <Error />
        )}

        {isBirthday && (
          <Birthday />
        )}

        {card && (
          <Card result={result} group={group} />
        )}

        {grupoOn && (
          <Grupos grupos={grupos} />
        )}

        {buttonBack && (
            <div className="button-spam-container">
                <button className="button-spam" onClick={handleButtonBack}>Voltar</button>
            </div>
        )} 
        

        {logoOn && (
          <LogoMedtech />
        )}
    </div>

  );
}