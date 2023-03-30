import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HomePage, FavouritesPage, GalleryPage } from '@app/pages';
import { Header } from '@app/components';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
