import { ThemeProvider } from 'styled-components';
import MainSection from '../components/layout/MainSection';
import theme from '../styles/theme';
import SwiperSection from '../components/layout/SwiperSection';
import GraphSection from '../components/layout/GraphSection';
import Header from '../components/layout/Header';
export default function HomePage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <MainSection />
        <SwiperSection />
        <GraphSection />
      </ThemeProvider>
    </>
  );
}
