import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

function HeaderFilters() {
  const { planetList, setResultSearch, setPlanetName } = useContext(MyContext);

  const arrayColumn = ['Population', 'Orbital_period',
    'Diameter', 'Rotation_period', 'Surface_water'];

  const arrayMainor = ['Maior que', 'Menor que', 'Igual a'];

  const searchPlanet = ({ target }) => {
    setPlanetName({ name: target.value });
    setResultSearch(planetList.filter((planeta) => (planeta.name
      .toLowerCase().includes(target.value))));
  };

  return (
    <header>
      <input
        name="filter"
        data-testid="name-filter"
        id="filterPlanet"
        type="text"
        placeholder="Buscar..."
        onChange={ searchPlanet }
      />
      <section>
        <select
          data-testid="column-filter"
        >

          { arrayColumn.map((c) => (
            <option key={ c }>{ c }</option>
          )) }
        </select>

        <select
          data-testid="comparison-filter"
        >
          { arrayMainor.map((c) => (
            <option key={ c }>{ c }</option>
          )) }
        </select>

        <input
          type="number"
          data-testid="value-filter"
        />

        <button
          type="button"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </section>
    </header>
  );
}

export default HeaderFilters;
