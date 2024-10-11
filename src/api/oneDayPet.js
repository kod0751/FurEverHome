import axios from 'axios';

// 스와이퍼 아이템 가져오기 함수
export const fetchSwiperItems = async (tomorrowDate) => {
  const { data } = await axios.get(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=e852a9e19dbf4ef291979109612f0b27&PBLANC_END_DE=${tomorrowDate}&Type=json&pSize=20`
  );
  return data.AbdmAnimalProtect[1].row;
};
