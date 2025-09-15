import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../../lib/LanguageContext';
import { View, Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

function getTodayDateString() {
  const d = new Date();
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

export function WeatherUpdate() {
  const { language } = useContext(LanguageContext);
  const [weather, setWeather] = useState<{ temp: number; icon: string; desc: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [locationAllowed, setLocationAllowed] = useState<boolean>(false);
  const [city, setCity] = useState<string | null>(null);
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

  // Ask for location permission on mount
  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLocation = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setLocationAllowed(false);
      setLoading(false);
      return;
    }
    setLocationAllowed(true);
    try {
      let loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
      setCoords({ lat: loc.coords.latitude, lon: loc.coords.longitude });
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
  };

  // Fetch weather when coords are available
  useEffect(() => {
    if (!coords) return;
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const API_KEY =
          Constants?.expoConfig?.extra?.WEATHER_API_KEY || process.env.WEATHER_API_KEY;
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${coords.lat},${coords.lon}&aqi=no`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.current) {
          setWeather({
            temp: data.current.temp_c,
            icon: data.current.condition.icon,
            desc: data.current.condition.text,
          });
        } else {
          setError('Failed to fetch weather');
        }
      } catch (e) {
        setError('Failed to fetch weather');
      }
      setLoading(false);
    };
    fetchWeather();
  }, [coords]);

  return (
    <View className="mb-2 w-full items-center px-5">
      <View className="w-full rounded-2xl border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
        <View className="mb-2 flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-medium text-gray-500">
              {language === 'hi' ? `आज, ${getTodayDateString()}` : `Today, ${getTodayDateString()}`}
            </Text>
            <Text className="text-xs text-gray-400">
              {weather
                ? language === 'hi'
                  ? `${weather.desc} • ${weather.temp}°C / 20°C`
                  : `${weather.desc} • ${weather.temp}°C / 20°C`
                : '-- • -- / 20°C'}
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Text className="text-2xl font-bold text-gray-800">
              {weather ? `${weather.temp}°C` : '--'}
            </Text>
            {weather && (
              <Image
                source={{
                  uri: weather.icon.startsWith('//') ? `https:${weather.icon}` : weather.icon,
                }}
                style={{ width: 32, height: 32, marginLeft: 4 }}
                resizeMode="contain"
              />
            )}
            {!weather && <Text className="text-2xl">☁️</Text>}
          </View>
        </View>
        {loading ? (
          <ActivityIndicator color="#fbbf24" />
        ) : error ? (
          <Text className="text-xs text-red-500">{error}</Text>
        ) : null}
        <View className="mt-2 flex-row items-center justify-between rounded-xl bg-yellow-100 px-3 py-2">
          <Text className="flex-1 text-xs text-yellow-800">
            {locationAllowed && city
              ? city
              : language === 'hi'
                ? 'स्थान अनुमति आवश्यक है'
                : 'Location permission required'}
          </Text>
          {!locationAllowed && (
            <TouchableOpacity className="rounded-xl bg-yellow-400 px-3 py-1" onPress={getLocation}>
              <Text className="text-xs font-semibold text-yellow-900">
                {language === 'hi' ? 'अनुमति दें' : 'Allow'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
