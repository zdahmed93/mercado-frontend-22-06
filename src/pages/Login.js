import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

import { alertError, alertSuccess } from '../utils/feedback'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      email,
      password
    });
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {email, password})
      .then(res => {
        console.log({res});
        const { message, token, user } = res.data
        alertSuccess(message)
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch(err => {
        console.log({err});
        let errorMessage = err.message
        if (err.response && err.response.data && err.response.data.error && typeof(err.response.data.error) === 'string') {
          errorMessage = err.response.data.error
        }
        alertError(errorMessage)
      })
  }
  return (
    <Form className="m-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Login