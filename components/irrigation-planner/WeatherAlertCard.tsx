import React from 'react';
import { View, Text } from 'react-native';

export function WeatherAlertCard() {
  return (
    <View className="mb-4 flex-row items-center rounded-2xl bg-green-600 p-4 shadow">
      <Text className="mr-3 text-3xl">🌧️</Text>
      <View>
        <Text className="mb-1 text-lg font-bold text-white">Weather Alert</Text>
        <Text className="text-white leading-relaxed tracking-wide">
          Rain is forecast for Saturday. Irrigation is
          {"\n"}
          automatically skipped.
        </Text>
      </View>
    </View>
  );
}
