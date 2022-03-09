import './error.css';

export default function Error(){
    return(
        <div className='error-container'>
                <div className="error-img">
                    <img src={"https://thumbs.gfycat.com/AngelicShoddyChafer-size_restricted.gif"} alt={"Imagem de lupa"}/>
                </div>
                <div className="error-texto">
                    <p>
                        Desculpe, não encontrei essa pessoa...
                    </p>
                </div>
        </div>
    );
}