'use client';

import { useState, useEffect } from 'react';
import { buscarTrabajadores } from "../../service/UsuarioService";
import "./Equipo.css";

export default function EquipoSection() {
  const [trabajadores, setTrabajadores] = useState<{ id: string, nombre: string, foto: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarTrabajdores = async () => {
      try {
        let email = localStorage.getItem("sprinta_user");
        if (!email) return;

        email = email.trim().replace(/^"|"$/g, '');

        const resp = await buscarTrabajadores(email);

        if (resp && resp.success) {
          setTrabajadores(resp.data);
        }
      } catch (err) {
        console.error("Error cargando trabajadores:", err);
      } finally {
        setLoading(false);
      }
    };

    cargarTrabajdores();
  }, []);

  return (
    <div className="equipo-container">
      <div className="equipo-stats">
        <div className="equipo-stat-card">
          <p className="equipo-stat-label">Miembros del Equipo</p>
          <p className="equipo-stat-value">{trabajadores.length}</p>
        </div>
        
      </div>

      <div className="equipo-members">
        <h3 className="equipo-section-title">Miembros del Equipo</h3>
        
        {loading && (
          <div className="equipo-empty">
            <div className="loader"></div>
            <p>Cargando trabajadores...</p>
          </div>
        )}
        
        {!loading && trabajadores.length === 0 && (
          <div className="equipo-empty">
            <div className="empty-icon">👥</div>
            <p>No hay trabajadores disponibles</p>
            <span>Añade miembros al equipo para empezar</span>
          </div>
        )}
        
        {!loading && trabajadores.length > 0 &&
          trabajadores.map((trabajador) => (
            <div key={trabajador.id} className="equipo-member-item">
              <div
                className="member-avatar"
                style={{ backgroundImage: `url(${trabajador.foto})` }}
              ></div>

              <div className="member-info">
                <h4 className="member-name">{trabajador.nombre}</h4>
                <p className="member-role">Empleado</p>
                <p className="member-email">{trabajador.id}</p>
              </div>

              <div className="member-status online"></div>
            </div>
          ))}
      </div>
    </div>
  );
}