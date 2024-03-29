import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {

  // const [counter,setCounter] = useState(0);

  // const functionMemo=(value)=>{
  //   return value *2;
  // }
  // const memoVal= useMemo(()=> functionMemo(counter),[counter])

  const [resp,setResp] = useState([
    {id:1,name:"neha", age:25,  email:"", gender:"female"},
    {id:2,name:"nikita", age:26,  email:"", gender:"female"},
    {id:3,name:"rahul", age:20,  email:"", gender:"male"},
    {id:4,name:"manoj", age:22,  email:"", gender:"male"},
  ]);

  const genericExtractColumns=(arr,columns)=>{
    return arr.map(obj=>columns.reduce((acc,colName)=>{
      if(obj.hasOwnProperty(colName)){
        acc[colName]= obj[colName];
      }
      return acc;
    },{}));
  }

  const display = genericExtractColumns(resp,["name","age","email","gender"])
  return (
    <div className="App">

      Extracted Objects :{JSON.stringify(display)}
      {/* Count : {counter}
<br></br>    

<button onClick={()=> setCounter(counter+1)}> Increase</button>

<br>
</br>

Memorized Value : {memoVal} */}


</div>
  );
}

export default App;
