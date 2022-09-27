import React, { useState } from 'react';

function HeaderFilters() {
  const [inputValue, setInputValue] = useState('');
  const [objFilter, setObjFilter] = useState({
    column: 'Population',
    comparison: 'Maior que',
    value: 0,
  });
  const [arrayFilter, setArrayFilter] = useState([]);

  const arrayColumn = ['Population', 'Orbital_period',
    'Diameter', 'Rotation_period', 'Surface_water'];

  const arrayMainor = ['Maior que', 'Menor que', 'Igual a'];

  return (
    <header>
      <input
        name="filter"
        data-testid="name-filter"
        id="filterPlanet"
        type="text"
        placeholder="Buscar..."
        onChange={ (e) => setInputValue(e.target.value) }
        value={ inputValue }
      />
      <section>
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => setObjFilter(
            (prevState) => ({ ...prevState, column: target.value }),
          ) }
          value={ objFilter.column }
        >

          { arrayColumn.map((c) => (
            <option key={ c }>{ c }</option>
          )) }
        </select>

        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setObjFilter(
            (prevState) => ({ ...prevState, comparison: target.value }),
          ) }
          value={ objFilter.comparison }
        >
          { arrayMainor.map((c) => (
            <option key={ c }>{ c }</option>
          )) }
        </select>

        <input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => setObjFilter(
            (prevState) => ({ ...prevState, value: target.value }),
          ) }
          value={ objFilter.value }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            setArrayFilter([...arrayFilter, objFilter]);
            setObjFilter({
              column: 'Population',
              comparison: 'Maior que',
              value: 0,
            });
          } }
        >
          Filtrar
        </button>
      </section>
    </header>
  );
}

export default HeaderFilters;
