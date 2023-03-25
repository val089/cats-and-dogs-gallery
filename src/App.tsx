import './App.css';
import { useFetchCatsQuery, useFetchDogsQuery } from './store/slices/api';

function App() {
  const { data: dogs, isError: errorFetchindDogs, isLoading: loadingDogs } = useFetchDogsQuery(10);
  const { data: cats, isError: errorFetchindCats, isLoading: loadingCats } = useFetchCatsQuery(10);

  if (loadingDogs || loadingCats) {
    <div className="App">
      <h1>LOADING...</h1>
    </div>;
  }

  return (
    <div className="App">
      <h1>INITIAL APP</h1>
      {!!dogs?.length && dogs.map((dog) => <img key={dog.id} src={dog.url} width={300} />)}
      {!!cats?.length && cats.map((cat) => <img key={cat.id} src={cat.url} width={300} />)}
    </div>
  );
}

export default App;
