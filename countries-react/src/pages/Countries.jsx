import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "../components/CountryCard";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // 📄 Página actual
  const limit = 6; // 🧮 Cantidad de países por página

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

  // 📊 Calcular el total de páginas
  const totalPages = Math.ceil(countries.length / limit);

  // ✂️ Cortar los países según la página actual
  const startIndex = (page - 1) * limit;
  const currentCountries = countries.slice(startIndex, startIndex + limit);

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">🌍 Lista de Países</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <>
          {/* 🗺️ Tarjetas de países */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {currentCountries.map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </div>

          {/* 🧭 Paginación Bootstrap */}
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
                className={`page-item ${
                  page === totalPages ? "disabled" : ""
                }`}
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
