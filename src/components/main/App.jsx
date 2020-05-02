import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Routes from './Routes'

import logo from '../../assets/img/facensLogo1.png'

export default props => {
    return (
        <Router>
            <div className="app">
                    <header className="header">
                        <nav className="navbar navbar-light bg-light">
                            <img src={logo} alt="Logo da Facens"/>
                            <Link to="/" className="navbar-brand">Vagas disponíveis</Link>
                            <Link to="/register" className="navbar-brand">Cadastro de vagas</Link>
                            <span className="techVagaLogo">TechVaga</span> 
                        </nav>
                    </header>
                    <div className="content">
                        <Routes />
                    </div>
            </div>
        </Router>
    );
}
