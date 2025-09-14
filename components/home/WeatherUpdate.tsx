import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';

const WEATHER_API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true';

function getTodayDateString() {
  const d = new Date();
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

export function WeatherUpdate() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(WEATHER_API_URL)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.current_weather);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch weather');
        setLoading(false);
      });
  }, []);

  return (
    <View className="mb-2 w-full items-center px-5">
      <View className="w-full rounded-2xl border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
        <View className="mb-2 flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-medium text-gray-500">Today, {getTodayDateString()}</Text>
            <Text className="text-xs text-gray-400">
              {weather ? (weather.weathercode === 0 ? 'Clear' : 'Cloudy') : '--'} •{' '}
              {weather ? `${weather.temperature}°C` : '--'} / 20°C
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Text className="text-2xl font-bold text-gray-800">
              {weather ? `${weather.temperature}°C` : '--'}
            </Text>
            <Text className="text-2xl">{weather && weather.weathercode === 0 ? '☀️' : '☁️'}</Text>
          </View>
        </View>
        {loading ? (
          <ActivityIndicator color="#fbbf24" />
        ) : error ? (
          <Text className="text-xs text-red-500">{error}</Text>
        ) : null}
        <View className="mt-2 flex-row items-center justify-between rounded-xl bg-yellow-100 px-3 py-2">
          <Text className="flex-1 text-xs text-yellow-800">Location permission required</Text>
          <TouchableOpacity className="rounded-xl bg-yellow-400 px-3 py-1">
            <Text className="text-xs font-semibold text-yellow-900">Allow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
