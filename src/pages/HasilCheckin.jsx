export default function HasilCheckin() {
  return (
    <div className='hasilcheckin'>
      <div
        className='text-center bg-image p-3 mb-4'
        style={{ backgroundImage: 'url("./assets/img/image 25.svg")' }}
      >
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div>
            <h2 className='text-light fw-bold'>Tiket Anda</h2>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-content-center">
        <div className="col-sm-8">
          <img
              style={{width: 200}}
              src='./assets/images/logo.png' 
              className='logo'
          />
        </div>
        <h3 className="col-sm-1">
          E-Tiket
        </h3>
      </div>
      <div className="d-flex justify-content-center align-content-center p-3">
        <div className="col-sm-10">
          <div className="card g-3 p-5 mx-auto">
            <div className="col-12">
              <div className="row pt-3 justify-content-center align-content-center p-3">
                <div className="col-3 my-3">
                  <img
                      style={{width: 130}}
                      src='./assets/images/logo.png' 
                      className='logo'
                  />
                </div>
                <div className="col-3 my-3">
                  <div className="fw-bold">Nama Pemesan</div>
                  <div>Andi Rayhan</div>
                </div>
                <div className="col-3 my-3">
                  <div className="fw-bold">Tanggal Pesan</div>
                  <div>Jum'at, 25 Desember 2022</div>
                </div>
                <div className="col-3 my-3">
                  <div className="fw-bold">Nomor E-Ticket</div>
                  <div className="fw-bold text-primary">3xvv2H</div>
                </div>
                <div className="row pt-3">
                  <div className="col-md-3 my-3">
                    <div className="card g-3 p-3 mb-3 text-center fw-bold bg-secondary bg-opacity-25 text-primary">
                      Nomor Penerbangan
                    </div>
                    <div className="card g-3 p-3 bg-secondary bg-opacity-10">
                      <div>GA 640/GA 7640</div>
                      <div>Kelas : Ekonomi</div>
                    </div>
                  </div>
                  <div className="col-md-4 my-3">
                    <div className="card g-3 p-1 mb-3 text-center fw-bold bg-secondary bg-opacity-25">
                      <div className=" text-primary">Keberangkatan</div>
                      <div>Minggu, 27 Desember 2022</div>
                    </div>
                    <div className="card g-3 p-3 bg-secondary bg-opacity-10">
                      <div>Jakarta-cengkareng(CGK)
                          Suekarno Hatta International
                          Airport
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 my-3">
                    <div className="card g-3 p-1 mb-3 text-center fw-bold bg-secondary bg-opacity-25">
                      <div className=" text-primary">Kedatangan</div>
                      <div>Minggu, 27 Desember 2022</div>
                    </div>
                    <div className="card g-3 p-3 bg-secondary bg-opacity-10">
                      <div>Lombok Internaional Airport</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-3 mb-2 bg-primary text-white fw-bold text-center">Detail Penumpang</div>
              <table className="table justify-content-center align-content-center mb-5">
                <thead className="table-primary text-primary">
                  <tr>
                    <th scope="col">NO</th>
                    <th scope="col">Title</th>
                    <th scope="col">Nama Penumpang</th>
                    <th scope="col">Kelas</th>
                    <th scope="col">No.Kursi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">1</th>
                    <th scope="col">Mr</th>
                    <th scope="col">Andi Rayhan</th>
                    <th scope="col">Ekonomi</th>
                    <th scope="col">104</th>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">MyAIRFARE INDONESIA, JALAN RAYA SIRIH NO. 21 JAKARTA</div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="d-flex justify-content-center align-content-center p-3">
              <div className="col-5 my-3">Anda dapat menyimpan dan mencetak tiket</div>
              <div className="col-sm-2 my-3">
                <img src="/assets/img/image 37.svg"></img>
                <div className='btn btn-primary btn-checkin'>Simpan</div>
              </div>
              <div className="col-sm-2 my-3">
                <img src="/assets/img/image 35.svg"></img>
                <div className='btn btn-primary btn-checkin'>Cetak Tiket</div>
              </div>
              <div className="col-sm-2 my-3">
                <img src="/assets/img/image 36.svg"></img>
                <div className='btn btn-primary btn-checkin'>Kirim Via E-Mail</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src='/assets/img/Image 25.svg'
        alt=''
        className='img-checkin position-absolute'
      />
      <h2
        className='position-relative text-light text-center fw-bold'
        style={{ paddingTop: '90px' }}
      >
        TIKET ANDA
      </h2>
      <div className='col'>
        <img
          src='/assets/img/logo web1.svg'
          alt=''
          className='position-absolute'
          style={{ marginLeft: '130px', marginTop: '100px', width: '250px' }}
        />
      </div>
      <div className='col'>
        <h3
          className='position-relative'
          style={{ marginLeft: '1000px', marginTop: '130px' }}
        >
          E-Ticket
        </h3>
      </div>
      <div className='container border mt-5' style={{ background: '#fff' }}>
        <div className='row p-5'>
          <div className='col-3 text-center'>
            <img
              src='/assets/img/logo web.svg'
              alt=''
              style={{ width: '170px' }}
            />
          </div>
          <div className='col-3'>
            <p className='fw-bold'>Nama Pemesan</p>
            <p className=''>Nama Pemesan</p>
          </div>
          <div className='col-3'>
            <p className='fw-bold'>Tanggal Pesan</p>
            <p className=''>Senin, 05 Desember 2022</p>
          </div>
          <div className='col-3'>
            <p className='fw-bold'>Nomor E-Ticket</p>
            <p className=''>3xxx2H</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <div
              className='card text-center fw-bold center'
              style={{
                background: '#D9D9D9',
                width: '300px',
                marginLeft: '50px',
              }}
            >
              <div className='card-title text-primary pt-3 pb-3'>
                Nomor Penerbangan
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div
              className='card text-center fw-bold'
              style={{
                background: '#D9D9D9',
                width: '300px',
                marginLeft: '25px',
              }}
            >
              <div className='card-title text-primary'>Keberangkatan</div>
              <div className='card-title'> Minggu, 27 Desember 2022</div>
            </div>
          </div>
          <div className='col-4'>
            <div
              className='card text-center fw-bold'
              style={{ background: '#D9D9D9', width: '300px' }}
            >
              <div className='card-title text-primary'>Kedatangan</div>
              <div className='card-title'> Minggu, 27 Desember 2022</div>
            </div>
          </div>
        </div>

        <div className='row mt-2 mb-3'>
          <div className='col-4'>
            <div
              className='card'
              style={{
                width: '300px',
                marginLeft: '50px',
                background: '#FAF6F6',
              }}
            >
              <div className='card-text card-checkin mb-2'>
                GA 640/GA 7640
                <br /> Kelas : Ekonomi
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div
              className='card'
              style={{
                width: '300px',
                marginLeft: '25px',
                background: '#FAF6F6',
              }}
            >
              <div className='card-title card-checkin'>
                Jakarta-Cengkareng (CGK) Suekarno Hatta International Airport
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div
              className='card'
              style={{ width: '300px', background: '#FAF6F6' }}
            >
              <div className='card-title card-checkin mb-4'>
                Lombok Internaional Airport
              </div>
            </div>
          </div>

          <div
            className='col pt-5 overflow-auto'
            style={{ marginLeft: '50px' }}
          >
            <div
              className='card text-light fw-bold bg-primary pt-1 pb-1'
              style={{ paddingLeft: '50px', width: '1010px' }}
            >
              Detail Penumpang
            </div>
            <table className='table' style={{ width: '1010px' }}>
              <thead>
                <tr>
                  <th scope='col'>No.</th>
                  <th scope='col'>Title</th>
                  <th scope='col'>Nama Penumpang</th>
                  <th scope='col'>Kelas</th>
                  <th scope='col'>No. Kursi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Mr</td>
                  <td>Nama Penumpang</td>
                  <td>Ekonomi</td>
                  <td>104</td>
                </tr>
              </tbody>
            </table>
            <p className='text-center fw-bold mt-5'>
              MyAIRFARE INDONESIA, JALAN RAYA SIRIH NO. 21 JAKARTA
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row mt-3'>
          <p className='col-6 col-xl-6'>
            Anda dapat menyimpan dan mencetak tiket
          </p>
          <div className='col-6 col-xl-6'>
            <img src='/assets/img/image 37.svg' alt='' />
            <button className='btn btn-primary btn-checkin'>Simpan</button>
            <img src='/assets/img/image 35.svg' alt='' />
            <button className='btn btn-primary btn-checkin'>Cetak Tiket</button>
            <img src='/assets/img/image 36.svg' alt='' />
            <button className='btn btn-primary btn-checkin'>
              Kirim Via-Email
            </button>
          </div>
        </div>
      </div> */}
      {/* <div className='mt-3'>
        <div className=''>
          <p>Anda dapat menyimpan dan mencetak tiket</p>
          <img src='/assets/img/image 37.svg' alt='' />
          <button className='btn btn-primary btn-checkin'>Simpan</button>
          <img src='/assets/img/image 35.svg' alt='' />
          <button className='btn btn-primary btn-checkin'>Cetak Tiket</button>
          <img src='/assets/img/image 36.svg' alt='' />
          <button className='btn btn-primary btn-checkin'>
            Kirim Via-Email
          </button>
        </div>
        <div className='col col-check'></div>
        <div className='col'></div>
        <div className='col'></div>
      </div> */}
    </div>
  )
}
