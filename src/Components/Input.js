import React, { useRef } from 'react'
import {FaPlus} from 'react-icons/fa'

const Input = (props) => {

  const inputBox = useRef();


  return (
    <div className='p-3 flex justify-around' >
        <input ref={inputBox} type='text' placeholder='Enter new task here!' className='p-3 w-[90%] border focus:outline-none border-slate-800 '></input>

        <div className='w-[50px] h-[50px] bg-green-800 rounded-full text-white text-3xl flex justify-center items-center' onClick={()=>{
          props.handler(inputBox.current.value)
          inputBox.current.value = ''
        }}>
          <FaPlus/>
        </div>

    </div>
  )
}

export default Input