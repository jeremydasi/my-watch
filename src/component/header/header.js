import '../../style/header.css';
import Button from '../button/button.tsx';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/L'or'Loge-logo.svg"

function Header() {
    const navigate = useNavigate();

    return(
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='containerRoot'>
                <Button label="Accueil" onClick={() => navigate('/')}/>
                <Button label="Boutique" onClick={() => navigate('/boutique')}/>
                {/* <Button label="Contact" onClick={() => navigate('/contact')}/>  => TODO*/}
            </div>
        </div>
    )
}

export default Header