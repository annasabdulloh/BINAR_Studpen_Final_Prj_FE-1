import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  const username = useRef(null)
  const password = useRef(null)

  const onSubmit = async (e) => {
    e.preventDefault()

    const data = {
      username: username.current.value,
      password: password.current.value,
    }

    try {
      const url = 'https://binarstudpenfinalprojectbe-production.up.railway.app'
      const response = await fetch(`${url}/api/v1/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      })

      const json = await response.json()
      if (json) {
        localStorage.setItem('x-token', json.token)
        navigate('/')
      }

      console.log(json)
    } catch (error) {
      console.log(error)
    }

    console.log(data)
  }

  return (
    <div>
      <img
        src='/assets/img/Image 24.svg'
        alt=''
        className='position-absolute bg-log'
      />

      <img
        src='/assets/img/logo web1.svg'
        className='login position-relative'
      />
      <div className='wrapper-login mx-auto position-relative'>
        <div className='title mt-5 pt-5  fw-bold'>Login Member</div>
        <form action=''>
          <div className='field'>
            <label htmlFor='Username'>Username</label>
            <br />
            <input
              type='text'
              placeholder='Masukkan Username'
              id='Username'
              className='form-control'
              required
            />
          </div>
          <div className='field mt-5'>
            <label htmlFor='Password'>Password</label>
            <br />
            <input
              type='password'
              placeholder='Masukkan Password'
              id='Password'
              className='form-control'
              required
            />
          </div>
          <div className='field button'>
            <input
              type='submit'
              value={'Login'}
              className='bg-primary text-light'
            />
          </div>
          <div className='field'>
            <input
              type='submit'
              value={'Login Dengan Google'}
              className='bg-primary text-light'
            />
          </div>

          <div className='signup-link text-center'>
            Belum memiliki akun : <a href='#'> Register</a>
          </div>
        </form>
      </div>
    </div>
  )
}
