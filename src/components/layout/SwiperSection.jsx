import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../common/Card';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

import { useQuery } from 'react-query';
import { fetchSwiperItems } from '../../api/oneDayPet';

const SwiperArea = styled.div`
  padding: 2rem 0;

  .textArea {
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.title};
    color: ${({ theme }) => theme.color.black};
    padding: 2rem 0;
  }
`;

export default function SwiperSection() {
  const today = new Date();

  // 내일 날짜 설정
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // YYYYMMDD 형식으로 변환
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');
  const tomorrowDate = `${year}${month}${day}`;

  // useQuery로 API 데이터 가져오기
  const { data: swiperItems } = useQuery({
    queryKey: ['swiperItems', tomorrowDate],
    queryFn: () => fetchSwiperItems(tomorrowDate), // API 함수 호출
  });

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
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
      >
        {swiperItems?.map((value, index) => (
          <SwiperSlide key={index}>
            <Card data={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperArea>
  );
}
