import PhotoItem  from '../PhotoItem'
import './gallery.css'

export default function Gallery({photos, loading}){

    return(
        <>
            {!loading && photos.length > 0 && (
                <>
                <div className={"gallery-card-flex-wrap"}>
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