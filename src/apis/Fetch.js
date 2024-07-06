import React, { useState } from 'react'

export default function Fetch() {
    const [setup,setSetup]=useState(null)
    const [punch,setPunch]=useState(null)
    const generateJoke=async ()=>{
        let response=await fetch("https://official-joke-api.appspot.com/random_joke");
        response=await response.json()
        // console.log(response)
        // console.log(response['setup'])
        // console.log(response['punchline'])
        setSetup(response['setup'])
        setPunch(response['punchline'])

    }
  return (
    <>
      <p>{setup}:{punch}</p>
      <div><button onClick={generateJoke}>Generate Joke</button></div>
    </>
  )
}
