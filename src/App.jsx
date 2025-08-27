import { useState } from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/Router';
import Footer from './components/shared/footer/Footer';
import Search from './components/shared/search/Search';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = term => {
    setSearchTerm(term);
  };

  return (
    <div>
      <div className="container main-container">
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <h1 className="text-white mb-0">
              <a href="/">
                <img src="assets/img/A-64.svg" alt="Logo" className="mr-2" width={50} height={50} />
              </a>
              Heroes <small>Marvel y DC</small>
            </h1>
          </div>
          <div className="col-md-6">
            <Search onSearch={handleSearch} placeholder="Buscar superhéroe..." />
          </div>
        </div>
        <hr className="bg-white"></hr>
        <Router searchTerm={searchTerm} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
