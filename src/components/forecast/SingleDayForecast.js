import React from 'react'
import './SingleDayForecast.css'

// think about making this component a card
const SingleDayForecast = ({ data }) => {

  return (
    <div className='weather'>
      <div className='top'>
        <img
          alt='weather'
          className='weather-icon'
          src={`icons/${data.weather[0].icon}.svg`}
        />
        <div>
          <p className='city'>{data.city}</p>
          <p className='weather-description'>{data.weather[0].description}</p>
        </div>
      </div>

      <div className='bottom'>
        <p className='temperature'>{Math.round(data.main.temp)}°F</p>
        <div className="details">
          <div className="parameter-row">
            <span className='details'>Today's Details</span>
          </div>
          <div className="parameter-row">
            <span className='parameter-label'>Min temp</span>
            <span className='parameter-value'>{Math.round(data.main.temp_min)}°F</span>
          </div>
          <div className="parameter-row">
            <span className='parameter-label'>Max temp</span>
            <span className='parameter-value'>{Math.round(data.main.temp_max)}°F</span>
          </div>
          <div className="parameter-row">
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>{Math.round(data.main.humidity)}%</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleDayForecast
