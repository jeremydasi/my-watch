import '../../style/footer.css';
import Logo from "../../assets/L'Or'Loge-logo.svg"

function Footer() {
    return(
        <div className='footer'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <div>
                <p className='copy'>© 2024-2024</p>
            </div>
        </div>
    )
}

export default Footer;