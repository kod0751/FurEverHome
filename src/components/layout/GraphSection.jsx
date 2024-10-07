import Chart from 'chart.js/auto';
import styled from 'styled-components';

const GraghArea = styled.div`
  padding-top: 5rem;

  .textArea {
    display: flex;
    flex-direction: column;
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.title};
    padding: 2rem;
    gap: 1rem;
  }
`;

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  },
});

export default function GraphSection() {
  return (
    <GraghArea>
      <div className="textArea">
        <span>경기도</span>
        <sapn>
          <span className="highlight">유기동물</span> 현황
        </sapn>
      </div>
      <div>
        <canvas id="myChart"></canvas>
      </div>
    </GraghArea>
  );
}
