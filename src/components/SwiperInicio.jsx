import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Component } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

class SwiperInicio extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
                  <Swiper            
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                  }} 
                  navigation={true} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide className='flex items-center justify-center'>Slide 1</SwiperSlide>
                  <SwiperSlide className='flex items-center justify-center'>Slide 2</SwiperSlide>
                  <SwiperSlide className='flex items-center justify-center'>Slide 3</SwiperSlide>
                  <SwiperSlide className='flex items-center justify-center'>Slide 4</SwiperSlide>
                  <SwiperSlide className='flex items-center justify-center'>Slide 5</SwiperSlide>
                  <SwiperSlide className='flex items-center justify-center'>Slide 6</SwiperSlide>
                  <SwiperSlide className='flex items-center justify-center'>Slide 7</SwiperSlide>
                  <SwiperSlide className='flex items-center justify-center'>Slide 8</SwiperSlide>
                  <SwiperSlide className='flex items-center justify-center'>Slide 9</SwiperSlide>
                </Swiper>
        )
    }
}

export default SwiperInicio;