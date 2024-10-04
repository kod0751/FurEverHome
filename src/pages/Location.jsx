import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Header from '../components/layout/Header';
import LocationSection from '../components/layout/LocationSection';
import CategorySection from '../components/layout/CategorySection';

export default function LocationPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <LocationSection />
        <CategorySection />
      </ThemeProvider>
    </>
  );
}
