import { Link } from 'react-router-dom'

function PopUpNotifikasi() {
  return (
    <div className='row p-3 justify-content-center position-absolute top-0 start-50 jarak'>
      <div className='col-sm-7'>
        <div className='card'>
          <div className='card-body p-3'>
            <h5 className='card-title mb-1'>Notifikasi</h5>
            <div className='d-flex justify-content-center'>
              <hr
                className='hr hr-blurry'
                style={{ width: 404, height: 2 }}
              ></hr>
            </div>
            <div className='d-flex justify-content-center'>
              <img
                src='./assets/images/amplop.png'
                alt='amplop'
                style={{ height: 80, width: 80 }}
              />
            </div>
            <div className='d-flex justify-content-center text-secondary mb-1'>
              <p className='text-center'>
                Belum ada notifikasi baru untuk anda
              </p>
            </div>
            <div className='d-flex justify-content-center text-primary'>
              <Link to='#' className='text-center text-decoration-none'>
                Lihat Semua Notifikasi &gt;&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUpNotifikasi
