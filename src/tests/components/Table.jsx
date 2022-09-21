import { useEffect, useState } from 'react';

function Table() {
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const { results } = await response.json();
      results.map((key) => delete key.residents)
      console.log(results);
      setPlanetList(results)
    };
    getPlanets();
  }, []);


  const arrayHeader = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL'];

  return (
    <table>
      <thead>
          <tr>
            { arrayHeader.map((h) => <th key={ h }>{ h }</th>) }
          </tr>
        </thead>
        <tbody>
          { planetList.map((p) => (
            <tr>
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
  )
}

export default Table;
