import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DetectPage from './pages/DetectPage'
import ResultPage from './pages/ResultPage'
import DashboardPage from './pages/DashboardPage'
import HistoryPage from './pages/HistoryPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"          element={<HomePage />} />
            <Route path="/detect"    element={<DetectPage />} />
            <Route path="/result"    element={<ResultPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/history"   element={<HistoryPage />} />
            <Route path="/about"     element={<AboutPage />} />
            {/* 404 fallback */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-8">
                <p className="text-6xl font-extrabold text-green-200">404</p>
                <p className="text-xl font-semibold text-gray-700">Page not found</p>
                <a href="/" className="btn-primary">Go Home</a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppProvider>
  )
}
