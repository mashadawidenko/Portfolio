import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Home/styles/index.css'
import './case-study/styles/index.css'  
import { Cursor } from './Home/app/components/Cursor'
import Home from './Home/app/App'
import CaseStudy from './case-study/app/App'
import { ScrollToTop } from './Home/app/components/ScrollToTop'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  {/* 🔽 КУРСОР ПЕРВЫМ — на корневом уровне */}
    <Cursor />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study" element={<CaseStudy />} />
    </Routes>
  </BrowserRouter>
)