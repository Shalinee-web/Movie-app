import React from 'react'

export default function SearchBox(props) {
  return (
   <>
      <input onChange={(e) => props.ChangeHandler(e.target.value)} type="text" className='form-control my-2' placeholder='Seacrh Movie Name here.....'/>
   </>
  )
}
