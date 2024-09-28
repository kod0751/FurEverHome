import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home';
import PetListpage from './pages/PetList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/list" Component={PetListpage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
