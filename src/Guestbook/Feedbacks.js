import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Feedbacks() {
    const [data,setData]=useState('')
    useEffect(()=>{
        const viewFeedbacks=async ()=>{
            const token=localStorage.getItem('token')
            const response=await axios.post('http://localhost:5000/feedbacks',{token})
            const responseData=response.data;
            console.log(responseData.response)
            setData(responseData.response)
        }
        viewFeedbacks();
    },[])
  return (
    <div>
      {

      }
      {data.length>0?
<div className='container'>
<table className="table table-striped table-hover m-4">
        <tr>
          <th>By</th>
          <th>College</th>
          <th>Category</th>
          <th>Feedback</th>
        </tr>
        {data.map((feedback)=>(
<tr>
  <td>{feedback.by}</td>
  <td>{feedback.college}</td>
  <td>{feedback.category}</td>
  <td>{feedback.feedback}</td>
</tr>
))}
      </table>
</div>
      
      :<p>Loading......</p>}
    </div>
  )
}
