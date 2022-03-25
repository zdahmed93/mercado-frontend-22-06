import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const userInfo = useSelector(state => state.user.info)
  return (
    <div className='m-5'>
      <h1 className='text-center'>Profile</h1>
      <h2> {userInfo.firstName} </h2>
      <h2> {userInfo.lastName} </h2>
      <h4> {userInfo.email} </h4>
    </div>
  )
}

export default Profile