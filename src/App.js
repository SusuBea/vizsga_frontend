import logo from './logo.svg';
import './App.css';
import Kategoria from "./components/Kategoria"
import Kerdes from "./components/Kerdes"
import Valasz from "./components/Valasz"

function App() {
  return (
    <div className="App">
      <header className="" >
      <h1>Tesztkérdések</h1>
      </header>
      <article>
     {<Kategoria />}
      <Kerdes />
      <Valasz />
      
      </article>
    </div>
  );
}

export default App;
