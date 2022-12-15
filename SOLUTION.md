# aws-serverless-test

AWS Serverless Test Bilue

## Getting Started

### Prerequisites

1. Install node js `>= 16.13.0`
2. Install `yarn`

### Quick Start

1. Clone the repo and go to the repository directory.
2. Install the packages.
   ```sh
   yarn
   ```
3. Create .env file in the root directory and add the following environment variables:
   - `WEATHER_API_KEY` - The API key for the weather API (Weather API: https://api.openweathermap.org/)
4. Start the app in development mode
   ```sh
   yarn dev
   ```

### Testing

1. Create .env file in the root directory and add the following environment variables:
   - `WEATHER_API_KEY` - The API key for the weather API (Weather API: https://api.openweathermap.org/)
2. Run the tests
   ```sh
   yarn test
   ```

## Tech Stack

- TypeScript
- Jest for testing
- Zod for validation
- Serverless Framework

### Design Choices

- Used OpenWeatherMap API as it directly provides the weather data for the given zip and country code.
- Used Zod for validation as it is a lightweight library and provides a good developer experience.
- Used TypeScript as it is a popular language and provides a good developer experience.
- Used Serverless Framework as it is a popular framework and provides a good developer experience.
- Used Jest for testing as it is a popular testing framework and provides a good developer experience.
