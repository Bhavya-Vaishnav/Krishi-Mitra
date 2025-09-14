import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function MoreTools() {
  return (
    <View className="space-y-3 px-3">
      <TouchableOpacity className="mb-2 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
        <Text className="mr-3 text-2xl">📈</Text>
        <Text className="text-base font-semibold text-gray-800">Market Price Tracker</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mb-2 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
        <Text className="mr-3 text-2xl">🗓️</Text>
        <Text className="text-base font-semibold text-gray-800">
          Personalized Farm Activity Calendar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="mb-2 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
        <Text className="mr-3 text-2xl">🏛️</Text>
        <Text className="text-base font-semibold text-gray-800">
          Goverment Scheme Information Hub
        </Text>
      </TouchableOpacity>
    </View>
  );
}
