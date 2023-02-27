// use Rapid API's GeoDB cities to get city info b/c I've done it this way
// before and know how to do it this. Try to get to spot where only
// Open Weather API used
export const geoAPIOPtions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e55e872a6amsh2b4fe016712e39dp13f4a5jsnb7fd9043f509',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
}

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
export const WEATHER_API_KEY = 'e48f41dd59083dfb601b58bffb9352e1'