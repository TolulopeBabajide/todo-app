import React, { useState } from 'react'
import {FaTrash} from 'react-icons/fa'

const Items = (props) => {

    const[done,setDone] = useState(false);



  return (
    <div onClick={()=> setDone(!done)} className={`items-center select-none cursor-pointer w-full border-b p-3 flex justify-between`}>
       <div className=''>
            <span className='pr-2 text-[14px] text-slate-400'>
                {props.time}
            </span>
            <span className={`${done===true ? 'line-through' : ''} text-[20px]`}>
                {props.item}
            </span>  
       </div>
       <div className='text-red-800'>
            <FaTrash onClick={()=>props.removeHandler(props.id)} />
       </div> 
    </div>
  )
}

export default Items