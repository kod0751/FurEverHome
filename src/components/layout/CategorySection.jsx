import styled from 'styled-components';

const SelectBox = styled.div`
  display: flex;
  gap: 1rem;

  select {
    width: 85px;
    height: 35px;
    border: 1px solid #bbbbbb;
    border-radius: 10px;
    font-family: 'NanumSquareNeoBold';
    color: ${({ theme }) => theme.color.black};
  }
`;

const regions = [
  '시도군',
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

export default function CategorySection() {
  return (
    <SelectBox>
      <select className="select" name="지역명" id="1">
        {regions.map((region, idx) => (
          <option value={region !== '시도군' ? region : ''} key={idx}>
            {region}
          </option>
        ))}
      </select>
      <select className="select" name="지역명" id="1">
        {regions.map((region, idx) => (
          <option value={region !== '시도군' ? region : ''} key={idx}>
            {region}
          </option>
        ))}
      </select>
      <select className="select" name="지역명" id="1">
        {regions.map((region, idx) => (
          <option value={region !== '시도군' ? region : ''} key={idx}>
            {region}
          </option>
        ))}
      </select>
      <select className="select" name="지역명" id="1">
        {regions.map((region, idx) => (
          <option value={region !== '시도군' ? region : ''} key={idx}>
            {region}
          </option>
        ))}
      </select>
      <select className="select" name="지역명" id="1">
        {regions.map((region, idx) => (
          <option value={region !== '시도군' ? region : ''} key={idx}>
            {region}
          </option>
        ))}
      </select>
      <select className="select" name="지역명" id="1">
        {regions.map((region, idx) => (
          <option value={region !== '시도군' ? region : ''} key={idx}>
            {region}
          </option>
        ))}
      </select>
    </SelectBox>
  );
}
