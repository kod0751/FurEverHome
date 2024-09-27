import styled from 'styled-components';

const SectionBlock = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  .sectionInfo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    width: 40%;
    height: 40%;
  }

  .sectionInfo span {
    font-family: 'NanumSquareNeoBold';
    font-size: ${({ theme }) => theme.fontSize.title};
    gap: 0;
  }

  p {
    font-family: 'NanumSquareNeo';
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
        <span>버려진 아이들과 </span>
        <span>
          당신의 <span className="highlight">운명적 만남</span>, 찾고계신가요?
        </span>
        <p>지금 당신의 따듯한 마음을 기다리는 친구들이 있습니다.</p>
        <p>유기동물 입양으로 가족이 되어주세요.</p>
        <button>
          나의 반려동물 찾기
          <img src="./src/assets/Dog print.png" />
        </button>
      </div>
      <img src="./src/assets/Group 382.png" alt="" />
    </SectionBlock>
  );
}
