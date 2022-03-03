import logo from '../assets/img/logofinal.png';

export default function LogoMhedTech(){
    return(
        <div className="logo" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img style={{width:"200px"}} src={logo} />
        </div>
    )
}