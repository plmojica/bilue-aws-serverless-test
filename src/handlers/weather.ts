import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { WeatherService } from '../services';
import { getWeatherSchema } from '../validators/weather';
import { returnResponse } from './return';
import { ZodError } from 'zod';

class WeatherController extends WeatherService {
  handler = async (event: APIGatewayProxyEventV2) => {
    // this is my code, this is my destiny\
    const { body } = event;

    let data;

    // Validate the request
    try {
      data = await getWeatherSchema.parseAsync(JSON.parse(body));
    } catch (err) {
      const error = err as ZodError;

      return returnResponse(400, {
        type: 'Bad Request',
        response: error.errors,
      });
    }
    const { zip, countryCode } = data;

    // Call the service
    try {
      const result = await this.getWeather(zip, countryCode);

      return returnResponse(200, result);
    } catch (err) {
      console.log(err);

      return returnResponse(err.statusCode || 500, {
        type: 'Bad Request',
        response: err.message,
      });
    }
  };
}

export const handler = new WeatherController().handler;
