import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "../components/CountryCard";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Countries;
