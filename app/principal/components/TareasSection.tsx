export default function TareasSection() {
  return (
    <div className="tareas-container">
      <div className="tareas-header">
        <div className="tareas-filters">
          <button className="filter-btn active">Todas</button>
          <button className="filter-btn">Alta</button>
          <button className="filter-btn">Media</button>
          <button className="filter-btn">Baja</button>
        </div>
      </div>

      <div className="tareas-list">
        <div className="tarea-item">
          <div className="tarea-checkbox">
            <input type="checkbox" id="tarea1" />
          </div>
          <div className="tarea-content">
            <div className="tarea-header">
              <label htmlFor="tarea1" className="tarea-title">Revisar diseños de interfaz</label>
              <span className="tarea-priority priority-high">Alta</span>
            </div>
            <p className="tarea-description">Revisar y aprobar los diseños finales del nuevo dashboard</p>
            <div className="tarea-meta">
              <span className="tarea-proyecto">Rediseño de App Móvil</span>
              <span className="tarea-fecha">Vence: 28 de enero</span>
            </div>
          </div>
          <div className="tarea-avatar">
            <div className="avatar-small" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaHe5j-t1Y2CwMfv6ghGeZ11HwkAuczADhRRRXTAD5HghXZRLefh6z2hsJ-IOmyryd1Zg_v5Hbkolbw3U1plbfIWCyinbWBozLAmGV6l4-30euLMsAaxuOS_I0IJRC8TBLoIuTLg9OTVVuO7EHrh5c7_SBEWHAV7I1ti-gIWR_pLBifv05JHtd4ZOWek5jkcgZ70rwN_Bhib1TNMll4jHwO63OSrWhLmgT8UqWTxdS0gNZ1zYp-IPclB7-eE4NLRJk1HSSniAKmss")'}}></div>
          </div>
        </div>

        <div className="tarea-item">
          <div className="tarea-checkbox">
            <input type="checkbox" id="tarea2" />
          </div>
          <div className="tarea-content">
            <div className="tarea-header">
              <label htmlFor="tarea2" className="tarea-title">Implementar autenticación OAuth 2.0</label>
              <span className="tarea-priority priority-medium">Media</span>
            </div>
            <p className="tarea-description">Agregar soporte para login con Google y GitHub</p>
            <div className="tarea-meta">
              <span className="tarea-proyecto">Integración API Externa</span>
              <span className="tarea-fecha">Vence: 2 de febrero</span>
            </div>
          </div>
          <div className="tarea-avatar">
            <div className="avatar-small" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtXZsOFFCjs04dWSMfU1luw03qScFP-_eU7n7GaOST2p8jG-fJ8a57Zse7K7XCQqBdyEMYRjQmku4SVpKbtIlm2cbKFA37DNIxZy1PonW1EbobzAwbtSXQ2836ZlbBj1QExoGgaOurNCfC2yzTAG11JwaF9dOefk-WDedJPepsuu5w8tMdiJSUZUpOFbd8hEGK2XNZ3_4tKfHUQYHia2bdN2WGNoe_Md3iRIV5i1_Ybb4St2FEh-8TBX2jBS7H5w7phhWIZba_wsk")'}}></div>
          </div>
        </div>

        <div className="tarea-item">
          <div className="tarea-checkbox">
            <input type="checkbox" id="tarea3" checked />
          </div>
          <div className="tarea-content">
            <div className="tarea-header">
              <label htmlFor="tarea3" className="tarea-title completed">Documentar API REST</label>
              <span className="tarea-priority priority-low">Baja</span>
            </div>
            <p className="tarea-description completed">Crear documentación con Swagger/OpenAPI</p>
            <div className="tarea-meta">
              <span className="tarea-proyecto">Integración API Externa</span>
              <span className="tarea-fecha">Completada: 24 de enero</span>
            </div>
          </div>
          <div className="tarea-avatar">
            <div className="avatar-small" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8jNXV21FwPRuHVsMWBa327BAZN48GU8nslwLn1WHx_x8L6Pw8Ui--29ORrzYsLQtj4bJu_W5s9LhsILSz6V66JlPX2xULwxZ4YMqL3arVOAbLVOvO6BqtNPTpAZIAp-yChGOSjmGe_n5Rm6TFJS79aUXjGzciRBb2SA-cWf4aKqNicT-J5HkIrF8irkiBOJBTf2f_S_GFzX2kHxDcXjdhx1Q9u0wStrNTvjoZ6iMX3y6ioy2YwfLAFdC8aJMo_BSZKdntx0NC1N8")'}}></div>
          </div>
        </div>

        <div className="tarea-item">
          <div className="tarea-checkbox">
            <input type="checkbox" id="tarea4" />
          </div>
          <div className="tarea-content">
            <div className="tarea-header">
              <label htmlFor="tarea4" className="tarea-title">Realizar testing de seguridad</label>
              <span className="tarea-priority priority-high">Alta</span>
            </div>
            <p className="tarea-description">Ejecutar pruebas de penetración en el nuevo módulo de pagos</p>
            <div className="tarea-meta">
              <span className="tarea-proyecto">Auditoría de Seguridad v2</span>
              <span className="tarea-fecha">Vence: 1 de febrero</span>
            </div>
          </div>
          <div className="tarea-avatar">
            <div className="avatar-small" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNOk0QtBzyF3iOYiLM2iZhKML9elhrxlR-7O6K7RPWC-l73DHC-aJlm3wPpkBdIdhF3P5FZxAMzk4RIIWThY6ke6ouA1xJjN7extS642syzYP5rz3kLGYSzrzOUjNtiOggrNshA4RITKUIbHiLwXu5PEkt9l0oy3n3_k4ASkH3PS_f7wB5dCciae6r7Y-BQgF3F6_8A8qtmSHmT7r0FN40XVhvlUS-hqKuKGMJ75UUsIA4y3GJf7niQGz9YcoLWN2bMvycSbKPXfM")'}}></div>
          </div>
        </div>

        <div className="tarea-item">
          <div className="tarea-checkbox">
            <input type="checkbox" id="tarea5" />
          </div>
          <div className="tarea-content">
            <div className="tarea-header">
              <label htmlFor="tarea5" className="tarea-title">Diseñar landing page</label>
              <span className="tarea-priority priority-medium">Media</span>
            </div>
            <p className="tarea-description">Crear mockups y prototipos interactivos con Figma</p>
            <div className="tarea-meta">
              <span className="tarea-proyecto">Sitio Web Marketing Q3</span>
              <span className="tarea-fecha">Vence: 10 de febrero</span>
            </div>
          </div>
          <div className="tarea-avatar">
            <div className="avatar-small" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACMnsMKXCHSYuT631nzjHiAC0U9K7uE93Q-Cey862xHDx9fD0RbY0MVs9vwGmEvnnnkBfHdFURlAo1bBwzikEewFk87X2XIgJq0Pr_OLNNDjiPy0M2-zLgqYK-xN8FhxXUBlDY2H9yBWJzxJ0ON9GxA0s7eirR-NDJx1DPqk3Ln154lpfWsRxdxOT_Us4oJL8G7R-DWsDZ2MNuKkrsozVyc9TeDrb_c6Mw16SKTX42ptdbBzg8CmQooJwl2kzAVGmUBhkhNqWwIVY")'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
