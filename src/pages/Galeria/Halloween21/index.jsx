import Gallery from "../../../components/Gallery";
import Logo from "../../../components/logo"
import { useState, useEffect } from 'react'
import * as Photos from '../../../services/photos'
import { Link } from "react-router-dom"

export default function Halloween2021(){
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);

    useEffect(()=> {
        const getPhotos = async () => {
            setLoading(true);
            setPhotos(await Photos.getAllHalloween21());
            setLoading(false);
        }
        getPhotos();
    }, [])
    return(
        <div className="gallery-home">
            <div className="nav">
                <Logo />
                <h1>Galeria de fotos</h1>
                <div className="button-spam-container button-spam-align">
                    <Link className="button-spam link-spam" to="/">Início</Link>
                    <Link className="button-spam link-spam" to="/galeria">Galeria de Fotos</Link>
                </div>
            </div>
            <Gallery photos={photos} loading={loading} />  
        </div>
    )
}