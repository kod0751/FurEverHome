import styled, { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Header from '../Header';
import ModalSection from '../ModalSection';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ResultCard from '../../common/ResultCard';

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'NanumSquareNeoExtraBold';
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.color.black};
  padding-top: 5rem;
  gap: 1rem;
`;

const ButtonArea = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  gap: 3rem;

  .result {
    width: 14rem;
    height: 3rem;
    background-color: white;
    border: 1px solid #7f7f7f;
    border-radius: 8px;
    color: #7f7f7f;
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.md};
    cursor: pointer;
  }

  .retest {
    width: 14rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.color.black};
    border-radius: 8px;
    color: ${({ theme }) => theme.color.white};
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.md};
    cursor: pointer;
  }
`;

export default function PetResult({ petData, setStep }) {
  const [items, setItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열기 핸들러
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기 핸들러
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const textclick = () => {
    console.log(filteredData);
  };

  const reStart = () => {
    setStep(0);
    setFilteredData([]);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      // const KEY = process.env.REACT_APP_KEY;
      const { data } = await axios.get(
        `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=e852a9e19dbf4ef291979109612f0b27&Type=json&pSize=1000`
      );
      setItems(data.AbdmAnimalProtect[1].row); // 가져온 데이터를 상태에 저장
      setFilteredData(filteredData);
    };

    fetchData(); // 함수 호출
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  useEffect(() => {
    const newFilteredData = items.filter((item) => {
      const whiteColorKeywords = ['아이보리', '크림', '백색', '백', '흰'];
      const blackColorKeywords = [
        '흑색',
        '흑갈',
        '검정',
        '회흑',
        '흑',
        '블랙탄',
      ];
      const greyColorKeywords = ['회백색', '검/흰', '흰/검', '쥐색'];
      const brownColorKeywords = [
        '흰색,갈색',
        '흰,갈',
        '갈색흰색',
        '갈색,베이지',
        '옅은갈색',
        '연갈',
        '베이지색',
        '초코',
        '갈',
      ];
      const goldColorKeywords = ['노랑색', '황색', '크림색', '치즈색', '치즈'];
      const threeColorKeywords = ['흰색,검정,갈색', '삼색', '백흑갈색'];
      const multiColorKeywords = ['고등어', '반점무늬'];
      const bwColorKeywords = [
        '검백색',
        '얼룩',
        '검/흰',
        '검.백',
        '검정흰색',
        '검줄/흰',
        '백흑색',
      ];

      // 색상 필터링
      const colorMatches = petData.color.some((color) => {
        switch (color) {
          case '흰색':
            return whiteColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '검정':
            return blackColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '회색':
            return greyColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '갈색':
            return brownColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '금색':
            return goldColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '삼색':
            return threeColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '고등어색':
            return multiColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '흑백':
            return bwColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          default:
            return false;
        }
      });

      return (
        // 종류 필터 (강아지, 고양이, 그외)
        (petData.kind === '강아지' && item.SPECIES_NM.includes('개')) ||
        (petData.kind === '고양이' && item.SPECIES_NM.includes('고양이')) ||
        (petData.kind === '그외' &&
          item.SPECIES_NM.includes('기타축종') &&
          // 성별 필터 (여아, 남아)
          (petData.gender === '여아'
            ? item.SEX_NM === 'F'
            : item.SEX_NM === 'M') &&
          // 무게 필터
          ((petData.weight === '5' &&
            parseFloat(item.BDWGH_INFO.match(/[0-9.]+/)[0]) < 5) ||
            (petData.weight === '10' &&
              parseFloat(item.BDWGH_INFO.match(/[0-9.]+/)[0]) >= 5 &&
              parseFloat(item.BDWGH_INFO.match(/[0-9.]+/)[0]) < 10) ||
            (petData.weight === '15' &&
              parseFloat(item.BDWGH_INFO.match(/[0-9.]+/)[0]) >= 10 &&
              parseFloat(item.BDWGH_INFO.match(/[0-9.]+/)[0]) < 15) ||
            (petData.weight === '20' &&
              parseFloat(item.BDWGH_INFO.match(/[0-9.]+/)[0]) >= 15)) &&
          // 색상 필터 (petData.color 배열에 있는 색상 중 하나라도 일치해야 함)
          colorMatches)
      );
    });

    setFilteredData(newFilteredData); // 필터링된 데이터를 업데이트
  }, [petData, items]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <TextArea>
          <span onClick={textclick}>당신의 운명의 반려동물을 찾았어요!</span>
        </TextArea>

        <ResultCard filteredData={filteredData} />
        <ButtonArea>
          <button className="result" onClick={handleModalOpen}>
            결과 설명듣기
          </button>
          <button className="retest" onClick={reStart}>
            테스트 다시 하기
          </button>
        </ButtonArea>
        {/* 모달이 열렸을 때만 ModalSection을 렌더링 */}
        {isModalOpen && <ModalSection onClose={handleModalClose} />}
      </ThemeProvider>
    </>
  );
}
