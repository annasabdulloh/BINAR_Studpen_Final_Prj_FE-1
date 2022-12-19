import { Button, Icon } from "@mui/material";
import { Link } from "react-router-dom";
// import "../../css/History/HistoryMenungguPembayaran.css";
// import "./responsiveHistory.css";

const HistoryMyTicket= () => {
  async function handleClickTab (idTarget){
    document.querySelectorAll('.tab-content').forEach( (tab) => {
      tab.classList.add('d-none')
    })
    document.querySelectorAll(".tab-label").forEach((tab) => {
      try{
        tab.classList.remove('border-bottom')
        tab.classList.remove('border-primary')
      }catch{

      }
    })
    document.querySelector(`#content-${idTarget}`).classList.remove('d-none')
    document.querySelector(`#${idTarget}`).classList.add('border-bottom')
    document.querySelector(`#${idTarget}`).classList.add('border-primary')
  }
  return (
    <div style={{ backgroundImage: "url('/assets/images/image-25@2x.png')" }}>
      <div className="row text-center">
        <div className="col-12 mb-5 p-3" style={{ backgroundImage: "url('/assets/images/image-38@2x.png')" }}>
          <h3 className="text-light">
            My Ticket
          </h3>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row text-center bg-white rounded-5 p-2">
          <div className="col-12">
            <div className="row">
              <div className="col-4">
                <button className="btn row" onClick={function(evt){handleClickTab('tab-wait-payment')}}>
                  <div className="col-12">
                    <img
                      className=""
                      alt=""
                      src="/assets/images/flatcoloriconsexpired.svg"
                    />
                  </div>
                  <div id="tab-wait-payment" className="col-12 tab-label border-bottom border-primary">
                    Menunggu Pembayaran
                  </div>
                </button>
              </div>
              <div className="col-4">
                <button className="btn row" onClick={function(evt){handleClickTab('tab-wait-depart')}}>
                  <div className="col-12">
                    <img
                      className=""
                      alt=""
                      src="/assets/images/group-45.svg"
                    />
                  </div>
                  <div id="tab-wait-depart" className="col-12 tab-label">
                    Penerbangan Akan Datang
                  </div>
                </button>
              </div>
              <div className="col-4">
                <button className="btn row" onClick={function(evt){handleClickTab('tab-expired-depart')}}>
                  <div className="col-12">
                    <img
                      className=""
                      alt=""
                      src="/assets/images/vector.svg"
                    />
                  </div>
                  <div id="tab-expired-depart" className="col-12 tab-label">
                    Penerbangan Terlewat
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div id="content-tab-wait-payment" className="col-12 tab-content mt-5">
            <div className="row p-5">

              <div className="col-12 shadow p-3 mb-5 bg-body rounded">
                <div className="row">
                  <div className="col-12 text-start">
                    <img src="/assets/images/airplane-icon.png" alt="logo"  />
                    <div>Order ID: 209870</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-12 text-start">
                        <div className="fw-bolder">Jakarta <img className="" alt="" src="/assets/images/2-way-arrow.png" /> Bali</div>
                      </div>
                      <div className="col-md-6 text-start">Pulang Pergi - Dewasa 0, anak 0, bayi 0</div>
                      <div className="col-md-3 text-start">| <img alt="" src="/assets/img/plane-1.png" /> Rab, 12 Okt 2022</div>
                      <div className="col-md-3 text-start mb-2">| <img alt="" src="/assets/img/plane-2.png" /> Rab, 12 Okt 2022</div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <button
                      className="btn btn-primary mb-2"
                    >
                      Pilih Metode Pembayaran
                    </button>
                  </div>
                  <a className="col-lg-2 text-end text-primary fw-bolder text-decoration-none">
                    Lihat detail <img src="/assets/images/arrow-right-blue.png" alt=""  />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div id="content-tab-wait-depart" className="col-12 tab-content mt-5 d-none">
            <div className="row p-5">

              <div className="col-12 shadow p-3 mb-5 bg-body rounded">
                <div className="row">
                  <div className="col-12 text-start">
                    <img src="/assets/images/airplane-icon.png" alt="logo"  />
                    <div>Order ID: 209870</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-12 text-start">
                        <div className="fw-bolder">Jakarta <img className="" alt="" src="/assets/images/2-way-arrow.png" /> Bali</div>
                      </div>
                      <div className="col-md-6 text-start">Pulang Pergi - Dewasa 0, anak 0, bayi 0</div>
                      <div className="col-md-3 text-start">| <img alt="" src="/assets/img/plane-1.png" /> Rab, 12 Okt 2022</div>
                      <div className="col-md-3 text-start mb-2">| <img alt="" src="/assets/img/plane-2.png" /> Rab, 12 Okt 2022</div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <button
                      className="btn btn-warning mb-2"
                    >
                      Akan Terbang
                    </button>
                  </div>
                  <a className="col-lg-2 text-end text-primary fw-bolder text-decoration-none">
                    Lihat detail <img src="/assets/images/arrow-right-blue.png" alt=""  />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div id="content-tab-expired-depart" className="col-12 tab-content mt-5 d-none">
            <div className="row p-5">

              <div className="col-12 shadow p-3 mb-5 bg-body rounded">
                <div className="row">
                  <div className="col-12 text-start">
                    <img src="/assets/images/airplane-icon.png" alt="logo"  />
                    <div>Order ID: 209870</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-12 text-start">
                        <div className="fw-bolder">Jakarta <img className="" alt="" src="/assets/images/2-way-arrow.png" /> Bali</div>
                      </div>
                      <div className="col-md-6 text-start">Pulang Pergi - Dewasa 0, anak 0, bayi 0</div>
                      <div className="col-md-3 text-start">| <img alt="" src="/assets/img/plane-1.png" /> Rab, 12 Okt 2022</div>
                      <div className="col-md-3 text-start mb-2">| <img alt="" src="/assets/img/plane-2.png" /> Rab, 12 Okt 2022</div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <button
                      className="btn btn-danger mb-2"
                    >
                      Kadaluwarsa
                    </button>
                  </div>
                  <a className="col-lg-2 text-end text-primary fw-bolder text-decoration-none">
                    Lihat detail <img src="/assets/images/arrow-right-blue.png" alt=""  />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default HistoryMyTicket;
