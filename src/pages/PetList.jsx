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
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      // const KEY = process.env.REACT_APP_KEY;
      const { data } = await axios.get(
        `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=e852a9e19dbf4ef291979109612f0b27&Type=json&pSize=1000`
      );
      setItems(data.AbdmAnimalProtect[1].row); // 가져온 데이터를 상태에 저장
    };

    fetchData(); // 함수 호출
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <SwiperSection />
        <CategorySection />
        <TextArea>
          <span className="highlight">{items.length}</span>마리의 친구들이
          기다리고 있어요
        </TextArea>
        <PetlistSection data={items.slice((page - 1) * 15, page * 15)} />
        <PageNation
          value={page}
          onChange={setPage}
          total={items.length / 15 + 1}
        />
      </ThemeProvider>
    </>
  );
}
