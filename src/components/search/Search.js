import React, { useState } from 'react'
import { geoAPIOPtions, GEO_API_URL } from '../../api'
import { AsyncPaginate } from 'react-select-async-paginate'

function Search({ onSearchChange }) {

  // set up hooks and init state
  const [search, setSearch] = useState(null)

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  // retrieve value typed into input spot
  const loadOptions = (inputValue) => {
    // minPopulation attribute set to 100000 to eliminate some of the MANY small cities
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inputValue}&minPopulation=10000`, geoAPIOPtions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <AsyncPaginate
      placeholder='Search for a city'
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      debounceTimeout={600}
    />
  )
}

export default Search
