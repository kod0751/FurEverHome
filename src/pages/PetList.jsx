import Header from '../components/layout/Header';
import SwiperSection from '../components/layout/SwiperSection';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import CategorySection from '../components/layout/CategorySection';
import PetlistSection from '../components/layout/PetlistSection';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PageNation from '../components/layout/PageNation';

const TextArea = styled.div`
  display: flex;

  justify-content: left;
  align-items: center;
  font-family: 'NanumSquareNeoExtraBold';
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.color.black};
  margin: 2rem 0;
`;

export default function PetListpage() {
  const [items, setItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [number, setNumber] = useState(0);
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
      // const KEY = process.env.REACT_APP_KEY;
      const { data } = await axios.get(
        `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=e852a9e19dbf4ef291979109612f0b27&Type=json&pSize=1000`
      );
      setItems(data.AbdmAnimalProtect[1].row); // 가져온 데이터를 상태에 저장
      setNumber(data.AbdmAnimalProtect[0].head[0].list_total_count); // 1
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
          (filters.neut === '알수없음' && item.NEUT_YN === 'U'))
      );
    });

    setFilteredData(newFilteredData); // 필터링된 데이터를 업데이트
    setPage(1); // 필터링을 하면 첫페이지부터 보여주기
  }, [filters, items]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <SwiperSection />
        <CategorySection filters={filters} setFilters={setFilters} />
        <TextArea>
          <span className="highlight">{number}</span>
          마리의 친구들이 기다리고 있어요
        </TextArea>
        <PetlistSection data={filteredData.slice((page - 1) * 15, page * 15)} />
        <PageNation
          value={page}
          onChange={setPage}
          total={Math.ceil(filteredData.length / 15)}
        />
      </ThemeProvider>
    </>
  );
}
