import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export function FertilizerButton() {
  return (
    <TouchableOpacity className="mb-6 items-center rounded-full bg-yellow-400 py-4 shadow-md">
      <Text className="text-lg font-bold text-gray-900">CALCULATE FERTILIZER</Text>
    </TouchableOpacity>
  );
}
