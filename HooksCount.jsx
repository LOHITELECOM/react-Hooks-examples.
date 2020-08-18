import React,{useState} from 'react';

const HooksCounter=()=>{
const [count,setCount]=useState(0)
return(
  <div>
  <h1>{count}</h1>
  <button className="btn btn-primary"
   onClick={()=>setCount(count+1)}>
   Increment
   </button>
  </div>
);
}
export default HooksCounter;