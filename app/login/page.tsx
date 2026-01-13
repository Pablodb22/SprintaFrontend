import "./login.css";
import Footer from '../dashboard/componentes/footer';
import Link from "next/link";


export default function LoginPage() {
  return (
    <>     
      <header className="login-header">
        <div className="container-fluid px-4 py-3">
          <div className="d-flex align-items-center justify-content-between">
            <Link className="d-flex align-items-center gap-3 text-decoration-none" href="/">
              <h2 className="logo-text">Sprinta</h2>
            </Link>
            
            <div className="d-flex align-items-center gap-3">
              <span className="new-here-text">Nuevo aqui?</span>
              <Link href="/registro" className="btn btn-create-account">
                Crear una cuenta
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="login-main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <div className="login-content">            
                <div className="login-header-content">                 
                  <h1 className="login-title">Inicia Sesion Sprinta</h1>
                  <p className="login-subtitle">Gestiona las tareas y los problemas de tu equipo de forma eficiente</p>
                </div>
                
                <div className="login-card">
                  <form>                  
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label-custom">Email</label>
                      <input 
                        type="email" 
                        className="form-control form-control-custom" 
                        id="email"
                        placeholder="name@company.com"
                      />
                    </div>
                   
                    <div className="mb-4"> 
                      <input 
                        type="password" 
                        className="form-control form-control-custom" 
                        id="password"
                        placeholder="••••••••"
                      />
                    </div>
                  
                    <button type="submit" className="btn btn-primary-login w-100 mb-4">
                      Inicio sesion
                    </button>
                  </form> 
                </div>                                    
                <p className="login-footer-text">
                  No tienes cuenta? 
                  <a href="/registro" className="create-account-link"> Crear una cuenta</a>
                </p>
                
                <div className="login-footer-links">
                  <a href="" className="footer-link-item">Politica de privacidad</a>
                  <a href="" className="footer-link-item">Terminos de servicio</a>
                  <a href="" className="footer-link-item">Seguridad</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

     
      <Footer />
    </>
  );
}
