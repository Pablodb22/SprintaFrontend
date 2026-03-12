"use client";
import { useEffect, useState } from "react";
import { getTareasPorEmpresa } from "../../service/TareaService";

interface Tarea {
  id: string;
  nombre: string;
  descripcion: string;
  prioridad: "Alta" | "Media" | "Baja";
  proyecto: string;
  trabajadores: string;
}

export default function TareasSection({ empresaId }: { empresaId: string }) {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [cargando, setCargando] = useState(true);

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

  if (cargando) return <p>Cargando tareas...</p>;

  return (
    <div className="tareas-container">
      <div className="tareas-list">
        {tareas.length === 0 ? (
          <p>No hay tareas.</p>
        ) : (
          tareas.map((tarea) => (
            <div className="tarea-item" key={tarea.id}>
              <div className="tarea-checkbox">
                <input type="checkbox" id={tarea.id} />
              </div>
              <div className="tarea-content">
                <div className="tarea-header">
                  <label htmlFor={tarea.id} className="tarea-title">
                    {tarea.nombre}
                  </label>
                  <span className={`tarea-priority ${priorityClass[tarea.prioridad]}`}>
                    {tarea.prioridad}
                  </span>
                </div>
                <p className="tarea-description">{tarea.descripcion}</p>
                <div className="tarea-meta">
                  <span className="tarea-proyecto">{tarea.proyecto}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}