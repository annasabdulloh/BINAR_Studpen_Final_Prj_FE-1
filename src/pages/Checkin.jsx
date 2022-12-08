import { Link } from 'react-router-dom'

export default function Checkin() {
  return (
    <div>
      <img
        src='/assets/img/Image 25.svg'
        alt=''
        className='position-absolute img-checkin'
      />
      <div className='position-relative text-center pt-5'>
        <h2 className='text-light'>IDENTIFIKASI</h2>
        <p className='text-light'>
          Mulai check-in dengan tanggal keberangkatan dan referensi <br></br>
          pemesanan atau nomor e-tiket Anda
        </p>
      </div>
      <div
        className='wrapper-login mx-auto position-relative'
        style={{ width: '800px', marginTop: '150px' }}
      >
        <div className='title mt-5 pt-5  fw-bold'>Detail Anda</div>
        <form action=''>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='field'>
                <label htmlFor='namadepan'>Tiket Penerbangan</label>
                <br />
                <input
                  type='text'
                  placeholder='Masukkan Kode Tiket Anda'
                  required
                />
              </div>

              <br />
              <br />
              <div className='field button mt-5'>
                <Link className='active' to='/hasilcheckin'>
                  <input
                    type='submit'
                    value={'Periksa Tiket'}
                    className='bg-primary text-light'
                  />
                </Link>
              </div>
            </div>

            <div className='col-sm-6'>
              <h6
                className='fw-bold text-center'
                style={{ marginTop: '50px', color: '#0075CF' }}
              >
                SCAN QR
              </h6>
              <img
                src='/assets/img/Group 11.svg'
                alt=''
                style={{ marginLeft: '75px', marginRight: '75px' }}
              />
              <h6
                className='fw-bold text-center'
                style={{ marginTop: '30px', color: '#808184' }}
              >
                Scan QR menggunakan Hp <br />
                Anda
              </h6>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
