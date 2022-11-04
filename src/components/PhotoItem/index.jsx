import { useState } from 'react'
import './photo.css'


export default function PhotoItem({url, name}){
    const [imgClick, setImgClick] = useState("small")
    const [text, setText] = useState("Clique para expandir")

    function handleImgClick(){
        if (imgClick === "small"){
            setImgClick("big")
            setText("Clique para diminuir")
        }else{
            setImgClick("small")
            setText("Clique para expandir")
        }
    }

    return(
        <div className={`photo-container ${imgClick}`} onClick={handleImgClick}>
            <img className='photo' src={url} alt={name} />
            <p id='text'>{text}</p>
        </div>
    )
}