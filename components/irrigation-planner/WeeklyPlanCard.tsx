import React from 'react';
import { View, Text } from 'react-native';

const days = [
  { label: 'Mon', icon: '💧' },
  { label: 'Tue', icon: '' },
  { label: 'Wed', icon: '💧' },
  { label: 'Thu', icon: '' },
  { label: 'Fri', icon: '💧' },
  { label: 'Sat', icon: '🌧️', highlight: true },
  { label: 'Sun', icon: '' },
];

export function WeeklyPlanCard() {
  return (
    <View className="mb-4 rounded-2xl bg-white p-4 shadow">
      <Text className="mb-2 text-lg font-semibold text-gray-800">This Week's Plan</Text>
      <View className="mb-2 flex-row justify-between">
        {days.map((day, idx) => (
          <View
            key={day.label}
            className={`h-14 w-10 items-center rounded-xl border ${day.highlight ? 'border-blue-300 bg-blue-50' : 'border-gray-200'} justify-center`}>
            <Text className="mb-1 text-xs font-medium text-green-700">{day.label}</Text>
            <Text className="text-xl font-bold">{day.icon}</Text>
          </View>
        ))}
      </View>
      <Text className="text-sm text-green-700">
        Droplet indicates scheduled irrigation. Rain means auto-skip.
      </Text>
    </View>
  );
}
