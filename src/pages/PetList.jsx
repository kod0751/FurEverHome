import Header from '../components/layout/Header';
import SwiperSection from '../components/layout/SwiperSection';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import CategorySection from '../components/layout/CategorySection';

export default function PetListpage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <SwiperSection />
        <CategorySection />
      </ThemeProvider>
    </>
  );
}
