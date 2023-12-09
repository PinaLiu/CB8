const httpGET = async (cityName) => {
  const url = `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const API_KEY = "6e07bcbcc649da9654ccb064650131ae";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export { httpGET };
