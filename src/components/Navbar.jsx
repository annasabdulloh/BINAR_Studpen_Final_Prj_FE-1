import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img src='/assets/img/logo web.png' alt='MyAIRFARE' width='200px' />
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
          <ul className='navbar-nav fs-6 mx-auto justify-content-center align-items-center'>
            <li className='nav-item '>
              <a className='nav-link' aria-current='page' href='#'>
                PESAWAT
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                CHECK IN
              </a>
            </li>
            <li className='nav-item '>
              <a className='nav-link' href='#'>
                TENTANG KAMI
              </a>
            </li>
            <li className='nav-item '>
              <a className='nav-link' href='#'>
                HISTORY
              </a>
            </li>
            <li className='nav-item d-flex  px-5'></li>
            <li className='nav-item dropdown d-flex '></li>
            <li className='nav-item mx-2'>
              <a className='nav-link' href='#'>
                <img src='/assets/img/mdi_cart-minus.svg' alt='' />
              </a>
            </li>
            <li className='nav-item '>
              <a className='nav-link' href='#'>
                <img src='/assets/img/image 70.svg' alt='' />
              </a>
            </li>
            {/* <li className='nav-item'>
                    <Link to='#' className='btn btn-primary'>Login</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='#' className='btn btn-secondary mx-2'>Registrasi</Link>
                  </li> */}
            <Link to='/login' className='btn btn-primary'>
              Login
            </Link>
            <Link to='/register' className='btn btn-secondary mx-2'>
              Registrasi
            </Link>
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
    // <nav className='navbar navbar-expand-lg'>
    //   <div className='container-fluid'>
    //     {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    //   <span className="navbar-toggler-icon"></span>
    // </button> */}
    //     <div className='collapse navbar-collapse ' id='navbarTogglerDemo01'>
    //       <a className='navbar-brand' href='#'>
    //         <img src='/assets/img/logo web1.svg' className='logoweb1'></img>
    //       </a>
    //       <ul
    //         className='navbar-nav'
    //         style={{ marginLeft: '170px', marginRight: '10px' }}
    //       >
    //         <li className='nav-item active'>
    //           <Link className='nav-link' to='/'>
    //             PESAWAT
    //           </Link>
    //         </li>
    //         <li className='nav-item active'>
    //           <Link className='nav-link' to='/checkin'>
    //             CHECK IN
    //           </Link>
    //         </li>
    //         <li className='nav-item active'>
    //           <Link className='nav-link' to='/tentangkami'>
    //             TENTANG KAMI
    //           </Link>
    //         </li>
    //         <li className='nav-item active'>
    //           <Link className='nav-link' to='/history'>
    //             HISTORY
    //           </Link>
    //         </li>
    //       </ul>
    //       <Link className='nav-link p-3' to='/login'>
    //         <button
    //           className='btn btn-secondary'
    //           style={{ marginLeft: '90px' }}
    //         >
    //           Login
    //         </button>
    //       </Link>
    //       <Link className='nav-link' to='/register'>
    //         <button className='btn btn-primary' style={{ marginRight: '10px' }}>
    //           Daftar
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar
