import React from 'react'
import '../css/Grid.css'
export default function Grid() {
  return (
    <>
      <div className='container'>
        <div className='row'>
            <div className='col-4' id="one">one</div>
            <div className='col-4' id="two">two</div>
            <div className='col-4' id="three">three</div>
        </div>
      </div>
    </>
  )
}
