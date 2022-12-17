import './payment.css'

const Payment = () => {
  return (
    <div>
      <br />
      <div className='gambar mt-5'>
        <img src='../assets/img/image 38.png' alt='' />
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
            <div className='card '>
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
              </div>
              <div className='card'>
              <div className='tab-content' id='myTabControl'>
                  <div
                    className='tab-pane fade show'
                    role='tabpanel'
                    id='BankTransfer'
                    aria-labelledby='BankTransfer-tab'
                  >
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                Transfer Via Bank Mandiri
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/bankMandiri.png'
                                    alt=''
                                    class='bankmandiri'
                                    width='100px'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                Transfer Via Bank BCA
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/bankBCA.jpg'
                                    alt=''
                                    class='bankmandiri'
                                    width='100px'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                Transfer Via Bank BRI
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/bankBRI.png'
                                    alt=''
                                    class='bankmandiri'
                                    width='100px'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                Transfer Via Bank BNI
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/bankBNI.png'
                                    alt=''
                                    class='bankmandiri'
                                    width='100px'
                                  />
                                </div>
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
                          <br/>
                          <p>
                            By clicking the button bellow, you agree to MyAIRFARE
                            Terms &amp; Condition and Privacy Policy.
                          </p>
                        </div>
                        <div className='col text-end'>
                          <h5 className='text-danger'>Rp. 3.157.400</h5>
                          <br/>
                          <button type='button' className='btn btn-bayar btn-primary'>
                            Bayar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade show'
                    role='tabpanel'
                    id='InstanPayment'
                    aria-labelledby='InstanPayment-tab'
                  >
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                BCA KlikPay
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/bcaklikpay.png'
                                    alt=''
                                    class='bankmandiri'
                                    width='100px'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                LinkAja
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/linkaja.png'
                                    alt=''
                                    class='bankmandiri'
                                    width='100px'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                GoPay
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/gopau.png'
                                    alt=''
                                    class='bankmandiri'
                                    width='100px'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                Sakuku
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/sakuku.jfif'
                                    alt=''
                                    class='bankmandiri'
                                    width='50px'
                                    height='30px'
                                  />
                                </div>
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
                          <br/>
                          <p>
                            By clicking the button bellow, you agree to MyAIRFARE
                            Terms &amp; Condition and Privacy Policy.
                          </p>
                        </div>
                        <div className='col text-end'>
                          <h5 className='text-danger'>Rp. 3.157.400</h5>
                          <br/>
                          <button type='button' className='btn btn-bayar btn-primary'>
                            Bayar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade show mb-5'
                    role='tabpanel'
                    id='VirtualAcount'
                    aria-labelledby='VirtualAcount-tab'
                  >
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                BCA Virtual Account
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/bankBCA.jpg'
                                    alt=''
                                    class='bankmandiri'
                                    width='100px'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                Mandiri Virtual Account
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/bankMandiri.png'
                                    alt=''
                                    class='bankmandiri'
                                    width='100px'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                BRIVA
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/bankBRI.png'
                                    alt=''
                                    class='bankmandiri'
                                    width='100px'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row mx-auto pt-3 my-auto'>
                      <div className='col-1 mx-3 align-items-center'>
                        <div className='form-check mx-auto pt-4 mx-4'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault2'
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className='col-10'>
                        <div className='card card-satu'>
                          <div className='card-body'>
                            <div className='row row-1'>
                              <div className='col d-flex justify-content-center align-items-center'>
                                BNI Virtual Account
                                <div className='col text-end'>
                                  <img
                                    src='../assets/img/bankBNI.png'
                                    alt=''
                                    class='bankmandiri'
                                    width='100px'
                                  />
                                </div>
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
                      <div className='col text-end'>
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
                          <br/>
                          <p>
                            By clicking the button bellow, you agree to MyAIRFARE
                            Terms &amp; Condition and Privacy Policy.
                          </p>
                        </div>
                        <div className='col text-end'>
                          <h5 className='text-danger'>Rp. 3.157.400</h5>
                          <br/>
                          <button type='button' className='btn btn-bayar btn-primary'>
                            Bayar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col align-content-center mt-3'>
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
    </div>
  )
}

export default Payment
