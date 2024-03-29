import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {

  const [counter,setCounter] = useState(0);

  const functionMemo=(value)=>{
    return value *2;
  }
  const memoVal= useMemo(()=> functionMemo(counter),[counter])
  return (
    <div className="App">
      Count : {counter}
<br></br>    

<button onClick={()=> setCounter(counter+1)}> Increase</button>

<br>
</br>

Memorized Value : {memoVal}
</div>
  );
}

export default App;
