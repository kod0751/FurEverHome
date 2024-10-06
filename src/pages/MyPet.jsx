import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Header from '../components/layout/Header';
import { useEffect, useState } from 'react';
import Card from '../components/common/Card';

const TextArea = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: 'NanumSquareNeoExtraBold';
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.color.black};
  margin: 5rem 0;
`;

const Container = styled.section`
  width: 100%;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 2rem;
  position: relative;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 710px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0rem auto 2rem auto;
    width: auto;
    gap: 2rem;
  }
  @media (max-width: 500px) {
    margin: 0rem auto 2rem auto;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    width: auto;
    gap: 2rem;
  }
`;
const EmptyPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    width: 35rem;
    margin-top: 5rem;
  }

  span {
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.title};
    color: ${({ theme }) => theme.color.black};
    margin: 3rem 0;
  }
`;

export default function MyPetPage() {
  const [bookmarkedData, setBookmarkedData] = useState([]);

  useEffect(() => {
    // 북마크된 데이터를 localStorage에서 불러옴
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedData(bookmarks);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />

        {/* 북마크된 데이터가 없을 때 보여줄 내용 */}
        {bookmarkedData.length === 0 && (
          <EmptyPage>
            <img src="./src/assets/Group 382.png" alt="동물" />
            <span>다시 보고 싶은 친구들을 추가해주세요!</span>
          </EmptyPage>
        )}

        {/* 북마크된 데이터가 있을 때 */}
        {bookmarkedData.length > 0 && (
          <>
            <TextArea>친구들에게 관심을 가져주셔서 감사합니다!</TextArea>
            <Container>
              {bookmarkedData.map((data) => (
                <Card key={data.ABDM_IDNTFY_NO} data={data} />
              ))}
            </Container>
          </>
        )}
      </ThemeProvider>
    </>
  );
}
