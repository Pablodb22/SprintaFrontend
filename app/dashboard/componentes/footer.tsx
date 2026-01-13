import Link from 'next/link';
import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-flex align-items-center gap-2 mb-4">
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>Sprinta</h2>
            </div>
            <p className="text-muted mb-4" style={{ fontSize: '0.875rem', maxWidth: '20rem' }}>
              La plataforma optimizada de gestión de tareas para equipos que valoran la velocidad y el diseño.
            </p>
            <div className="d-flex gap-3">
              <Link href="" className="text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                </svg>
              </Link>
              <Link href="" className="text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                </svg>
              </Link>
              <Link href="" className="text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading">Producto</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><Link href="" className="footer-link">Caracteristicas</Link></li>
              <li className="mb-3"><Link href="" className="footer-link">Integraciones</Link></li>
              <li className="mb-3"><Link href="" className="footer-link">Precios</Link></li>
              <li className="mb-3"><Link href="" className="footer-link">Hoja de ruta</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><Link href="" className="footer-link">Sobre nosotros</Link></li>
              <li className="mb-3"><Link href="" className="footer-link">Blog</Link></li>
              <li className="mb-3"><Link href="" className="footer-link">Carreras</Link></li>
              <li className="mb-3"><Link href="" className="footer-link">Contacto</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><Link href="" className="footer-link">Privacidad</Link></li>
              <li className="mb-3"><Link href="" className="footer-link">Terminos</Link></li>
              <li className="mb-3"><Link href="" className="footer-link">Seguridad</Link></li>
            </ul>
          </div>
        </div>

        <div className="row mt-5 pt-4 footer-bottom">
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-muted mb-0" style={{ fontSize: '0.875rem' }}>
              © 2026 Sprinta Technologies Inc.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <Link href="" className="text-muted text-decoration-none me-4" style={{ fontSize: '0.875rem' }}>Estado</Link>
            <Link href="" className="text-muted text-decoration-none" style={{ fontSize: '0.875rem' }}>Política de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}