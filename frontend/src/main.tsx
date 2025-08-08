import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import DailyHadithPage from './pages/DailyHadithPage.tsx';
import FavoritesPage from './pages/FavoritesPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<DailyHadithPage />} />
      <Route path='/Favorites' element={<FavoritesPage />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
