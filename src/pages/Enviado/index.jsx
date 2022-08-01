import React from "react";
import { Link } from "react-router-dom";
import '../Home/home.css';
import Logo from "../../components/logo";
import LogoMhedTech from "../../components/logoMedtech";

export default function Enviado(){
    return (
        <div className="home">
            <Logo />

            <h1>Email enviado com sucesso!</h1>

            <Link className="button-spam link-spam link-animation" to="/">Inicio</Link>

            <LogoMhedTech />
        </div>
    )
}