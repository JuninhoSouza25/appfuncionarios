import { useState, useEffect } from 'react'

import PhotoItem  from '../PhotoItem'
import './gallery.css'

export default function Gallery({photos, loading}){
    const [display, setDisplay] =useState("gallery-card-flex-wrap")

    return(
        <>
            {loading && (
                <div className='loading'>
                    <div className='load-box-text'>Carregando...</div>
                    <div className='load-box'>
                    </div>
                </div>
            )}

            {!loading && photos.length > 0 && (
                <>
                <div className={display}>
                {photos.map((item, index) => (
                    <PhotoItem key={index} url={item.url} name={item.name} />
                    ))}
                </div>
                </>
            )}

            {!loading && photos.length === 0 && (
                <h1>Pasta vazia!</h1>
            )}
            
        </>
    )
}