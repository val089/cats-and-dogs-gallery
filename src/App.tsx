import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useFetchCatsQuery, useFetchDogsQuery } from './store/slices/api';
// import { GalleryMain } from './GalleryMain';
// import './App.css';
import { HomePage } from '@app/pages/HomePage';
import { FavouritesPage } from '@app/pages/FavourtiesPage';
import { GalleryPage } from '@app/pages/GalleryPage';

function App() {
  // const [page, setPage] = useState(0);
  // const {
  //   data: dogs,
  //   isError: errorFetchindDogs,
  //   isLoading: loadingDogs,
  // } = useFetchDogsQuery(
  //   { limit: 2, page },
  //   // {
  //   //   selectFromResult: ({ data }) => ({}),
  //   // },
  // );
  // const { data: cats, isError: errorFetchindCats, isLoading: loadingCats } = useFetchCatsQuery(10);

  // if (loadingDogs) {
  //   <div className="App">
  //     <h1>LOADING...</h1>
  //   </div>;
  // }

  // return (
  //   <div className="App">
  //     <h1>INITIAL APP</h1>
  //     {/* {!!dogs?.length && dogs.map((dog) => <img key={dog.id} src={dog.url} width={300} />)} */}
  //     {/* {!!cats?.length && cats.map((cat) => <img key={cat.id} src={cat.url} width={300} />)} */}
  //     {/* <button onClick={() => setPage((prev) => prev - 1)}>PREV</button>
  //     <button onClick={() => setPage((prev) => prev + 1)}>NEXT</button> */}
  //     <GalleryMain />
  //   </div>
  // );

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
