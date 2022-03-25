import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllItems } from '../redux/actions/itemsActionCreators'

function Home() {
    const items = useSelector(state => state.items.all)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllItems())
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