import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
        <div className='collapse navbar-collapse ' id='navbarTogglerDemo01'>
          <a className='navbar-brand' href='#'>
            <img src='/assets/img/logo web1.svg' className='logoweb1'></img>
          </a>
          <ul
            className='navbar-nav'
            style={{ marginLeft: '170px', marginRight: '10px' }}
          >
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                PESAWAT
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/checkin'>
                CHECK IN
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/tentangkami'>
                TENTANG KAMI
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/history'>
                HISTORY
              </Link>
            </li>
          </ul>
          <Link className='nav-link p-3' to='/login'>
            <button
              className='btn btn-secondary'
              style={{ marginLeft: '90px' }}
            >
              Login
            </button>
          </Link>
          <Link className='nav-link' to='/register'>
            <button className='btn btn-primary' style={{ marginRight: '10px' }}>
              Daftar
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
