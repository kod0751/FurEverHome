import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Header from '../components/layout/Header';
import LocationSection from '../components/layout/LocationSection';
import CategorySection from '../components/layout/CategorySection';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PetlistSection from '../components/layout/PetlistSection';
import PageNation from '../components/layout/PageNation';

export default function LocationPage() {
  const [items, setItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [shelter, setShelter] = useState({
    title: '',
  });
  const [filters, setFilters] = useState({
    region: '시도군',
    state: '전체',
    kind: '전체',
    age: '전체',
    gender: '전체',
    neut: '전체',
  });

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_REACT_APP_KEY;
      const { data } = await axios.get(
        `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=${apiKey}&Type=json&pSize=1000`
      );
      setItems(data.AbdmAnimalProtect[1].row); // 가져온 데이터를 상태에 저장
      setFilteredData(filteredData);
    };

    fetchData(); // 함수 호출
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  useEffect(() => {
    const newFilteredData = items.filter((item) => {
      const currentYear = new Date().getFullYear();
      const birthYear = item.AGE_INFO.slice(0, 4);
      const petAge = currentYear - birthYear;

      return (
        (filters.region === '시도군' || item.SIGUN_NM === filters.region) &&
        (filters.state === '전체' ||
          (filters.state === '보호중' && item.STATE_NM.includes('보호중')) ||
          (filters.state === '종료' && item.STATE_NM.includes('종료'))) &&
        (filters.kind === '전체' ||
          (filters.kind === '강아지' && item.SPECIES_NM.includes('개')) ||
          (filters.kind === '고양이' && item.SPECIES_NM.includes('고양이')) ||
          (filters.kind === '그외' && item.SPECIES_NM.includes('기타축종'))) &&
        (filters.age === '전체' ||
          (filters.age === '1세미만' && petAge === 0) ||
          (filters.age === '1살~5살' && petAge >= 1 && petAge <= 4) ||
          (filters.age === '6살~9살' && petAge >= 5 && petAge <= 8) ||
          (filters.age === '10살이상' && petAge >= 9)) &&
        (filters.gender === '전체' ||
          (filters.gender === '여아'
            ? item.SEX_NM === 'F'
            : item.SEX_NM === 'M')) &&
        (filters.neut === '전체' ||
          (filters.neut === '완료' && item.NEUT_YN === 'Y') ||
          (filters.neut === '미완료' && item.NEUT_YN === 'N') ||
          (filters.neut === '알수없음' && item.NEUT_YN === 'U')) &&
        (shelter.title === '' || item.SHTER_NM === shelter.title)
      );
    });

    setFilteredData(newFilteredData); // 필터링된 데이터를 업데이트
    setPage(1); // 필터링을 하면 첫페이지로
  }, [filters, items, shelter]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <LocationSection setShelter={setShelter} />
        <CategorySection filters={filters} setFilters={setFilters} />
        <PetlistSection data={filteredData.slice((page - 1) * 15, page * 15)} />
        <PageNation
          value={page}
          onChange={setPage}
          total={filteredData.length / 15 + 1}
        />
      </ThemeProvider>
    </>
  );
}
