import './penerbangan.css'

const HistoryPembayaran = () => {
  return (
    <div>
      <div className='gambar mt-5'>
        <img src='aset/image 38.png' alt='' />
        <div
          className='jadwalPenerbangan position-relative text-center'
          style={{ marginTop: '-55px', color: 'white' }}
        >
          <h4 className='tulisan fw-bold color'>History</h4>
        </div>
      </div>
      {/* hasil  */}
      <div className='container mt-5'>
        <div
          className='ractangle shadow mt-5'
          style={{ width: '1100px', height: '800px' }}
        >
          <ul className='nav nav-tabs pt-5 px-5'>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link '
                data-bs-toggle='tab'
                id='tungguBayar-tab'
                type='button'
                data-bs-target='#tungguBayar'
                role='tab'
                aria-controls='tungguBayar'
                aria-selected='true'
                href='#'
              >
                Menunggu Pembayaran
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link '
                aria-current='page'
                data-bs-toggle='tab'
                id='jadwalLewat-tab'
                data-bs-target='#jadwalLewat'
                role='tab'
                aria-controls='jadwalLewat'
                aria-selected='true'
                href='#'
              >
                Jadwal Terlewat
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link '
                aria-current='page'
                data-bs-toggle='tab'
                id='jadwalDatang-tab'
                data-bs-target='#jadwalDatang'
                role='tab'
                aria-controls='jadwalDatang'
                aria-selected='true'
                href='#'
              >
                Jadwal Akan Datang
              </button>
            </li>
          </ul>
          <div className='tab-content' id='myTabControl'>
            <div
              className='tab-pane fade show'
              role='tabpanel'
              id='tungguBayar'
              aria-labelledby='tungguBayar-tab'
            >
              <div className='card mt-5 mx-auto' style={{ width: '900px' }}>
                <div className='card-body '>
                  <div className='container mx-auto '>
                    <div className='row align-content-center'>
                      <div className='col'>
                        <p className='text-black-50'>Order ID : 20987</p>
                        <p>Jakarta -&gt;&lt;- Bali</p>
                        <p className='text-black-50'>
                          Pulang - Pergi : 1 Penumpang
                        </p>
                      </div>
                      <div className='col text-center pt-4'>
                        <p>Pergi : 12 Oktober 2022</p>
                        <p>Balik :15 Oktober 2022</p>
                      </div>
                      <div className='col text-center pt-4'>
                        <button type='button' className='btn btn-primary '>
                          Pilih Metode <br /> Pembayaran
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade show'
              role='tabpanel'
              id='jadwalLewat'
              aria-labelledby='jadwalLewat-tab'
            >
              <div className='card mt-5 mx-auto' style={{ width: '900px' }}>
                <div className='card-body '>
                  <div className='container mx-auto '>
                    <div className='row align-content-center'>
                      <div className='col'>
                        <p className='text-black-50'>Order ID : 20987</p>
                        <p>Jakarta -&gt;&lt;- Bali</p>
                        <p className='text-black-50'>
                          Pulang - Pergi : 1 Penumpang
                        </p>
                      </div>
                      <div className='col text-center pt-4'>
                        <p>Pergi : 12 Oktober 2022</p>
                        <p>Balik :15 Oktober 2022</p>
                      </div>
                      <div className='col text-center pt-4'>
                        <button type='button' className='btn btn-danger '>
                          Tiket Sudah <br />
                          Kadaluarsa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade show'
              role='tabpanel'
              id='jadwalDatang'
              aria-labelledby='jadwalDatang-tab'
            >
              <div className='card mt-5 mx-auto' style={{ width: '900px' }}>
                <div className='card-body '>
                  <div className='container mx-auto '>
                    <div className='row align-content-center'>
                      <div className='col'>
                        <p className='text-black-50'>Order ID : 20987</p>
                        <p>Jakarta -&gt;&lt;- Bali</p>
                        <p className='text-black-50'>
                          Pulang - Pergi : 1 Penumpang
                        </p>
                      </div>
                      <div className='col text-center pt-4'>
                        <p>Pergi : 12 Oktober 2022</p>
                        <p>Balik :15 Oktober 2022</p>
                      </div>
                      <div className='col text-center pt-4'>
                        <button type='button' className='btn btn-warning mt-3 '>
                          Masih Menunggu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryPembayaran
