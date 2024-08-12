import React from 'react'

const Card = ({book}) => {
  return (
    <div className=' m-4 flex flex-col bg-[#201E43] w-[250px] h-[100] rounded-2xl border-4 border-[#134b70]'>
        <div className='relative'>
          <img src={book.cover_image_uri} className=' rounded-t-2xl h-60 w-full'/>
          <p className='absolute top-2 py-1 px-4 ml-2 bg-[#201E43] font-semibold rounded-full text-xs text-white'>★ {book.avg_rating.toFixed(1)}</p>
        </div>
        <div className='my-4 mx-3 text-white'>
            <p className='font-bold'>{book.book_title}</p>
            <a href={book.authorlink} className='font-semibold text-sm'>{book.author}</a>
            <ul className='flex flex-row space-x-2 mt-5'>
                <li className='text-[10px] bg-[#134B70] rounded-2xl px-2 py-1'>{JSON.parse((book.genres).replace(/'/g,'"'))[0]}
                </li>
                <li className='text-[10px] bg-[#134B70] rounded-full px-2 py-1'>{JSON.parse((book.genres).replace(/'/g,'"'))[1]}</li>
                <li className='text-[10px] bg-[#134B70] rounded-full px-2 py-1'>{JSON.parse((book.genres).replace(/'/g,'"'))[2]}</li>
            </ul>
        </div>
    </div>
  )
}

export default Card