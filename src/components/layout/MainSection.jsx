import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionBlock = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7rem;

  .sectionInfo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .sectionInfo span:nth-child(2) {
    margin-bottom: 1rem;
  }

  img {
    width: 40%;
    height: 40%;
  }

  .mainText {
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.mainTitle};
    color: ${({ theme }) => theme.color.black};
    gap: 0;
  }

  p {
    font-family: 'NanumSquareNeo';
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  button {
    width: 15rem;
    height: 3.4rem;
    margin-top: 2rem;
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.md};
    background-color: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};
    border-radius: 1.7rem;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  button img {
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
`;

export default function MainSection() {
  return (
    <SectionBlock>
      <div className="sectionInfo">
        <span className="mainText">버려진 아이들과 </span>
        <span className="mainText">
          당신의 <span className="highlight">운명적 만남</span>, 찾고계신가요?
        </span>
        <p>지금 당신의 따듯한 마음을 기다리는 친구들이 있습니다.</p>
        <p>유기동물 입양으로 가족이 되어주세요.</p>
        <Link to="/find">
          <button>
            나의 반려동물 찾기
            <img src="/img/Dog print.png" alt="이미지" />
          </button>
        </Link>
      </div>
      <img src="/img/Group 382.png" alt="이미지" />
    </SectionBlock>
  );
}
