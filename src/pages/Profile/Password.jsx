import { Link } from 'react-router-dom'
import './profile.css'

function Password() {
  return (
    <div className='row justify-content-center jarak'>
      <div className='col-sm-2'>
        <div className='card'>
          <div className='card-body p-3'>
            <h5 className='card-title mb-3'>
              <img
                src='./assets/images/user.png'
                alt='user'
                style={{ width: 50, height: 50 }}
              />
              Nama User
            </h5>
            <div className='col-md-10 mb-3'>
              <a href='#' className='btn btn-primary'>
                <img
                  src='./assets/gear.svg'
                  alt='gear'
                  style={{ height: 30, width: 20 }}
                />
                Akun Saya
              </a>
            </div>
            <div className='col-md-8 mb-3'>
              <a href='#' className='btn btn-danger'>
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-6'>
        <div className='card'>
          <div className='card-header'>
            <ul className='nav nav-tabs card-header-tabs'>
              <li className='nav-item'>
                <Link
                  to='/settingData'
                  className='nav-link text-primary'
                  aria-current='true'
                >
                  Data Pribadi
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/settingPassword'
                  className='nav-link active text-primary'
                  aria-current='true'
                >
                  Password
                </Link>
              </li>
            </ul>
          </div>
          <form className='row g-3 p-3'>
            <div className='col-12'>
              <label htmlFor='inputPassword' className='form-label'>
                Password Baru
              </label>
              <input
                type='password'
                className='form-control'
                id='inputPassword'
                placeholder='Password Baru'
              />
            </div>
            <div className='col-12'>
              <label htmlFor='inputPassword' className='form-label'>
                Konfirmasi Password Baru
              </label>
              <input
                type='password'
                className='form-control'
                id='inputPassword'
                placeholder='Konfirmasi Password'
              />
            </div>
            <div className='col-md-2'>
              <Link to='#'>
                <button type='submit' className='btn btn-primary'>
                  Simpan
                </button>
              </Link>
            </div>
            <div className='col-md-2'>
              <Link to='#'>
                <button type='delete' className='btn btn-danger'>
                  Batal
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Password