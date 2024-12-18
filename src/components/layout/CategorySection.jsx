import styled from 'styled-components';

const SelectBox = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;

  select {
    width: 5rem;
    height: 2.2rem;
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

const state = ['상태', '보호중', '종료'];
const kind = ['품종', '강아지', '고양이', '그외'];
const age = ['나이', '1세미만', '1살~5살', '6살~9살', '10살이상'];
const gender = ['성별', '남아', '여아'];
const neut = ['중성화', '완료', '미완료', '알수없음'];

export default function CategorySection({ filters, setFilters }) {
  return (
    <SelectBox>
      <select
        className="select"
        name="지역명"
        value={filters.region}
        onChange={(e) => setFilters({ ...filters, region: e.target.value })}
      >
        {regions.map((region, idx) => (
          <option value={region} key={idx}>
            {region}
          </option>
        ))}
      </select>

      <select
        className="select"
        name="상태"
        value={filters.state}
        onChange={(e) => setFilters({ ...filters, state: e.target.value })}
      >
        {state.map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>

      <select
        className="select"
        name="나이"
        value={filters.age}
        onChange={(e) => setFilters({ ...filters, age: e.target.value })}
      >
        {age.map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>

      <select
        className="select"
        name="성별"
        value={filters.gender}
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
      >
        {gender.map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>

      <select
        className="select"
        name="중성화"
        value={filters.neut}
        onChange={(e) => setFilters({ ...filters, neut: e.target.value })}
      >
        {neut.map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>

      <select
        className="select"
        name="품종"
        value={filters.kind}
        onChange={(e) => setFilters({ ...filters, kind: e.target.value })}
      >
        {kind.map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>
    </SelectBox>
  );
}
