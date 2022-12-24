// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Checkin from './pages/Checkin'
import HasilCheckin from './pages/HasilCheckin'
import TentangKami from './pages/tentangKami';
import Verif from './pages/Verifikasi/index'
import VerifGagal from './pages/Verifikasi/VerifGagal'
import DetailPembelian from './pages/DetailPembelian'
import Jadwal from './pages/Jadwal/JadwalPenerbangan'
import NotifikasiAda from './pages/Notifikasi/NotifAda'
// import History from './pages/History'
import HistoryMyTicket from "./pages/History/HistoryMyTicket";
import Pribadi from './pages/Profile/Pribadi'
import Password from './pages/Profile/Password'
import { ProtectedRoute } from './components/Protected';
import VerifFirst from './pages/Verifikasi/verifyFirst';
import MyChart from './pages/MyChart';
import PageCariTiketPP from './pages/CariTiket/PageCariTiketPP';
import Page404 from './pages/Page404';
import DetailTransaksi from './pages/DetailTransaksi';

// Testing

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/jadwalpenerbangan' element={<ProtectedRoute active={false}><Jadwal /></ProtectedRoute>} />
        <Route path='/' element={<ProtectedRoute active={false}><Dashboard /></ProtectedRoute>} />
        <Route path='/please-verify' element={<VerifFirst></VerifFirst>} />
        <Route path='/search-ticket' element={<ProtectedRoute active={false}><PageCariTiketPP /></ProtectedRoute>}/>
        <Route path='/purchase-detail' element={<ProtectedRoute active={false}><DetailPembelian /></ProtectedRoute>} />

        <Route path='/checkin' element={<ProtectedRoute><Checkin /></ProtectedRoute>} />
        <Route path='/checkin-result' element={<ProtectedRoute><HasilCheckin /></ProtectedRoute>} />
        <Route path='/tentangkami' element={<ProtectedRoute><TentangKami /></ProtectedRoute>} />
        <Route path='/verif' element={<Verif />} />
        <Route path='/verif-failed' element={<VerifGagal />} />
        <Route path='/detail-transaction' element={<ProtectedRoute><DetailTransaksi /></ProtectedRoute>} />
        <Route path='/notifications' element={<ProtectedRoute><NotifikasiAda /></ProtectedRoute>} />
        <Route path="/my-ticket" element={<ProtectedRoute><HistoryMyTicket /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Pribadi /></ProtectedRoute>} />
        <Route path='/setting-password' element={<ProtectedRoute><Password /></ProtectedRoute>} />
        <Route path='/my-chart' element={<ProtectedRoute><MyChart /></ProtectedRoute>} />

        <Route path='*' element={<ProtectedRoute active={false}><Page404></Page404></ProtectedRoute>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
