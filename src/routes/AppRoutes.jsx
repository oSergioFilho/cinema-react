// src/routes/AppRoutes.jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../features/home/pages/HomePage'
// import FilmesPage from '../features/filmes/pages/FilmesPage'
// … outras páginas

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/filmes"    element={<FilmesPage />} /> */}
      {/* … */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
