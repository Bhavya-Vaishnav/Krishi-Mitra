import React from 'react';
import { View, Text } from 'react-native';

export function NextIrrigationCard() {
  return (
    <View className="mb-4 rounded-2xl bg-white p-4 shadow">
      <Text className="mb-1 text-lg font-semibold text-gray-800">Next Scheduled Irrigation</Text>
      <Text className="text-xl font-medium text-green-700">Tomorrow, 6:00 AM</Text>
    </View>
  );
}
