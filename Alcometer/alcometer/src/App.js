import './App.css';
import React, {useState} from 'react';

function App() {
const [weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(0);
const [time, setTime] = useState(0);
const [result, setResult] = useState(0);
const [gender, setGender] = useState('male');


const calc = (e) => {
  e.preventDefault();
  const litres = bottles * 0.33;
  const grams = litres * 8 * 4.5;
  const burning = weight / 10;
  const gramsLeft = grams - (burning * time)

  let promille = 0;
  if (gender === 'male') {
   promille = grams / (weight * 0.7);
  } else {
   promille = grams / (weight * 0.6)
  }
  setResult(promille);
}

  return (
    <form onSubmit={calc}>
     <h3>Calculating alcohol blood level</h3>
     <label>Weight</label>
      <input type='number' value={weight} onChange={e => setWeight(e.target.value)}/>

     <label>Bottles</label>
      <select value={bottles} onChange={e => setBottles(e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

     <label>Time</label>
      <select value={time} onChange={e => setTime(e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

     <label>Gender:</label>
     <label>Male</label>
      <input type="radio" value='male' name="gender" id="male" onChange={e => setGender(e.target.value)} defaultChecked />
     <label>Female</label>
      <input type="radio" value='female' name="gender" id="female" onChange={e => setGender(e.target.value)}/><br />
     <output>{result.toFixed(2)}</output><br />
     <button>Calculate</button>
    </form>
  );
}

export default App;
