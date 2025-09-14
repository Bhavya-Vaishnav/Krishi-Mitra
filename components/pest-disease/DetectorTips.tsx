import React from 'react';
import { View, Text } from 'react-native';
import { Sun, Crop, Layers, Shield } from 'lucide-react-native';

export function DetectorTips() {
  return (
    <View className="mb-8 flex-row flex-wrap justify-between gap-1">
      <View className="mb-2 w-[48%] rounded-2xl border border-gray-200 bg-white p-4">
        <View className="mb-1 flex-row items-center gap-1">
          <Sun color="#15803d" size={22} className="mr-2" />
          <Text className="font-bold text-gray-800">Lighting</Text>
        </View>
        <Text className="text-sm text-gray-500">
          Shoot in good, even light. Avoid harsh shadows and glare.
        </Text>
      </View>
      <View className="mb-2 w-[48%] rounded-2xl border border-gray-200 bg-white p-4">
        <View className="mb-1 flex-row items-center gap-1">
          <Crop color="#15803d" size={22} className="mr-2" />
          <Text className="font-bold text-gray-800">Framing</Text>
        </View>
        <Text className="text-sm text-gray-500">
          Fill the frame with the leaf. Keep it flat and centered.
        </Text>
      </View>
      <View className="mb-2 w-[48%] rounded-2xl border border-gray-200 bg-white p-4">
        <View className="mb-1 flex-row items-center gap-1">
          <Layers color="#15803d" size={22} className="mr-2" />
          <Text className="font-bold text-gray-800">Multiple Shots</Text>
        </View>
        <Text className="text-sm text-gray-500">Take 2–3 angles to improve accuracy.</Text>
      </View>
      <View className="mb-2 w-[48%] rounded-2xl border border-gray-200 bg-white p-4">
        <View className="mb-1 flex-row items-center gap-1">
          <Shield color="#15803d" size={22} className="mr-2" />
          <Text className="font-bold text-gray-800">Safety</Text>
        </View>
        <Text className="text-sm text-gray-500">
          Wear gloves if you suspect fungal infection or pests.
        </Text>
      </View>
    </View>
  );
}
