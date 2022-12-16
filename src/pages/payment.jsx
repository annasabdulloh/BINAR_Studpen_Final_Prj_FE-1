import './penerbangan.css'

const Payment = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img src='aset/logo web.png' alt='MyAIRFARE' width='200px' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse mx-auto' id='navbarNav'>
            <ul className='navbar-nav mx-auto justify-content-center align-items-center'>
              <li className='nav-item px-4'>
                <a className='nav-link' aria-current='page' href='#'>
                  PESAWAT
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link' href='#'>
                  CHECK IN
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link mx-3' href='#'>
                  TENTANG KAMI
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link ' href='#'>
                  HISTORY
                </a>
              </li>
              <li className='nav-item d-flex  px-5'></li>
              <li className='nav-item dropdown d-flex '></li>
              <li className='nav-item mx-2'>
                <a className='nav-link' href='#'>
                  <img src='aset/mdi_cart-minus.svg' alt='' />
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link' href='#'>
                  <img src='aset/image 70.svg' alt='' />
                </a>
              </li>
              <a className='nav-link' href='#'>
                <img src='aset/gambar.png' alt='' />
              </a>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDarkDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Nama User
              </a>
              <ul
                className='dropdown-menu dropdown-menu-dark'
                aria-labelledby='navbarDarkDropdownMenuLink'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <div className='gambar mt-5'>
        <img src='aset/image 38.png' alt='' />
        <div
          className='jadwalPenerbangan position-relative text-center'
          style={{ marginTop: '-55px', color: 'white' }}
        >
          <h4 className='tulisan fw-bold color'>Payment</h4>
        </div>
      </div>
      {/* hasil  */}
      <div className='container mt-5'>
        <div className='row'>
          <div className='col align-content-center'>
            <div className='card ' style={{ width: '40rem' }}>
              <div className='card-body'>
                <ul className='nav nav-tabs pt-2 px-2'>
                  <li className='nav-item ' role='presentation'>
                    <button
                      className='nav-link '
                      data-bs-toggle='tab'
                      id='BankTransfer-tab'
                      type='button'
                      data-bs-target='#BankTransfer'
                      role='tab'
                      aria-controls='BankTransfer'
                      aria-selected='true'
                      href='#'
                    >
                      Bank Transfer
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link '
                      aria-current='page'
                      data-bs-toggle='tab'
                      id='InstanPayment-tab'
                      data-bs-target='#InstanPayment'
                      role='tab'
                      aria-controls='InstanPayment'
                      aria-selected='true'
                      href='#'
                    >
                      Instan Payment
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link '
                      aria-current='page'
                      data-bs-toggle='tab'
                      id='VirtualAcount-tab'
                      data-bs-target='#VirtualAcount'
                      role='tab'
                      aria-controls='VirtualAcount'
                      aria-selected='true'
                      href='#'
                    >
                      Virtual Acount
                    </button>
                  </li>
                </ul>
                <div className='tab-content' id='myTabControl'>
                  <div
                    className='tab-pane fade show'
                    role='tabpanel'
                    id='BankTransfer'
                    aria-labelledby='BankTransfer-tab'
                  >
                    <div className='row satu pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>
                                Transfer Via Bank Mandiri
                              </div>
                              <div className='col'>
                                <img
                                  src='./aset/bankMandiri.png'
                                  alt=''
                                  width='100px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row dua pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>Transfer Via Bank BCA</div>
                              <div className='col'>
                                <img
                                  src='./aset/bankBCA.jpg.crdownload'
                                  alt=''
                                  width='70px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row tiga pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>Transfer Via Bank BRI</div>
                              <div className='col'>
                                <img
                                  src='./aset/bankBRI.png'
                                  alt=''
                                  width='70px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row empat pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>Transfer Via Bank BNI</div>
                              <div className='col'>
                                <img
                                  src='./aset/bankBNI.png'
                                  alt=''
                                  width='70px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className='mx-4 mt-4'>Price Details</h5>
                    <div className='row mx-5'>
                      <div className='col'>
                        <p>
                          Lion Air (Dewasa) x 1 <br />
                          Flight Insurance x 1 <br />
                          Service Fee
                        </p>
                      </div>
                      <div className='col text-start'>
                        <p>
                          Rp. 3.056.800 <br />
                          Rp. 85.600 <br />
                          Rp. 15.000
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className='total mx-5'>
                      <div className='row'>
                        <div className='col'>
                          <h5>Total Price</h5>
                        </div>
                        <div className='col text-start'>
                          <h5>Rp. 3.157.400</h5>
                        </div>
                      </div>
                    </div>
                    <div className='akhir mx-5 text-start'>
                      <p>
                        By clicking the button bellow, you agree to MyAIRFARE
                        Terms &amp; Condition and Privacy Policy.
                      </p>
                      <button type='button' className='btn btn-primary'>
                        Bayar
                      </button>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade show'
                    role='tabpanel'
                    id='InstanPayment'
                    aria-labelledby='InstanPayment-tab'
                  >
                    <div className='row satu pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>
                                Transfer Via BCA KlikPay
                              </div>
                              <div className='col'>
                                <img
                                  src='./aset/bcaklikpay.png'
                                  alt=''
                                  width='100px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row dua pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>
                                Transfer Via Bank LInkaja
                              </div>
                              <div className='col'>
                                <img
                                  src='./aset/linkaja.png'
                                  alt=''
                                  width='70px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row tiga pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>Transfer Via Gopay</div>
                              <div className='col'>
                                <img
                                  src='./aset/gopau.png'
                                  alt=''
                                  width='70px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row empat pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>Transfer Via Sakuku</div>
                              <div className='col'>
                                <img
                                  src='./aset/sakuku.jfif'
                                  alt=''
                                  width='70px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className='mx-4 mt-4'>Price Details</h5>
                    <div className='row mx-5'>
                      <div className='col'>
                        <p>
                          Lion Air (Dewasa) x 1 <br />
                          Flight Insurance x 1 <br />
                          Service Fee
                        </p>
                      </div>
                      <div className='col text-start'>
                        <p>
                          Rp. 3.056.800 <br />
                          Rp. 85.600 <br />
                          Rp. 15.000
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className='total mx-5'>
                      <div className='row'>
                        <div className='col'>
                          <h5>Total Price</h5>
                        </div>
                        <div className='col text-start'>
                          <h5>Rp. 3.157.400</h5>
                        </div>
                      </div>
                    </div>
                    <div className='akhir mx-5 text-start'>
                      <p>
                        By clicking the button bellow, you agree to MyAIRFARE
                        Terms &amp; Condition and Privacy Policy.
                      </p>
                      <button type='button' className='btn btn-primary'>
                        Bayar
                      </button>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade show'
                    role='tabpanel'
                    id='VirtualAcount'
                    aria-labelledby='VirtualAcount-tab'
                  >
                    <div className='row satu pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>
                                Transfer Via VA Bank Mandiri
                              </div>
                              <div className='col'>
                                <img
                                  src='./aset/bankMandiri.png'
                                  alt=''
                                  width='100px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row dua pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>
                                Transfer Via VA Bank BCA
                              </div>
                              <div className='col'>
                                <img
                                  src='./aset/bankBCA.jpg.crdownload'
                                  alt=''
                                  width='70px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row tiga pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>
                                Transfer Via VA Bank BRI
                              </div>
                              <div className='col'>
                                <img
                                  src='./aset/bankBRI.png'
                                  alt=''
                                  width='70px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row empat pt-3'>
                      <div className='col'>
                        <div className='form-check mx-auto pt-3 mx-5'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='card ' style={{ width: '550px' }}>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col'>
                                Transfer Via VA Bank BNI
                              </div>
                              <div className='col'>
                                <img
                                  src='./aset/bankBNI.png'
                                  alt=''
                                  width='70px'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className='mx-4 mt-4'>Price Details</h5>
                    <div className='row mx-5'>
                      <div className='col'>
                        <p>
                          Lion Air (Dewasa) x 1 <br />
                          Flight Insurance x 1 <br />
                          Service Fee
                        </p>
                      </div>
                      <div className='col text-start'>
                        <p>
                          Rp. 3.056.800 <br />
                          Rp. 85.600 <br />
                          Rp. 15.000
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className='total mx-5'>
                      <div className='row'>
                        <div className='col'>
                          <h5>Total Price</h5>
                        </div>
                        <div className='col text-start'>
                          <h5 className='text-danger'>Rp. 3.157.400</h5>
                        </div>
                      </div>
                    </div>
                    <div className='akhir mx-5 text-start'>
                      <p>
                        By clicking the button bellow, you agree to MyAIRFARE
                        Terms &amp; Condition and Privacy Policy.
                      </p>
                      <button type='button' className='btn btn-primary'>
                        Bayar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col align-content-center  '>
            <div className='card mx-auto' style={{ width: '25rem' }}>
              <div className='card-body'>
                <h5 className='card-title'>Jakarta -&gt;&lt;- Bali</h5>
                <h6 className='card-subtitle mb-2 text-muted'>
                  Order ID : 209870
                </h6>
                <hr />
                <h6>Total Pembayaran</h6>
                <h5 className='fw-bold text-danger'>Rp. 3.157.400</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-sm-4  col-xl-3 text-center'>
            <h1 className='text-primary fw-bolder'>MyAIRFARE</h1>
          </div>
          <div className='col-12 col-sm-4 col-xl-3 '>
            <ul style={{ listStyleType: 'none' }}>
              <li>Tentang BeLight</li>
              <li>Procurement Online</li>
              <li>Hubungan Investor</li>
              <li>Sales Office</li>
              <li>Group Reservasi</li>
              <li>Syarat &amp; Ketentuan</li>
              <li>PPID BeLight</li>
              <li>Pasca Homologasi</li>
            </ul>
          </div>
          <div className='col-12 col-sm-4 col-xl-3  '>
            <ul style={{ listStyleType: 'none' }}>
              <li>Mitra</li>
              <li>Corporate Privilege</li>
              <li>Customer Care Policy</li>
              <li>Karir</li>
              <li>CSR</li>
              <li>FAQ</li>
              <li>Peta Situs</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>
          <div className='col-12 col-sm-4 col-xl-3 text-center '>
            <h4 className='text-primary fw-bold text-center'>
              Connect With Us
            </h4>
            <a href='#'>
              <img src='aset/apstore.png' alt='appstore' />
            </a>
            <a href='#'>
              {' '}
              <img src='aset/googleplay.png' alt='googleplay' />
            </a>
          </div>
        </div>
      </div>
      <div className='footergambar mt-5'>
        <img src='aset/image 38.png' alt='' width='1440px' height='400px' />
        <div
          className='row d-flex justify-content-center'
          style={{ display: 'relative', marginTop: '-300px' }}
        >
          <div className='col  text-center'>
            <img src='aset/logo web.jpg' alt='' width='300px' />
          </div>
          <div className='col text-center'>
            <img src='aset/start.png' alt='' width='300px' />
          </div>
          <div className='col text-center'>
            <img src='aset/word.png' alt='' width='300px' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
