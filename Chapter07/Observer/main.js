const oWeatherStation = new WeatherStation();
const oDisplay = new CurrentConditionsDisplay(oWeatherStation);

oWeatherStation.setMeasurements(80, 65, 30.4);