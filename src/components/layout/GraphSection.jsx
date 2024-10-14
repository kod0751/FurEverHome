import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useFetchPetData } from '../../hooks/useFetchPetData';

Chart.register(
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

// Styled components
const GraghArea = styled.div`
  padding: 5rem 0;

  .textArea {
    display: flex;
    flex-direction: column;
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.title};
    padding: 2rem;
    gap: 1rem;
  }
`;

const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ChartWrapper = styled.div`
  width: 45%; // 각 그래프의 크기
  display: flex;
  justify-content: center;
  align-items: center;
`;

const STATES = ['보호중', '자연사', '반환', '입양', '방사', '기증', '안락사'];

export default function GraphSection() {
  const { data: fetchData } = useFetchPetData(); // 데이터를 가져옴
  const [chartLegionData, setChartLegionData] = useState(null);
  const [chartStateData, setChartStateData] = useState(null);

  useEffect(() => {
    if (fetchData && fetchData.items) {
      // 도넛 그래프 데이터 생성 (지역별 마리 수)
      const regions = [
        '가평군',
        '고양시',
        '과천시',
        '광명시',
        '광주시',
        '구리시',
        '군포시',
        '김포시',
        '남양주시',
        '동두천시',
        '부천시',
        '성남시',
        '수원시',
        '시흥시',
        '안산시',
        '안성시',
        '안양시',
        '양주시',
        '양평군',
        '여주시',
        '연천군',
        '오산시',
        '용인시',
        '기흥구',
        '의왕시',
        '의정부시',
        '이천시',
        '파주시',
        '포천시',
        '하남시',
        '화성시',
      ];

      const regionCounts = regions.reduce((acc, region) => {
        acc[region] = 0;
        return acc;
      }, {});

      fetchData.items.forEach((item) => {
        const region = item.SIGUN_NM;
        if (regionCounts[region] !== undefined) {
          regionCounts[region]++;
        }
      });

      const chartLegionData = {
        labels: Object.keys(regionCounts),
        datasets: [
          {
            label: '유기동물 수',
            data: Object.values(regionCounts),
            backgroundColor: [
              '#FFB3BA', // 파스텔 핑크
              '#FFDFBA', // 파스텔 오렌지
              '#FFFFBA', // 파스텔 노랑
              '#BFFCC6', // 파스텔 민트
              '#BAE1FF', // 파스텔 하늘색
              '#D4C4FB', // 파스텔 보라색
              '#FFC4E1', // 파스텔 로즈핑크
            ],
            hoverBackgroundColor: [
              '#FF9AA2', // 진한 파스텔 핑크
              '#FFCC99', // 진한 파스텔 오렌지
              '#FFFF99', // 진한 파스텔 노랑
              '#99FFB3', // 진한 파스텔 민트
              '#99CCFF', // 진한 파스텔 하늘색
              '#C1B3F9', // 진한 파스텔 보라색
              '#FFA3D1', // 진한 파스텔 로즈핑크
            ],
          },
        ],
      };

      setChartLegionData(chartLegionData);

      // 막대 그래프 데이터 생성 (상태별 마리 수)
      const stateCounts = STATES.reduce((acc, state) => {
        acc[state] = 0;
        return acc;
      }, {});

      fetchData.items.forEach((item) => {
        STATES.forEach((state) => {
          if (item.STATE_NM && item.STATE_NM.includes(state)) {
            stateCounts[state]++;
          }
        });
      });

      const chartStateData = {
        labels: STATES, // 상태명 (y축에 표시)
        datasets: [
          {
            label: '상태별 유기동물 수',
            data: Object.values(stateCounts), // 상태별 마리 수 (x축에 표시)
            backgroundColor: [
              '#FFB3BA', // 파스텔 핑크
              '#FFDFBA', // 파스텔 오렌지
              '#FFFFBA', // 파스텔 노랑
              '#BFFCC6', // 파스텔 민트
              '#BAE1FF', // 파스텔 하늘색
              '#D4C4FB', // 파스텔 보라색
              '#FFC4E1', // 파스텔 로즈핑크
            ],
            hoverBackgroundColor: [
              '#FF9AA2', // 진한 파스텔 핑크
              '#FFCC99', // 진한 파스텔 오렌지
              '#FFFF99', // 진한 파스텔 노랑
              '#99FFB3', // 진한 파스텔 민트
              '#99CCFF', // 진한 파스텔 하늘색
              '#C1B3F9', // 진한 파스텔 보라색
              '#FFA3D1', // 진한 파스텔 로즈핑크
            ],
          },
        ],
      };

      setChartStateData(chartStateData);
    }
  }, [fetchData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const barOptions = {
    indexAxis: 'y', // 수평 막대그래프 설정
    scales: {
      x: {
        beginAtZero: true, // x축 값이 0에서 시작
      },
    },
  };

  return (
    <GraghArea>
      <div className="textArea">
        <span>경기도</span>
        <span>
          <span className="highlight">유기동물</span> 현황
        </span>
      </div>
      <ChartsContainer>
        <ChartWrapper>
          {chartLegionData ? (
            <Doughnut data={chartLegionData} options={options} />
          ) : (
            <p></p>
          )}
        </ChartWrapper>

        <ChartWrapper>
          {chartStateData ? (
            <Bar data={chartStateData} options={barOptions} />
          ) : (
            <p></p>
          )}
        </ChartWrapper>
      </ChartsContainer>
    </GraghArea>
  );
}
