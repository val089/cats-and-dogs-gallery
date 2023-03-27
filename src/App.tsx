import { Routes, Route } from 'react-router-dom';
import { HomePage, FavouritesPage, GalleryPage } from '@app/pages';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourties" element={<FavouritesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
}

export default App;
