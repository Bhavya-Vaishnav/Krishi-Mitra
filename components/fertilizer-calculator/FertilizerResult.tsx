import React from 'react';
import { View, Text } from 'react-native';

export function FertilizerResult() {
  return (
    <View className="rounded-3xl bg-green-100 p-5">
      <Text className="mb-2 text-lg font-bold text-gray-800">Recommended Dosage</Text>
      <View className="mb-2 flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3">
        <Text className="text-base font-medium text-gray-800">Urea</Text>
        <Text className="text-base text-gray-700">___ kg/acre</Text>
      </View>
      <View className="mb-2 flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3">
        <Text className="text-base font-medium text-gray-800">DAP</Text>
        <Text className="text-base text-gray-700">___ kg/acre</Text>
      </View>
      <View className="flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3">
        <Text className="text-base font-medium text-gray-800">MOP</Text>
        <Text className="text-base text-gray-700">___ kg/acre</Text>
      </View>
    </View>
  );
}
