export default function EquipoSection() {
  return (
    <div className="equipo-container">
      <div className="equipo-stats">
        <div className="equipo-stat-card">
          <p className="equipo-stat-label">Miembros del Equipo</p>
          <p className="equipo-stat-value">12</p>
        </div>
        <div className="equipo-stat-card">
          <p className="equipo-stat-label">Departamentos</p>
          <p className="equipo-stat-value">4</p>
        </div>
        <div className="equipo-stat-card">
          <p className="equipo-stat-label">Activos Hoy</p>
          <p className="equipo-stat-value">10</p>
        </div>
      </div>

      <div className="equipo-members">
        <h3 className="equipo-section-title">Miembros del Equipo</h3>
        
        <div className="equipo-member-item">
          <div className="member-avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaHe5j-t1Y2CwMfv6ghGeZ11HwkAuczADhRRRXTAD5HghXZRLefh6z2hsJ-IOmyryd1Zg_v5Hbkolbw3U1plbfIWCyinbWBozLAmGV6l4-30euLMsAaxuOS_I0IJRC8TBLoIuTLg9OTVVuO7EHrh5c7_SBEWHAV7I1ti-gIWR_pLBifv05JHtd4ZOWek5jkcgZ70rwN_Bhib1TNMll4jHwO63OSrWhLmgT8UqWTxdS0gNZ1zYp-IPclB7-eE4NLRJk1HSSniAKmss")'}}></div>
          <div className="member-info">
            <h4 className="member-name">Carlos Mendez</h4>
            <p className="member-role">Lead Developer</p>
            <p className="member-email">carlos.mendez@sprinta.com</p>
          </div>
          <div className="member-status online"></div>
        </div>

        <div className="equipo-member-item">
          <div className="member-avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtXZsOFFCjs04dWSMfU1luw03qScFP-_eU7n7GaOST2p8jG-fJ8a57Zse7K7XCQqBdyEMYRjQmku4SVpKbtIlm2cbKFA37DNIxZy1PonW1EbobzAwbtSXQ2836ZlbBj1QExoGgaOurNCfC2yzTAG11JwaF9dOefk-WDedJPepsuu5w8tMdiJSUZUpOFbd8hEGK2XNZ3_4tKfHUQYHia2bdN2WGNoe_Md3iRIV5i1_Ybb4St2FEh-8TBX2jBS7H5w7phhWIZba_wsk")'}}></div>
          <div className="member-info">
            <h4 className="member-name">Laura García</h4>
            <p className="member-role">Product Designer</p>
            <p className="member-email">laura.garcia@sprinta.com</p>
          </div>
          <div className="member-status online"></div>
        </div>

        <div className="equipo-member-item">
          <div className="member-avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8jNXV21FwPRuHVsMWBa327BAZN48GU8nslwLn1WHx_x8L6Pw8Ui--29ORrzYsLQtj4bJu_W5s9LhsILSz6V66JlPX2xULwxZ4YMqL3arVOAbLVOvO6BqtNPTpAZIAp-yChGOSjmGe_n5Rm6TFJS79aUXjGzciRBb2SA-cWf4aKqNicT-J5HkIrF8irkiBOJBTf2f_S_GFzX2kHxDcXjdhx1Q9u0wStrNTvjoZ6iMX3y6ioy2YwfLAFdC8aJMo_BSZKdntx0NC1N8")'}}></div>
          <div className="member-info">
            <h4 className="member-name">Miguel Rodríguez</h4>
            <p className="member-role">Backend Developer</p>
            <p className="member-email">miguel.rodriguez@sprinta.com</p>
          </div>
          <div className="member-status offline"></div>
        </div>

        <div className="equipo-member-item">
          <div className="member-avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNOk0QtBzyF3iOYiLM2iZhKML9elhrxlR-7O6K7RPWC-l73DHC-aJlm3wPpkBdIdhF3P5FZxAMzk4RIIWThY6ke6ouA1xJjN7extS642syzYP5rz3kLGYSzrzOUjNtiOggrNshA4RITKUIbHiLwXu5PEkt9l0oy3n3_k4ASkH3PS_f7wB5dCciae6r7Y-BQgF3F6_8A8qtmSHmT7r0FN40XVhvlUS-hqKuKGMJ75UUsIA4y3GJf7niQGz9YcoLWN2bMvycSbKPXfM")'}}></div>
          <div className="member-info">
            <h4 className="member-name">Ana López</h4>
            <p className="member-role">QA Engineer</p>
            <p className="member-email">ana.lopez@sprinta.com</p>
          </div>
          <div className="member-status online"></div>
        </div>

        <div className="equipo-member-item">
          <div className="member-avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACMnsMKXCHSYuT631nzjHiAC0U9K7uE93Q-Cey862xHDx9fD0RbY0MVs9vwGmEvnnnkBfHdFURlAo1bBwzikEewFk87X2XIgJq0Pr_OLNNDjiPy0M2-zLgqYK-xN8FhxXUBlDY2H9yBWJzxJ0ON9GxA0s7eirR-NDJx1DPqk3Ln154lpfWsRxdxOT_Us4oJL8G7R-DWsDZ2MNuKkrsozVyc9TeDrb_c6Mw16SKTX42ptdbBzg8CmQooJwl2kzAVGmUBhkhNqWwIVY")'}}></div>
          <div className="member-info">
            <h4 className="member-name">Pedro Jiménez</h4>
            <p className="member-role">DevOps Engineer</p>
            <p className="member-email">pedro.jimenez@sprinta.com</p>
          </div>
          <div className="member-status online"></div>
        </div>

        <div className="equipo-member-item">
          <div className="member-avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDj_9QtRvhFu6Y0r3QF3L6o38bQrokEQgEyQwF7Ehf2kfGYXFeGlr8FXjQdwJLV_uzc-gIA8it1ZzIybtUuvnin-lsrzQrIlGp-SEkH9euwaczAK_hyM0Bwn26jy4h78ZOrGH65cZ9mN4KrgxEd3ynDaLMN8yv-VLcZ-ywhbRsp-KSGhZho29nxb7GZmv8bpRgyn_mpoNfxBHkQPrBxV4Ua87BHxTZoo-eyvQv_g9Vco99pA-wYFN4h1hIIr_iJ8WgRQN1SSIYNW_s")'}}></div>
          <div className="member-info">
            <h4 className="member-name">Sofía Torres</h4>
            <p className="member-role">Frontend Developer</p>
            <p className="member-email">sofia.torres@sprinta.com</p>
          </div>
          <div className="member-status offline"></div>
        </div>
      </div>
    </div>
  );
}
