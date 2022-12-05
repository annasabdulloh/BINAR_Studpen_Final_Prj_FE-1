import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-svg-core"
import Axios from "axios";
import TextField from '@material-ui/core/TextField';

import {React, BrowserRouter, Routes, Route, useState } from "react-router-dom";
import SettingProfile from './pages/Profile/settDataPribadi'
import Jadwal from "./pages/jadwalPenerbangan/jadwal";
import Notifikasi from "./pages/Notifikasi/notif";
import NotifikasiAda from "./pages/Notifikasi/notifAda"
import Verifikasi from "./pages/Verifikasi/verif";
import VerifikasiGagal from "./pages/Verifikasi/verifGagal";
import SettingPass from "./pages/Profile/settPass";


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/settingData" element ={<SettingProfile />}/>
        <Route path="/jadwalPenerbangan" element ={<Jadwal />}/>
        <Route path="/notifikasi" element ={<Notifikasi />}/>
        <Route path="/notifikasiAda" element ={<NotifikasiAda/>}/>
        <Route path="/verifikasi" element ={<Verifikasi/>}/>
        <Route path="/verifikasiGagal" element ={<VerifikasiGagal/>}/>
        <Route path="/settingPassword" element ={<SettingPass/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
