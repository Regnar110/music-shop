import './swipercard.styles.scss'
import SwiperCardButton from '../SwiperCardButton/SwiperCardButton.component'

const SwiperCard = ({ AUTHOR, ALBUM, PRICE, PICTURE }) => {
    return(
        <div className='swiper-card'>
            <div className='swiper-image'>
               <img alt='album' src={PICTURE} /> 
               <SwiperCardButton />
            </div>
            <div className='swiper-card-description'>
                <span>{AUTHOR} - {ALBUM}</span>
                <span>${PRICE}</span>
            </div>
        </div>
    )
}

export default SwiperCard