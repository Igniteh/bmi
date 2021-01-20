import './App.css';
import {useState} from 'react';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [tulos, Tulostus] = useState("");

function laskuri(e) {
  e.preventDefault();
  const laskuri = weight / (height * height);
  let lol = laskuri.toFixed(1);
  Tulostus(lol);
}

return (
  <div className='container'>
    <h3>Weight calculator</h3>
      <form onSubmit={laskuri}>
        <div>
          <label>Height</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)}></input>
        </div>
        <div>
        <label>Weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
          <div>
          <output>{tulos}</output>
          </div>
        <button>Calcuate</button>
      </form>
  </div>
);
}

export default App;
