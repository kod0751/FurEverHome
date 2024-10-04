import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../common/Card';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

const SwiperArea = styled.div`
  padding: 2rem 0;

  .textArea {
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.title};
    color: ${({ theme }) => theme.color.black};
    padding: 2rem;
  }
`;

export default function SwiperSection() {
  return (
    <SwiperArea>
      <div className="textArea">공고기간이 하루 남은 친구들이에요!</div>
      <Swiper
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={5}
        loop={true}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </SwiperArea>
  );
}
