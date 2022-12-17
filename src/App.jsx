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
import TentangKami from './pages/TentangKami'
import Verif from './pages/Verifikasi/index'
import VerifGagal from './pages/Verifikasi/VerifGagal'
import DetailPembelian from './pages/DetailPembelian'
import DetailPembelianTerisi from './pages/DetailPembelianTerisi'
import Jadwal from './pages/Jadwal/JadwalPenerbangan'
import Notif from './pages/Notifikasi/Notif'
import NotifikasiAda from './pages/Notifikasi/NotifAda'
import HistoryPembayaran from './pages/history'
import Pribadi from './pages/Profile/Pribadi'
import Password from './pages/Profile/Password'
import Payment from './pages/payment'
// import DetailPembelian from "./pages/DetailPembelian/DetailPembelian"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkin' element={<Checkin />} />
        <Route path='/hasilcheckin' element={<HasilCheckin />} />
        <Route path='/tentangkami' element={<TentangKami />} />
        <Route path='/verif' element={<Verif />} />
        <Route path='/verifikasigagal' element={<VerifGagal />} />
        <Route path='/detailpembelian' element={<DetailPembelian />} />
        <Route path='/jadwalpenerbangan' element={<Jadwal />} />
        <Route
          path='/detailpembelianterisi'
          element={<DetailPembelianTerisi />}
        />
        <Route path='/notifikasi' element={<Notif />} />
        <Route path='/notifikasiada' element={<NotifikasiAda />} />
        <Route path='/history' element={<HistoryPembayaran />} />
        <Route path='/profile' element={<Pribadi />} />
        <Route path='/settingPassword' element={<Password />} />
        <Route path='/payment' element={<Payment />} />
        {/* <Route path='/detailpembelian' element={<DetailPembelian />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
