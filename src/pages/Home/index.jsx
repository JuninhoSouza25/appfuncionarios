import './home.css'
import Logo from '../../components/logo'
import Search from '../../components/search'
import LogoMedtech from '../../components/logoMedtech'

export default function Home() {

  return (
    <div className='home'>
        <Logo />
        <Search />
        <LogoMedtech />
    </div>

  );
}