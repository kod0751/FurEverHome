import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Header from '../components/layout/Header';
import { useLocation } from 'react-router-dom';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const TextArea = styled.div`
  display: flex;

  justify-content: left;
  align-items: center;
  font-family: 'NanumSquareNeoExtraBold';
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.color.black};
  margin: 4rem 0 2rem 0;
`;

const InfoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5rem;
`;

const ImageArea = styled.div`
  width: 35rem;
  height: 35rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 1rem;
`;
const Info = styled.div`
  display: flex;
  gap: 2rem;

  span {
    width: 6rem;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.skyblue};
    font-family: 'NanumSquareNeoBold';
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  p {
    width: 100%;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: left;
    align-items: center;
    color: ${({ theme }) => theme.color.black};
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export default function PetDetailPage() {
  const location = useLocation();
  const { data } = location.state || {}; // 전달된 data를 받음

  const formatDate = (dateString) => {
    const year = dateString.slice(0, 4); // 첫 4자리를 연도로 사용
    const month = dateString.slice(4, 6); // 그 다음 2자리를 월로 사용
    const day = dateString.slice(6, 8); // 마지막 2자리를 일로 사용

    return `${year}-${month}-${day}`; // YYYY-MM-DD 형식으로 반환
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <TextArea>
          <span className="highlight">공고 번호</span> {data.PBLANC_IDNTFY_NO}
        </TextArea>
        <InfoArea>
          <ImageArea>
            <img src={data.IMAGE_COURS} alt="이미지" />
          </ImageArea>
          <InfoBox>
            <Info>
              <span>품종</span>
              <p>{data.SPECIES_NM.replace(/\[.*?\]\s*/, '')}</p>
            </Info>
            <Info>
              <span>성별</span>
              <p>{data.SEX_NM === 'M' ? '남아' : '여아'}</p>
            </Info>
            <Info>
              <span>중성화여부</span>
              <p>{data.NEUT_YN === 'Y' ? '중성화 완료' : '중성화 미완료'}</p>
            </Info>
            <Info>
              <span>나이</span>
              <p>{data.AGE_INFO}</p>
            </Info>
            <Info>
              <span>체중</span>
              <p>{data.BDWGH_INFO}</p>
            </Info>
            <Info>
              <span>접수일시</span>
              <p>{formatDate(data.RECEPT_DE)}</p>
            </Info>
            <Info>
              <span>발견장소</span>
              <p>{data.DISCVRY_PLC_INFO}</p>
            </Info>
            <Info>
              <span>특징</span>
              <p>{data.SFETR_INFO}</p>
            </Info>
            <Info>
              <span>공고기한</span>
              <p>
                {formatDate(data.PBLANC_BEGIN_DE)} ~{' '}
                {formatDate(data.PBLANC_END_DE)}
              </p>
            </Info>
            <Info>
              <span>보호센터</span>
              <p>{data.SHTER_NM}</p>
            </Info>
            <Info>
              <span>센터주소</span>
              <p>{data.REFINE_ROADNM_ADDR}</p>
            </Info>
            <Info>
              <span>연락처</span>
              <p>{data.SHTER_TELNO}</p>
            </Info>
          </InfoBox>
        </InfoArea>
        <TextArea>
          <span className="highlight">{data.SHTER_NM}</span>에서 기다리고 있어요
        </TextArea>
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: data.REFINE_WGS84_LAT,
            lng: data.REFINE_WGS84_LOGT,
          }}
          style={{
            // 지도의 크기
            width: '100%',
            height: '35rem',
          }}
          level={6} // 지도의 확대 레벨
        >
          <MapMarker
            position={{
              lat: data.REFINE_WGS84_LAT,
              lng: data.REFINE_WGS84_LOGT,
            }}
            image={{
              src: '/img/mark.png',
              size: { width: 20, height: 20 },
            }}
            title={data.SHTER_NM}
          >
            <div style={{ padding: '0.3rem', color: '#000' }}>
              {data.SHTER_NM}
            </div>
          </MapMarker>
        </Map>
      </ThemeProvider>
    </>
  );
}
