'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import "./principal.css";
import ProyectosSection from "./components/ProyectosSection";
import TareasSection from "./components/TareasSection";
import EquipoSection from "./components/EquipoSection";
import { funcionAdmin } from "../service/UsuarioService";

export default function HomePage() {  
  const [activeTab, setActiveTab] = useState('proyectos');
  const [esAdmin, setEsAdmin] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const [formProyecto, setFormProyecto] = useState({
    nombre: '',
    tipo: 'proyecto'
  });

  const [formTarea, setFormTarea] = useState({
    nombre: '',
    descripcion: '',
    prioridad: '',
    proyecto: ''
  });

  const [proyectos, setProyectos] = useState<{id:string, nombre:string}[]>([]);
  const [trabajadores, setTrabajadores] = useState<{id:string, nombre:string}[]>([]);
  const [trabajadoresSeleccionados, setTrabajadoresSeleccionados] = useState<string[]>([]);
  const [popupTrabajadores, setPopupTrabajadores] = useState(false);

  const getPageTitle = () => {
    switch(activeTab) {
      case 'proyectos': return 'Proyectos';
      case 'tareas': return 'Mis Tareas';
      case 'equipo': return 'Equipo';
      default: return 'Proyectos';
    }
  };

  useEffect(() => {
    const verificarAdmin = async () => {
      let email = localStorage.getItem("sprinta_user");
      if (!email) return;
           
      email = email.trim().replace(/^"|"$/g, '');
      
      try {
        const resp = await funcionAdmin(email);   
        console.log("respuesta verificar email: " + email)     
        if (resp && resp.success) {
          setEsAdmin(true);
        }
      } catch (err) {
        console.error('Error verificando admin:', err);
      }
    };

    verificarAdmin();
  }, []);
  
  const mostrarPopUp = () => setPopUp(true);
  const cerrarPopUp = () => setPopUp(false);

  const handleProyectoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormProyecto({ ...formProyecto, [e.target.name]: e.target.value });
  };

  const handleTareaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormTarea({ ...formTarea, [e.target.name]: e.target.value });
  };

  const toggleTrabajador = (id: string) => {
    setTrabajadoresSeleccionados(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleSubmitProyecto = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Proyecto:", formProyecto);
    cerrarPopUp();
  };

  const handleSubmitTarea = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { ...formTarea, trabajadores: trabajadoresSeleccionados };
    console.log("Tarea:", data);
    cerrarPopUp();
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
                  <span className="brand-name">Sprinta</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="sidebar-navigation">
                <button 
                  onClick={() => setActiveTab('proyectos')}
                  className={`nav-link ${activeTab === 'proyectos' ? 'active' : ''}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder2-open" viewBox="0 0 16 16">
                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z" />
                  </svg>
                  <span>Proyectos</span>
                </button>
                <button 
                  onClick={() => setActiveTab('tareas')}
                  className={`nav-link ${activeTab === 'tareas' ? 'active' : ''}`}
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
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                  </svg>
                  <span>Equipo</span>
                </button>
              </nav>
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
              {(activeTab === 'proyectos' && esAdmin) && (
                <button className="btn-new-project" onClick={mostrarPopUp}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                  <span>Nuevo Proyecto</span>
                </button>
              )}

              {(activeTab === 'tareas' && esAdmin) && (
                <button className="btn-new-project" onClick={mostrarPopUp}>
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
            {activeTab === 'proyectos' && <ProyectosSection />}
            {activeTab === 'tareas' && <TareasSection />}
            {activeTab === 'equipo' && <EquipoSection />}
          </div>
        </main>
      </div>

      {/* Pop-up Modal */}
      {popUp && (
        <div className="popup-overlay" onClick={cerrarPopUp}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3 className="popup-title">
                {activeTab === 'proyectos' ? 'Crear Nuevo Proyecto' : 'Crear Nueva Tarea'}
              </h3>
              <button className="btn-close" onClick={cerrarPopUp}>&times;</button>
            </div>

            <div className="popup-body">

              {/* ===== PROYECTO ===== */}
              {activeTab === 'proyectos' && (
                <form onSubmit={handleSubmitProyecto} className="form-popup">
                  <div className="form-field">
                    <label className="form-label">
                      Nombre del Proyecto *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Ej: Sistema de Gestión"
                      value={formProyecto.nombre}
                      onChange={handleProyectoChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-last">
                    <label className="form-label">
                      Tipo de Proyecto
                    </label>
                    <select
                      name="tipo"
                      value={formProyecto.tipo}
                      onChange={handleProyectoChange}
                      className="form-select"
                    >
                      <option value="proyecto">Proyecto</option>
                      <option value="negocio">Negocio</option>
                    </select>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn-submit">
                      Crear Proyecto
                    </button>
                  </div>
                </form>
              )}

              {/* ===== TAREA ===== */}
              {activeTab === 'tareas' && (
                <form onSubmit={handleSubmitTarea} className="form-popup">
                  <div className="form-field">
                    <label className="form-label">
                      Nombre de la Tarea *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Ej: Implementar login"
                      value={formTarea.nombre}
                      onChange={handleTareaChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">
                      Descripción
                    </label>
                    <textarea
                      name="descripcion"
                      placeholder="Describe los detalles de la tarea..."
                      value={formTarea.descripcion}
                      onChange={handleTareaChange}
                      rows={4}
                      className="form-textarea"
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">
                      Prioridad
                    </label>
                    <select
                      name="prioridad"
                      value={formTarea.prioridad}
                      onChange={handleTareaChange}
                      className="form-select"
                    >
                      <option value="baja">🟢 Baja</option>
                      <option value="media">🟡 Media</option>
                      <option value="alta">🔴 Alta</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label">
                      Proyecto *
                    </label>
                    <select
                      name="proyecto"
                      value={formTarea.proyecto}
                      onChange={handleTareaChange}
                      className="form-select"
                    >
                      <option value="">Selecciona un proyecto</option>
                      {proyectos.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.nombre}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field-last">
                    <button
                      type="button"
                      onClick={() => setPopupTrabajadores(true)}
                      className="btn-workers"
                    >
                      👥 Seleccionar trabajadores ({trabajadoresSeleccionados.length})
                    </button>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn-submit">
                      Crear Tarea
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="popup-footer">
              <button className="btn-new-project" onClick={cerrarPopUp}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {popupTrabajadores && (
        <div className="popup-overlay" onClick={() => setPopupTrabajadores(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Seleccionar trabajadores</h3>
            {trabajadores.map(t => (
              <div key={t.id} className="trabajador-item">
                <label>
                  <input
                    type="checkbox"
                    checked={trabajadoresSeleccionados.includes(t.id)}
                    onChange={() => toggleTrabajador(t.id)}
                  />
                  {t.nombre}
                </label>
              </div>
            ))}
            <button className="btn-new-project" onClick={() => setPopupTrabajadores(false)}>
              Confirmar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
