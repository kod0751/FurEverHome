import axios from 'axios';

// 스와이퍼 아이템 가져오기 함수
export const fetchSwiperItems = async (tomorrowDate) => {
  const KEY = import.meta.env.VITE_REACT_APP_KEY;
  const { data } = await axios.get(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=${KEY}&PBLANC_END_DE=${tomorrowDate}&Type=json&pSize=20`
  );
  return data.AbdmAnimalProtect[1].row;
};
