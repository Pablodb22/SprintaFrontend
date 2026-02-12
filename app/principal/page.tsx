'use client';

import Link from "next/link";
import { useState } from "react";
import "./principal.css";
import ProyectosSection from "./components/ProyectosSection";
import TareasSection from "./components/TareasSection";
import EquipoSection from "./components/EquipoSection";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('proyectos');

  const getPageTitle = () => {
    switch(activeTab) {
      case 'proyectos': return 'Proyectos';
      case 'tareas': return 'Mis Tareas';
      case 'equipo': return 'Equipo';
      default: return 'Proyectos';
    }
  };

  return (
    <>
      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-top">
              {/* Brand */}
              <div className="brand-section">
                <div className="brand-info">
                  <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111318' }}>Sprinta</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="sidebar-navigation">
                <button 
                  onClick={() => setActiveTab('proyectos')}
                  className={`nav-link ${activeTab === 'proyectos' ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder2-open" viewBox="0 0 16 16">
                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z" />
                  </svg>
                  <span>Proyectos</span>
                </button>
                <button 
                  onClick={() => setActiveTab('tareas')}
                  className={`nav-link ${activeTab === 'tareas' ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                  </svg>
                  <span>Mis Tareas</span>
                </button>
                <button 
                  onClick={() => setActiveTab('equipo')}
                  className={`nav-link ${activeTab === 'equipo' ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                  </svg>
                  <span>Equipo</span>
                </button>
              </nav>
            </div>

            {/* Bottom Navigation */}
            <div className="sidebar-bottom">              
              <Link href="/logout" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5   0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                </svg>
                <span>Cerrar Sesión</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {/* Top Header */}
          <header className="dashboard-header">
            <div className="header-left">
              <div className="header-title-section">
                <h2 className="page-title">{getPageTitle()}</h2>
              </div>
            </div>

            <div className="header-right">
              {(activeTab === 'proyectos') && (
                <button className="btn-new-project">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                  <span>Nuevo Proyecto</span>
                </button>
              )}
              
              {(activeTab === 'tareas') && (
                <button className="btn-new-project">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                  <span>Nueva Tarea</span>
                </button>
              )}


              <Link href="/configuracion">
                <div
                  className="user-avatar"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASltg1Y_ICnQE-WZ1_c7I3hJEhGyTvr39AsS4C5WCbAVVhALPWRQFwn0anv4k8i-wDhDs61PIVOWIQCjBzx5A6P6yHyBDUnDB_ojUBYki2PHGtGf7FB_gXUAjd69Q78jx9mLukjjjQCIpVEzfjXP3aH3C7HogFzwQqMQSu-vL7Oy__dYc5GBxpwHnxN6izytEAWWcH8wXtaQh34pf655ivaxjFpndasIgE8TXkFud3kc5-qPUENSqWLMrXmGMhOG7zhNdnr5ZhmWg")',
                  }}
                ></div>
              </Link>
            </div>
              
          </header>

          {/* Content */}
          <div className="dashboard-content">
            
            {/* PROYECTOS TAB */}
            {activeTab === 'proyectos' && (
              <ProyectosSection />
            )}

            {/* TAREAS TAB */}
            {activeTab === 'tareas' && (
              <TareasSection />
            )}

            {/* EQUIPO TAB */}
            {activeTab === 'equipo' && (
              <EquipoSection />
            )}
          </div>
        </main>
      </div>

    </>
  );
}