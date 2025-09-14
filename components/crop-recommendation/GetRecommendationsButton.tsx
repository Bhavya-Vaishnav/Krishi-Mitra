import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export function GetRecommendationsButton() {
  return (
    <TouchableOpacity className="items-center rounded-full bg-yellow-400 py-4 shadow-md">
      <Text className="text-lg font-bold text-gray-900">GET RECOMMENDATIONS</Text>
    </TouchableOpacity>
  );
}
