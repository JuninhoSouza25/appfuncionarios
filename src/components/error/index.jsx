import './error.css';

export default function Error(){
    return(
        <div className='error-container'>
                <div className="error-img">
                    <img src={"https://www.pngplay.com/wp-content/uploads/12/Loupe-PNG-Photo-Clip-Art-Image.png"} alt={"Imagem de lupa"}/>
                </div>
                <div className="error-texto">
                    <p>
                        Desculpe, não encontrei essa pessoa...
                    </p>
                    <p>
                        Tente novamente!
                    </p>
                    <p>
                        Caso tenha mais de uma pessoa com o mesmo nome, tente pelo sobrenome da pessoa buscada.
                    </p>
                </div>
        </div>
    );
}