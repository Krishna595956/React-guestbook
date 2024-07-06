import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Effect() {
    const [count,setCount]=useState(false)
    const [setup,setSetup]=useState(null)
    const [punch,setPunch]=useState(null)
    // useEffect(callback function(),[])
    useEffect(()=>{
        const generateJoke=async ()=>{
            const response=await axios.get("https://official-joke-api.appspot.com/random_joke");
            setSetup(response.data['setup'])
            setPunch(response.data['punchline'])
        }
        generateJoke();
        }
        ,[count])
    const countInc=()=>{
        if(count===false){
            setCount(true);
        }
        else{
            setCount(false);
        }
    }
  return (
    <div>
      <p>{setup}:{punch}</p>
      <button onClick={countInc}>click</button>
    </div>
  )
}
