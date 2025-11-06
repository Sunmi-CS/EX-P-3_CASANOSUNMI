function Home() {
  return (
    <section className="container py-5 text-center">
      <h1 className="display-4 fw-bold mb-3">🌎 World Explorer</h1>
      <p className="lead mb-4">
        Descubre información sobre todos los países del mundo gracias a la API pública de REST Countries.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        alt="Mapa del mundo"
        className="img-fluid rounded shadow"
        style={{ maxWidth: "700px" }}
      />
    </section>
  );
}

export default Home;
