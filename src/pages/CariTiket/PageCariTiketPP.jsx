import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField, Icon } from '@mui/material';
import { LocalizationProvider, DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Button, Form, Button as BsButton } from 'react-bootstrap';
import './PageCariTiketPP.css';

const PageCariTiketPP = () => {
  const [rectangleDateTimePickerValue, setRectangleDateTimePickerValue] = useState(null);
  const [rectangleDateTimePicker1Value, setRectangleDateTimePicker1Value] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {/* navbar */}
      <section class="jumbotron">
        <div class="container">
          <div class="row  mb-3">
            <div class="col ">
              <center>
                <h2>Pesan Tiket</h2>
              </center>
            </div>
          </div>
        </div>
      </section>

      {/* boxfilter */}
      <section className="boxfilter">
        <div className="container mt-5  mx-auto">
          <form className="row">
            <div className="col-md-5">
              <h3>Cari tiket pesawat murah disini</h3>
              <div className="form-check form-check-inline ">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Pergi Pulang
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  Sekali Jalan
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="Dari" className="form-label">
                  Dari
                </label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="kota keberangkatan" />
              </div>
              <div className="col">
                <label htmlFor="Tujuan" className="form-label">
                  Tujuan
                </label>
                <input type="Tujuan" className="form-control" id="inputEmail4" placeholder="kota tujuan" />
              </div>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">
                  kelas
                </label>
                <input list="form-control" className="form-control" id="inputEmail4" placeholder="- kelas tempat duduk -" />
                <datalist id="form-control">
                  <option value="Bisnis" />
                  <option value="Ekonomi" />
                </datalist>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">
                  Penumpang
                </label>
                <input list="form-control" className="form-control" id="inputEmail4" placeholder="Orang" />
                <datalist id="form-control">
                  <option value="Dewasa" />
                  <option value="Anak-Anak" />
                </datalist>
              </div>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">
                  Pergi
                </label>
                <input type="date" className="form-control" id="inputEmail4" />
              </div>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">
                  Pergi
                </label>
                <input type="date" className="form-control" id="inputEmail4" />
              </div>
            </div>
            <div className="row ml-3 text-center">
              <div className="col">
                <a className="btn btn-primary mt-3" href="#">
                  Cari Penerbangan
                </a>
                <a className="btn btn-danger mt-3" href="#">
                  Hapus Input
                </a>
              </div>
            </div>
          </form>
        </div>
        {/*  boxfilter hasil cari*/}
        <section className="hasil ">
          <div className="hasil-2">
            <div className="container">
              <div className="row  ">
                <div className="col offset-md-1 mt-3">
                  <p>
                    Jakarta &nbsp; <img className="vector" alt="" src="../assets/img/group2.svg" />
                    &nbsp; &nbsp;Bali
                  </p>
                  <p>Rab, 12 Okt 2022 &nbsp;|&nbsp;Penumpang&nbsp;| &nbsp;Economy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* hasil filter */}
        <section className="hasil-filter text center">
          <div className="tiket">
            <div className="container fs-7 fw-normal">
              <div className="row ">
                <div class="col-lg-2 ">
                  <img className="citilink" alt="" src="../assets/img/image-58@2x.png" />
                </div>
                <div class="col-lg-2 mt-3">
                  <img className="pesawat " alt="" src="../assets/img/Group 88.png" />
                  <p>Order ID: 209870</p>
                  <p>
                    Jakarta &nbsp; <img className="vector" alt="" src="../assets/img/group2.svg" />
                    &nbsp; &nbsp;Bali
                  </p>
                </div>
                <div class="col-lg-2 mt-3">
                  <p>Pulang Pergi - Dewasa 0, anak 0, bayi 0</p>
                  <p>
                    <img className="vector2" alt="" src="../assets/img/departure-43.svg" />
                    &nbsp; &nbsp; Rab, 12 Okt 2022
                  </p>
                  <p>
                    <img className="vector" alt="" src="../assets/img/departure-46.svg" />
                    &nbsp; &nbsp;Rab, 12 Okt 2022
                  </p>
                </div>

                <div class="col-lg-3 mt-5 ">
                  <h6>Rp. 3.157.400</h6>
                </div>
                <div class="col-lg-3 mt-4">
                  <a className="btn btn-primary mt-3" href="#">
                    Pilih
                  </a>
                </div>
              </div>
              <div className="row ">
                <div class="col-lg-2 ">
                  <img className="citilink" alt="" src="../assets/img/image-58@2x.png" />
                </div>
                <div class="col-lg-2 mt-3">
                  <img className="pesawat " alt="" src="../assets/img/Group 88.png" />
                  <p>Order ID: 209870</p>
                  <p>
                    Jakarta &nbsp; <img className="vector" alt="" src="../assets/img/group2.svg" />
                    &nbsp; &nbsp;Bali
                  </p>
                </div>
                <div class="col-lg-2 mt-3">
                  <p>Pulang Pergi - Dewasa 0, anak 0, bayi 0</p>
                  <p>
                    <img className="vector2" alt="" src="../assets/img/departure-43.svg" />
                    &nbsp; &nbsp; Rab, 12 Okt 2022
                  </p>
                  <p>
                    <img className="vector" alt="" src="../assets/img/departure-46.svg" />
                    &nbsp; &nbsp;Rab, 12 Okt 2022
                  </p>
                </div>

                <div class="col-lg-3 mt-5 ">
                  <h6>Rp. 3.157.400</h6>
                </div>
                <div class="col-lg-3 mt-4">
                  <a className="btn btn-primary mt-3" href="#">
                    Pilih
                  </a>
                </div>
              </div>
              <div className="row ">
                <div class="col-lg-2 ">
                  <img className="citilink" alt="" src="../assets/img/image-58@2x.png" />
                </div>
                <div class="col-lg-2 mt-3">
                  <img className="pesawat " alt="" src="../assets/img/Group 88.png" />
                  <p>Order ID: 209870</p>
                  <p>
                    Jakarta &nbsp; <img className="vector" alt="" src="../assets/img/group2.svg" />
                    &nbsp; &nbsp;Bali
                  </p>
                </div>
                <div class="col-lg-2 mt-3">
                  <p>Pulang Pergi - Dewasa 0, anak 0, bayi 0</p>
                  <p>
                    <img className="vector2" alt="" src="../assets/img/departure-43.svg" />
                    &nbsp; &nbsp; Rab, 12 Okt 2022
                  </p>
                  <p>
                    <img className="vector" alt="" src="../assets/img/departure-46.svg" />
                    &nbsp; &nbsp;Rab, 12 Okt 2022
                  </p>
                </div>

                <div class="col-lg-3 mt-5 ">
                  <h6>Rp. 3.157.400</h6>
                </div>
                <div class="col-lg-3 mt-4">
                  <a className="btn btn-primary mt-3" href="#">
                    Pilih
                  </a>
                </div>
              </div>
              <div className="row ">
                <div class="col-lg-2 ">
                  <img className="citilink" alt="" src="../assets/img/image-58@2x.png" />
                </div>
                <div class="col-lg-2 mt-3">
                  <img className="pesawat " alt="" src="../assets/img/Group 88.png" />
                  <p>Order ID: 209870</p>
                  <p>
                    Jakarta &nbsp; <img className="vector" alt="" src="../assets/img/group2.svg" />
                    &nbsp; &nbsp;Bali
                  </p>
                </div>
                <div class="col-lg-2 mt-3">
                  <p>Pulang Pergi - Dewasa 0, anak 0, bayi 0</p>
                  <p>
                    <img className="vector2" alt="" src="../assets/img/departure-43.svg" />
                    &nbsp; &nbsp; Rab, 12 Okt 2022
                  </p>
                  <p>
                    <img className="vector" alt="" src="../assets/img/departure-46.svg" />
                    &nbsp; &nbsp;Rab, 12 Okt 2022
                  </p>
                </div>

                <div class="col-lg-3 mt-5 ">
                  <h6>Rp. 3.157.400</h6>
                </div>
                <div class="col-lg-3 mt-4">
                  <a className="btn btn-primary mt-3" href="#">
                    Pilih
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* about */}
      <section className="about-container">
        <div className="about">
          <div class="container  ">
            <div class="row">
              <div class="col-lg-2 me-3 ">
                <img className="logo" alt="" src="../assets/img/MyAIRFARE.png" />
              </div>
              <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="/">Tentang Belight</a>
                  </li>
                  <li class="mb-2">
                    <a href="/">Procurement Online</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.2/">Hubungan Investor</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.2/examples/">Sales Office</a>
                  </li>
                  <li class="mb-2">
                    <a href="https://icons.getbootstrap.com/">Group Reservasi</a>
                  </li>
                  <li class="mb-2">
                    <a href="https://themes.getbootstrap.com/">Syarat & Ketentuan</a>
                  </li>
                  <li class="mb-2">
                    <a href="https://blog.getbootstrap.com/">PPID BeLight</a>
                  </li>
                  <li class="mb-2">
                    <a href="https://cottonbureau.com/people/bootstrap">Pasca Homologasi</a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="/">Mitra</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.2/getting-started/">Corporate Privilege</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.2/examples/starter-template/">Karir</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.2/getting-started/webpack/">CSR</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.2/getting-started/parcel/">FAQ</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.2/getting-started/vite/">Peta Situs</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.2/getting-started/vite/">Hubungi Kami</a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-lg-2  mb-3">
                <h6>Connect With Us</h6>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <img className="logo-apple" alt="" src="../assets/img/image 26.png" />
                  </li>
                  <li class="mb-2">
                    <img className="logo-playstrore" alt="" src="../assets/img/image 25.png" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}

    </LocalizationProvider>
  );
};

export default PageCariTiketPP;
