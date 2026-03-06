const API_KEY = "1525a3245d00f389199957cd8c0eb0e1"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";


export async function fetchWeatherData(city: string) {
    try{
        const res = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if(!res.ok){
            throw new Error("Failed to fetch weather data");
        }
        const data = await res.json();
        return data;
    }
    catch(error){
        console.error("Error fetching weather data:", error);
        return null;
    }
}