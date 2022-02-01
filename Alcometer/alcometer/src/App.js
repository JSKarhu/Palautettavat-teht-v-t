import './App.css';
import React, {useState} from 'react';

function App() {
const [weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(0);
const [time, setTime] = useState(0);
const [result, setResult] = useState(0);

function handleSubmit(e) {
  e.preventDefault();
  const litres = bottles * 0.33;
  const grams = litres * 8 * 4.5;
  const burning = weight / 10;
  const gramsLeft = grams - (burning * time)
  result = grams / (weight * 0.7)
}

  return (
    <form onSubmit={handleSubmit}>
     <h3>Calculating alcohol blood level</h3>
     <label>Weight</label>
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
     <label>Bottles</label>
      <input type="number" value={bottles} onChange={e => setBottles(e.target.value)}/>
     <label>Time</label>
      <input type="number" value={time} onChange={e => setTime(e.target.value)}/>
     <label For="gender">Gender:</label>
     <label For="male">Male</label>
      <input type="radio" name="gender" id="male" />
     <label For="female">Female</label>
      <input type="radio" name="gender" id="female" /><br />
     <output>{result}</output><br />
     <button>Calculate</button>
    </form>
  );
}

export default App;
