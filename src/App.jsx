import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
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
        <Route path='/verif' element={<Verif />}/>
        {/* <Route path='/detailpembelian' element={<DetailPembelian />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
