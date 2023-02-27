import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { WEATHER_API_KEY, WEATHER_API_URL } from './api';

import FiveDayForecast from './components/forecast/FiveDayForecast';
import SingleDayForecast from './components/forecast/SingleDayForecast';

import FiveDay from './pages/FiveDay';
import SingleDay from './pages/SingleDay';

import Navbar from './components/Navbar';
import Search from './components/search/Search';

function App() {
  // set up hooks and initialize state
  const [forecast, setForecast] = useState(null)
  const [weather, setWeather] = useState(null) // get weather for single day

  // handle changes to search criteria
  const handleOnSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(' ')

    const singleDayFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    )

    const fiveDayFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&cnt=5&units=imperial`
    )

    Promise.all([singleDayFetch, fiveDayFetch])
      .then(async (response) => {
        const singleDayResponse = await response[0].json()
        const fiveDayResponse = await response[1].json()

        setWeather({ city: searchData.label, ...singleDayResponse })
        setForecast({ city: searchData.label, ...fiveDayResponse }) //extending objects from GeoDB api
      })
      .catch((err) => console.log(err))
  }
  // so that I can see data in console
  console.log(weather)
  console.log(forecast)

  // those <br>s center the Search element to the middle of the screen
  // use Routes to go between pages
  return (
    <div className='app'>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='container mx-auto px-3 pd-12'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Routes>
              <Route path='/' element={<Search onSearchChange={handleOnSearchChange} />} />
              <Route path='/singleday' element={<SingleDay />} />
              <Route path='/fiveday' element={<FiveDay />} />
            </Routes>
            <br />
            <br />
            <br />
            <br />
            <br />
            {forecast && <FiveDayForecast data={forecast} />}
            {weather && <SingleDayForecast data={weather} />}

          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
