import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "../components/CountryCard";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(""); //   Estado para el buscador
  const limit = 6;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,population"
        );
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los países:", error);
      }
    };
    fetchCountries();
  }, []);

  // Filtrar por nombre del país
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  // Calcular total de páginas (solo de los filtrados)
  const totalPages = Math.ceil(filteredCountries.length / limit);

  // Cortar los países filtrados según la página actual
  const startIndex = (page - 1) * limit;
  const currentCountries = filteredCountries.slice(startIndex, startIndex + limit);

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">🌍 Lista de Países</h2>

      {/* Buscador */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar país..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1); //  Volver a la página 1 al buscar
            }}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Tarjetas */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {currentCountries.map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </div>

          {/* Paginación */}
          <nav aria-label="Page navigation" className="mt-4">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </button>
              </li>

              <li className="page-item">
                <button className="page-link active">{page}</button>
              </li>

              <li
                className={`page-item ${page === totalPages ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </section>
  );
}

export default Countries;
