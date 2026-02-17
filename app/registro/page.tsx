'use client';

import "./registro.css";
import Footer from "../dashboard/componentes/footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { registroUsuario } from "../service/UsuarioService"; 

export default function RegistroPage() {
  const router = useRouter();
  const [accountType, setAccountType] = useState("Individual");
  const [registroData, setRegistroData] = useState({
    fullname: "",
    email: "",
    password: "",
    company: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e:any) => {
    const { id, value } = e.target;
    setRegistroData(prev => ({
      ...prev,
      [id]: value
    }));
  };

const handleSubmit = async (e:any) => {
  e.preventDefault();

  setError('');
  setLoading(true);
  try {    
    const payload = {
      fullname: registroData.fullname,
      email: registroData.email,
      password: registroData.password,
      tipo: accountType, 
      ...(accountType === "Empresa" && { company: registroData.company }) 
    };

    const response = await registroUsuario(payload);
    console.log("Usuario registrado:", response);      
    router.push('/login');
    
  } catch (err:any) {
    console.error("Error al registrar usuario:", err);    
    setError(err?.message ?? String(err) ?? 'Error al registrar usuario');
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <header className="login-header">
        <div className="container-fluid px-4 py-3">
          <div className="d-flex align-items-center justify-content-between">
            <Link className="d-flex align-items-center gap-3 text-decoration-none" href="/">
              <h2 className="logo-text">Sprinta</h2>
            </Link>
            <div className="d-flex align-items-center gap-3">
              <span className="new-here-text">¿Ya tienes una cuenta?</span>
              <Link href="/login" className="btn btn-create-account">
                Inicia Sesión
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="register-main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <div className="register-header-content">
                <h1 className="register-title">Crea tu cuenta en Sprinta</h1>
                <p className="register-subtitle">
                  Únete a miles de equipos gestionando tareas de forma eficiente.
                </p>
              </div>

              <div className="register-card">
                <div className="mb-4">
                  <p className="account-type-label">Tipo de Cuenta</p>
                  <div className="account-type-selector">
                    <label className="account-type-option">
                      <span>Individual</span>
                      <input
                        type="radio"
                        name="account-type"
                        value="Individual"
                        checked={accountType === "Individual"}
                        onChange={(e) => setAccountType(e.target.value)}
                        defaultChecked
                      />
                    </label>
                    <label className="account-type-option">
                      <span>Empresa</span>
                      <input
                        type="radio"
                        name="account-type"
                        value="Empresa"
                        checked={accountType === "Empresa"}
                        onChange={(e) => setAccountType(e.target.value)}
                      />
                    </label>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="mb-4">
                    <label htmlFor="fullname" className="form-label-register">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      className="form-control-register"
                      id="fullname"
                      placeholder="Juan Pérez"
                      value={registroData.fullname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label-register">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control-register"
                      id="email"
                      placeholder="juan@ejemplo.com"
                      value={registroData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label-register">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control-register"
                      id="password"
                      placeholder="Mínimo 8 caracteres"
                      value={registroData.password}
                      onChange={handleChange}
                      required
                      minLength={8}
                    />
                  </div>

                  {/* Company Name */}
                  {accountType === "Empresa" && (
                    <div className="mb-4">
                      <label htmlFor="company" className="form-label-register">
                        Nombre de la Empresa
                      </label>
                      <input
                        type="text"
                        className="form-control-register"
                        id="company"
                        placeholder="Acme Inc."
                        value={registroData.company}
                        onChange={handleChange}
                        required={accountType === "Empresa"}
                      />
                    </div>
                  )}

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-register-submit w-100" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Creando...
                      </>
                    ) : (
                      'Crear Cuenta'
                    )}
                  </button>
                  {error && (
                    <div className="alert alert-danger mt-2" role="alert">{error}</div>
                  )}
                </form>

                <p className="register-terms">
                  Al hacer clic en "Crear Cuenta", aceptas nuestros{" "}
                  <a href="" className="terms-link">Términos de Servicio</a> y{" "}
                  <a href="" className="terms-link">Política de Privacidad</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}