import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import React from 'react'

function Home() {

  const [data, setData] = useState(null)

  // navigate

  const navigate = useNavigate()

 useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) =>{
   return res.json()
  }).then((res) => {
    console.log(res)
    setData(res)
    
  })
  .catch((err) =>{
    console.log(err)
    
  })

 },[])

 const singleUser = (item) => {
  navigate(`singlestudent/${item.id}`)

 }



  return (
    <>
    <h1>dynamic routing</h1>
    {
      data ? data.map((item) =>{
        return <div key={item.id}>

          <h1>{item.name}</h1>
          <h1>{item.username}</h1>
          <button onClick={() =>singleUser(item)}>show more</button>

        </div>
      }) : <h1>Loading...</h1> }

    

    <h1>hello worldh
    </h1>
   
    </>
  )
}

export default Home