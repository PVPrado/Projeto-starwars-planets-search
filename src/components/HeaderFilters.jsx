import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../contexts/MyContext';

function HeaderFilters() {
  const { planetList, setResultSearch, setPlanetName } = useContext(MyContext);
  const [objFilter, setObjFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const { saveFilters, filtration, filterByNumericValues } = useContext(MyContext);

  const arrayColumn = ['Population', 'Orbital_period',
    'Diameter', 'Rotation_period', 'Surface_water'];

  const arrayMainor = ['Maior que', 'Menor que', 'Igual a'];

  const searchPlanet = ({ target }) => {
    setPlanetName({ name: target.value });
    setResultSearch(planetList.filter((planeta) => (planeta.name
      .toLowerCase().includes(target.value))));
  };

  const handleChange = ({ target: { name, value } }) => {
    setObjFilter({ ...objFilter, [name]: value });
  };

  const filters = () => {
    saveFilters(objFilter);
    filtration(objFilter);
    setObjFilter({
      column: 'population',
      comparison: 'maior que',
      value: '0',
    });
  };

  const [filterRender, setFilterRender] = useState([]);

  useEffect(() => {
    const colunas = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    const array = filterByNumericValues.map((obj) => obj.column);
    const colunasFiltered = colunas.filter((coluna) => !array.includes(coluna));
    const filterResults = colunasFiltered.length > 0 ? colunasFiltered : colunas;
    setFilterRender(filterResults);
  }, [filterByNumericValues]);

  useEffect(() => {
    setObjFilter({ ...objFilter, column: filterRender[0] });
  }, [filterRender]);

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
          value={ objFilter.column }
          data-testid="column-filter"
          onChange={ handleChange }
        >

          { arrayColumn.map((c) => (
            <option key={ c }>{ c }</option>
          )) }
        </select>

        <select
          value={ objFilter.comparison }
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          { arrayMainor.map((c) => (
            <option key={ c }>{ c }</option>
          )) }
        </select>

        <input
          name="value"
          value={ objFilter.value }
          type="number"
          data-testid="value-filter"
          onChange={ handleChange }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ filters }
        >
          Filtrar
        </button>
        <div>
          { filterByNumericValues.map((el, i) => (
            <span key={ i }>
              { el.column }
              {' '}
              { el.comparison }
              {' '}
              { el.value }
            </span>
          )) }
        </div>
      </section>
    </header>
  );
}

export default HeaderFilters;
