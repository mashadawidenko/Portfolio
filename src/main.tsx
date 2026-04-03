import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import './Home/styles/index.css'
import './case-study/styles/index.css'  
import './jti-study/styles/index.css' 
import { Cursor } from './Home/app/components/Cursor'
import Home from './Home/app/App'
import CaseStudy from './case-study/app/App'
import JTIStudy from './jti-study/app/App'
import { ScrollToTop } from './Home/app/components/ScrollToTop'
import Lenis from 'lenis'

// Инициализация Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Cursor />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study" element={<CaseStudy />} />
      <Route path="/jti-study" element={<JTIStudy />} />
    </Routes>
     <Analytics />
  </BrowserRouter>
)