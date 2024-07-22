import '../../style/header.css';
import Button from '../button/button.tsx';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return(
        <div className='navbar'>
            <div>

            </div>
            <div className='containerRoot'>
                <Button label="Accueil" onClick={() => navigate('/')}/>
                <Button label="Boutique" onClick={() => navigate('/boutique')}/>
                <Button label="Contact" onClick={() => navigate('/contact')}/>
            </div>
        </div>
    )
}

export default Header