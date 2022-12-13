import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../css/login.css"

export default function Login() {
  const navigate = useNavigate()
  const email = useRef(null)
  const password = useRef(null)

  const onSubmit = async (e) => {
    e.preventDefault()

    const data = {
      email: email.current.value,
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
          email: data.email,
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
      <div
        className="bg-image p-3 mb-4"
        style={{backgroundImage: 'url("./assets/img/Image 24.svg")'}}
      >
        <div className="d-flex justify-content-center p-3">
          <img
            style={{width: 200}}
            src='./assets/images/logo.png' 
            className='logo' />
        </div>
        <div className='row justify-content-center p-3'>
          <div className='col-sm-5'>
            <div className="card g-3 p-3">
              <div className="col-12">
                <div
                  className="text-primary text-center"
                  style={{fontSize: 30}}>Login Member</div>
                <form action='' className="row g-3 p-3" onSubmit={onSubmit}>
                  <div className="col-12">
                    <label htmlFor="Email" className="form-label">
                      Email
                    </label>
                    <input
                      ref={email}
                      type='email'
                      placeholder='Masukkan Email'
                      id='Email'
                      className='form-control'
                      required
                    />
                  </div>
                  <div className="col-12 mb-5">
                    <label htmlFor="Password" className="form-label">
                        Password
                      </label>
                      <input
                        ref={password}
                        type='password'
                        placeholder='Masukkan Password'
                        id='Password'
                        className='form-control'
                        required
                      />
                  </div>
                  <div className="col-12 justify-content-center text-center">
                    <div 
                      className="fw-bold">
                        <input
                          type="submit"
                          value={'Login'} 
                          className="btn-login p-2 mb-3 bg-primary text-white fw-bold border-0"
                        />
                    </div>
                    <div 
                      className=" fw-bold">
                        <input
                          type="submit"
                          value={'Login Dengan Google'} 
                          className="btn-login p-2 mb-3 bg-primary text-white fw-bold border-0"
                        />
                    </div>
                    <div className='signup-link text-center text-decoration-none'>
                      Belum memiliki akun : 
                      <Link 
                        to='/register' 
                        style={{textDecoration: 'none'}}> 
                        Register
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
