'use client';
import { useState, useEffect } from "react";
import { getProyectos } from "@/app/service/ProyectoService";
import "../principal.css";

export default function ProyectosSection() {
  return (
    <>
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
          </div>
        </div>                   
      </div>
      
    </>
  );
}
