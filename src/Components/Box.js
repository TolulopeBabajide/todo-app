import React from 'react'
import Items from './Items'

const Box = (props) => {

    const items = props.data.map(
        (singleData, key)=>{
            return <Items key={key} item={singleData.item} time={singleData.time} />
        }
    )



  return (
    <div className='p-3'>
        {items}
        {/* <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/> */}
    </div>
  )
}

export default Box