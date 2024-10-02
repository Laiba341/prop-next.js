import React from 'react'
import Card  from './Component/Card'
const Home = () => {
  return (
    <div className="bg-red-300 flex flex-col items-center justify-center min-h-screen" >
      <br />
      <div className="bg-blue-300 p-5 m-4 w-60 h-30 shadow-lg rounded-lg text-left border-separate border-2 (7px) border-black">
      <Card name='Fiza'rollno ='100'day='Monday'timing='2:00 to 5:00' ></Card>
      </div>
      <br />
      <div className="bg-green-300 p-5 m-4 w-60 h-30 shadow-lg rounded-lg text-left border-separate border-2 (7px) border-black">
      <Card name='Areeba  'rollno ='200'day='Tuesday'timing='9:00 to 12:00' ></Card>
      </div >
      <br />
      <div className="bg-yellow-300 p-5 m-4 w-60 h-30 shadow-lg rounded-lg text-left border-separate border-2 (7px) border-black">
      <Card name='Shiza'rollno ='300'day='Sunday'timing='7:00 to 10:00' ></Card>
      </div>
      <br />  
    </div>
  )
}

export default Home