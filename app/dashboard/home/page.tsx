import Navbar from '../componentes/navbar';
import Footer from '../componentes/footer';
import "./home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="badge-new">
                  <span className="pulse-dot"></span>
                  New: Sprinta Automations 2.0
                </div>

                <h1 className="hero-title">
                  Gestiona el trabajo de tu  <br className="d-none d-md-block" />equipo, <span className="text-primary">mas rápido.</span>
                </h1>

                <p className="hero-subtitle">
                 Sprinta es una plataforma optimizada de gestión de tareas diseñada para la velocidad. Centrate en el código, no en la gestión.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <button className="btn btn-primary-custom">Empieza ahora</button>                 
                </div>
              </div>
            </div>

            {/* Product Mockup */}
            <div className="mockup-container">
              <div className="mockup-image">
                <div className="mockup-inner">
                  <div
                    className="mockup-bg"
                    style={{
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCESwgRCV5J9P2ggIxvzOUB7K6F0ffM7MPPXjrNNi8iXT3p2BIhBejb4z6kEvKKuyLx4p0_f72gcnqzqeF0lkb6AFSnFrl5166VshhQzyn2FfI7oZbDKeKyrqSGFvlQCzAD6tUOqbMot4xfip9eIFoO69MwsQ8uWuWGSYyQDZpLG03RjLUX4DOm7Eti6djTVcI2DiucM24YDtnuIOSq-LAegBePmEdRc_sTRiuLD-ob4GdrbQqW2KLS7orMktZkXSnonnfJmoGPrLw')"
                    }}
                  ></div>
                </div>
              </div>
              <div className="blur-effect"></div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="social-proof">
          <div className="container">
            <p className="social-proof-title">
              Con la confianza de los equipos tecnológicos modernos
            </p>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
              <div className="logo-item">
                <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rocket" viewBox="0 0 16 16">
                  <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8" />
                  <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.5 3.5 0 0 0-.463-.315A2 2 0 0 0 8.25.064.55.55 0 0 0 8 0a.55.55 0 0 0-.266.073 2 2 0 0 0-.142.08 4 4 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635s1.7-.207 2.4-.635q.1.044.196.083c.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562zM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935zM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199M8.009 1.073q.096.06.226.163c.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13s-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32q.136-.113.236-.18Z" />
                  <path d="M9.479 14.361c-.48.093-.98.139-1.479.139s-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0z" />
                </svg></span>Vortex
              </div>
              <div className="logo-item">
                <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                </svg></span>Frame
              </div>
              <div className="logo-item">
                <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-layers" viewBox="0 0 16 16">
                  <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z" />
                </svg></span>Stack
              </div>
              <div className="logo-item">
                <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon" viewBox="0 0 16 16">
                  <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z" />
                </svg></span>Poly
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <div className="mb-5">
              <h2 className="section-tag">Caracteristicas</h2>
              <h3 className="section-title">Todo lo que necesitas para enviar más rápido</h3>
              <p className="section-subtitle">
                Experimente un gestor de tareas que se adapta a su ritmo. Diseñado para equipos de ingeniería y producto de élite.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-charge" viewBox="0 0 16 16">
                      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                    </svg>
                  </div>
                  <h4 className="feature-title">Gestión de tareas</h4>
                  <p className="feature-description">
                    Navegación con teclado y acceso rápido para usuarios avanzados. Olvídate de la fatiga del clic del ratón.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-line" viewBox="0 0 16 16">
                      <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
                    </svg>
                  </div>
                  <h4 className="feature-title">Control de Proyectos</h4>
                  <p className="feature-description">
                    Hojas de ruta visuales y seguimiento automatizado del progreso. Obten una visión general de toda su organización.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                    </svg>
                  </div>
                  <h4 className="feature-title">Colaboración en equipo</h4>
                  <p className="feature-description">
                    Actualizaciones en tiempo real y debates de equipo integrados. Manten el contexto donde realmente se realiza el trabajo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-wrapper">
          <div className="container">
            <div className="cta-section position-relative">
              <div className="cta-content">
                <h2 className="cta-title">¿Listo para escalar tu producción?</h2>
                <p className="cta-subtitle">
                  Únete a más de 10,000 equipos que lanzan mejores productos con Sprinta. Empieza gratis hoy mismo.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <button className="btn btn-primary-custom">Empieza ahora</button>                 
                </div>
              </div>
              <div className="cta-blur-1"></div>
              <div className="cta-blur-2"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}