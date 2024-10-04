import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Header from '../components/layout/Header';

export default function PetDetail() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
}
