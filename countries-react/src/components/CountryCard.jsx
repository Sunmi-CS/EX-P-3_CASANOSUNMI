function CountryCard({ country }) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="card-img-top"
          style={{ height: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{country.name.common}</h5>
          <p className="card-text mb-1">
            <strong>Región:</strong> {country.region}
          </p>
          <p className="card-text">
            <strong>Población:</strong> {country.population.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
