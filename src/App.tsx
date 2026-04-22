import viasanoLogoColorPng from './assets/viasano_logo_color.png'
import viasanoLogoPng from './assets/viasano_logo.png'

const WHATSAPP_DEFAULT_MESSAGE =
  'Hola, quiero consultar por ViaSano, vengo de la pagina web'
const WHATSAPP_URL = `https://wa.me/5491151229168?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`

function App() {
  return (
    <main className="landing">
      <div className="top-logo">
        <img src={viasanoLogoColorPng} alt="ViaSano Salud" />
      </div>

      <section className="hero-section">
        <p className="pill">Cobertura Nacional Certificada</p>
        <h1>TU SALUD SIN COSTOS EXTRA</h1>
        <p className="hero-subtitle">
          Cobertura medica completa <strong>SOLO CON TUS APORTES</strong>
        </p>
        <p className="hero-warning">⚠️ Sin Bonos | Sin Copagos | Sin Sorpresas</p>
        <p className="hero-disclaimer">
          NO SE TOMAN MONOTRIBUTISTAS NI TRABAJADORES DE CASAS PARTICULARES
        </p>
      </section>

      <section className="form-and-benefits">
        <article className="lead-form-card">
          <h2>¿Queres saber cuanto vas a ahorrar?</h2>
          <p className="form-highlight">SOLO SI NO SOS AFILIADO</p>
          <p className="muted">Completa y un asesor te contactara en minutos.</p>

          <form className="lead-form">
            <label htmlFor="fullName">Nombre completo</label>
            <input id="fullName" name="fullName" type="text" placeholder="Tu nombre y apellido" />

            <label htmlFor="whatsapp">WhatsApp (Ej: 1122334455)</label>
            <input id="whatsapp" name="whatsapp" type="tel" placeholder="11XXXXXXXX" />

            <label htmlFor="email">Tu Correo Electronico (Opcional)</label>
            <input id="email" name="email" type="email" placeholder="correo@ejemplo.com" />

            <label className="checkbox-row">
              <input type="checkbox" name="humanCheck" />
              <span>No soy un robot</span>
            </label>

            <button type="submit">SOLICITAR COTIZACION GRATIS SI NO SOS AFILIADO</button>
          </form>
        </article>

        <aside className="benefits-grid">
          <article className="benefit-card">
            <h3>🏥 +50 Sanatorios</h3>
            <p>Acceso a cartilla de primer nivel en toda la zona.</p>
          </article>
          <article className="benefit-card">
            <h3>🚑 Emergencias 24hs</h3>
            <p>Atencion medica domiciliaria los 365 dias del ano.</p>
          </article>
          <article className="benefit-card">
            <h3>🦷 Odontologia</h3>
            <p>Cobertura integral para vos y tu familia.</p>
          </article>
        </aside>
      </section>

      <section className="featured-plan">
        <p className="plan-badge">PLAN DESTACADO: 411 SUPERADOR</p>
        <h2>$0 COPAGOS</h2>
        <p className="muted">Uso exclusivo con recibo de sueldo</p>
        <ul>
          <li>Internacion programada al 100%</li>
          <li>17 Policonsultorios propios de atencion inmediata</li>
          <li>Demanda espontanea pediatrica y clinica</li>
          <li>Descuentos en farmacias de toda la red</li>
        </ul>
        <button type="button">¡QUIERO ESTE PLAN!</button>
      </section>

      <section className="infrastructure">
        <h2>Conoce nuestra infraestructura</h2>
        <p className="muted">Instalaciones modernas y equipos medicos de ultima generacion.</p>
      </section>

      <section className="testimonials">
        <h2>Lo que dicen nuestros afiliados</h2>
        <div className="testimonials-grid">
          <article className="testimonial-card">
            <p className="stars">★★★★★</p>
            <p>
              &quot;Increible no pagar de mas cada vez que voy al medico. El ahorro se
              siente.&quot;
            </p>
            <p className="author">- Carlos R.</p>
          </article>
          <article className="testimonial-card">
            <p className="stars">★★★★★</p>
            <p>
              &quot;Los policonsultorios estan impecables y la atencion es super
              rapida.&quot;
            </p>
            <p className="author">- Ana M.</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <img className="footer-logo" src={viasanoLogoPng} alt="Logo ViaSano" />
        <p>© 2026 ViaSano Salud. Cobertura nacional certificada.</p>
      </footer>

      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="whatsapp-float__icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.984-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </a>
    </main>
  )
}

export default App
