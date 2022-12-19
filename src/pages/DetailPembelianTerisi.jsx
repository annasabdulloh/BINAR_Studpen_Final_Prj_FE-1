import { Link } from 'react-router-dom'

function DetailPembelianTerisi() {
  return (
    <div>
      <div
        className='text-center bg-image p-3 mb-3'
        style={{ backgroundImage: 'url("./assets/images/image-38@2x.png")' }}
      >
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div>
            <h3 className='text-light fw-bold'>
              Detail Pemesanan Tiket pesawat
            </h3>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center align-content-center p-3'>
        <div className='col-sm-3 p-3 pt-0'>
          <div className='p-2 bg-primary text-light text-center fs-4 border-0 d-flex justify-content-center align-items-center'>
            <div className='col-md-3 my-2'>
              <img
                className='p-2 d-flex justify-content-center'
                src='./assets/images/Vector.svg'
              ></img>
            </div>
            <div className='col-md-8 my-2'>JAKARTA - BALI</div>
          </div>
          <div className='p-2 bg-secondary fs-5 border-0 justify-content-center align-items-center bg-opacity-50'>
            <div className='p-3'>
              Keberangkatan : <br />
              19/20/2022
            </div>
            <div className='p-3'>
              Kedatangan : <br />
              19/20/2022
            </div>
            <div className='p-3 fw-bold'>GA 640/GA 7640</div>
          </div>
          <div className='p-2 bg-danger text-light fw-bold text-center fs-6 border-0 justify-content-center align-items-center bg-opacity-75'>
            Reschedule not available
          </div>
        </div>
        <div className='col-sm-7'>
          <div className='p-3 bg-secondary text-primary fw-bold text-center bg-opacity-25 fs-4 border border-secondary border-bottom-0'>
            Detail Pesanan
          </div>
          <div className='card g-3 p-5 mx-auto rounded-0 border border-secondary border-top-0'>
            <div className='text-primary fw-bold fs-4'>Booking Anda</div>
            <div className='shadow mb-5 bg-body rounded'>
              <img className='p-3' src='./assets/images/Group 146.svg' />
              Anda login sebagai nama user
            </div>
            <div className='text-primary fw-bold fs-4'>Full Detail</div>
            <div action='' className='col-12'>
              <div className='row d-flex pt-1 p-1 mb-2 align-content-center justify-content-center'>
                <div className='col-md-6 my-3'>
                  <div>Nama Pemesan</div>
                </div>
                <div className='col-md-6 my-3'>
                  <Link
                    to='/detailpembelian'
                    className='fw-bold'
                    style={{ textDecoration: 'none' }}
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
              <table className='table table-bordered border-secondary'>
                <tbody>
                  <tr>
                    <td colSpan='2' className='text-primary'>
                      Nomor Telepon
                    </td>
                    <td className='text-primary'>Email</td>
                  </tr>
                  <tr>
                    <td colSpan='2' className='text-secondary'>
                      08123456789
                    </td>
                    <td className='text-secondary'>user@gmail.com</td>
                  </tr>
                  <tr>
                    <td className='text-primary'>Title</td>
                    <td className='text-primary'>No. Kursi</td>
                    <td className='text-primary'>Tanggal Lahir</td>
                  </tr>
                  <tr>
                    <td className='text-secondary'>Mr</td>
                    <td className='text-secondary'>104</td>
                    <td className='text-secondary'>19/20/2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='text-primary fw-bold fs-4'>Harga Detail</div>
            <div className='d-flex justify-content-center align-items-center shadow mb-3 bg-body rounded'>
              <img className='p-3' src='./assets/images/image 39.svg' />
              Harga tiket yang harus di bayar
              <div className='p-3 col-md-6 text-end text-danger fw-bold'>
                Rp. 4.500.000
              </div>
            </div>
            <div className='mb-5 text-secondary'>
              Harga bisa berubah setiap saat, pastikan anda tetap mengupdate
            </div>
            <div className='row col-15 d-flex justify-content-center align-content-center p-3'>
              <div className='col-md-4 my-1'>
                <div className='btn btn-primary'>Lanjut Pembayaran</div>
              </div>
              <div className='col-md-1 my-1'>
                <div className='btn btn-danger'>Cancel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPembelianTerisi
