export default function Grupos({grupos}){
    return(
        <ul className="card-lista-group">
            {grupos.map((grupos) => 
            <div className="group-container" key={grupos.grupo}>
                <h3 className="title-group">{grupos.grupo}</h3>
                <div className="container-info"><h3>E-mail:</h3><p><a className="link" href={`mailto:${grupos.email}`}>{grupos.email}</a></p></div>
                <div className="container-info"><h3>Membros:</h3><p>{`${grupos.membros}`}</p></div>
            </div>)}
        </ul>
    )
}