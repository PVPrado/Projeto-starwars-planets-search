import React, { useContext, useEffect } from 'react';
import MyContext from '../contexts/MyContext';

function Table() {
  const arrayHeader = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'];

  const { fetchPlanet, resultSearch } = useContext(MyContext);
  useEffect(() => {
    fetchPlanet();
  }, []);

  return (
    <main>
      <table>
        <thead>
          <tr>
            { arrayHeader.map((h) => <th key={ h }>{ h }</th>) }
          </tr>
        </thead>
        <tbody>
          { resultSearch
            .map((p) => (
              <tr key={ p.name }>
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
            )) }
        </tbody>
      </table>

    </main>
  );
}

export default Table;
