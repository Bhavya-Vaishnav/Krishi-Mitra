import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Globe, CloudSun } from 'lucide-react-native';
import * as Location from 'expo-location';

export function HomeHeader() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState<string | null>(null);
  const [weather, setWeather] = useState<{ temp: number; icon: string; desc: string } | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setLoading(false);
        return;
      }
      let loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
      setLocation(loc);
      try {
        let rev = await Location.reverseGeocodeAsync({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        });
        if (rev && rev.length > 0) {
          setCity(rev[0].city || rev[0].region || rev[0].country || null);
        }
      } catch (e) {
        setCity(null);
      }
      setLoading(false);
    })();
  }, []);

  // Fetch weather when location is available
  useEffect(() => {
    if (!location) return;
    const fetchWeather = async () => {
      setWeatherLoading(true);
      try {
        // Replace with your OpenWeatherMap API key
        const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
        const lat = location.coords.latitude;
        const lon = location.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.main && data.weather && data.weather.length > 0) {
          setWeather({
            temp: data.main.temp,
            icon: data.weather[0].icon,
            desc: data.weather[0].main,
          });
        }
      } catch (e) {
        setWeather(null);
      }
      setWeatherLoading(false);
    };
    fetchWeather();
  }, [location]);

  return (
    <View className="flex-row items-center bg-green-700 px-5 pb-2 pt-2">
      <View>
        <Text className="text-xl font-bold text-white">KrishiMitra</Text>
        <View className="mt-1 flex-row items-center">
          <Globe color="white" size={16} />
          {loading ? (
            <ActivityIndicator size="small" color="#fff" style={{ marginLeft: 4 }} />
          ) : errorMsg ? (
            <Text className="ml-2 text-xs text-red-200">Location off</Text>
          ) : city ? (
            <Text className="ml-2 text-xs text-white">{city}</Text>
          ) : location ? (
            <Text className="ml-2 text-xs text-white">
              {location.coords.latitude.toFixed(2)}, {location.coords.longitude.toFixed(2)}
            </Text>
          ) : null}
        </View>
        <View className="mt-1 flex-row items-center">
          <CloudSun color="white" size={16} />
          {weatherLoading ? (
            <ActivityIndicator size="small" color="#fff" style={{ marginLeft: 4 }} />
          ) : weather ? (
            <>
              <Text className="ml-2 text-xs text-white">
                {weather.temp}°C {weather.desc}
              </Text>
              <Image
                source={{ uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png` }}
                style={{ width: 24, height: 24, marginLeft: 4 }}
                resizeMode="contain"
              />
            </>
          ) : null}
        </View>
      </View>
      <View className="flex-1 flex-row items-center justify-end gap-2">
        <TouchableOpacity className="flex-row items-center gap-1 rounded bg-green-600 px-3 py-1 active:bg-green-800">
          <Globe color="white" size={20} />
          <Text className="text-base font-semibold text-white">EN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
