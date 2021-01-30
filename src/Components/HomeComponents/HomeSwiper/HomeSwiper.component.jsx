import './homeswiper.styles.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCard from '../SwiperCard/SwiperCard.component'

const HomeSwiper = () =>  {


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
                    <SwiperSlide><SwiperCard /></SwiperSlide>
                    <SwiperSlide><SwiperCard /></SwiperSlide>
                    <SwiperSlide><SwiperCard /></SwiperSlide>
                    <SwiperSlide><SwiperCard /></SwiperSlide>
                    <SwiperSlide><SwiperCard /></SwiperSlide>
                    <SwiperSlide><SwiperCard /></SwiperSlide>
                    <SwiperSlide><SwiperCard /></SwiperSlide>
                    <SwiperSlide><SwiperCard /></SwiperSlide>
                    <SwiperSlide><SwiperCard /></SwiperSlide>
                    <SwiperSlide><SwiperCard /></SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default HomeSwiper