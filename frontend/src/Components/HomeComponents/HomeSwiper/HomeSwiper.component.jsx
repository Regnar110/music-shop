import './homeswiper.styles.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react'

import SwiperCard from '../SwiperCard/SwiperCard.component'

const HomeSwiper = ({ place }) =>  {

    const [swiperProducts, setSwiperProducts] = useState([])

    useEffect( () => {
        (async () => {
            try {
                const response = await fetch('http://localhost:3008/getproducts', {
                    method: 'POST', 
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        place
                    })
                })
                const data = await response.json();
                console.log(data)
                setSwiperProducts(data)
            } catch(err) {
                console.log(err)
            }
        })();
        return () => {
            setSwiperProducts('')
        }
    },[place, setSwiperProducts])

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    return(
        <div className='home-swiper'>
            <div className='swiper-wrapper'>
                <Swiper
                    slidesPerView={window.innerWidth <= 768 ? 1 : 2}
                    centeredSlides={true}
                    scrollbar={{ draggable: true }}
                    navigation={true}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    >
                    {
                        swiperProducts.map(({PRODUCT_ID, AUTHOR, ALBUM, PRICE, PRODUCT_PICTURE}) => {
                            return(
                                <SwiperSlide key={PRODUCT_ID}><SwiperCard AUTHOR={AUTHOR} ALBUM={ALBUM} PRICE={PRICE} PICTURE={PRODUCT_PICTURE} /></SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default HomeSwiper