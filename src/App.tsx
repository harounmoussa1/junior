import { Routes, Route } from "react-router"
import Layout from './Layout'
import LandingPage from "./pages/LandingPage"
import AproposPage from './pages/AproposPage'
import ContactPage from './pages/ContactPage'
import OpinionsPage from './pages/OpinionsPage'
import AirbagThPage from './pages/productPages/AirbagThPage'
import CouverclePrPage from './pages/productPages/CouverclePrPage'
import FiltreUGPage from './pages/productPages/FiltreUGPage'
import GainTextilePage from './pages/productPages/GainTextilePage'
import JeuxPage from './pages/productPages/JeuxPage'
import ManchettePage from './pages/productPages/ManchettePage'
import MatelasPrPage from './pages/productPages/MatelasPrPage'
import TentePage from './pages/productPages/TentePage'
import PageTracking from './PageTracking' // Code du tracking Analytics

const App = () => {
  return (
    <>
      <PageTracking />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/apropos" element={<AproposPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/avis" element={<OpinionsPage />} />
          <Route path="/produits/airbags" element={<AirbagThPage />} />
          <Route path="/produits/isolation-thermique/couvercles" element={<CouverclePrPage />} />
          <Route path="/produits/climatisation/filtres" element={<FiltreUGPage />} />
          <Route path="/produits/climatisation/gains-textiles" element={<GainTextilePage />} />
          <Route path="/produits/jeux-gonflables" element={<JeuxPage />} />
          <Route path="/produits/climatisation/manchettes-souples" element={<ManchettePage />} />
          <Route path="/produits/isolation-thermique/matelas" element={<MatelasPrPage />} />
          <Route path="/produits/tente" element={<TentePage />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
