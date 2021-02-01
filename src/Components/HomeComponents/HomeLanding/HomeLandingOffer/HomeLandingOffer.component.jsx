import './homelandingoffer.styles.scss'
import { withRouter } from 'react-router-dom';

import CustomButton from '../../../CustomButton/CustomButton.component'
import album from '../../../../Assets/album.jpg'

const HomeLandingOffer = ({history}) => {
    return(
        <div className='home-landing-offer'>
            <div className='home-landing-offer-header'>                    
                Daily news on sale
            </div>
            <div className='album'>
                <img alt='album' src={album}/>
            </div>
            <CustomButton name={'Check it out'} onClick={() => history.push('/shop')}/>
        </div>
    )
}

export default withRouter(HomeLandingOffer)