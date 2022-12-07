export default function Login() {
  return (
    <div>
      <img
        src='/assets/img/Image 24.svg'
        alt=''
        className='position-absolute bg-log'
      />

      <img
        src='/assets/img/logo web1.svg'
        className='login position-relative'
      />
      <div className='wrapper-login mx-auto position-relative'>
        <div className='title mt-5 pt-5  fw-bold'>Login Member</div>
        <form action=''>
          <div className='field'>
            <label htmlFor='Username'>Username</label>
            <br />
            <input
              type='text'
              placeholder='Masukkan Username'
              id='Username'
              className='form-control'
              required
            />
          </div>
          <div className='field mt-5'>
            <label htmlFor='Password'>Password</label>
            <br />
            <input
              type='password'
              placeholder='Masukkan Password'
              id='Password'
              className='form-control'
              required
            />
          </div>
          <div className='field button'>
            <input type='submit' value={'Login'} />
          </div>
          <div className='field'>
            <input type='submit' value={'Login Dengan Google'} />
          </div>

          <div className='signup-link text-center'>
            Belum memiliki akun : <a href='#'> Register</a>
          </div>
        </form>
      </div>
    </div>
  )
}
