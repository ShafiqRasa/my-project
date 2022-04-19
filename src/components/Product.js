import React from 'react'

function Product({image,name,dName,view}) {
  return (
    <div className='productCard hover:shadow-lg'>
        <img src={process.env.PUBLIC_URL + `images/${image}`} className='w-full h-32 sm:h-48 object-cover' alt={name}/>
        <div className='m-4'>
            <span className='font-bold'>{name}</span>
            <span className='block text-gray-500 text-sm'>by {dName}</span>
        </div>
        <div className='badge'>
            <span>{view}k view</span>
        </div>
    </div>
  )
}

export default Product