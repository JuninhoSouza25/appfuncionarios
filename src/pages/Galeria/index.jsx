import Logo from "../../components/logo"
import { Link } from "react-router-dom"
import './gallery-page-styles.css'

export default function Galeria(){


    return (
        <div className="gallery-page">
            <div className="nav">
                <Logo />
                <h1>Galeria de fotos</h1>
                <div className="button-spam-container button-spam-align">
                <Link className="button-spam link-spam" to="/">Início</Link>
            </div>
            </div>
            <div className="gallery-page-flex">
                <Link className="link-gallery-page" to={'/galeria/halloween-2021/'}>
                    <p>Halloween 2021</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/halloween-mhedica-gallery.appspot.com/o/halloween21%2FHalloween-17.jpg?alt=media&token=bbb0477e-342d-40c1-9590-2e08bff85ded" alt="imagem halloween 2021" />
                </Link>
                <Link className="link-gallery-page" to={'/galeria/halloween-2022/'}>
                    <p>Halloween 2022</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/halloween-mhedica-gallery.appspot.com/o/halloween22%2FWhatsApp%20Image%202022-10-28%20at%2016.27.54%20(2).jpeg?alt=media&token=7332e9ae-3417-4650-a503-24440933bfd7" alt="imagem halloween 2022" />
                </Link>
            </div>
        </div>
    )
}