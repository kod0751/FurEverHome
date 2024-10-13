import axios from 'axios';

// 페이지별로 데이터를 가져오는 함수
export const fetchPetData = async (page) => {
  const KEY = 'e852a9e19dbf4ef291979109612f0b27'; // API 키를 직접 삽입
  const { data } = await axios.get(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=${KEY}&Type=json&pSize=1000&pIndex=${page}`
  );
  return {
    items: data.AbdmAnimalProtect[1].row,
    totalCount: data.AbdmAnimalProtect[0].head[0].list_total_count,
  };
};

// 모든 페이지의 데이터를 가져오는 함수
export const fetchAllData = async () => {
  let allData = [];
  const pageSize = 1000; // 한 페이지당 항목 수
  let currentPage = 1;

  // 첫 번째 페이지의 데이터를 가져오고, 전체 항목 수를 얻음
  const firstPageResult = await fetchPetData(currentPage);
  allData = [...firstPageResult.items];
  const totalItems = firstPageResult.totalCount;

  // 총 페이지 수 계산
  const totalPages = Math.ceil(totalItems / pageSize);

  // 병렬로 나머지 페이지에 대한 데이터 요청 (2페이지부터 마지막 페이지까지)
  const parallelQueries = [];
  for (let i = 2; i <= totalPages; i++) {
    parallelQueries.push(fetchPetData(i));
  }

  const parallelResults = await Promise.all(parallelQueries);

  // 병렬 요청 결과를 병합
  parallelResults.forEach((result) => {
    allData = [...allData, ...result.items];
  });

  return { items: allData };
};
