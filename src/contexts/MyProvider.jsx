import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [resultSearch, setResultSearch] = useState([]);
  const [filterPlanetName, setPlanetName] = useState({});

  const fetchPlanet = async () => {
    try {
      const fetchURL = await fetch('https://swapi.dev/api/planets');
      const response = await fetchURL.json();
      const filterApi = response.results.map((key) => {
        delete key.residents;
        return key;
      });
      setPlanetList(filterApi);
      setResultSearch(filterApi);
    } catch (error) {
      console.log(error.mensage);
    }
  };

  const contextValue = {
    fetchPlanet,
    planetList,
    resultSearch,
    setPlanetName,
    filterPlanetName,
    setResultSearch,
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
