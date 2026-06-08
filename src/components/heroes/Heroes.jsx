import Tarjeta from '../shared/tarjeta/Tarjeta';

const Heroes = ({ searchTerm }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">{searchTerm && `Resultados para: "${searchTerm}"`}</h2>
        </div>
      </div>
      <div className="row">
        <Tarjeta searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Heroes;
