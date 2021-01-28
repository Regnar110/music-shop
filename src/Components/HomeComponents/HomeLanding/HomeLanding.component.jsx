import './homelanding.styles.scss'

import HomeFancyText from './HomeFancyText/HomeFancyText.component'
import HomeLandingOffer from './HomeLandingOffer/HomeLandingOffer.component'

const HomeLanding = () => {
    return (
        <div className='home-landing'>
            <HomeFancyText />
            <HomeLandingOffer />
        </div>
    )
}

export default HomeLanding;