import styled from 'styled-components';

const ProgressBarCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;

const ProgressBar = styled.div`
  width: 80%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  div {
    width: 20%;
    height: 20px;
    background-color: ${({ theme }) => theme.color.grey};
    border-radius: 5px;
  }

  div:nth-child(1) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  div:nth-child(4) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default function Progressbar({ number }) {
  return (
    <ProgressBarCon>
      <ProgressBar>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index < number ? '#47B2FF' : '#D9D9D9',
            }}
          ></div>
        ))}
      </ProgressBar>
    </ProgressBarCon>
  );
}
