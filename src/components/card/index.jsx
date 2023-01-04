import Loading from "../Loading"

export default function Card({result, group}){
    const imagem = result.foto

    return(
        <div className="card-container" key={result.chave}>
            <div className='card'>
              <div className="container-img">{
                imagem ? <img className="img-individuo" src={imagem} alt={`Imagem ${result.nome}`} /> : <Loading /> 
              }
                  
              </div>
              <div className="container-funcionario">
                  <h1>{result.nome} {result.sobrenome} </h1>
                  <h2>{result.cargo}</h2>
                  <div className="container-info"><h3>Ramal:</h3><p>{result.ramal} </p></div>
                  <div className="container-info"><h3>E-mail:</h3><p><a className="link" href={`mailto:${result.email}`}>{result.email}</a> </p></div>
                  <div className="container-info"><h3>Telefone:</h3><p><a className="link" target="_blank" href={`https://api.whatsapp.com/send?phone=55${result.numero}`}>{result.numero}</a> </p></div>
                  <div className="container-info"><h3>Setor:</h3><p>{result.setor} </p></div>
                  <div className="container-info"><h3>Grupos de Email:</h3><p>{group}</p></div>

              </div>
            </div>
          </div>
    )
}