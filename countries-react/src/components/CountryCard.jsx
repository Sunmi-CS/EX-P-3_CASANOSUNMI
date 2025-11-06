function CountryCard({ country }) {
  const { flags, name, region, population } = country;

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img
          src={flags?.png}
          alt={name.common}
          className="card-img-top"
          style={{ height: "160px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{name.common}</h5>
          <p className="card-text mb-1"><strong>Región:</strong> {region}</p>
          <p className="card-text"><strong>Población:</strong> {population.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
