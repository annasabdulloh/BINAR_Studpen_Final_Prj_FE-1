import { Link } from 'react-router-dom'

function Jadwal() {
  return (
    <div>
      <div
        className='text-center bg-image p-3 mb-4'
        style={{ backgroundImage: 'url("./assets/images/header.png")' }}
      >
        <div>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div>
              <h2 className='text-light'>Jadwal Penerbangan</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center p-3 mb-1'>
        <div className='col-sm-8 p-3'>
          <div className='card'>
            <div className='card-body'>
              <form>
                <div className='row d-flex align-content-center align-items-center justify-content-center'>
                  <div className='col-md-3 my-1'>
                    <label htmlFor='jadwalTerbang' className='label'>
                      Dari
                    </label>
                    <input
                      className='form-control'
                      required
                      type='text'
                      name='keberangkatan'
                      id='keberangkatan'
                      placeholder='Kota Keberangkatan'
                    />
                  </div>
                  <div className='col-md-3 my-1'>
                    <label htmlFor='jadwalTerbang' className='label'>
                      Tujuan
                    </label>
                    <input
                      className='form-control'
                      required
                      type='text'
                      name='keberangkatan'
                      id='keberangkatan'
                      placeholder='Kota Tujuan'
                    />
                  </div>
                  <div className='col-md-3 my-1'>
                    <label htmlFor='jadwalTerbang' className='label'>
                      Pergi
                    </label>
                    <input
                      className='form-control'
                      required
                      type='date'
                      name='keberangkatan'
                      id='keberangkatan'
                    />
                  </div>
                  <div className='col-4 my-4'>
                    <Link to='#'>
                      <div className='col-md-12 btn btn-primary' type='submit'>
                        Cari Jadwal
                      </div>
                    </Link>
                  </div>
                  <div className='col-4 my-1'>
                    <Link to='#'>
                      <div className='col-md-12 btn btn-danger' type='submit'>
                        Hapus input
                      </div>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center p-2'>
        <div className='col-sm-7'>
          <div className='card'>
            <div className='card-body p-3'>
              <p className='card-title'>
                Jakarta&nbsp;&nbsp;
                <img src='./assets/images/rotate.png' />
                &nbsp;&nbsp;Bali
              </p>
              <p className='card-title'>Rab, 12 Okt 2022</p>
            </div>
            <div className='row align-items-center justify-content-center position-absolute top-50 end-0 translate-middle'></div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='col-7 p-3'>
          <div className='card'>
            <div className='table table-responsive'>
              <thead className='table-primary'>
                <tr className=' text-center'>
                  <th scope='col'>Flight</th>
                  <th>Keberangkatan</th>
                  <th>Waktu Keberangkatan</th>
                  <th>Kedatangan</th>
                  <th>Waktu Kedatangan</th>
                  <th>Nomor Penerbangan</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
                <tr className='text-center'>
                  <th>
                    <img src='./assets/images/citilink.png' />
                  </th>
                  <th>Jakarta</th>
                  <th>13.30</th>
                  <th>Bali</th>
                  <th>16.00</th>
                  <th>GA 640/GA 7640</th>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jadwal
