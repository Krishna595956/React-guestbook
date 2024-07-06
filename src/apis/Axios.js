import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Axios() {
    const [setup,setSetup]=useState(null)
    const [punch,setPunch]=useState(null)
    const generateJoke=async ()=>{
        const response=await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log(response.data['setup'])
        console.log(response.data['punchline'])
        setSetup(response.data['setup'])
        setPunch(response.data['punchline'])
    }
  return (
    <>
            <p>{setup}:{punch}</p>
            <div><button onClick={generateJoke}>Generate Joke</button></div>
    </>
  )
}
