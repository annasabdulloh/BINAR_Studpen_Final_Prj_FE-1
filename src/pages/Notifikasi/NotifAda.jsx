import { Link } from 'react-router-dom'

function NotifAda() {
  return (
    <div>
      <div
        className='text-center bg-image p-3 mb-3'
        style={{ backgroundImage: 'url("./assets/img/Image 25.svg")' }}
      >
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div>
            <h3 className='text-light fw-bold'>Notifikasi</h3>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center align-content-center p-3'>
        <div className='col-sm-3 p-3 pt-0'>
          <div className='p-3 bg-white fs-5 border border-secondary justify-content-center align-items-center bg-opacity-50'>
            <div className='p-2 bg-success text-light text-center fs-4 border-0 d-flex justify-content-center align-items-center'>
              <div className='col-md-8 my-2 fs-5'>Tandai yang dibaca</div>
            </div>
            <div>
              <div className='fw-bold mb-3'>
                Status
                <div className='form-check'>
                  <input
                    className='form-check-input me-2'
                    type='checkbox'
                    name='listNotif'
                    value=''
                    id='firstNotif'
                  />
                  <label
                    className='form-check-label text-Capitalize fw-normal'
                    htmlFor='firstNotif flexCheckDefault'
                  >
                    Sudah Dibaca
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input me-2'
                    type='checkbox'
                    name='listNotif'
                    value=''
                    id='firstNotif'
                  />
                  <label
                    className='form-check-label text-Capitalize fw-normal'
                    htmlFor='firstNotif flexCheckDefault'
                  >
                    Belum Dibaca
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className='fw-bold'>
                Urut Berdasarkan
                <div className='form-check'>
                  <input
                    className='form-check-input me-2'
                    type='checkbox'
                    name='listNotif'
                    value=''
                    id='firstNotif'
                  />
                  <label
                    className='form-check-label text-Capitalize fw-normal'
                    htmlFor='firstNotif flexCheckDefault'
                  >
                    Terbaru
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input me-2'
                    type='checkbox'
                    name='listNotif'
                    value=''
                    id='firstNotif'
                  />
                  <label
                    className='form-check-label text-Capitalize fw-normal'
                    htmlFor='firstNotif flexCheckDefault'
                  >
                    Terlama
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-7'>
          <div className='card g-3 p-5 mx-auto rounded-0 border bg-danger bg-opacity-10'>
            <div className='shadow mb-3 bg-body rounded p-3'>
              <div className='text-primary fs-5'>Pembelian Tiket</div>
              Anda sudah memesan tiket, silahkan dilanjutkan untuk
              pembayarandengan metode yang anda gunakan, pastikan data anda
              sudah benar
            </div>
            <div className='shadow mb-3 bg-body rounded p-3'>
              <div className='text-primary fs-5'>Pembelian Tiket</div>
              Anda sudah memesan tiket, silahkan dilanjutkan untuk
              pembayarandengan metode yang anda gunakan, pastikan data anda
              sudah benar
            </div>
            <div className='shadow mb-5 bg-body rounded p-3'>
              <div className='text-primary fs-5'>Pembelian Tiket</div>
              Anda sudah memesan tiket, silahkan dilanjutkan untuk
              pembayarandengan metode yang anda gunakan, pastikan data anda
              sudah benar
            </div>
            <div className='d-flex justify-content-center p-3'>
              <div className='position-absolute bottom-0 end-0 p-4'>
                <Link to='#' className='p-3'>
                  <img
                    src='./assets/images/remove.png'
                    style={{ width: 30, height: 30 }}
                  />
                </Link>
                <Link to='#' className='btn btn-primary'>
                  Kembali ke Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className='text-center bg-image p-3 mb-4'
        style={{ backgroundImage: 'url("./assets/images/header.png")' }}
      >
        <div>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h2>Notifikasi</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center align-content-center p-3'>
        <div className='col-sm-2'>
          <div className='card'>
            <div className='card-body p-3'>
              <div className='card-title mb-3'>
                <div className='badge bg-success p-3' style={{ width: 150 }}>
                  Tandai Yang Dibaca
                </div>
              </div>
              <div>
                <div className='fw-bold mb-3'>
                  Status
                  <div className='form-check'>
                    <input
                      className='form-check-input me-2'
                      type='checkbox'
                      name='listNotif'
                      value=''
                      id='firstNotif'
                    />
                    <label
                      className='form-check-label text-Capitalize fw-normal'
                      htmlFor='firstNotif flexCheckDefault'
                    >
                      Sudah Dibaca
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input me-2'
                      type='checkbox'
                      name='listNotif'
                      value=''
                      id='firstNotif'
                    />
                    <label
                      className='form-check-label text-Capitalize fw-normal'
                      htmlFor='firstNotif flexCheckDefault'
                    >
                      Belum Dibaca
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div className='fw-bold'>
                  Urut Berdasarkan
                  <div className='form-check'>
                    <input
                      className='form-check-input me-2'
                      type='checkbox'
                      name='listNotif'
                      value=''
                      id='firstNotif'
                    />
                    <label
                      className='form-check-label text-Capitalize fw-normal'
                      htmlFor='firstNotif flexCheckDefault'
                    >
                      Terbaru
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input me-2'
                      type='checkbox'
                      name='listNotif'
                      value=''
                      id='firstNotif'
                    />
                    <label
                      className='form-check-label text-Capitalize fw-normal'
                      htmlFor='firstNotif flexCheckDefault'
                    >
                      Terlama
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-5'>
          <div className='card g-3 p-2' style={{ height: 450 }}>
            <div className='col-3'>
              <li className='list-group-item'>
                <div
                  className='card p-3 mb-3'
                  style={{ width: 400, height: 100 }}
                >
                  <h6 className='text-primary'>Pembelian Tiket</h6>
                  <p>
                    <small>
                      Anda sudah memesan tiket, silahkan dilanjutkan untuk
                      pembayaran dengan metode yang anda gunakan.
                    </small>
                  </p>
                </div>
              </li>
              <div
                className='card p-3 mb-3'
                style={{ width: 400, height: 100 }}
              >
                <h6 className='text-primary'>Pembelian Tiket</h6>
                <p>
                  <small>
                    Anda sudah memesan tiket, silahkan dilanjutkan untuk
                    pembayaran dengan metode yang anda gunakan.
                  </small>
                </p>
              </div>
              <div
                className='card p-3 mb-3'
                style={{ width: 400, height: 100 }}
              >
                <h6 className='text-primary'>Pembelian Tiket</h6>
                <p>
                  <small>
                    Anda sudah memesan tiket, silahkan dilanjutkan untuk
                    pembayaran dengan metode yang anda gunakan.
                  </small>
                </p>
              </div>
              <div className='d-flex justify-content-center p-3'>
                <div className='position-absolute bottom-0 end-0 p-3'>
                  <Link to='#' className='p-3'>
                    <img
                      src='./assets/images/remove.png'
                      style={{ width: 30, height: 30 }}
                    />
                  </Link>
                  <Link to='#' className='btn btn-primary'>
                    Kembali ke Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default NotifAda
