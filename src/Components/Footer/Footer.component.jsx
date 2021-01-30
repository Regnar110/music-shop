import './footer.styles.scss'
import { withRouter } from 'react-router-dom'

const Footer = ({history}) => {
    return (
        <footer className='footer'>
        <div className='top-footer-break-line'></div>
            <div className='footer-content'>
                <div className='footer-contact'>
                    <h3>Contact</h3>
                    <div className='footer-contact-content'>
                        <div className='contact-col1'>
                            <div className='contact-data'>
                                <span className='data-header'>ADRESS:</span>
                                <span className='data'>Bulwar Las Olas 43,</span>
                                <span className='data'>Fort Lauderdale, USA</span>
                            </div>
                            <div className='contact-data'>
                                <span className='data-header'>E-MAIL:</span>
                                <span className='data'>office@wing.com</span>
                            </div>
                        </div>
                        <div className='contact-col2'>
                            <div className='contact-data'>
                                <span className='data-header'>TEL:</span>
                                <span className='data'>+77 666 555 444</span>
                            </div>
                            <div className='contact-data'>
                                <span className='data-header'>OPENING HOURS:</span>
                                <span className='data'>Mon-Fri 8-16</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-client'>
                    <h3>My account</h3>
                    <div className='footer-client-content'>
                        <span onClick={() =>  history.push('/login')}>Login<div className='underline'/></span>
                        <span onClick={() =>  history.push('/signup')}>Sign up<div className='underline'/></span>
                        <span onClick={() =>  history.push('/checkout')}>My cart<div className='underline'/></span>
                    </div>
                </div>
                <div className='footer-shop-rules'>
                    <h3>Terms of use</h3>
                    <div className='footer-rules-content'>
                        <span>Read the terms and conditions<div className='underline'/></span>
                    </div>
                </div>
            </div>
            <div className='made-by'>Website created by MateuszW - @github Regnar110</div>
        </footer>
    )
}

export default withRouter(Footer);