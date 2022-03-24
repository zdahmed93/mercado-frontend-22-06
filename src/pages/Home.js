import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/items`)
            .then(res => {
                console.log({ res });
                setItems(res.data)
            })
            .catch(err => {
                console.log({ err });
            })
    }, [])
  return (
    <div>
        {items.map(item => (
            <div key={item._id} className='card m-3 p-3'>
                <h1> Title: {item.title} </h1>
                <h3> Description: {item.description} </h3>
                <p> Photo: {item.photo} </p>
                <h2> Price: {item.price} TND </h2>
            </div>
        ))}
    </div>
  )
}

export default Home