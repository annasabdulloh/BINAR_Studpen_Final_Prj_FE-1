import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const title = useRef(null)
  const nama_depan = useRef(null)
  const nama_belakang = useRef(null)
  const tanggal_lahir = useRef(null)
  const kebangsaan = useRef(null)
  const no_handphone = useRef(null)
  const email = useRef(null)
  const konfirmasi_password = useRef(null)
  const username = useRef(null)
  const password = useRef(null)

  /**
   * Bakal aktif ketika button submit dipencet
   * @param {Event} e
   */
  const onSubmit = async (e) => {
    e.preventDefault()

    const data = {
      title: title.current.value,
      nama_depan: nama_depan.current.value,
      nama_belakang: nama_belakang.current.value,
      tanggal_lahir: tanggal_lahir.current.value,
      kebangsaan: kebangsaan.current.value,
      no_handphone: no_handphone.current.value,
      email: email.current.value,
      konfirmasi_password: konfirmasi_password.current.value,
      username: username.current.value,
      password: password.current.value,
    }

    try {
      const url = 'https://binarstudpenfinalprojectbe-production.up.railway.app'
      const response = await fetch(`${url}/api/v1/register`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          f_name: data.nama_depan,
          l_name: data.nama_belakang,
          email: data.email,
          password: data.password,
          re_type_pass: data.konfirmasi_password,
          title: data.title,
        }),
      })

      const json = await response.json()
      // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiODczYjJkNzUtOGM5NS00NDQ5LWI2Y2YtMDA5M2RmMzYzZWRkIiwiaWF0IjoxNjcwMjU5NTg4fQ.gxPNw68L1Nf5kdX9I1Fc535qDNbtLRezq3JmECVjr9A"
      // { token: string, user: any }
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
        className='position-absolute bg-reg'
      />

      <img
        src='/assets/img/logo web1.svg'
        className='login position-relative'
      />
      <div className='wrapper-regist mx-auto position-relative'>
        <div className='title mt-5 pt-5 fw-bold'>Register Member</div>
        <form onSubmit={onSubmit} action=''>
          <div className='row'>
            <div className='col-md field'>
              <label htmlFor='title'>Title</label>
              <br></br>
              <select
                ref={title}
                name=''
                id='title'
                className='form-control'
                required
              >
                <option selected>--Pilih sapaan--</option>
                <option value='Mr'>Mr</option>
                <option value='Mrs'>Mrs</option>
              </select>
            </div>

            <div className='col-md field'>
              <label htmlFor='first_name'>Nama Depan</label>
              <input
                ref={nama_depan}
                type='text'
                id='first_name'
                className='form-control'
                required
              />
            </div>

            <div className='col-md field'>
              <label htmlFor='last-name'>Nama Belakang</label>
              <input
                ref={nama_belakang}
                type='text'
                id='last-name'
                className='form-control'
                required
              />
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md field'>
              <label htmlFor='dateBirth'>Tanggal Lahir</label>
              <br></br>
              <input
                ref={tanggal_lahir}
                type='date'
                id='dateBirth'
                className='form-control'
                required
              />
            </div>

            <div className='col-md field'>
              <label htmlFor='country'>Kebangsaan</label>
              <input
                ref={kebangsaan}
                type='text'
                id='country'
                className='form-control'
                required
              />
            </div>

            <div className='col-md field'>
              <label htmlFor='nophone'>No. Handphone</label>
              <input
                ref={no_handphone}
                type='number'
                id='nophone'
                className='form-control'
                required
              />
            </div>
          </div>

          <div className='row g-3 mt-4'>
            <div className='col-md field'>
              <label htmlFor='Email'>E-Mail</label>
              <br></br>
              <input
                ref={email}
                type='email'
                id='Email'
                className='form-control'
                required
              />
            </div>
            <div className='col-md field'>
              <label htmlFor='User'>Username</label>
              <br></br>
              <input
                ref={username}
                type='text'
                id='User'
                className='form-control'
                required
              />
            </div>
          </div>
          <div className='row g-3 mt-4'>
            <div className='col-md field'>
              <label htmlFor='Pass'>Password</label>
              <br></br>
              <input
                ref={password}
                type='password'
                id='Pass'
                className='form-control'
                required
              />
            </div>

            <div className='col-md field'>
              <label htmlFor='ConfirmPass'>Konfirmasi Password</label>
              <br></br>
              <input
                ref={konfirmasi_password}
                type='password'
                id='ConfirmPass'
                className='form-control'
                required
              />
            </div>
          </div>
          <div className='field button'>
            <input type='submit' defaultValue={'Registrasi Sekarang'} />
          </div>
        </form>
      </div>
    </div>
  )
}
