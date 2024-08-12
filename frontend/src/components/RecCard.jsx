import React from 'react'


const RecCard = ({ image, title, author }) => {
  return (
    <div className=' m-4 flex flex-col bg-[#201E43] w-[250px] h-[100] rounded-2xl border-4 border-[#134b70]'>
        <div className='relative'>
          <img src={image} className=' rounded-t-2xl h-60 w-full'/>
        </div>
        <div className='my-4 mx-3 text-white'>
            <p className='font-bold'>{title}</p>
            <p>{author}</p>
        </div>
    </div>
  )
}

export default RecCard