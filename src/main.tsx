import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AproposPage from './pages/AproposPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import OpinionsPage from './pages/OpinionsPage.tsx'
import AirbagThPage from './pages/productPages/AirbagThPage.tsx'
import CouverclePrPage from './pages/productPages/CouverclePrPage.tsx'
import FiltreUGPage from './pages/productPages/FiltreUGPage.tsx'
import GainTextilePage from './pages/productPages/GainTextilePage.tsx'
import JeuxPage from './pages/productPages/JeuxPage.tsx'
import ManchettePage from './pages/productPages/ManchettePage.tsx'
import MatelasPrPage from './pages/productPages/MatelasPrPage.tsx'
import TentePage from './pages/productPages/TentePage.tsx'
import Layout from './Layout.tsx'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ChakraProvider>
  <Routes>
  <Route path="/" element={<Layout />}>
      <Route path="/" element={<App />} />
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
  </ChakraProvider>
</BrowserRouter>
)
