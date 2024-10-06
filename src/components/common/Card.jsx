import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ListCard = styled.div`
  width: 15rem;
  font-family: 'NanumSquareNeoBold';
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  span {
    color: ${({ theme }) => theme.color.charcoal};
  }

  .info .petName {
    font-family: 'NanumSquareNeoHeavy';
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.color.black};
  }

  .info .bookmarkIcon {
    cursor: pointer;
  }
`;

const ListCardImage = styled.div`
  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

const calculateAge = (birthInfo) => {
  const currentYear = new Date().getFullYear();

  // 출생 연도 추출 (2024(60일 미만)(년생) 형식에서 연도만 가져오기)
  const birthYearMatch = birthInfo.match(/(\d{4})/);
  if (birthYearMatch) {
    const birthYear = parseInt(birthYearMatch[0], 10);
    let age = currentYear - birthYear;

    // 만약 60일 미만이라면 나이를 0으로 설정
    if (birthInfo.includes('60일 미만')) {
      age = 0;
    }

    return age;
  }

  return '정보 없음'; // 출생 연도 정보가 없는 경우 처리
};

export default function Card({ data }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 해당 아이템이 북마크에 있는지 확인
    const existingBookmarks =
      JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarked = existingBookmarks.some(
      (item) => item.ABDM_IDNTFY_NO === data.ABDM_IDNTFY_NO
    );
    setIsBookmarked(bookmarked);
  }, [data.ABDM_IDNTFY_NO]);

  const handleBookmarkClick = () => {
    const existingBookmarks =
      JSON.parse(localStorage.getItem('bookmarks')) || [];

    if (isBookmarked) {
      // 이미 북마크되어 있다면 북마크에서 제거
      const updatedBookmarks = existingBookmarks.filter(
        (item) => item.ABDM_IDNTFY_NO !== data.ABDM_IDNTFY_NO
      );
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(false); // 북마크 상태 업데이트
    } else {
      // 북마크가 안되어 있으면 추가
      const updatedBookmarks = [...existingBookmarks, data];
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(true); // 북마크 상태 업데이트
    }
  };

  const handleImageClick = () => {
    // 이미지 클릭 시 detail 페이지로 이동하면서 데이터를 전달
    navigate('/detail', { state: { data } });
  };

  return (
    <ListCard>
      <ListCardImage>
        <img src={data.IMAGE_COURS} alt="동물" onClick={handleImageClick} />
      </ListCardImage>
      <div className="info">
        <span className="petName">
          {data.SPECIES_NM.replace(/\[.*?\]\s*/, '')}
        </span>
        <span className="bookmarkIcon" onClick={handleBookmarkClick}>
          {isBookmarked ? (
            <box-icon name="bookmark" color="#47b2ff" type="solid"></box-icon>
          ) : (
            <box-icon name="bookmark-plus" color="#47b2ff"></box-icon>
          )}
        </span>
      </div>
      <div>
        <span>나이</span>
        <p>{calculateAge(data.AGE_INFO)}살</p>
      </div>
      <div>
        <span>시도군</span>
        <p>{data.SIGUN_NM}</p>
      </div>
      <div>
        <span>성별</span>
        <p>{data.SEX_NM === 'M' ? '남아' : '여아'}</p>
      </div>
      <div>
        <span>중성화</span>
        <p>{data.NEUT_YN === 'Y' ? '중성화 완료' : '중성화 미완료'}</p>
      </div>
    </ListCard>
  );
}
