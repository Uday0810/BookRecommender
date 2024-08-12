import React, { useEffect, useState } from 'react'
import Card from './Card'

const Home = () => {
  const [books, setBooks] = useState([])
  const [visibleBooks, setVisibleBooks] = useState(20)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/popular_books')
    .then(respnse => {
      if (!respnse.ok){
        throw new Error('Network response was not ok');
      }
      return respnse.json();
    })
    .then(data => setBooks(data))
    .catch(error => console.error('Error fetching books :',error));
  },[]);

  const showMoreBooks = () => {
    setVisibleBooks(prev => prev + 20);
  };

  return (
    <div>
        <h1 className='font-bold text-4xl text-center my-10'>Most Popular Books!</h1>
        <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {books.slice(0,visibleBooks).map(book => (
              <Card key={book.book_title} book={book} />
            ))}
        </div>
        </div>
        {visibleBooks < books.length && (
          <div className='flex justify-center my-10'>
            <button onClick={showMoreBooks} className='rounded-full bg-[#134B70] px-2 py-2 text-white'>View More</button>
          </div>
        )}
      </div>
  )
}

export default Home