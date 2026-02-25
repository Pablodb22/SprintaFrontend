"use client";

import { useEffect, useState } from "react";
import "./configuracion.css";
import Footer from "../dashboard/componentes/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { obtenerUsuario, actualizarContraseña, actualizarUsuario, fileToBase64 } from "../service/UsuarioService";
import { useRef } from "react";

export default function ConfiguracionPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "security">("profile");
  const router = useRouter();
  const [usuario,setUsuario]=useState<{biografia:string, cargo:string, cod_empresa:string,created_at:Date,email:string,foto:string,id:string,nombre:string,tipo:string,ubicacion:string,updated_at:string} | null>(null);
  const [loading, setLoading] = useState(true);
  const [contraseña,setContraseña]=useState({actual:"",nueva:"",confirmar:""});
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleLogout = async () => {
    router.push("/");
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  useEffect( () => {

    const email = localStorage.getItem("sprinta_user");    
    const emailSinComillas = email ? email.replace(/^"(.*)"$/, '$1') : null;
    
    async function obtener(){      
      if (emailSinComillas) {
        try{
            const respuesta = await obtenerUsuario(emailSinComillas);
            console.log("Respuesta del usuario:", respuesta.data);
            setUsuario(respuesta.data);
            setLoading(false);                    
        }catch (error) {
            console.error("Error al obtener el usuario:", error);
            setLoading(false);
        }            
      }
    }
    
    obtener();
  }, []);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const base64 = await fileToBase64(file); 
      setUsuario(prev => prev ? ({ ...prev, foto: base64 }) : prev);
    } catch (err) {
      console.error('Error al convertir la imagen a base64', err);
    }
  }

  const triggerFileSelect = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  }
 
  const enviarConfiguracion = async () => {
    try{
      if(usuario){
        const respuesta = await actualizarUsuario(usuario);
        console.log("Respuesta de actualización:", respuesta);
        showMessage('success', 'Perfil actualizado correctamente');
      }      
    }catch(error){
      console.error("Error al actualizar el usuario:", error);
      showMessage('error', 'Error al actualizar el perfil');
    }
  }

  const contraseñaNueva= async()=>{
    try{
      if(usuario){
        const respuesta= await actualizarContraseña({email: usuario.email, actual: contraseña.actual, nueva: contraseña.nueva, confirmar: contraseña.confirmar });
        console.log("Respuesta de actualización de contraseña:", respuesta);
        showMessage('success', 'Contraseña actualizada correctamente');
        setContraseña({actual:"",nueva:"",confirmar:""});
      }
    }catch(error){
      console.error("Error al actualizar la contraseña:", error);
      showMessage('error', 'Error al actualizar la contraseña');
    }
  }

  const borrarSesion = () => {
    localStorage.removeItem("sprinta_user");
    router.push('/');    
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUsuario(prevState => prevState ? ({
      ...prevState,
      [name]: value
    }) : null);
  }
  
    const handleInputChangeConstraseña = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContraseña(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
   
  return (
    <>
      <header className="settings-header">
        <div className="container-fluid px-4 py-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-4">
              <div className="d-flex align-items-center gap-3">
                <Link
                  href="/"
                  className="d-flex align-items-center gap-3 text-decoration-none"
                >
                  <h2 className="logo-text-settings">Sprinta</h2>
                </Link>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div
                className="user-avatar"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASltg1Y_ICnQE-WZ1_c7I3hJEhGyTvr39AsS4C5WCbAVVhALPWRQFwn0anv4k8i-wDhDs61PIVOWIQCjBzx5A6P6yHyBDUnDB_ojUBYki2PHGtGf7FB_gXUAjd69Q78jx9mLukjjjQCIpVEzfjXP3aH3C7HogFzwQqMQSu-vL7Oy__dYc5GBxpwHnxN6izytEAWWcH8wXtaQh34pf655ivaxjFpndasIgE8TXkFud3kc5-qPUENSqWLMrXmGMhOG7zhNdnr5ZhmWg")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {message && (
        <div className={`alert alert-${message.type}`} style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '12px 20px',
          borderRadius: '8px',
          animation: 'slideIn 0.3s ease-in-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="material-symbols-outlined">
              {message.type === 'success' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="m6.305 5.272 2.379 2.379.392-.392a.5.5 0 1 1 .707.707l-.707.707 2.379 2.379a.5.5 0 1 1-.707.707L8.428 9.536l-.707.707a.5.5 0 1 1-.707-.707l.707-.707-2.379-2.379a.5.5 0 1 1 .707-.707"/>
                </svg>
              )}
            </span>
            <span>{message.text}</span>
          </div>
        </div>
      )}

      <main className="settings-main">
        <div className="container-fluid px-4 px-md-5">
          <div className="row gx-4 gx-md-5">
            <aside className="col-12 col-md-3 col-lg-2 mb-4 mb-md-0">
              <div className="settings-sidebar">
                <div className="sidebar-header">
                  <h1 className="sidebar-title">Configuración</h1>
                  <p className="sidebar-subtitle">
                    Personaliza tu experiencia en Sprinta
                  </p>
                </div>

                <nav className="sidebar-nav">
                  <button
                    className={`nav-item ${
                      activeTab === "profile" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <span className="material-symbols-outlined">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                    </span>
                    <span>Perfil</span>
                  </button>
                  <button
                    className={`nav-item ${
                      activeTab === "security" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("security")}
                  >
                    <span className="material-symbols-outlined">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-lock-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                        />
                      </svg>
                    </span>
                    <span>Seguridad</span>
                  </button>
                  <button
                    className="nav-item logout-btn"
                    onClick={handleLogout}
                  >
                    <span className="material-symbols-outlined">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                        />
                      </svg>
                    </span>
                    <span onClick={borrarSesion}>Cerrar Sesión</span>
                  </button>
                </nav>
              </div>
            </aside>

            <div className="col-12 col-md-9 col-lg-10">
              {loading && activeTab === "profile" && (
                <section className="settings-card">
                  <div className="card-header">
                    <h3 className="card-title">Perfil Público</h3>
                  </div>
                  <div className="settings-form" style={{ textAlign: 'center', padding: '40px' }}>
                    <p>Cargando información...</p>
                  </div>
                </section>
              )}
              {!loading && activeTab === "profile" && (
                <section className="settings-card">
                  <div className="card-header">
                    <h3 className="card-title">Perfil Público</h3>
                    <p className="card-description">
                      Esta información se mostrará a tus compañeros y
                      colaboradores.
                    </p>
                  </div>

                  <div className="profile-photo-section">
                      <div className="avatar-container">
                      <div
                        className="avatar-large"
                        style={{
                          backgroundImage: usuario && usuario.foto ? `url("${usuario.foto}")` : 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd_3VJlfgjk9Z4hdWAzJoEVjmOGfzhXSkFIR-zDPQ0tnooqRtIShjR_RunV98dvO4Kxzf132jWLFHMqh3VfYgbEZMo1795SX2a3rqW0YYqetqKfdmQuywwVRMIWXxtUj1JWW7b5RQWZQtrRvlt8YTYNG8DRZQelAEtNyNouBj4Y57xKzJlzgTPKCyjiFdMLknV0jd5qGXAU8S2ymbqDkBhwSCzGJeOhwoHW-L5od08iKFIY9J3tgMkPrlNLFbIf-6rCAsalVoEp8I")',
                        }}
                      ></div>
                      <button type="button" className="camera-button" onClick={triggerFileSelect}>
                        <span className="material-symbols-outlined">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-camera-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="avatar-info">
                      <p className="avatar-title">Foto de Perfil</p>
                      <p className="avatar-description">
                        JPG, GIF o PNG. Tamaño máximo de 800KB.
                      </p>
                      <div className="avatar-buttons">
                        <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} />                        
                      </div>
                    </div>
                  </div>

                  <div className="settings-form">
                    <form>
                      <div className="row g-4">
                        <div className="col-12 col-md-6">
                          <label className="form-label-settings">
                            Nombre Completo
                          </label>
                          <input
                            type="text"
                            className="form-control-settings"
                            placeholder="Alex Johnson"
                            name="nombre"
                            value={usuario?.nombre || ''}    
                            onChange={handleInputChange}                        
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="form-label-settings">
                            Correo Electrónico
                          </label>
                          <input
                            type="email"
                            className="form-control-settings"
                            placeholder="alex@sprinta.io"                              
                            value={usuario?.email || ''} 
                            readOnly  
                            onChange={handleInputChange}                       
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="form-label-settings">Cargo</label>
                        <input
                          type="text"
                          className="form-control-settings"
                          placeholder="ej. Diseñador de Producto Senior"
                          name="cargo"
                          value={usuario?.cargo || ''}
                          onChange={handleInputChange}                          
                        />
                      </div>

                      <div className="mt-4">
                        <label className="form-label-settings">Ubicación</label>
                        <div className="input-with-icon">
                          <span className="material-symbols-outlined input-icon-left">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-geo-alt-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            className="form-control-settings ps-5"
                            placeholder="San Francisco, CA"
                            name="ubicacion"
                            value={usuario?.ubicacion || ''}
                            onChange={handleInputChange}                            
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="form-label-settings">Biografía</label>
                        <textarea
                          className="form-control-settings"
                          rows={4}
                          placeholder="Breve descripción para tu perfil..."
                          name="biografia"
                          value={usuario?.biografia || ''}  
                          onChange={handleInputChange}                         
                        ></textarea> 
                        <p className="form-help-text">Máximo 200 caracteres.</p>
                      </div>
                    </form>
                  </div>

                  <div className="card-footer">                    
                    <button className="btn btn-save" onClick={enviarConfiguracion}>Guardar Cambios</button>
                  </div>
                </section>
              )}

              {activeTab === "security" && (
                <section className="settings-card">
                  <div className="card-header">
                    <h3 className="card-title">Seguridad</h3>
                    <p className="card-description">
                      Actualiza tu contraseña para mantener tu cuenta segura.
                    </p>
                  </div>

                  <div className="settings-form">
                    <form>
                      <div className="mb-4">
                        <label className="form-label-settings">
                          Contraseña Actual
                        </label>
                        <div className="input-with-icon">
                          <span className="material-symbols-outlined input-icon-left">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-lock-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                              />
                            </svg>
                          </span>
                          <input
                            type="password"
                            className="form-control-settings ps-5"
                            placeholder="Ingresa tu contraseña actual"
                            name="actual"
                            onChange={handleInputChangeConstraseña}
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label-settings">
                          Nueva Contraseña
                        </label>
                        <div className="input-with-icon">
                          <span className="material-symbols-outlined input-icon-left">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-lock-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                              />
                            </svg>
                          </span>
                          <input
                            type="password"
                            className="form-control-settings ps-5"
                            placeholder="Mínimo 8 caracteres"
                            name="nueva"
                            onChange={handleInputChangeConstraseña}
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label-settings">
                          Confirmar Nueva Contraseña
                        </label>
                        <div className="input-with-icon">
                          <span className="material-symbols-outlined input-icon-left">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-lock-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                              />
                            </svg>
                          </span>
                          <input
                            type="password"
                            className="form-control-settings ps-5"
                            placeholder="Repite la nueva contraseña"
                            name="confirmar"
                            onChange={handleInputChangeConstraseña}
                          />
                        </div>
                      </div>

                      <div className="password-requirements">
                        <p className="requirements-title">
                          Requisitos de contraseña:
                        </p>
                        <ul className="requirements-list">
                          <li>Mínimo 8 caracteres</li>
                          <li>Al menos una letra mayúscula</li>
                          <li>Al menos un número</li>
                          <li>Al menos un carácter especial (@, #, $, etc.)</li>
                        </ul>
                      </div>
                    </form>
                  </div>

                  <div className="card-footer">                    
                    <button className="btn btn-save" onClick={contraseñaNueva}>
                      Actualizar Contraseña
                    </button>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
