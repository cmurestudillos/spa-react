import { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const Search = ({ onSearch, placeholder = 'Buscar superhéroe...' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  const handleChange = e => {
    const value = e.target.value;
    setSearchTerm(value);
    // Búsqueda en tiempo real (opcional)
    if (value.trim() === '') {
      onSearch(''); // Limpiar búsqueda si está vacío
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <div className="input-group">
        <FormControl
          type="search"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
        />
        {searchTerm && (
          <div className="input-group-append">
            <Button variant="outline-secondary" size="sm" onClick={handleClear} type="button">
              ✕
            </Button>
          </div>
        )}
        <div className="input-group-append">
          <Button variant="primary" type="submit" size="sm">
            🔍
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Search;
