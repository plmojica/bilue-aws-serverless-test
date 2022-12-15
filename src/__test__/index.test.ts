import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { handler } from '../handlers/weather';

describe('Weather API', () => {
  const zip = 2000;
  const countryCode = 'au';

  test('Should be able to get weather', async () => {
    const result = await handler({
      body: JSON.stringify({
        zip,
        countryCode,
      }),
    } as APIGatewayProxyEventV2);

    expect(result.statusCode).toBe(200);
  });

  test('Should not get weather if zip is not a number', async () => {
    const result = await handler({
      body: JSON.stringify({
        zip: 'lol',
        countryCode,
      }),
    } as APIGatewayProxyEventV2);

    expect(result.statusCode).toBe(400);
  });

  test('Should not get weather if countryCode is not a string', async () => {
    const result = await handler({
      body: JSON.stringify({
        zip,
        countryCode: 2000,
      }),
    } as APIGatewayProxyEventV2);

    expect(result.statusCode).toBe(400);
  });

  test('Should not get weather if zip is not provided', async () => {
    const result = await handler({
      body: JSON.stringify({
        countryCode,
      }),
    } as APIGatewayProxyEventV2);

    expect(result.statusCode).toBe(400);
  });
});
