import './index.css';
import {useState} from 'react';

function App() {
  
  const [num, changeNum] = useState([]);

  function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
  }

  function EvenOddPrime(n){

      if(isPrime(n))
      return '#FF4500';

      if(n%2 === 0)
        return '#228B22';
      else
        return '#FFD700';
  }

  const getData = () => {
    const nums = [];
    for(let i = 0; i<32 ; i++)
      nums.push(i);
    
    changeNum(nums);
  }
  return (
    <div className="App" style={{textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif'}}>
      <h1>Number Generator</h1>
    <button onClick ={getData} style = {{padding: '10px', margin: '20px'}}>Generate Numbers</button>
    <div>
    {
    num.map((n) => <div className = "number" 
    style= {{
      backgroundColor: EvenOddPrime(n),
      display: 'inline-block'
      ,width: '50px' 
      ,height: '50px'
      ,padding: '25px'
      ,margin: '1px'
      ,fontSize: '50px'
      ,fontFamily: 'Rockwell'
      ,color: 'white'}}>{n} </div>)
    }
    </div>
    </div>
  );
}

export default App;
