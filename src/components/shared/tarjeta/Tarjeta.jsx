import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tarjeta = ({ searchTerm = '' }) => {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://spa-heroes-service.vercel.app/api/superheroes');

        if (!response.ok) {
          throw new Error('Error al cargar los héroes');
        }

        const data = await response.json();
        setHeroes(data.superheroes);
        setFilteredHeroes(data.superheroes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  // Filtrar héroes cuando cambie el término de búsqueda
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredHeroes(heroes);
    } else {
      const filtered = heroes.filter(
        heroe =>
          heroe.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          heroe.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
          heroe.casa.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHeroes(filtered);
    }
  }, [searchTerm, heroes]);

  if (loading) {
    return (
      <div className="col-12 d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-12">
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  if (filteredHeroes.length === 0 && searchTerm.trim()) {
    return (
      <div className="col-12">
        <div className="alert alert-info text-center" role="alert">
          <h5>No se encontraron resultados</h5>
          <p>No hay superhéroes que coincidan con "{searchTerm}"</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {filteredHeroes.length >= 1 &&
        filteredHeroes.map(heroe => {
          // Formatear la fecha de aparición
          const fechaAparicion = new Date(heroe.aparicion).getFullYear();

          return (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={heroe._id}>
              <div className="card h-100">
                <img
                  className="card-img-top border-0"
                  src={heroe.img ? heroe.img : 'assets/img/no-image.svg'}
                  alt={heroe.nombre}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{heroe.nombre}</h5>
                  <p className="card-text card-text-truncate">{heroe.bio}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      <strong>Año:</strong> {fechaAparicion}
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <strong>Casa:</strong> {heroe.casa}
                    </small>
                  </p>
                  <div className="mt-auto">
                    <Link to={`/heroe/${heroe._id}`} className="btn btn-4 btn-block">
                      Ver más...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Tarjeta;
