import '../../style/header.css';
import Button from '../button/button.tsx';

function Header() {
    return(
        <div className='navbar'>
            <div>

            </div>
            <div className='containerRoot'>
                <Button label="Accueil"/>
                <Button label="Boutique"/>
                <Button label="Contact"/>
            </div>
        </div>
    )
}

export default Header