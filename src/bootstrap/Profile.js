import React from 'react'

export default function Profile(props) {
  return (
    <div>
      <table>
        <tr>
            <td>Name:</td>
            <td>{props.name}</td>
        </tr>
        <tr>
            <td>Age:</td>
            <td>{props.age}</td>
        </tr>
      </table>
    </div>
  )
}
