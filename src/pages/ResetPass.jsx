import React from 'react'
import { useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../css/login.css'


async function ajaxForgotPass(email) {
    const url = `${process.env.REACT_APP_API_SERVER_URL}`
    // console.log(process.env.REACT_APP_API_SERVER, process.env.REACT_APP_ENDPOINT_BASE_URL, url);
    const response = await fetch(`${url}/api/v1/reset-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email
        }),
    })

    return response
}

export default function ForgotPass() {
    const email = useRef(null)

    const [isLoading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            let response = await ajaxForgotPass(email.current.value)
            let JSONRes = await response.json()
            if (response.status === 200) {
                setLoading(false)
                setAlert(JSONRes.success)
            } else {
                setLoading(false)
                setAlert(JSONRes.errors)
            }
        } catch (error) {
            setLoading(false)
            setAlert(error)
        }

    }

    return (
        localStorage.getItem('x-access-token') === null ? (
            <div>
                <div
                    className='bg-image p-3 mb-4'
                    style={{ backgroundImage: 'url("/assets/images/image-25@2x.png")' }}
                >
                    <div className='d-flex justify-content-center p-3'>
                        <img
                            style={{ width: 200 }}
                            src='/assets/images/logo.png'
                            className='logo'
                        />
                    </div>
                    <div className='row justify-content-center p-3'>
                        <div className='col-sm-5'>
                            <div className='card g-3 p-3'>
                                <div className='col-12'>
                                    <div
                                        className='text-primary text-center'
                                        style={{ fontSize: 30 }}
                                    >
                                        Reset Password
                                    </div>
                                    {alert != null ? (<div className="alert alert-success mt-3 mb-3" role="alert">
                                        `{alert}`
                                    </div>) : ''}
                                    <form action='' className='row g-3 p-3' onSubmit={onSubmit}>
                                        <div className='col-12'>
                                            <label htmlFor='Email' className='form-label'>
                                                Email
                                            </label>
                                            <input
                                                data-testid={'Email'}
                                                ref={email}
                                                type='email'
                                                placeholder='Masukkan Email'
                                                id='Email'
                                                className='form-control'
                                                required
                                            />
                                        </div>
                                        
                                        <div className='col-12 justify-content-center text-center'>
                                            <div className='fw-bold'>
                                                {isLoading ? (<button className="btn btn-primary mb-3 disabled" type="button" disabled>
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    Loading...
                                                </button>) : (<div className='text-center'><input id='submit'
                                                    data-testid={'submit'}
                                                    type='submit'
                                                    value={'Lupa Password'}
                                                    className='btn-login p-2 mb-3 bg-primary text-white fw-bold border-0'
                                                />
                                                </div>
                                                )}
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <Navigate to={'/'}></Navigate>
        )
    )
}
