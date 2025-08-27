import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Heroes from '../components/heroes/Heroes';
import Heroe from '../components/heroe/Heroe';

const Router = ({ searchTerm }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Heroes searchTerm={searchTerm} />} />
        <Route path="/heroes" element={<Heroes searchTerm={searchTerm} />} />
        <Route path="/heroe/:id" element={<Heroe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
