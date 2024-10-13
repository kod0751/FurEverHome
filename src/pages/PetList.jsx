import Header from '../components/layout/Header';
import SwiperSection from '../components/layout/SwiperSection';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import CategorySection from '../components/layout/CategorySection';
import PetlistSection from '../components/layout/PetlistSection';
import { useEffect, useState } from 'react';
import PageNation from '../components/layout/PageNation';
import { useFetchPetData } from '../hooks/useFetchPetData';

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
  // useQuery로 데이터 fetch
  const { data } = useFetchPetData();

  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    region: '시도군',
    state: '전체',
    kind: '전체',
    age: '전체',
    gender: '전체',
    neut: '전체',
  });

  // useQuery로부터 받은 데이터가 있으면 처리
  useEffect(() => {
    if (data) {
      const { items } = data;
      setFilteredData(items);
    }
  }, [data]);

  // 필터링 로직
  useEffect(() => {
    if (!data) return;

    const { items } = data;
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

    setFilteredData(newFilteredData);
    setPage(1); // 필터링 후 첫 페이지로 이동
  }, [filters, data]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <SwiperSection />
        <CategorySection filters={filters} setFilters={setFilters} />
        <TextArea>
          <span className="highlight">{filteredData.length}</span> 마리의
          친구들이 기다리고 있어요
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
