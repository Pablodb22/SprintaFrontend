"use client";
import { useEffect, useState } from "react";
import { getTareasPorEmpresa, acabarTarea } from "../../service/TareaService";

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

const shimmerStyle = {
  background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
  backgroundSize: "200% 100%",
  animation: "shimmer 1.5s infinite",
};

function TareaSkeletonItem() {
  return (
    <div className="tarea-item">
      <div className="tarea-checkbox">
        <div style={{ width: "16px", height: "16px", borderRadius: "3px", ...shimmerStyle }} />
      </div>
      <div className="tarea-content">
        <div className="tarea-header">
          <div style={{ width: "55%", height: "14px", borderRadius: "4px", ...shimmerStyle }} />
          <div style={{ width: "52px", height: "20px", borderRadius: "12px", ...shimmerStyle }} />
        </div>
        <div style={{ width: "90%", height: "12px", borderRadius: "4px", marginTop: "8px", ...shimmerStyle }} />
        <div style={{ width: "65%", height: "12px", borderRadius: "4px", marginTop: "5px", ...shimmerStyle }} />
        <div className="tarea-meta">
          <div style={{ width: "30%", height: "11px", borderRadius: "4px", ...shimmerStyle }} />
        </div>
      </div>
    </div>
  );
}

function WorkerAvatar({ worker }: { worker: TrabajadorInfo }) {
  const initials = worker.nombre
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="worker-card">
      <div className="worker-avatar">
        {worker.foto ? (
          <img src={worker.foto} alt={worker.nombre} className="worker-avatar-img" />
        ) : (
          <span className="worker-avatar-initials">{initials}</span>
        )}
      </div>
      <div className="worker-info">
        <span className="worker-nombre">{worker.nombre}</span>
        {worker.cargo && <span className="worker-cargo">{worker.cargo}</span>}
      </div>
    </div>
  );
}

interface TareaModalProps {
  tarea: Tarea;
  onClose: () => void;
  onAcabar: (id: string) => void;
  cargandoAcabar: boolean;
}

function TareaModal({ tarea, onClose, onAcabar, cargandoAcabar }: TareaModalProps) {
  const priorityClass = {
    Alta: "priority-high",
    Media: "priority-medium",
    Baja: "priority-low",
  };

  return (
    <div className="tarea-modal-overlay" onClick={onClose}>
      <div className="tarea-modal" onClick={(e) => e.stopPropagation()}>        
        <div className="tarea-modal-header">
          <div className="tarea-modal-title-row">
            <h2
              className="tarea-modal-title"
              style={tarea.acabada ? { textDecoration: "line-through", opacity: 0.6 } : {}}
            >
              {tarea.nombre}
            </h2>
            <span className={`tarea-priority ${priorityClass[tarea.prioridad]}`}>
              {tarea.prioridad}
            </span>
          </div>
          <button className="tarea-modal-close" onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>
        <div className="tarea-modal-body">
          {tarea.acabada && (
            <div className="tarea-modal-badge-acabada">
              ✓ Tarea completada
            </div>
          )}
          
          <div className="tarea-modal-section">
            <span className="tarea-modal-label">Descripción</span>
            <p className="tarea-modal-text">{tarea.descripcion || "Sin descripción."}</p>
          </div>
          
          <div className="tarea-modal-section">
            <span className="tarea-modal-label">Proyecto</span>
            <div className="tarea-modal-proyecto">
              <span className="tarea-modal-proyecto-icon">📁</span>
              <span className="tarea-modal-text">
                {tarea.proyecto_nombre ?? tarea.proyecto}
              </span>
            </div>
          </div>
          {tarea.trabajadores_info && tarea.trabajadores_info.length > 0 && (
            <div className="tarea-modal-section">
              <span className="tarea-modal-label">
                Trabajadores asignados ({tarea.trabajadores_info.length})
              </span>
              <div className="tarea-modal-workers-list">
                {tarea.trabajadores_info.map((w) => (
                  <WorkerAvatar key={w.id} worker={w} />
                ))}
              </div>
            </div>
          )}
        </div>
        
        {!tarea.acabada && (
          <div className="tarea-modal-footer">
            <button
              className="tarea-modal-btn-acabar"
              onClick={() => onAcabar(tarea.id)}
              disabled={cargandoAcabar}
            >
              {cargandoAcabar ? "Guardando…" : "✓ Marcar como terminada"}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .tarea-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeInOverlay 0.18s ease;
        }
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .tarea-modal {
          background: #fff;
          border-radius: 16px;
          width: 100%;
          max-width: 500px;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 24px 60px rgba(0,0,0,0.18);
          animation: slideUp 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          flex-direction: column;
        }
        @keyframes slideUp {
          from { transform: translateY(28px) scale(0.97); opacity: 0; }
          to   { transform: translateY(0) scale(1); opacity: 1; }
        }
        .tarea-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 24px 24px 0 24px;
          gap: 12px;
        }
        .tarea-modal-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          flex: 1;
        }
        .tarea-modal-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0;
          color: #1a1a2e;
          line-height: 1.3;
        }
        .tarea-modal-close {
          background: none;
          border: none;
          font-size: 1rem;
          color: #888;
          cursor: pointer;
          padding: 4px 6px;
          border-radius: 6px;
          transition: background 0.15s, color 0.15s;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .tarea-modal-close:hover { background: #f0f0f0; color: #333; }
        .tarea-modal-body {
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .tarea-modal-badge-acabada {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #e8f5e9;
          color: #2e7d32;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 20px;
          width: fit-content;
        }
        .tarea-modal-section {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .tarea-modal-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #999;
        }
        .tarea-modal-text {
          font-size: 0.9rem;
          color: #333;
          margin: 0;
          line-height: 1.5;
        }
        .tarea-modal-proyecto {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f7f7fb;
          border: 1px solid #ebebf5;
          border-radius: 8px;
          padding: 8px 12px;
          width: fit-content;
        }
        .tarea-modal-proyecto-icon { font-size: 0.95rem; }
         
        .tarea-modal-workers-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .worker-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f9f9fc;
          border: 1px solid #ebebf5;
          border-radius: 10px;
          padding: 8px 12px;
          transition: background 0.15s;
        }
        .worker-card:hover { background: #f0f0f8; }
        .worker-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          background: #1a1a2e;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .worker-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .worker-avatar-initials {
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.03em;
        }
        .worker-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .worker-nombre {
          font-size: 0.87rem;
          font-weight: 600;
          color: #1a1a2e;
        }
        .worker-cargo {
          font-size: 0.75rem;
          color: #888;
        }

        .tarea-modal-footer {
          padding: 0 24px 24px 24px;
        }
        .tarea-modal-btn-acabar {
          width: 100%;
          padding: 12px;
          background: #1a1a2e;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
          letter-spacing: 0.02em;
        }
        .tarea-modal-btn-acabar:hover:not(:disabled) {
          background: #2d2d5e;
          transform: translateY(-1px);
        }
        .tarea-modal-btn-acabar:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>
    </div>
  );
}

