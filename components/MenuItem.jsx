import React from 'react'

const MenuItem = ({item,type,handleDelete,handleAvailable}) => {
  return (
    <div className='w-full bg-black text-white m-3 flex flex-row justify-between'>
    <div className='w-1/2'>
      {item.itemname}
    </div>
    <div className='w-1/2'>
      {item.itemprice}
    </div>
    {type=="update"&&(
    <div onClick={handleDelete} className='cursor-pointer'>
       Delete
    </div>)}
    {type=="update"&&(
    <div onClick={handleAvailable} className='cursor-pointer'>
      {item.available?'Available':'UnAvailable'}
    </div>)}
    </div>
  )
}

export default MenuItem