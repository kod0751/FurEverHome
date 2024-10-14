import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../common/Card';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

import { useQuery } from 'react-query';
import { fetchSwiperItems } from '../../api/oneDayPet';

const SwiperArea = styled.div`
  position: relative; /* 버튼을 절대 위치로 조정할 수 있도록 설정 */
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;

  .textArea {
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.title};
    color: ${({ theme }) => theme.color.black};
    padding: 2rem 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.color.grey};
    cursor: pointer;
    z-index: 9;
    font-size: 2.5rem;
    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }
  }

  .swiper-button-prev {
    left: -4rem; /* 왼쪽으로 이동 */
  }

  .swiper-button-next {
    right: -1.5rem; /* 오른쪽으로 이동 */
  }

  /* 반응형에서 버튼 위치 조정 */
  @media (max-width: 768px) {
    .swiper-button-prev {
      left: -2rem;
    }
    .swiper-button-next {
      right: -2rem;
    }
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
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={5}
        loop={true}
        breakpoints={{
          800: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
          1400: {
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

      {/* 커스텀 이전/다음 버튼 */}
      <div className="swiper-button-prev">
        <box-icon name="chevron-left" color="#323232"></box-icon>
      </div>
      <div className="swiper-button-next">
        <box-icon name="chevron-right" color="#323232"></box-icon>
      </div>
    </SwiperArea>
  );
}
