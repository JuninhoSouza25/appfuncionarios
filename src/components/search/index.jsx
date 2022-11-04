import React from "react";
import './search.css';
import { BiSearch } from "react-icons/bi";

export default function Search({value, onChange, onKeyPress, onClick}){
    
    return(
        <div className="container-principal">
            <div className="container-search">
                <div className="search-component">
                    <BiSearch size={30} color="#A79A9A"/>
                    <input 
                    placeholder="Insira o nome de quem você procura"
                    type="text"
                    name="search"
                    id="search"
                    value={value}
                    onChange={ onChange }
                    onKeyPress={onKeyPress}/>
                </div>
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>
        
)}