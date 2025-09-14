import React from 'react';
import { View, Text } from 'react-native';

export function DetectorInfo() {
  return (
    <View className="mb-5 rounded-2xl border border-green-100 bg-green-100 p-3">
      <Text className="mb-1 text-lg font-bold text-gray-900">How the Detector Works</Text>
      <Text className="text-base text-gray-500">
        Capture a clear photo of the affected leaf. Our AI analyzes patterns to identify possible
        pests or diseases and suggests remedies.
      </Text>
    </View>
  );
}
