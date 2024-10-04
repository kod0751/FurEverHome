// 대부분의 웹 브라우저에서 루트 요소의 폰트 사이즈는 16입니다.
// rem은 이러한 루트 요소의 폰트 사이즈를 1rem으로 하는 상대 단위이므로 16으로 나누어 표현할 수 있습니다.

// 함수를 사용해 값을 계산할 수 있습니다.
const calRem = (size) => `${size / 16}rem`;

// 폰트 사이즈에 대한 변수를 객체에 담아서 사용할 수 있습니다.
const fontSize = {
  xs: calRem(12), // 0.75rem
  sm: calRem(14), // 0.875rem
  md: calRem(16), // 1rem
  lg: calRem(18), // 1.125rem
  xl: calRem(20), // 1.25rem
  // 값을 사용하는 용도에 맞춰 이름을 지정해줄 수도 있습니다.
  subTitle: calRem(24), // 1.5rem;
  title: calRem(36), // 2.25rem;
};

// 색상에 대한 변수를 객체에 담아서 사용할 수 있습니다.
const color = {
  blue: '#008BF0',
  skyblue: '#47B2FF',
  ivory: '#FFF6D6',
  grey: '#D9D9D9',
  black: '#323232',
  charcoal: '#7F7F7F',
  white: '#FFFFFF',
};
// ${({ theme }) => theme.color.black}
// 각각의 객체들을 theme이라는 하나의 객체로 묶어서 export합니다.
const theme = { fontSize, color };

export default theme;
