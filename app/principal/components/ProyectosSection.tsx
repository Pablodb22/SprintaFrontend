'use client';
import { useState, useEffect } from "react";
import { getProyectos, eliminarProyecto } from "@/app/service/ProyectoService";
import { getTareasPorProyecto, acabarTarea } from "@/app/service/TareaService";
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

interface TrabajadorInfo {
  id: string;
  nombre: string;
  foto: string | null;
  cargo: string | null;
}

interface Tarea {
  id: string;
  nombre: string;
  descripcion: string;
  prioridad: "Alta" | "Media" | "Baja";
  proyecto: string;
  proyecto_nombre: string | null;
  trabajadores: string;
  trabajadores_info: TrabajadorInfo[];
  acabada: boolean;
}

function WorkerAvatar({ worker }: { worker: TrabajadorInfo }) {
  const initials = worker.nombre
    .split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();

  return (
    <div className="worker-card">
      <div className="worker-avatar">
        {worker.foto
          ? <img src={worker.foto} alt={worker.nombre} className="worker-avatar-img" />
          : <span className="worker-avatar-initials">{initials}</span>
        }
      </div>
      <div className="worker-info">
        <span className="worker-nombre">{worker.nombre}</span>
        {worker.cargo && <span className="worker-cargo">{worker.cargo}</span>}
      </div>
    </div>
  );
}

