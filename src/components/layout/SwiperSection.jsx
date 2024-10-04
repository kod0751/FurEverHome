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

const CustomNavButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #d9d9d9;
  cursor: pointer;
  z-index: 9;
  font-size: 2.5rem;
  &:hover {
    color: #47b2ff;
  }
`;

const PrevButton = styled(CustomNavButton)`
  left: -3rem;
`;

const NextButton = styled(CustomNavButton)`
  right: -3rem;
`;

export default function SwiperSection() {
  const [swiperItems, setSwiperItems] = useState([]);

  const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
    let day = date.getDate().toString().padStart(2, '0'); // 날짜도 2자리로 맞춤

    return `${year}${month}${day}`;
  };

  const getTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
  };

  useEffect(() => {
    const fetchData = async () => {
      const tomorrow = getTomorrow();
      const formattedDate = formatDateToYYYYMMDD(tomorrow);
      // const KEY = process.env.REACT_APP_KEY;
      const { data } = await axios.get(
        `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=e852a9e19dbf4ef291979109612f0b27&PBLANC_END_DE=${formattedDate}&Type=json&pSize=20`
      );
      setSwiperItems(data.AbdmAnimalProtect[1].row); // 가져온 데이터를 상태에 저장
    };

    fetchData(); // 함수 호출
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  return (
    <SwiperArea>
      <div className="textArea">공고기간이 하루 남은 친구들이에요!</div>
      <PrevButton className="custom-prev">
        <box-icon name="chevron-left"></box-icon>
      </PrevButton>
      <NextButton className="custom-next">
        <box-icon name="chevron-right"></box-icon>
      </NextButton>
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
          1600: {
            slidesPerView: 6,
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
