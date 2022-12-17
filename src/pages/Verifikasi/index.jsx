import { Link } from 'react-router-dom'

function Verif() {
  return (
    <div>
      <div className='row justify-content-center p-3'>
        <div className=' col-sm-5'>
          <div className='card g-3 p-3 kotak'>
            <div className='col-12'>
              <div className='d-flex justify-content-center p-3'>
                <img src='./assets/images/logo.png' className='logo' />
              </div>
              <div className='d-flex justify-content-center'>
                <hr
                  className='hr hr-blurry'
                  style={{ width: 404, height: 2 }}
                ></hr>
              </div>
              <div className='d-flex justify-content-center p-3'>
                <img
                  src='./assets/images/amplopVerif.png'
                  style={{ width: '300px' }}
                  className='warn'
                />
              </div>
              <div className='d-flex justify-content-center mb-3'>
                <div
                  className='text-primary text-center'
                  style={{ width: 271, height: 36 }}
                >
                  <h4 className=''>Verifikasi Email Kamu</h4>
                </div>
              </div>
              <div className='d-flex justify-content-center mb-3'>
                <div className='text-center' style={{ width: 518, height: 60 }}>
                  <p>
                    Email kamu berhasil di verifikasi, silahkan klik button di
                    bawah untuk melanjutkan ke menu utama
                  </p>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <div className='text-center' style={{ width: 518, height: 60 }}>
                  <Link to='/' className='btn btn-primary'>
                    Dashboard Utama
                  </Link>
                </div>
              </div>
              <div className='d-flex justify-content-center mb-3'>
                <div
                  className='text-center text-secondary'
                  style={{ width: 434, height: 60 }}
                >
                  <p>
                    Jika button di atas tidak berfungsi, anda juga bisa klik{' '}
                    <Link to='/' style={{ textDecoration: 'none' }}>
                      disini
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verif
