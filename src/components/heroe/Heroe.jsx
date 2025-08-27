import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Heroe = () => {
  const [heroe, setHeroe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchHeroe = async () => {
      try {
        setLoading(true);
        // Llamamos directamente al endpoint del héroe por ID
        const response = await fetch(`https://spa-heroes-service.vercel.app/api/superheroes/${id}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Héroe no encontrado');
          }
          throw new Error('Error al cargar el héroe');
        }

        const data = await response.json();
        setHeroe(data.superheroe);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroe();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Error: {error}
        <br />
        <Link to="/heroes" className="btn btn-primary mt-2">
          Volver a Héroes
        </Link>
      </div>
    );
  }

  if (!heroe) {
    return (
      <div className="alert alert-warning" role="alert">
        Héroe no encontrado
        <br />
        <Link to="/heroes" className="btn btn-primary mt-2">
          Volver a Héroes
        </Link>
      </div>
    );
  }

  // Formatear la fecha de aparición
  const fechaAparicion = new Date(heroe.aparicion).getFullYear();

  // Construir la URL completa de la imagen
  const imagenUrl = heroe.img ? `/${heroe.img}` : 'assets/img/no-image.svg';

  return (
    <div className="bg-white p-3 rounded">
      <h1 className="animated fadeIn slow text-dark">
        {heroe.nombre} <small>({fechaAparicion})</small>
      </h1>
      <hr className="bg-dark" />
      <div className="row animated fadeIn slow">
        <div className="col-md-4">
          <img src={imagenUrl} alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow" />
          <br />
          <br />
          <Link to="/heroes" type="button" className="btn btn-4 btn-block">
            <i>Volver</i>
          </Link>
        </div>
        <div className="col-md-8">
          <h3>{heroe.nombre}</h3>
          <hr />
          <p>{heroe.bio}</p>
          <div className="mt-3">
            <p>
              <strong>Casa editorial:</strong> {heroe.casa}
            </p>
            <p>
              <strong>Primera aparición:</strong> {fechaAparicion}
            </p>
            <div className="mt-4">
              {heroe.casa === 'DC' && (
                <img
                  src="../../assets/img/dc.svg"
                  title={heroe.casa}
                  alt={heroe.casa}
                  className="img-fluid"
                  width="72"
                  height="72"
                />
              )}
              {heroe.casa === 'Marvel' && (
                <img
                  src="../../assets/img/marvel.svg"
                  title={heroe.casa}
                  alt={heroe.casa}
                  className="img-fluid"
                  width="72"
                  height="72"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroe;
