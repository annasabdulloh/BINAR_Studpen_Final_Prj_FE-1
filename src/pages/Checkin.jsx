import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkin() {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState(null);
  const namadepan = useRef(null);
  const ticketid = useRef(null);
  const orderid = useRef(null);

  const onClick = async (e) => {
    e.preventDefault();

    console.log(namadepan.current.value);
    console.log(ticketid.current.value);
    console.log(orderid.current.value);

    const data = {
      namadepan: namadepan.current.value,
      ticketid: ticketid.current.value,
      orderid: orderid.current.value,
    };

    const aksestoken = localStorage.getItem("x-access-token");

    const isiorder = {
      ticket_id: data.ticketid,
      order_id: data.orderid,
    };
    try {
      const url = `${process.env.REACT_APP_API_SERVER_URL}`;
      const response = await fetch(`${url}/api/v1/checkin-manual`, {
        method: "POST",
        headers: {
          "x-access-token": aksestoken,
          "Content-type": "application/json",
        },
        body: JSON.stringify(isiorder),
      });

      const json = await response.json();
      console.log(json);
      console.log(isiorder);
      // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiODczYjJkNzUtOGM5NS00NDQ5LWI2Y2YtMDA5M2RmMzYzZWRkIiwiaWF0IjoxNjcwMjU5NTg4fQ.gxPNw68L1Nf5kdX9I1Fc535qDNbtLRezq3JmECVjr9A"
      // { token: string, user: any }
      // if (response.status === 200) {
      //   localStorage.setItem("x-access-token", json.token);
      // navigate("/hasilcheckin");
      // } else {
      //   setErrMsg(json.errors);
      // }
    } catch (error) {
      console.log(error);
      setErrMsg(error);
    }
  };

  return (
    <div>
      <div
        className="text-center
                      bg-image
                      p-3 mb-4"
        style={{ backgroundImage: 'url("/assets/images/image-38@2x.png")' }}
      >
        <div
          className="d-flex 
                        justify-content-center
                        align-items-center h-100"
        >
          <div>
            <h2 className="text-light fw-bold">IDENTIFIKASI</h2>
            <div className="text-light">
              Mulai check-in dengan tanggal keberangkatan dan referensi
              pemesanan atau nomor e-tiket Anda
            </div>
          </div>
        </div>
      </div>
      {errMsg != null ? (
        <div className="alert alert-danger mt-3 mb-3" role="alert">
          `{errMsg}`
        </div>
      ) : (
        ""
      )}

      <div className="row pt-3 d-flex justify-content-center align-content-center p-3">
        <div className="col-sm-8">
          <div className="card bg-danger bg-opacity-10 g-3 p-3 mx-auto">
            <div className="row col-12 g-3 p-3">
              <div
                className="text-center text-primary fw-bold"
                style={{ fontSize: 30 }}
              >
                Detail Anda
              </div>
              <div className="row justify-content-center align-content-center">
                <div action="" className="col-md-6 g-3 p-3">
                  <div className="row col-10 mb-3">
                    <label
                      htmlFor="namaDepan"
                      className="form-label text-primary"
                    >
                      Nama Depan
                    </label>
                    <input
                      ref={namadepan}
                      type="text"
                      className="form-control"
                      id="namaDepan"
                      placeholder="Masukkan Nama Depan Anda"
                    />
                  </div>
                  <div className="row col-10 mb-3">
                    <label
                      htmlFor="nomorTicket"
                      className="form-label text-primary"
                    >
                      Nomor E-Ticket
                    </label>
                    <input
                      ref={ticketid}
                      type="text"
                      className="form-control"
                      id="nomorTicket"
                      placeholder="Masukkan Nomor E-Ticket"
                    />
                  </div>
                  <div className="row col-10 mb-5">
                    <label
                      htmlFor="nomorRef"
                      className="form-label text-primary"
                    >
                      Nomor Order
                    </label>
                    <input
                      ref={orderid}
                      type="text"
                      className="form-control"
                      id="nomorRef"
                      placeholder="Masukkan Nomor Order"
                    />
                  </div>
                  <div>
                    <Link className="row col-10 fw-bold">
                      <button
                        onClick={onClick}
                        className="p-2 mb-3 bg-primary text-white fw-bold border-0"
                      >
                        Periksa Tiket
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="row col-6 pt-5 justify-content-center align-content-center">
                  <h5 className="text-primary fw-bold text-center">SCAN QR</h5>
                  <Link to="/hasilcheckin" className="row col-10 p-3">
                    <img
                      className="mb-10"
                      src="/assets/img/Group 11.svg"
                      alt="group11"
                    />
                  </Link>
                  <h5 className="text-secondary fw-bold text-center p-3">
                    Scan QR menggunakan HP anda
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
