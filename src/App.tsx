import './App.css';
import { useFetchDogsQuery } from './store/slices/api';

function App() {
  const { data: dogs, error, isLoading } = useFetchDogsQuery(10);

  if (isLoading) {
    <div className="App">
      <h1>LOADING...</h1>
    </div>;
  }

  return (
    <div className="App">
      <h1>INITIAL APP</h1>
      {!!dogs?.length && dogs.map((dog) => <img key={dog.id} src={dog.url} width={300} />)}
    </div>
  );
}

export default App;
