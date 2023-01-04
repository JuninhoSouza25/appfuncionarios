import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './home.css';
import Logo from '../../components/logo';
import Search from '../../components/search';
import LogoMedtech from '../../components/logoMedtech';
import Error from '../../components/error';
import Birthday from "../../components/birthday";
import Card from "../../components/card";
import Grupos from "../../components/grupos";
import axios from "axios";

export default function Home(){
  const [error, setError] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [card, setCard] = useState(false);
  const [fieldSearch, setFieldSearch] = useState(true);
  const [buttonBack, setButtonBack] = useState(false);
  const [isBirthday, setIsBirthDay] = useState();
  const [group, setGroup] = useState([]);
  const [grupoOn, setGrupoOn] = useState(false);
  const [menu, setMenu] = useState(true);
  const [logoOn, setLogoOn] = useState(true);
  const [complete, setComplete] = useState(false);
  const [dataEmployee, setDataEmployee] = useState([]);
  const [dataGroup, setDataGroup] = useState([]);

  useEffect(() => {
    axios
    .get('https://api-mhedica-funcionarios.vercel.app/api/funcionario')
    .then((response) => {
      setDataEmployee(response.data)
      return dataEmployee
    })
    .catch((err) => {
      console.log(err)
    })    
  },[])

  useEffect(() => {
    axios
    .get('https://api-mhedica-funcionarios.vercel.app/api/grupos')
    .then((response) => {
      setDataGroup(response.data)
      return dataGroup
    })
    .catch((err) => {
      console.log(err)
    })    
  },[])


  function handleCard(){
      if(textInput) {
        setCard(true);
      setFieldSearch(false);
      setButtonBack(true);
      setMenu(false);
      handleSearch();
      compareDates(searchResult.aniversario);
      setError(false)
      }else{
        handleError()
      }
  }

  function handleButtonBack(){
      setCard(false);
      setFieldSearch(true);
      setButtonBack(false);
      setError(false);
      setTextInput('');
      setIsBirthDay(false);
      setMenu(true);
      setGrupoOn(false);
      setGroup([''])
      setLogoOn(true)
      setComplete(false)
  }

  function handleMenu(){
    setMenu(false);
    setGrupoOn(true);
    setButtonBack(true);
    setFieldSearch(false);
    setLogoOn(true);
    setComplete(false)
  }

  function handleComplete(){
    setComplete(true);
    setButtonBack(true);
    setMenu(false);
    setFieldSearch(false);
    setLogoOn(true)
    handleSearch()
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
  
      dataEmployee.map((name) => {
          if (name.chave.includes(convertToSlug(textInput))){
            searchResult = name
          }
      })

      if (!searchResult){
        handleError()
      }

      dataGroup.map((element) => {
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

  const lista = dataEmployee.filter((name) => name.chave.includes(convertToSlug(textInput)))

  return (
    <div className='home'>
        {logoOn && (
          <Logo />
        )}

        {menu && (
            <div className="button-spam-container button-spam-align">
                <Link className="button-spam link-spam" to="/">Início</Link>
                <button className="button-spam" onClick={handleComplete}>Lista completa</button>
                <button className="button-spam" onClick={handleMenu}>Grupos de Emails</button>
                <Link className="button-spam link-spam" to="/galeria">Galeria de Fotos</Link>
                <Link className="button-spam link-spam" to="/rh">RH</Link>
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

        {complete && (
          <>
          <div className="button-spam-container">
              <button className="button-spam" onClick={handleButtonBack}>Início</button>
          </div>
          {dataEmployee.map((pessoa) => (
            <Card key={pessoa.chave} result={pessoa} group={group} />
          ))}
          </>
        )}

        {card && (
          lista.map((pessoa) => (
            <Card key={pessoa.chave} result={pessoa} group={group} />
          ))
        )}

        {grupoOn && (
          <>
            <div className="button-spam-container">
              <button className="button-spam" onClick={handleButtonBack}>Início</button>
            </div>
            <Grupos grupos={dataGroup} />
          </>
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