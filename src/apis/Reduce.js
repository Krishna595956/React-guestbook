import React, { useEffect, useState } from 'react'

export default function Reduce() {
    const [total,setTotal]=useState(0)
    useEffect(()=>{
        const cart=[
            {"quantity":5,"cost":20},
            {"quantity":6,"cost":500},
            {"quantity":7,"cost":590}
        ]
        const grandTotal=cart.reduce((total,{quantity,cost})=>total+(quantity*cost),0);
        setTotal(grandTotal)
    },[])
  return (
    <div>
      {total}
    </div>
  )
}
