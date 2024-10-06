import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../common/Card';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
  const [swiperItems, setSwiperItems] = useState([]);

  const today = new Date();

  // 내일 날짜로 설정
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // YYYYMMDD 형식으로 변환
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(tomorrow.getDate()).padStart(2, '0'); // 날짜가 한 자리수면 0으로 채움

  // 최종 값
  const tomorrowDate = `${year}${month}${day}`;

  useEffect(() => {
    const fetchData = async () => {
      // const KEY = process.env.REACT_APP_KEY;
      const { data } = await axios.get(
        `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=e852a9e19dbf4ef291979109612f0b27&PBLANC_END_DE=${tomorrowDate}&Type=json&pSize=20`
      );
      setSwiperItems(data.AbdmAnimalProtect[1].row); // 가져온 데이터를 상태에 저장
    };

    fetchData(); // 함수 호출
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

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