export default function TareasSection({ empresaId }: { empresaId: string }) {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [cargando, setCargando] = useState(true);
  const [tareaSeleccionada, setTareaSeleccionada] = useState<Tarea | null>(null);
  const [cargandoAcabar, setCargandoAcabar] = useState(false);

  useEffect(() => {
    async function cargar() {
      setCargando(true);
      const datos = await getTareasPorEmpresa(empresaId);
      if (datos) setTareas(datos);
      setCargando(false);
    }
    cargar();
  }, [empresaId]);

  const priorityClass = {
    Alta: "priority-high",
    Media: "priority-medium",
    Baja: "priority-low",
  };

  async function handleAcabar(id: string) {
    setCargandoAcabar(true);
    const result = await acabarTarea(id);
    if (result) {
      setTareas((prev) =>
        prev.map((t) => (t.id === id ? { ...t, acabada: true } : t))
      );
      setTareaSeleccionada((prev) =>
        prev && prev.id === id ? { ...prev, acabada: true } : prev
      );
    }
    setCargandoAcabar(false);
  }

  return (
    <>
      <div className="tareas-container">
        <div className="tareas-list">
          {cargando ? (
            <>
              {[1, 2, 3, 4].map((i) => (
                <TareaSkeletonItem key={i} />
              ))}
              <style>{`
                @keyframes shimmer {
                  0%   { background-position: 200% 0; }
                  100% { background-position: -200% 0; }
                }
              `}</style>
            </>
          ) : tareas.length === 0 ? (
            <p>No hay tareas.</p>
          ) : (
            tareas.map((tarea) => (
              <div
                className={`tarea-item${tarea.acabada ? " tarea-acabada" : ""}`}
                key={tarea.id}
                onClick={() => setTareaSeleccionada(tarea)}
                style={{ cursor: "pointer" }}
              >
                <div className="tarea-checkbox">
                  <input
                    type="checkbox"
                    id={tarea.id}
                    checked={tarea.acabada}
                    readOnly
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                <div className="tarea-content">
                  <div className="tarea-header">
                    <label
                      htmlFor={tarea.id}
                      className="tarea-title"
                      style={tarea.acabada ? { textDecoration: "line-through", opacity: 0.55 } : {}}
                    >
                      {tarea.nombre}
                    </label>
                    <span className={`tarea-priority ${priorityClass[tarea.prioridad]}`}>
                      {tarea.prioridad}
                    </span>
                  </div>
                  <p
                    className="tarea-description"
                    style={tarea.acabada ? { textDecoration: "line-through", opacity: 0.45 } : {}}
                  >
                    {tarea.descripcion}
                  </p>
                  <div className="tarea-meta">
                    <span className="tarea-proyecto">
                      {tarea.proyecto_nombre ?? tarea.proyecto}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
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
    </>
  );
}