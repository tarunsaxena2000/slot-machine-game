import React from 'react';
import "./index.css"




const SlotM =(props)=>{

  // let x ='😄';
  // let y='😄';
  // let z='🎅';
  
  // let {x,y,z} = props;
  let x= props.x;
  let y=props.y
  let z =props.z;

  if((x===y) && (y===z)){
   return (
    <>
      <div className='slot-inner'>
        <h1>
          {" "}
          {x} {y} {z} {""}
        </h1>
        <h1>this is matching</h1>
        <hr></hr>
      </div>
    </>
   )
  }
  else{
    return (
      <>
        <div className='slot-inner'>
          <h1>
            {" "}
            {x} {y} {z} {""}
          </h1>
          <h1>this is not matching</h1>
          <hr></hr>
        </div>
      </>
     )
  }

};

const Update = ()=>{
  return(
    <>
     <div className='parent'>
      <div className='box1'><ul className='list1'>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
      
      </ul></div>
      <div><img src='download.jpeg' className='image'></img></div>
      <div className='box2'><ul className='list1'>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
        <list>🎰</list>
      
      </ul></div>
     </div>
    </>
  )
};




const App = ()=>{
  return <>
    
    <h1 className='heading-style'>🎰  Welcome to <span style={{fontWeight : 'bold'}}> Slot Machine game</span> 🎰</h1>
    <Update></Update>
    <div className='whole-slot'>
   
    <SlotM  x="😄"  y= "😄" z="😄"></SlotM>

    <SlotM  x= "😄 " y ="😆"  z="😿" ></SlotM>
    <SlotM x="🍌 " y =  "🍊"z="🍊"></SlotM>
    <SlotM x="1️⃣" y ="1️⃣"  z="1️⃣" ></SlotM>
</div>

  </>
};

export default App;