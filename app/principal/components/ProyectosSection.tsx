'use client';
import { useState, useEffect } from "react";
import { getProyectos } from "@/app/service/ProyectoService";
import "../principal.css";
import { funcionAdmin } from "../../service/UsuarioService";

interface Proyecto {
  id: string;
  nombre: string;
  tipo: string;
  descripcion: string;
  empresa: string;
}

export default function ProyectosSection() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [codigoempresa, setCodigoEmpresa] = useState("");
  const [cargando, setCargando] = useState(true);
  const PROYECTO_VISUAL: Record<string, { emoji: string; bgClass: string; badgeClass: string }> = {
    seguridad: { emoji: "🔒", bgClass: "bg-purple", badgeClass: "badge-blue" },
    diseño: { emoji: "🎨", bgClass: "bg-rose", badgeClass: "badge-rose" },
    programacion: { emoji: "💻", bgClass: "bg-blue", badgeClass: "badge-blue" },
    marketing: { emoji: "📣", bgClass: "bg-amber", badgeClass: "badge-amber" },
    infraestructura: { emoji: "🏗️", bgClass: "bg-emerald", badgeClass: "badge-emerald" },
    datos: { emoji: "📊", bgClass: "bg-rose", badgeClass: "badge-rose" },
  };

  function getProyectoVisual(tipo: string) {
    return PROYECTO_VISUAL[tipo?.toLowerCase()] ?? { emoji: "📁", bgClass: "bg-blue", badgeClass: "badge-blue" };
  }

  useEffect(() => {
    const verificarAdmin = async () => {
      let email = localStorage.getItem("sprinta_user");
      if (!email) return;
      email = email.trim().replace(/^"|"$/g, "");

      try {
        const resp = await funcionAdmin(email);
        let codigo = "";
        if (resp && resp.success) {
          codigo = resp.data.id;
        } else {
          codigo = resp.data.codigoempresa;
        }
        setCodigoEmpresa(codigo);
      } catch (err) {
        console.error("Error verificando admin:", err);
      }
    };
    verificarAdmin();
  }, []);

  useEffect(() => {
    if (!codigoempresa) return;

    const obtenerProyectos = async () => {
      setCargando(true);
      try {
        const resp = await getProyectos(codigoempresa);
        if (resp && resp.success) {
          setProyectos(resp.data);
        }
      } catch (error) {
        console.error("Error al obtener proyectos:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerProyectos();
  }, [codigoempresa]);

  return (
    <>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <p className="stat-label">Proyectos Activos</p>
          </div>
          <p className="stat-value">{proyectos.length}</p>
        </div>
      </div>

      <div className="projects-grid">
       {cargando ? (
  <>
    {[1, 2, 3, 4].map((i) => (
      <div className="project-card" key={i} style={{ overflow: "hidden" }}>
        <div className="project-card-header">          
          <div style={{
            width: "40px", height: "40px", borderRadius: "10px",
            background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }} />          
          <div style={{
            width: "70px", height: "22px", borderRadius: "20px",
            background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }} />
        </div>
        
        <div style={{
          width: "70%", height: "18px", borderRadius: "6px", margin: "12px 0 8px",
          background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite",
        }} />
        
        <div style={{
          width: "100%", height: "13px", borderRadius: "6px", marginBottom: "6px",
          background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite",
        }} />
        <div style={{
          width: "60%", height: "13px", borderRadius: "6px",
          background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite",
        }} />
      </div>
    ))}
    <style>{`
      @keyframes shimmer {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `}</style>
  </>
) : proyectos.length === 0 ? (
          <p>No hay proyectos registrados.</p>
        ) : (
          proyectos.map((p) => {
            const { emoji, bgClass, badgeClass } = getProyectoVisual(p.tipo);
            return (
              <div className="project-card" key={p.id}>
                <div className="project-card-header">
                  <div
                    className={`project-icon ${bgClass}`}
                    style={{ fontSize: "1.4rem", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    {emoji}
                  </div>
                  <span className={`project-badge ${badgeClass}`}>{p.tipo}</span>
                </div>
                <h3 className="project-title">{p.nombre}</h3>
                <p className="project-description">{p.descripcion}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}