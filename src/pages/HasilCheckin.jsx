export default function HasilCheckin() {
  return (
    <div className='hasilcheckin'>
      {/* Header */}
      <div
        className='text-center 
                    bg-image
                    p-3
                    mb-4'
        style={{ backgroundImage: 'url("/assets/images/image-38@2x.png")' }}
      >
        <div
          className='d-flex 
                          justify-content-center
                          align-items-center 
                          h-100'
        >
          <div>
            <h2
              className='text-light
                            fw-bold'
            >
              Tiket Anda
            </h2>
          </div>
        </div>
      </div>

      {/* Body */}
      <div
        className='col-md-12 d-flex 
                        justify-content-center 
                        align-items-center
                        p-3'
      >
        <div className='col-md-8 my-3'>
          <img
            style={{ width: 200 }}
            src='/assets/images/logo.png'
            className='logo'
          />
        </div>
        <div
          className='d-flex
                        justify-content-center
                        align-items-center
                        p-3'
        >
          <div className='col-md-4 my-3'>
            <h3>E-Ticket</h3>
          </div>
        </div>
      </div>

      {/* Body-Rectangle */}
      <div
        className='row d-flex
                      justify-content-center
                      align-content-center 
                      p-3'
      >
        <div className='col-sm-10'>
          <div
            className='card g-3 
                          p-3
                          mx-auto'
          >
            <div className='col-12'>
              <div
                className='row pt-4 
                              justify-content-center
                              align-content-center 
                              p-3'
              >
                <div
                  className='col-md-3 
                                  my-3'
                >
                  <img
                    style={{ width: 130 }}
                    src='/assets/images/logo.png'
                    className='logo'
                  />
                </div>
                <div
                  className='col-md-2 
                                  my-3'
                >
                  <div className='fw-bold'>Nama Pemesan</div>
                  <div>Andi Rayhan</div>
                </div>
                <div
                  className='col-md-3 
                                  my-3'
                >
                  <div className='fw-bold'>Tanggal Pesan</div>
                  <div>Jum&#39;at&apos; 25 Desember 2022</div>
                </div>
                <div
                  className='col-md-2 
                                  my-3'
                >
                  <div className='fw-bold'>Nomor E-Ticket</div>
                  <div
                    className='fw-bold 
                                    text-primary'
                  >
                    3xvv2H
                  </div>
                </div>
                <div
                  className='row
                                pt-3
                                mb-4'
                >
                  <div
                    className='col-md-4 
                                  my-3'
                  >
                    <div
                      className='card g-3 p-3 mb-1 
                                    text-center 
                                    fw-bold 
                                    bg-secondary 
                                    bg-opacity-25 
                                    text-primary'
                    >
                      Nomor Penerbangan
                    </div>
                    <div
                      className='card g-3 p-3 
                                    bg-secondary 
                                    bg-opacity-10'
                    >
                      <div>GA 640/GA 7640</div>
                      <div>Kelas : Ekonomi</div>
                    </div>
                  </div>
                  <div className='col-md-4 my-3'>
                    <div
                      className='card g-3 p-1 mb-1 
                                    text-center 
                                    fw-bold 
                                    bg-secondary 
                                    bg-opacity-25'
                    >
                      <div className=' text-primary'>Keberangkatan</div>
                      <div>Minggu, 27 Desember 2022</div>
                    </div>
                    <div
                      className='card g-3 p-3 
                                    bg-secondary 
                                    bg-opacity-10'
                    >
                      <div>
                        Jakarta-cengkareng(CGK) Suekarno Hatta International
                        Airport
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 my-3'>
                    <div
                      className='card g-3 p-1 mb-1 
                                    text-center 
                                    fw-bold 
                                    bg-secondary 
                                    bg-opacity-25'
                    >
                      <div className=' text-primary'>Kedatangan</div>
                      <div>Minggu, 27 Desember 2022</div>
                    </div>
                    <div
                      className='card g-3 p-3 
                                    bg-secondary 
                                    bg-opacity-10'
                    >
                      <div>Lombok International Airport</div>
                    </div>
                  </div>
                </div>
                <div
                  className='p-3 mb-2 
                            bg-primary 
                            text-white 
                            fw-bold 
                            text-center'
                >
                  Detail Penumpang
                </div>
                <table
                  className='col-md-3 table 
                                  justify-content-center 
                                  align-content-center 
                                  mb-5'
                >
                  <thead
                    className='table-primary 
                                    text-primary'
                  >
                    <tr>
                      <th scope='col'>NO</th>
                      <th scope='col'>Title</th>
                      <th scope='col'>Nama Penumpang</th>
                      <th scope='col'>Kelas</th>
                      <th scope='col'>No.Kursi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='col'>1</th>
                      <th scope='col'>Mr</th>
                      <th scope='col'>Andi Rayhan</th>
                      <th scope='col'>Ekonomi</th>
                      <th scope='col'>104</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='text-center'>
                MyAIRFARE INDONESIA, JALAN RAYA SIRIH NO. 21 JAKARTA
              </div>
            </div>
          </div>
          <div
            className='col-md-12 d-flex 
                              justify-content-center 
                              align-items-center
                              p-3'
          >
            <div className='col-md-5 my-3'>
              Anda dapat menyimpan dan mencetak tiket
            </div>
            <div
              className='row pt-10 d-flex
                                  justify-content-center
                                  align-items-center
                                  p-3'
            >
                <div className='col-lg-4 my-3'>
                  {/* <img src='/assets/img/image 37.svg'></img> */}
                  <button
                    className='btn btn-primary 
                                      btn-checkin'
                  >
                    Simpan
                  </button>
                </div>
                <div className='col-lg-4 my-3'>
                  {/* <img src='/assets/img/image 35.svg'></img> */}
                  <button
                    className='btn btn-primary 
                                      btn-checkin'
                  >
                    Cetak Tiket
                  </button>
                </div>
                <div className='col-lg-4 my-3'>
                  {/* <img src='/assets/img/image 36.svg'></img> */}
                  <button
                    className='btn btn-primary
                                      btn-checkin'
                  >
                    Kirim Via E-Mail
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
