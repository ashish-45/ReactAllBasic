import React,{useState,useEffect} from 'react'

const useEffects = () => {

    const [count,setCount]  = useState(0);

    useEffect(()=>{
        document.title = `Chats (${count})`;
    });


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default useEffects;
