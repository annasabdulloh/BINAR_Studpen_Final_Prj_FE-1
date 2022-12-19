import { Link } from 'react-router-dom'

export default function Checkin() {
  return (
    <div>
      <div
        className='text-center
                      bg-image
                      p-3 mb-4'
        style={{ backgroundImage: 'url("/assets/images/image-38@2x.png")' }}
      >
        <div
          className='d-flex 
                        justify-content-center
                        align-items-center h-100'
        >
          <div>
            <h2 className='text-light fw-bold'>IDENTIFIKASI</h2>
            <div className='text-light'>
              Mulai check-in dengan tanggal keberangkatan dan referensi
              pemesanan atau nomor e-tiket Anda
            </div>
          </div>
        </div>
      </div>

      <div className='row pt-3 d-flex justify-content-center align-content-center p-3'>
        <div className='col-sm-8'>
          <div className='card bg-danger bg-opacity-10 g-3 p-3 mx-auto'>
            <div className='row col-12 g-3 p-3'>
              <div
                className='text-center text-primary fw-bold'
                style={{ fontSize: 30 }}
              >
                Detail Anda
              </div>
              <div className='row justify-content-center align-content-center'>
                <div action='' className='col-md-6 g-3 p-3'>
                  <div className='row col-10 mb-3'>
                    <label
                      htmlFor='namaDepan'
                      className='form-label text-primary'
                    >
                      Nama Depan
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='namaDepan'
                      placeholder='Masukkan Nama Depan Anda'
                    />
                  </div>
                  <div className='row col-10 mb-3'>
                    <label
                      htmlFor='nomorTicket'
                      className='form-label text-primary'
                    >
                      Nomor E-Ticket
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      id='nomorTicket'
                      placeholder='Masukkan Nomor E-Ticket'
                    />
                  </div>
                  <div className='row col-10 mb-5'>
                    <label
                      htmlFor='nomorRef'
                      className='form-label text-primary'
                    >
                      Nomor Referensi
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      id='nomorRef'
                      placeholder='Masukkan Nomor Referensi'
                    />
                  </div>
                  <div className='row col-10 fw-bold'>
                    <input
                      type='submit'
                      value={'Periksa Tiket'}
                      className='p-2 mb-3 bg-primary text-white fw-bold border-0'
                    />
                  </div>
                </div>
                <div className='row col-6 pt-5 justify-content-center align-content-center'>
                  <h5 className='text-primary fw-bold text-center'>SCAN QR</h5>
                  <Link to='#' className='row col-10 p-3'>
                    <img
                      className='mb-10'
                      src='/assets/img/Group 11.svg'
                      alt=''
                    />
                  </Link>
                  <h5 className='text-secondary fw-bold text-center p-3'>
                    Scan QR menggunakan HP anda
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
