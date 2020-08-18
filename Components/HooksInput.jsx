import React,{useState} from 'react';

function HooksInput(){
  const [name,setName]=useState({firstname:'',lastname:''})
return(
  <div>
  <form>
  <input type="text" value={name.firstname}
  onChange={e=>setName({...name,firstname:e.target.value})}/>
  <input type="text" value={name.lastname}
  onChange={e=>setName({...name,lastname:e.target.value})}/>
  <h1>user First name is {name.firstname} </h1>
  </form>
 <h1> last name is {name.lastname}</h1>
 <h2>{JSON.stringify(name)}</h2>
  </div>
);
}
export default HooksInput;