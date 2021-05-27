import React, { useState } from 'react'

const Array = () => {

    const data = [
        {
            id:0,
            myName:"Ashish",
            Age:22
        },
        {
            id:1,
            myName:"Harshal",
            Age:17
        },
        {
            id:2,
            myName:"Vinu",
            Age:18
        }
    ]

    const [myArray,setMyArray] = useState(data)

    const clearArray = () => {
        setMyArray([]);
    }

    console.log(data);

    return (
        <div>
            <h1>Array is React js</h1>
            {
             myArray && myArray.map((dat,index)=>{
                    return(
                        <h1 key={index}>{dat.id} name is {dat.myName} and age {dat.Age}</h1>
                    )
                })
            }
            <button onClick={clearArray}>Clear</button>
        </div>
    )
}

export default Array;
