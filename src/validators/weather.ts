import z from 'zod';

export const getWeatherSchema = z.object({
  zip: z.number(),
  countryCode: z.string(),
});
