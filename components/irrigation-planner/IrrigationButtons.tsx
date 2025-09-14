import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function IrrigationButtons() {
  return (
    <View className="mt-2 space-y-3">
      <TouchableOpacity className="mb-1 items-center rounded-xl bg-green-700 py-3">
        <Text className="text-lg font-semibold text-white">Calculate</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center rounded-xl bg-yellow-400 py-3">
        <Text className="text-lg font-semibold text-gray-800">Get Recommendation</Text>
      </TouchableOpacity>
    </View>
  );
}
