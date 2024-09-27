import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/layout/Header';
import MainSection from './components/layout/MainSection';
import theme from './styles/theme';
import SwiperSection from './components/layout/SwiperSection';
import GraphSection from './components/layout/GraphSection';

function App() {
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

export default App;
