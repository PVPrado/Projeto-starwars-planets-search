import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [resultSearch, setResultSearch] = useState([]);
  const [filterPlanetName, setPlanetName] = useState({});
  const [filterByNumericValues, setFilterValues] = useState([]);

  const fetchPlanet = async () => {
    try {
      const fetchURL = await fetch('https://swapi.dev/api/planets');
      const response = await fetchURL.json();
      const filterApi = response.results.map((key) => {
        delete key.residents;
        return key;
      });
      setPlanetList(filterApi);
      // dica do saturnino
      setResultSearch(filterApi);
    } catch (error) {
      console.log(error.mensage);
    }
  };

  const saveFilters = (filter) => {
    setFilterValues([...filterByNumericValues, filter]);
  };

  // ajuda da ana
  const filtration = (filter) => {
    switch (filter.comparison) {
    case 'maior que':
      return setResultSearch(resultSearch
        .filter((planeta) => Number(planeta[filter.column]) > Number(filter.value)));
    case 'menor que':
      return setResultSearch(resultSearch
        .filter((planeta) => Number(planeta[filter.column]) < Number(filter.value)));
    case 'igual a':
      return setResultSearch(resultSearch
        .filter((planeta) => Number(planeta[filter.column]) === Number(filter.value)));
    default:
      break;
    }
  };

  const contextValue = {
    fetchPlanet,
    planetList,
    resultSearch,
    setPlanetName,
    filterPlanetName,
    setResultSearch,
    saveFilters,
    filtration,
    filterByNumericValues,
  };

  return (
    <div>
      <MyContext.Provider value={ contextValue }>
        {children}
      </MyContext.Provider>
    </div>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
