import Link from "next/link";
import "./principal.css";

export default function HomePage() {

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
                <Link href="/dashboard" className="nav-link active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                  </svg>
                  <span>Dashboard</span>
                </Link>
                <Link href="/proyectos" className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder2-open" viewBox="0 0 16 16">
                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z" />
                  </svg>
                  <span>Proyectos</span>
                </Link>
                <Link href="/tareas" className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                  </svg>
                  <span>Mis Tareas</span>
                </Link>
                <Link href="/equipo" className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                  </svg>
                  <span>Equipo</span>
                </Link>
              </nav>
            </div>

            {/* Bottom Navigation */}
            <div className="sidebar-bottom">
              <Link href="/ayuda" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                </svg>
                <span>Centro de Ayuda</span>
              </Link>
              <Link href="/logout" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
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
                <h2 className="page-title">Proyectos</h2>
              </div>

            </div>

            <div className="header-right">
              <button className="btn-new-project">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <span>Nuevo Proyecto</span>
              </button>



              <div
                className="user-avatar"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASltg1Y_ICnQE-WZ1_c7I3hJEhGyTvr39AsS4C5WCbAVVhALPWRQFwn0anv4k8i-wDhDs61PIVOWIQCjBzx5A6P6yHyBDUnDB_ojUBYki2PHGtGf7FB_gXUAjd69Q78jx9mLukjjjQCIpVEzfjXP3aH3C7HogFzwQqMQSu-vL7Oy__dYc5GBxpwHnxN6izytEAWWcH8wXtaQh34pf655ivaxjFpndasIgE8TXkFud3kc5-qPUENSqWLMrXmGMhOG7zhNdnr5ZhmWg")',
                }}
              ></div>
            </div>
          </header>

          {/* Content */}
          <div className="dashboard-content">

            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-header">
                  <p className="stat-label">Proyectos Activos</p>
                </div>
                <p className="stat-value">12</p>
                <div className="stat-footer positive">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5" />
                  </svg>
                  <span>8% incremento</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-header">
                  <p className="stat-label">Total de Tareas</p>
                </div>
                <p className="stat-value">124</p>
                <p className="stat-description">En todos los equipos</p>
              </div>

            </div>


            {/* Projects Grid */}
            <div className="projects-grid">
              {/* Project Card 1 */}
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-icon bg-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                  </div>
                  <span className="project-badge badge-blue">En Progreso</span>
                </div>
                <h3 className="project-title">Rediseño de App Móvil</h3>
                <p className="project-description">
                  Modernizando el UI/UX para la aplicación móvil de consumidores en iOS y Android.
                </p>
                <div className="project-progress-section">
                  <div className="progress-label">
                    <span>Progreso</span>
                    <span>72%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-primary" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div className="project-footer">
                  <div className="project-avatars">
                    <div className="avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaHe5j-t1Y2CwMfv6ghGeZ11HwkAuczADhRRRXTAD5HghXZRLefh6z2hsJ-IOmyryd1Zg_v5Hbkolbw3U1plbfIWCyinbWBozLAmGV6l4-30euLMsAaxuOS_I0IJRC8TBLoIuTLg9OTVVuO7EHrh5c7_SBEWHAV7I1ti-gIWR_pLBifv05JHtd4ZOWek5jkcgZ70rwN_Bhib1TNMll4jHwO63OSrWhLmgT8UqWTxdS0gNZ1zYp-IPclB7-eE4NLRJk1HSSniAKmss")' }}></div>
                    <div className="avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeukfu58jXOjnm_YwtQDD3B9Py3yUV_eWpnvrAN44Qa29l-CIoiSeBBB4v9XbJN1yX2XAy2rv-OGkEiDIWBLl8g2KAVH0dgS72d3-KMpfyfHqBJk1MVr_DYvc1K6RENo9Dk6Xc2j0o1n9kc0SiCkCs7fbOkr10iEW1QHkfl4umtOV-DdUR8xmAuhHBRL-oF9t785FCurWw6io06HgRhsWzm3-On6obqSJLKoKbrxy0DcbcPnVP2xkhD7JbTmlIdrcX3ldrxutXPqA")' }}></div>
                    <div className="avatar-count">+3</div>
                  </div>

                  0
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-icon bg-amber">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707" />
                    </svg>
                  </div>
                  <span className="project-badge badge-amber">En Espera</span>
                </div>
                <h3 className="project-title">Integración API Externa</h3>
                <p className="project-description">
                  Desarrollando conexiones robustas para pasarelas de pago y sistemas CRM de terceros.
                </p>
                <div className="project-progress-section">
                  <div className="progress-label">
                    <span>Progreso</span>
                    <span>45%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-amber" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="project-footer">
                  <div className="project-avatars">
                    <div className="avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtXZsOFFCjs04dWSMfU1luw03qScFP-_eU7n7GaOST2p8jG-fJ8a57Zse7K7XCQqBdyEMYRjQmku4SVpKbtIlm2cbKFA37DNIxZy1PonW1EbobzAwbtSXQ2836ZlbBj1QExoGgaOurNCfC2yzTAG11JwaF9dOefk-WDedJPepsuu5w8tMdiJSUZUpOFbd8hEGK2XNZ3_4tKfHUQYHia2bdN2WGNoe_Md3iRIV5i1_Ybb4St2FEh-8TBX2jBS7H5w7phhWIZba_wsk")' }}></div>
                    <div className="avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8jNXV21FwPRuHVsMWBa327BAZN48GU8nslwLn1WHx_x8L6Pw8Ui--29ORrzYsLQtj4bJu_W5s9LhsILSz6V66JlPX2xULwxZ4YMqL3arVOAbLVOvO6BqtNPTpAZIAp-yChGOSjmGe_n5Rm6TFJS79aUXjGzciRBb2SA-cWf4aKqNicT-J5HkIrF8irkiBOJBTf2f_S_GFzX2kHxDcXjdhx1Q9u0wStrNTvjoZ6iMX3y6ioy2YwfLAFdC8aJMo_BSZKdntx0NC1N8")' }}></div>
                  </div>

                </div>
              </div>

              {/* Project Card 3 */}
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-icon bg-emerald">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-window-sidebar" viewBox="0 0 16 16">
                      <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                      <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                  <span className="project-badge badge-emerald">Planificación</span>
                </div>
                <h3 className="project-title">Sitio Web Marketing Q3</h3>
                <p className="project-description">
                  Renovación completa de las páginas de destino para mejorar tasas de conversión y visibilidad SEO.
                </p>
                <div className="project-progress-section">
                  <div className="progress-label">
                    <span>Progreso</span>
                    <span>15%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-emerald" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div className="project-footer">
                  <div className="project-avatars">
                    <div className="avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACMnsMKXCHSYuT631nzjHiAC0U9K7uE93Q-Cey862xHDx9fD0RbY0MVs9vwGmEvnnnkBfHdFURlAo1bBwzikEewFk87X2XIgJq0Pr_OLNNDjiPy0M2-zLgqYK-xN8FhxXUBlDY2H9yBWJzxJ0ON9GxA0s7eirR-NDJx1DPqk3Ln154lpfWsRxdxOT_Us4oJL8G7R-DWsDZ2MNuKkrsozVyc9TeDrb_c6Mw16SKTX42ptdbBzg8CmQooJwl2kzAVGmUBhkhNqWwIVY")' }}></div>
                    <div className="avatar-count">+1</div>
                  </div>

                </div>
              </div>

              {/* Project Card 4 */}
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-icon bg-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
                    </svg>
                  </div>
                  <span className="project-badge badge-blue">En Progreso</span>
                </div>
                <h3 className="project-title">Auditoría de Seguridad v2</h3>
                <p className="project-description">
                  Revisión integral de estándares de encriptación de datos y protocolos de pruebas de penetración.
                </p>
                <div className="project-progress-section">
                  <div className="progress-label">
                    <span>Progreso</span>
                    <span>88%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-primary" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div className="project-footer">
                  <div className="project-avatars">
                    <div className="avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNOk0QtBzyF3iOYiLM2iZhKML9elhrxlR-7O6K7RPWC-l73DHC-aJlm3wPpkBdIdhF3P5FZxAMzk4RIIWThY6ke6ouA1xJjN7extS642syzYP5rz3kLGYSzrzOUjNtiOggrNshA4RITKUIbHiLwXu5PEkt9l0oy3n3_k4ASkH3PS_f7wB5dCciae6r7Y-BQgF3F6_8A8qtmSHmT7r0FN40XVhvlUS-hqKuKGMJ75UUsIA4y3GJf7niQGz9YcoLWN2bMvycSbKPXfM")' }}></div>
                  </div>

                </div>
              </div>

              {/* Project Card 5 */}
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-icon bg-rose">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-data" viewBox="0 0 16 16">
                      <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
                      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                    </svg>
                  </div>
                  <span className="project-badge badge-rose">Urgente</span>
                </div>
                <h3 className="project-title">Motor de Feedback de Usuario</h3>
                <p className="project-description">
                  Implementando pipeline automatizado para análisis de sentimiento de tickets de soporte al cliente.
                </p>
                <div className="project-progress-section">
                  <div className="progress-label">
                    <span>Progreso</span>
                    <span>30%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-rose" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="project-footer">
                  <div className="project-avatars">
                    <div className="avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDj_9QtRvhFu6Y0r3QF3L6o38bQrokEQgEyQwF7Ehf2kfGYXFeGlr8FXjQdwJLV_uzc-gIA8it1ZzIybtUuvnin-lsrzQrIlGp-SEkH9euwaczAK_hyM0Bwn26jy4h78ZOrGH65cZ9mN4KrgxEd3ynDaLMN8yv-VLcZ-ywhbRsp-KSGhZho29nxb7GZmv8bpRgyn_mpoNfxBHkQPrBxV4Ua87BHxTZoo-eyvQv_g9Vco99pA-wYFN4h1hIIr_iJ8WgRQN1SSIYNW_s")' }}></div>
                    <div className="avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBc_ZV69pCFc_TVqrZQTsHzAYsS7wlsKFrJ6Z9DOzLfORANDNuk8H0RTWA_p-qVjBsPNgPCOjgBWHaBP5hgpNNTOo8dkjhF3K_DObBGKWbndtH3j9Sp93gL_my_c5JieNXiKptGRtHJYSa0G0ZKCz2aNr5K9FzlqAq4qu-mWjeYW32M_nLMY8QRT_n_Pr8b6Tnd-LCoOmSMwnALmkKxOOzFQah6xq2aDlesLUBr---UZLfXcAxMb5o5__0tlPLyvCihoSJJKMGtBY")' }}></div>
                  </div>
                  <div className="project-comments">
                  </div>
                </div>
              </div>

              {/* Add New Project Card */}
              <div className="project-card-add">
                <div className="add-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                </div>
                <p className="add-title">Iniciar Nuevo Proyecto</p>
                <p className="add-description">Crear un nuevo espacio de trabajo</p>
              </div>
            </div>
          </div>
        </main>
      </div>

    </>
  );
}