function TareaModal({ tarea, onClose, onAcabar, cargandoAcabar }: {
  tarea: Tarea; onClose: () => void;
  onAcabar: (id: string) => void; cargandoAcabar: boolean;
}) {
  const priorityClass = { Alta: "priority-high", Media: "priority-medium", Baja: "priority-low" };

  return (
    <div className="tarea-modal-overlay" onClick={onClose}>
      <div className="tarea-modal" onClick={(e) => e.stopPropagation()}>
        <div className="tarea-modal-header">
          <div className="tarea-modal-title-row">
            <h2 className="tarea-modal-title"
              style={tarea.acabada ? { textDecoration: "line-through", opacity: 0.6 } : {}}>
              {tarea.nombre}
            </h2>
            <span className={`tarea-priority ${priorityClass[tarea.prioridad]}`}>{tarea.prioridad}</span>
          </div>
          <button className="tarea-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="tarea-modal-body">
          {tarea.acabada && <div className="tarea-modal-badge-acabada">✓ Tarea completada</div>}
          <div className="tarea-modal-section">
            <span className="tarea-modal-label">Descripción</span>
            <p className="tarea-modal-text">{tarea.descripcion || "Sin descripción."}</p>
          </div>
          <div className="tarea-modal-section">
            <span className="tarea-modal-label">Proyecto</span>
            <div className="tarea-modal-proyecto">
              <span className="tarea-modal-proyecto-icon">📁</span>
              <span className="tarea-modal-text">{tarea.proyecto_nombre ?? tarea.proyecto}</span>
            </div>
          </div>
          {tarea.trabajadores_info?.length > 0 && (
            <div className="tarea-modal-section">
              <span className="tarea-modal-label">
                Trabajadores asignados ({tarea.trabajadores_info.length})
              </span>
              <div className="tarea-modal-workers-list">
                {tarea.trabajadores_info.map((w) => <WorkerAvatar key={w.id} worker={w} />)}
              </div>
            </div>
          )}
        </div>
        {!tarea.acabada && (
          <div className="tarea-modal-footer">
            <button className="tarea-modal-btn-acabar" onClick={() => onAcabar(tarea.id)}
              disabled={cargandoAcabar}>
              {cargandoAcabar ? "Guardando…" : "✓ Marcar como terminada"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


function ConfirmDialog({ mensaje, onConfirmar, onCancelar, cargando }: {
  mensaje: string; onConfirmar: () => void;
  onCancelar: () => void; cargando: boolean;
}) {
  return (
    <div className="tarea-modal-overlay" onClick={onCancelar}>
      <div
        className="tarea-modal"
        style={{ maxWidth: 380 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tarea-modal-header">
          <div className="tarea-modal-title-row">
            <h2 className="tarea-modal-title">⚠️ Confirmar eliminación</h2>
          </div>
        </div>
        <div className="tarea-modal-body">
          <p className="tarea-modal-text">{mensaje}</p>
        </div>
        <div className="tarea-modal-footer" style={{ display: "flex", gap: 10 }}>
          <button
            onClick={onCancelar}
            disabled={cargando}
            style={{
              flex: 1, padding: "11px", borderRadius: 10, border: "1px solid #ddd",
              background: "#f5f5f5", color: "#444", fontWeight: 600,
              cursor: "pointer", fontSize: "0.9rem",
            }}
          >
            Cancelar
          </button>
          <button
            className="tarea-modal-btn-acabar"
            style={{ flex: 1, background: "#c0392b" }}
            onClick={onConfirmar}
            disabled={cargando}
          >
            {cargando ? "Eliminando…" : "Sí, eliminar"}
          </button>
        </div>
      </div>
    </div>
  );
}


function ProyectoTareasModal({ proyecto, esAdmin, onClose, onProyectoEliminado }: {
  proyecto: Proyecto; esAdmin: boolean;
  onClose: () => void; onProyectoEliminado: (id: string) => void;
}) {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [cargando, setCargando] = useState(true);
  const [tareaSeleccionada, setTareaSeleccionada] = useState<Tarea | null>(null);
  const [cargandoAcabar, setCargandoAcabar] = useState(false);
  const [confirmarEliminar, setConfirmarEliminar] = useState(false);
  const [cargandoEliminar, setCargandoEliminar] = useState(false);

  const priorityClass = { Alta: "priority-high", Media: "priority-medium", Baja: "priority-low" };

  useEffect(() => {
    async function cargar() {
      setCargando(true);
      const datos = await getTareasPorProyecto(proyecto.id);
      setTareas(datos ?? []);
      setCargando(false);
    }
    cargar();
  }, [proyecto.id]);

  async function handleAcabar(id: string) {
    setCargandoAcabar(true);
    const result = await acabarTarea(id);
    if (result) {
      setTareas((prev) => prev.map((t) => t.id === id ? { ...t, acabada: true } : t));
      setTareaSeleccionada((prev) => prev?.id === id ? { ...prev, acabada: true } : prev);
    }
    setCargandoAcabar(false);
  }

  async function handleEliminarProyecto() {
    setCargandoEliminar(true);
    const result = await eliminarProyecto(proyecto.id);
    setCargandoEliminar(false);
    if (result?.success) {
      onProyectoEliminado(proyecto.id);
      onClose();
    }
  }

  return (
    <>
      <div
        className="tarea-modal-overlay"
        onClick={() => !tareaSeleccionada && !confirmarEliminar && onClose()}
      >
        <div
          className="tarea-modal"
          style={{ maxWidth: 560 }}
          onClick={(e) => e.stopPropagation()}
        >          
          <div className="tarea-modal-header">
            <div className="tarea-modal-title-row">
              <h2 className="tarea-modal-title">📁 {proyecto.nombre}</h2>
              {proyecto.tipo && (
                <span className="tarea-priority priority-medium"
                  style={{ textTransform: "capitalize" }}>
                  {proyecto.tipo}
                </span>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>              
              {esAdmin && (
                <button
                  onClick={() => setConfirmarEliminar(true)}
                  title="Eliminar proyecto"
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    padding: "4px 6px", borderRadius: 6, color: "#c0392b",
                    fontSize: "1rem", transition: "background .15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#fdecea")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                >
                  🗑️
                </button>
              )}
              <button className="tarea-modal-close" onClick={onClose}>✕</button>
            </div>
          </div>
         
          {proyecto.descripcion && (
            <div style={{ padding: "0 24px 8px" }}>
              <p style={{ fontSize: "0.88rem", color: "#666", margin: 0 }}>{proyecto.descripcion}</p>
            </div>
          )}
        
          <div className="tarea-modal-body" style={{ gap: 10, paddingTop: 8 }}>
            <span className="tarea-modal-label">Tareas del proyecto</span>

            {cargando ? (
              <p style={{ fontSize: "0.9rem", color: "#999" }}>Cargando tareas…</p>
            ) : tareas.length === 0 ? (
              <p style={{ fontSize: "0.9rem", color: "#999" }}>No hay tareas en este proyecto.</p>
            ) : (
              tareas.map((tarea) => (
                <div
                  key={tarea.id}
                  onClick={() => setTareaSeleccionada(tarea)}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    padding: "10px 12px", borderRadius: 10,
                    border: "1px solid #ebebf5",
                    background: tarea.acabada ? "#f9f9f9" : "#fff",
                    cursor: "pointer", transition: "background 0.15s",
                    opacity: tarea.acabada ? 0.65 : 1,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f4f4fb")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = tarea.acabada ? "#f9f9f9" : "#fff")
                  }
                >
                  <div style={{
                    width: 18, height: 18, borderRadius: "50%", border: "2px solid",
                    borderColor: tarea.acabada ? "#4caf50" : "#ccc",
                    background: tarea.acabada ? "#4caf50" : "transparent",
                    flexShrink: 0, marginTop: 2, display: "flex",
                    alignItems: "center", justifyContent: "center",
                  }}>
                    {tarea.acabada && (
                      <span style={{ color: "#fff", fontSize: "0.6rem", fontWeight: 700 }}>✓</span>
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{
                        fontSize: "0.9rem", fontWeight: 600, color: "#1a1a2e",
                        textDecoration: tarea.acabada ? "line-through" : "none",
                      }}>
                        {tarea.nombre}
                      </span>
                      <span className={`tarea-priority ${priorityClass[tarea.prioridad]}`}>
                        {tarea.prioridad}
                      </span>
                    </div>
                    {tarea.descripcion && (
                      <p style={{
                        fontSize: "0.8rem", color: "#777", margin: "3px 0 0",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                      }}>
                        {tarea.descripcion}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="tarea-modal-footer">
            <button className="tarea-modal-btn-acabar" onClick={onClose}
              style={{ background: "#6b6b8a" }}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
      
      {tareaSeleccionada && (
        <TareaModal
          tarea={tareaSeleccionada}
          onClose={() => setTareaSeleccionada(null)}
          onAcabar={handleAcabar}
          cargandoAcabar={cargandoAcabar}
        />
      )}
      
      {confirmarEliminar && (
        <ConfirmDialog
          mensaje={`¿Seguro que quieres eliminar el proyecto "${proyecto.nombre}"? Se borrarán también todas sus tareas. Esta acción no se puede deshacer.`}
          onConfirmar={handleEliminarProyecto}
          onCancelar={() => setConfirmarEliminar(false)}
          cargando={cargandoEliminar}
        />
      )}
      
      <style>{`
        .tarea-modal-overlay {
          position:fixed;inset:0;background:rgba(0,0,0,0.45);
          backdrop-filter:blur(4px);display:flex;align-items:center;
          justify-content:center;z-index:1000;animation:fadeInOverlay .18s ease;
        }
        @keyframes fadeInOverlay{from{opacity:0}to{opacity:1}}
        .tarea-modal {
          background:#fff;border-radius:16px;width:100%;max-width:500px;
          max-height:85vh;overflow-y:auto;
          box-shadow:0 24px 60px rgba(0,0,0,0.18);
          animation:slideUp .22s cubic-bezier(0.34,1.56,0.64,1);
          display:flex;flex-direction:column;
        }
        @keyframes slideUp{
          from{transform:translateY(28px) scale(0.97);opacity:0}
          to{transform:translateY(0) scale(1);opacity:1}
        }
        .tarea-modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:24px 24px 0 24px;gap:12px}
        .tarea-modal-title-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;flex:1}
        .tarea-modal-title{font-size:1.15rem;font-weight:700;margin:0;color:#1a1a2e;line-height:1.3}
        .tarea-modal-close{background:none;border:none;font-size:1rem;color:#888;cursor:pointer;padding:4px 6px;border-radius:6px;transition:background .15s,color .15s;flex-shrink:0;margin-top:2px}
        .tarea-modal-close:hover{background:#f0f0f0;color:#333}
        .tarea-modal-body{padding:16px 24px;display:flex;flex-direction:column;gap:18px}
        .tarea-modal-badge-acabada{display:inline-flex;align-items:center;gap:6px;background:#e8f5e9;color:#2e7d32;font-size:.8rem;font-weight:600;padding:6px 12px;border-radius:20px;width:fit-content}
        .tarea-modal-section{display:flex;flex-direction:column;gap:6px}
        .tarea-modal-label{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#999}
        .tarea-modal-text{font-size:.9rem;color:#333;margin:0;line-height:1.5}
        .tarea-modal-proyecto{display:flex;align-items:center;gap:8px;background:#f7f7fb;border:1px solid #ebebf5;border-radius:8px;padding:8px 12px;width:fit-content}
        .tarea-modal-workers-list{display:flex;flex-direction:column;gap:8px}
        .worker-card{display:flex;align-items:center;gap:10px;background:#f9f9fc;border:1px solid #ebebf5;border-radius:10px;padding:8px 12px;transition:background .15s}
        .worker-card:hover{background:#f0f0f8}
        .worker-avatar{width:36px;height:36px;border-radius:50%;overflow:hidden;flex-shrink:0;background:#1a1a2e;display:flex;align-items:center;justify-content:center}
        .worker-avatar-img{width:100%;height:100%;object-fit:cover}
        .worker-avatar-initials{color:#fff;font-size:.75rem;font-weight:700;letter-spacing:.03em}
        .worker-info{display:flex;flex-direction:column;gap:1px}
        .worker-nombre{font-size:.87rem;font-weight:600;color:#1a1a2e}
        .worker-cargo{font-size:.75rem;color:#888}
        .tarea-modal-footer{padding:0 24px 24px 24px}
        .tarea-modal-btn-acabar{width:100%;padding:12px;background:#1a1a2e;color:#fff;border:none;border-radius:10px;font-size:.92rem;font-weight:600;cursor:pointer;transition:background .15s,transform .1s;letter-spacing:.02em}
        .tarea-modal-btn-acabar:hover:not(:disabled){background:#2d2d5e;transform:translateY(-1px)}
        .tarea-modal-btn-acabar:disabled{opacity:.6;cursor:not-allowed}
      `}</style>
    </>
  );
}


export default function ProyectosSection() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [codigoempresa, setCodigoEmpresa] = useState("");
  const [cargando, setCargando] = useState(true);
  const [esAdmin, setEsAdmin] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<Proyecto | null>(null);

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
          setEsAdmin(true);
        } else {
          setCodigoEmpresa(resp.data.cod_empresa);
          setEsAdmin(false);
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
        if (resp?.success) setProyectos(resp.data);
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
              <div
                className="project-card"
                key={p.id}
                onClick={() => setProyectoSeleccionado(p)}
                style={{ cursor: "pointer" }}
              >
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

      {proyectoSeleccionado && (
        <ProyectoTareasModal
          proyecto={proyectoSeleccionado}
          esAdmin={esAdmin}
          onClose={() => setProyectoSeleccionado(null)}
          
          onProyectoEliminado={(id) =>
            setProyectos((prev) => prev.filter((p) => p.id !== id))
          }
        />
      )}
    </>
  );
}