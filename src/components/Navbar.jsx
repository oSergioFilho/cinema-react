import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Cinema Control
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Início
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/filmes">
                Filmes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salas">
                Salas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sessoes">
                Sessões
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ingressos">
                Ingressos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}