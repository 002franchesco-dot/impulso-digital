import { useState } from "react";
import "./styles.css";

const negocios = [
  {
    id: 1,
    nombre: "Bodega Aurrera",
    categoria: "Tienda",
    descripcion: "Productos básicos para el hogar.",
    horario: "Lunes a sábado, 8:00 a 20:00",
    contacto: "555 000 0001"
  },
  {
    id: 2,
    nombre: "Papelería Azul",
    categoria: "Papelería",
    descripcion: "Útiles escolares, copias e impresiones.",
    horario: "Lunes a viernes, 9:00 a 19:00",
    contacto: "555 000 0002"
  },
  {
    id: 3,
    nombre: "Barberia",
    categoria: "Belleza",
    descripcion: "Cortes de cabello y cuidado personal.",
    horario: "Lunes a sábado, 10:00 a 19:00",
    contacto: "555 000 0003"
  },
  {
    id: 4,
    nombre: "Talacha",
    categoria: "Servicios",
    descripcion: "Reparación y mantenimiento de automoviles.",
    horario: "Lunes a sábado, 10:00 a 18:00",
    contacto: "555 000 0004"
  },
  {
    id: 5,
    nombre: "Chilaqueria",
    categoria: "Comida",
    descripcion: "Comida casera para llevar.",
    horario: "Todos los días, 9:00 a 16:00",
    contacto: "555 000 0005"
  },
  {
    id: 6,
    nombre: "CECyTEM",
    categoria: "Escuela",
    descripcion: "Institucion Escolar de media superior.",
    horario: "Lunes a viernes, 7:00 a 13:00",
    contacto: "555 000 0006"
  }
];

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  const categorias = [
    "Todas",
    ...new Set(negocios.map((negocio) => negocio.categoria))
  ];

  const resultados = negocios.filter((negocio) => {
    const texto = busqueda.toLowerCase().trim();

    const coincideTexto =
      negocio.nombre.toLowerCase().includes(texto) ||
      negocio.categoria.toLowerCase().includes(texto) ||
      negocio.descripcion.toLowerCase().includes(texto);

    const coincideCategoria =
      categoria === "Todas" ||
      negocio.categoria === categoria;

    return coincideTexto && coincideCategoria;
  });

  return (
    <div className="pagina">
      <header className="encabezado">
        <nav className="navegacion">
          <a className="logo" href="#inicio">
            <span className="logo-icono">IL</span>
            Impulso Digital Local
          </a>

          <div className="enlaces">
            <a href="#inicio">Inicio</a>
            <a href="#negocios">Negocios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <section className="portada" id="inicio">
          <div className="texto-portada">
            <span className="etiqueta">
              DIRECTORIO DE LA COMUNIDAD
            </span>

            <h1>
              Descubre los negocios
              <br />
              <span>de tu comunidad.</span>
            </h1>

            <p>
              Encuentra tiendas, servicios y comercios
              de Santa María las Torres en un solo lugar.
              Apoya a los negocios locales.
            </p>

            <a href="#negocios" className="boton-principal">
              Explorar negocios →
            </a>

            <div className="estadistica">
              <strong>{negocios.length}+</strong>
              <span>negocios de ejemplo</span>
            </div>
          </div>

          <div className="ilustracion">
            <div className="circulo">
              <span className="emoji-grande">🏪</span>
            </div>
            <div className="burbuja burbuja-uno">🛍️</div>
            <div className="burbuja burbuja-dos">📍</div>
            <div className="burbuja burbuja-tres">⭐</div>
          </div>
        </section>
      </header>

      <main className="contenedor" id="negocios">
        <section className="introduccion">
          <span className="etiqueta">DIRECTORIO LOCAL</span>
          <h2>Encuentra lo que necesitas</h2>
          <p>
            Busca un negocio por nombre, servicio o categoría.
          </p>
        </section>

        <section className="buscador">
          <div className="campo-busqueda">
            <span>🔎</span>
            <input
              type="search"
              placeholder="¿Qué negocio estás buscando?"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              aria-label="Buscar negocios"
            />
          </div>

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            aria-label="Filtrar por categoría"
          >
            {categorias.map((item) => (
              <option key={item} value={item}>
                {item === "Todas" ? "Todas las categorías" : item}
              </option>
            ))}
          </select>
        </section>

        <section className="lista-negocios">
          <div className="titulo-lista">
            <div>
              <h2>Negocios destacados</h2>
              <p>Opciones para descubrir cerca de ti.</p>
            </div>

            <span className="contador">
              {resultados.length} resultados
            </span>
          </div>

          {resultados.length > 0 ? (
            <div className="tarjetas">
              {resultados.map((negocio) => (
                <article className="tarjeta" key={negocio.id}>
                  <div className="icono-negocio">
                    {negocio.categoria === "Tienda" && "🛒"}
                    {negocio.categoria === "Papelería" && "📚"}
                    {negocio.categoria === "Belleza" && "✂️"}
                    {negocio.categoria === "Servicios" && "🔧"}
                    {negocio.categoria === "Comida" && "🍲 "}
                    {negocio.categoria === "Escuela" && "🏫"}
                  </div>

                  <span className="categoria">
                    {negocio.categoria}
                  </span>

                  <h3>{negocio.nombre}</h3>
                  <p className="descripcion">
                    {negocio.descripcion}
                  </p>

                  <div className="detalle">
                    <span>🕒</span>
                    <p>{negocio.horario}</p>
                  </div>

                  <div className="detalle">
                    <span>📞</span>
                    <p>{negocio.contacto}</p>
                  </div>

                  
                </article>
              ))}
            </div>
          ) : (
            <div className="sin-resultados">
              <span>🔎</span>
              <h3>No encontramos negocios</h3>
              <p>Intenta buscar otra palabra o cambia la categoría.</p>
              <button
                className="boton-principal"
                onClick={() => {
                  setBusqueda("");
                  setCategoria("Todas");
                }}
              >
                Mostrar todos
              </button>
            </div>
          )}
        </section>

        <section className="invitacion" id="contacto">
          <div>
            <span className="etiqueta">CRECEMOS JUNTOS</span>
            <h2>Apoyar lo local nos beneficia a todos.</h2>
            <p>
              Este proyecto busca dar mayor visibilidad a
              los negocios que esatan cercas de Santa María las Torres.
            </p>
          </div>
          <span className="emoji-invitacion">🤝</span>
        </section>
      </main>

      <footer>
        <div className="pie">
          <a className="logo logo-pie" href="#inicio">
            <span className="logo-icono">IL</span>
            Impulso Digital Local
          </a>
          <p>Proyecto escolar · Santa María las Torres</p>
        </div>
        <small>
          Prototipo de demostración. Los negocios y teléfonos
          son datos ficticios; deben sustituirse por información
          real autorizada antes de publicar.
        </small>
      </footer>
    </div>
  );
}

export default App;