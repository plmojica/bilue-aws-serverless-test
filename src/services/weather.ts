import { WeatherAPIResponse, WeatherResponse } from '../types/weather';
import { apiKey } from '../constants/weather';
import { HttpClient } from '../utils';

export class WeatherService extends HttpClient {
  constructor() {
    super('https://api.openweathermap.org');
  }

  getWeather = async (
    zip: number,
    countryCode: string,
  ): Promise<WeatherResponse> => {
    const { data } = await this.post<WeatherAPIResponse>(
      '/data/2.5/weather',
      {},
      { zip: `${zip},${countryCode}`, appid: apiKey },
    );

    return {
      lon: data.coord.lon,
      lat: data.coord.lat,
      description: data.weather[0].description,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
    };
  };
}
