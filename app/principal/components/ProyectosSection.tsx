'use client';
import { useState, useEffect } from "react";
import { getProyectos } from "@/app/service/ProyectoService";
import "../principal.css";
import { funcionAdmin } from "../../service/UsuarioService";
import Skeleton from "@/app/Components/skeleton";

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
    seguridad:      { emoji: "🔒", bgClass: "bg-purple",  badgeClass: "badge-blue"    },
    diseño:         { emoji: "🎨", bgClass: "bg-rose",    badgeClass: "badge-rose"    },
    programacion:   { emoji: "💻", bgClass: "bg-blue",    badgeClass: "badge-blue"    },
    marketing:      { emoji: "📣", bgClass: "bg-amber",   badgeClass: "badge-amber"   },
    infraestructura:{ emoji: "🏗️", bgClass: "bg-emerald", badgeClass: "badge-emerald" },
    datos:          { emoji: "📊", bgClass: "bg-rose",    badgeClass: "badge-rose"    },
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
        if (resp?.success) {
          setCodigoEmpresa(resp.data.id);
        } else {
          setCodigoEmpresa(resp.data.cod_empresa);
        }
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

  if (cargando) return <Skeleton />;

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
        {proyectos.length === 0 ? (
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