import { APIGatewayProxyResult } from 'aws-lambda';
export const returnResponse = <T>(
  statusCode: number,
  responseObject: T,
): APIGatewayProxyResult => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(responseObject),
  };
};
