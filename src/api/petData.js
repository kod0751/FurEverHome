import axios from 'axios';

export const fetchPetData = async () => {
  const { data } = await axios.get(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=e852a9e19dbf4ef291979109612f0b27&Type=json&pSize=1000`
  );

  const items = data.AbdmAnimalProtect[1].row; // 데이터 배열
  const totalCount = data.AbdmAnimalProtect[0].head[0].list_total_count; // 총 데이터 개수

  return { items, totalCount };
};
