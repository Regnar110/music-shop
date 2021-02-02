import './swipercard.styles.scss'
import album from '../../../Assets/album.jpg'// to zdjęcie ma 688px na 688 px !!! MUSZĄ BYC TAKIE DO ALBUMÓW
import SwiperCardButton from '../SwiperCardButton/SwiperCardButton.component'

const SwiperCard = () => {
    return(
        <div className='swiper-card'>
            <div className='swiper-image'>
               <img alt='album' src={album} /> 
               <SwiperCardButton />
            </div>
            <div className='swiper-card-description'>
                <span>Ryan Jones - Pain</span>
                <span>$50</span>
            </div>
        </div>
    )
}

export default SwiperCard