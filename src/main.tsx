import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router'
import { ChakraProvider } from '@chakra-ui/react'
import ReactGA from "react-ga4"

ReactGA.initialize("G-EENV77MR14") // Ton ID GA4

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
)
