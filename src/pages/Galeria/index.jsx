import Logo from "../../components/logo"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import * as Photos from '../../services/photos'
import './gallery-page-styles.css'
import Gallery  from '../../components/Gallery'
import Loading from "../../components/Loading"

export default function Galeria(){
    const [loading, setLoading] = useState(false);
    const [photos21, setPhotos21] = useState([]);
    const [photos22, setPhotos22] = useState([]);
    const [galleryOn, setGalleryOn] = useState(false);
    const [galleryHome, setGalleryHome] = useState(true);
    const [photoGallery, setPhotoGallery] = useState()

    useEffect(()=> {
        const getPhotos = async () => {
            setLoading(true);
            setPhotos21(await Photos.getAllHalloween21());
            setPhotos22(await Photos.getAllHalloween22());
            setLoading(false);
        }
        getPhotos();
    }, [])

    function handleGallery(e){
        if (e.target.id === "halloween21"){
            setPhotoGallery(photos21)
        }else if (e.target.id === "halloween22"){
            setPhotoGallery(photos22)
        }

        if (!galleryOn){
            setGalleryOn(true)
            setGalleryHome(false)
        }else{
            setGalleryOn(false)
            setGalleryHome(true)
        } 
    }

    return (
        <div className="gallery-page">
            <div className="nav">
                <Logo />
                <h1>Galeria de fotos</h1>
                <div className="button-spam-container button-spam-align">
                    <Link className="button-spam link-spam" to="/">Início</Link>
                    <Link className="button-spam link-spam" to="/chamado">Chamado SAP</Link>
                    { galleryOn && <button className="button-spam link-spam" onClick={handleGallery}>Galeria de fotos</button> }
                </div>
            </div>
            {galleryHome && (
                <div className="gallery-page-flex">
                    <button className="link-gallery-page" name="halloween21" id="halloween21" onClick={handleGallery}>
                        <p id="halloween21">Halloween 2021</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/halloween-mhedica-gallery.appspot.com/o/halloween21%2FHalloween-17.jpg?alt=media&token=bbb0477e-342d-40c1-9590-2e08bff85ded" alt="imagem halloween 2021" id="halloween21" />
                    </button>
                    <button className="link-gallery-page" id="halloween22" onClick={handleGallery}>
                        <p id="halloween22">Halloween 2022</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/halloween-mhedica-gallery.appspot.com/o/halloween22%2FWhatsApp%20Image%202022-10-28%20at%2016.27.54%20(2).jpeg?alt=media&token=7332e9ae-3417-4650-a503-24440933bfd7" alt="imagem halloween 2022" id="halloween22"/>
                    </button>
                </div>
            )}
            <div className="loading">
                {loading && (
                    <div className='form-inline'>
                        <Loading />Carregando imagens...
                    </div>
                )}
            </div>
                {galleryOn && ( 
                    <Gallery photos={photoGallery} loading={loading} />
                )}
        </div>
    )
}