# Weather Prediction App

A responsive weather app built with React + TypeScript + Vite.
Search for any city and view live weather details from OpenWeatherMap.

## Features

- Search weather by city name
- Displays:
  - Weather description
  - Temperature (C)
  - Humidity
  - Wind speed
- Clean card-based UI
- Fast frontend build with Vite

## Tech Stack

- React 19
- TypeScript
- Vite
- OpenWeatherMap API
- ESLint

## Project Structure

```text
weather-prediction/
  public/
  src/
    components/
      WeatherCard.tsx
      Cloud.tsx
    utils/
      weatherAPI.ts
    App.tsx
    App.css
    main.tsx
  index.html
  package.json
  vercel.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Fatemeh9595/weather-prediction-app.git
cd weather-prediction-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev`: start dev server
- `npm run build`: type-check + production build
- `npm run preview`: preview production build locally
- `npm run lint`: run ESLint

## API Configuration

The project currently uses an API key in `src/utils/weatherAPI.ts`.

For production, move the key to an environment variable:

1. Create a `.env` file in the project root:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

2. Update `src/utils/weatherAPI.ts` to read `import.meta.env.VITE_OPENWEATHER_API_KEY`.

3. In Vercel, add the same variable in:
   Project Settings -> Environment Variables

## Deploying to Vercel

This project includes `vercel.json` configured for Vite:

- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrite to `index.html` for client-side routing

To deploy:

1. Push to GitHub
2. Import the repository in Vercel
3. Redeploy after each push

## Author

Fatemeh Nadalizadeh
