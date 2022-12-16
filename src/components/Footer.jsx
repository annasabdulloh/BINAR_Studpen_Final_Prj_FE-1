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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
