const Footer = () => {
  return (
    <div className='foot'>
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
              <img src='/assets/img/apstore.png' alt='appstore' />
            </a>
            <a href='#'>
              {' '}
              <img src='/assets/img/googleplay.png' alt='googleplay' />
            </a>
          </div>
        </div>
      </div>
      <div className='footergambar mt-5'>
        <img
          src='/assets/img/image 38.png'
          alt=''
          width='1440px'
          height='400px'
        />
        <div
          className='row d-flex justify-content-center'
          style={{ display: 'relative', marginTop: '-300px' }}
        >
          <div className='col  text-center'>
            <img src='/assets/img/logo web.jpg' alt='' width='300px' />
          </div>
          <div className='col text-center'>
            <img src='/assets/img/start.png' alt='' width='300px' />
          </div>
          <div className='col text-center'>
            <img src='/assets/img/word.png' alt='' width='300px' />
          <div className='col-md-3'>
            <h2 className='fw-bold'>MyAIRFARE</h2>
          </div>
          <div className='col-md-3'>
            <p>Tentang BeLight</p>
            <p>Procurement Online</p>
            <p>Hubungan Investor</p>
            <p>Sales Office</p>
            <p>Group Reservasi</p>
            <p>Syarat & Ketentuan</p>
            <p>PPID MyAIRFARE</p>
            <p>Pasca Homologasi</p>
          </div>
          <div className='col-md-3'>
            <p>Mitra</p>
            <p>Corporate Privilege</p>
            <p>Customer Care Polic</p>
            <p>Karir</p>
            <p>CSR</p>
            <p>FAQ</p>
            <p>Peta Situs</p>
            <p>Hubungi Kami</p>
          </div>
          <div className='col-md-3 before-end'>
            <h5>Connect With Us</h5>
            <img
              src='/assets/img/image 19.svg'
              className='mt-5'
              style={{ maxWidth: '100%' }}
            ></img>
            <br />
            <img
              src='/assets/img/image 20.svg'
              className='mt-5'
              style={{ maxWidth: '100%' }}
            ></img>
          </div>
        </div>
      </div>

      <div className='bg-primary m-0 p-5'>
        <div className='row'>
          <div className='col-lg-4'>
            <img
              src='/assets/img/Group 10.svg'
              style={{ Width: '100%' }}
              className='group-10'
            ></img>
          </div>
          <div className='col-lg-4 mt-3'>
            <img
              src='/assets/img/image 21.svg'
              style={{ Width: '100%' }}
              className='group-11'
            ></img>
          </div>
          <div className='col-lg-4 mt-3'>
            <img
              src='/assets/img/image 22.svg'
              style={{ Width: '100%' }}
              className='group-11'
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
