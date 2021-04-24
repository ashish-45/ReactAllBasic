import React, { useState } from 'react';

const Hello = () => {

  const [name,setName] = useState("Ashish");

  const handleChange = () => {
    let val = name;

   val === "Ashish" ? setName("Harshal") : setName("Ashish");

  }

  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={handleChange}>change Name</button>
    </div>
  )
}
export default Hello;