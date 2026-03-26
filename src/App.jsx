import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import FarmyPV from './pages/FarmyPV'
import MagazynyEnergii from './pages/MagazynyEnergii'
import FarmyWiatrowe from './pages/FarmyWiatrowe'
import Firma from './pages/Firma'
import Realizacje from './pages/Realizacje'
import CaseStudyCLM from './pages/CaseStudyCLM'
import Aktualnosci from './pages/Aktualnosci'
import Kariera from './pages/Kariera'
import Kontakt from './pages/Kontakt'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="co-robimy/farmy-pv" element={<FarmyPV />} />
          <Route path="co-robimy/magazyny-energii" element={<MagazynyEnergii />} />
          <Route path="co-robimy/farmy-wiatrowe" element={<FarmyWiatrowe />} />
          <Route path="firma" element={<Firma />} />
          <Route path="realizacje" element={<Realizacje />} />
          <Route path="realizacje/clm-park" element={<CaseStudyCLM />} />
          <Route path="aktualnosci" element={<Aktualnosci />} />
          <Route path="kariera" element={<Kariera />} />
          <Route path="kontakt" element={<Kontakt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
