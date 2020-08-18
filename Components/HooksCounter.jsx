import React,{useState} from 'react';

function HooksCounter(){
  const initialCount=0;
  const [count,setCount]=useState(initialCount);
return(
  <div>
  <h1>count {count}</h1>
  <button className="btn btn-success" onClick={()=>setCount(count+1)}>Increment</button>
  <button className="btn btn-danger" onClick={()=>setCount(count-1)}>
  Decrement</button>
  <button className="btn btn-warning" onClick={()=>setCount(initialCount)}>Reset</button>
  </div>
);
}
export default HooksCounter;