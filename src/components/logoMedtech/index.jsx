import logo from '../../assets/img/logofinal.png';

export default function LogoMhedTech(){
    return(
        <div className="logo" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img style={{width:"150px"}} src={logo} />
        </div>
    )
}