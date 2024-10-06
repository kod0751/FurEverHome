import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home';
import PetListpage from './pages/PetList';
import LocationPage from './pages/Location';
import FindPetPage from './pages/FindPet';
import MyPetPage from './pages/MyPet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/list" Component={PetListpage} />
        <Route path="/location" Component={LocationPage} />
        <Route path="/find" Component={FindPetPage} />
        <Route path="/mypet" Component={MyPetPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
