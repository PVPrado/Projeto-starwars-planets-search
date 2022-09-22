import { useEffect, useState } from 'react';

function Table() {
  const [planetList, setPlanetList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const { results } = await response.json();
      results.map((key) => delete key.residents)
      // console.log(results);
      setPlanetList(results)
    };
    getPlanets();
  }, []);


  const arrayHeader = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL'];

  const arrayColumn = ['Population', 'Orbital_period', 'Diameter', 'Rotation_period', 'Surface_water'];

  const arrayMainor = ['Maior que', 'Menor que', 'Igual a']

  return (
    <main>
      <header>
        <input
          name='filter'
          data-testid='name-filter'
          id='filterPlanet'
          type='text'
          placeholder='Buscar...'
          onChange={(e) => setInputValue(e.target.value) }
          value={ inputValue }
      ></input>
      <section>
        <select data-testid='column-filter'>
          { arrayColumn.map((c) => (
            <option key={ c }>{ c }</option>
          )) }
        </select>
        <select data-testid='comparison-filter'>
          { arrayMainor.map((c) => (
            <option key={ c }>{ c }</option>
          )) }
        </select>
        <input
        type='number'
        data-testid='value-filter'
        >
        </input>
        <button
        data-testid='button-filter'
        >
          Filtrar
        </button>
      </section>
      </header>
      <table>
        <thead>
            <tr>
            { arrayHeader.map((h) => <th key={ h }>{ h }</th>) }
            </tr>
          </thead>
          <tbody>
            { planetList
            .filter((e) => e.name.toLowerCase().includes(inputValue))
            .map((p) => (
              <tr key={p.name}>
                <td>{ p.name }</td>
                <td>{ p.rotation_period }</td>
                <td>{ p.orbital_period }</td>
                <td>{ p.diameter }</td>
                <td>{ p.climate }</td>
                <td>{ p.gravity }</td>
                <td>{ p.terrain }</td>
                <td>{ p.surface_water }</td>
                <td>{ p.population }</td>
                <td>{ p.films }</td>
                <td>{ p.created }</td>
                <td>{ p.edited }</td>
                <td>{ p.url }</td>
              </tr>
            )
            ) }
          </tbody>
      </table>  
    </main>
  )
}

export default Table;
