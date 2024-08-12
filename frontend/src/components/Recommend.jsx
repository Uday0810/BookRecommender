import React, { useState, useEffect} from 'react'
import RecCard from './RecCard';

const Recommend = () => {
  
  const [bookName, setBookName] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = () => {
    fetch(`http://127.0.0.1:5000/api/recommend?book_name=${encodeURIComponent(bookName)}`)
      .then(response => response.json())
      .then(data => setRecommendations(data))
      .catch(error => console.error('Error fetching recommendations:', error));
  };
  
  return (
    <div className='p-4'>
      <div className='flex flex-col items-center md:flex-row md:justify-center'>
        <input
          className='bg-gray-600 rounded-lg px-3 py-2 w-full md:w-1/2 md:rounded-r-none lg:w-1/3 lg:rounded-r-none' 
          type="text" 
          value={bookName} 
          onChange={(e) => setBookName(e.target.value)} 
          placeholder="Enter book name" 
        />
        <button className='bg-[#134b70] rounded-lg px-3 py-2 hover:bg-[#201E43] mt-2 md:mt-0 w-full md:w-auto md:rounded-l-none lg:rounded-l-none' onClick={getRecommendations}>Get Recommendations</button>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {recommendations.map((rec, index) => (
            <RecCard 
              key = {index}
              image = {rec[2]}
              title = {rec[0]}
              author = {rec[1]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recommend