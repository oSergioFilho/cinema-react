import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../features/home/pages/HomePage'
import FilmesPage from '../features/filmes/pages/FilmesPage'
// ...importe outras páginas se quiser

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/filmes" element={<FilmesPage />} />
      <Route path="/salas" element={<SalasPage />} />
      <Route path="/sessoes" element={<SessoesPage />} />
      <Route path="/ingressos" element={<IngressosPage />} />


      {/* Outras rotas */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
