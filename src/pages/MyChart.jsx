
export default function MyChart(){
      return (
        <div>
          {/* judul */}
          <div className="gambar mt-5">
            <img src="aset/image 38.png" alt="" />
            <div className="jadwalPenerbangan position-relative text-center" style={{marginTop: '-55px', color: 'white'}}>
              <h4 className="tulisan fw-bold color">MyCart</h4>
            </div>
          </div>
          {/* isi */}
          <div className="container mt-5">
            <div className="card shadow-sm">
              <div className="card-body card-satu">
                <div className="hasilFilter d-flex mt-4 mb-3">
                  <div className="radioButton pt-5">
                    <div className="form-check pt-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                      </label>
                    </div>
                  </div>
                  <div className="card shadow-sm" style={{width: '1030px'}}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-lg-3 px-5 pt-3">
                          <img src="./aset/pesawat.png" alt="" />
                          <p><span className="text-black-50">Order ID: 209870</span><br />
                            Jakarta -&gt;&lt;- Bali</p>
                        </div>
                        <div className="col-12 col-lg-3">
                          <h6 className="text-black-50">Pulang Pergi - Dewasa 0, anak 0, bayi 0</h6><br />
                          <p>Pergi  : Rab, 12 Okt  2022 <br />
                            Pulang : Rab, 12 Okt  2022
                          </p>
                        </div>
                        <div className="col-12 col-lg-3 text-center">
                          <h4 className="text-danger fw-bolder pt-5 ">Rp. 3.157.400</h4>
                        </div>
                        <div className="col-12 col-lg-3 text-center "> 
                          <a className="text-primary text-decoration-none  ">Lihat Detail -&gt;</a>
                          <br />
                          <br />
                          <br />
                          <br />
                          <button className="btn btn-danger px-5">Hapus</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body card-dua">
                <div className="hasilFilter d-flex mt-4 mb-3">
                  <div className="radioButton pt-5">
                    <div className="form-check pt-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                      </label>
                    </div>
                  </div>
                  <div className="card shadow-sm" style={{width: '1030px'}}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col col-lg-3 px-5 pt-3">
                          <img src="./aset/pesawat.png" alt="" />
                          <p><span className="text-black-50">Order ID: 209870</span><br />
                            Jakarta -&gt;&lt;- Bali</p>
                        </div>
                        <div className="col col-lg-3">
                          <h6 className="text-black-50">Pulang Pergi - Dewasa 0, anak 0, bayi 0</h6><br />
                          <p>Pergi  : Rab, 12 Okt  2022 <br />
                            Pulang : Rab, 12 Okt  2022
                          </p>
                        </div>
                        <div className="col col-lg-3 text-center">
                          <h4 className="text-danger fw-bolder pt-5 ">Rp. 3.157.400</h4>
                        </div>
                        <div className="col col-lg-3 text-center "> 
                          <a className="text-primary text-decoration-none  ">Lihat Detail -&gt;</a>
                          <br />
                          <br />
                          <br />
                          <br />
                          <button className="btn btn-danger px-5">Hapus</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="fw-bolder text-end px-5">Total : <span className="text-danger">Rp. 3.157.400</span></h4>
              <div className="tombol text-end px-5 pt-3">
                <button className="btn btn-primary mb-3">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      );
  };