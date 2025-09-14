import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export function FeatureGrid() {
  return (
    <View className="mt-1 flex-row flex-wrap justify-center gap-2 px-2">
      <Link href="/CropRecommendationScreen" asChild>
        <TouchableOpacity className="mb-1 aspect-square w-[45%] items-center justify-center rounded-2xl border border-gray-200 bg-green-50 shadow-sm">
          <Text className="mb-2 text-4xl">🌱</Text>
          <Text className="text-center text-lg font-semibold text-gray-500">
            Smart Crop{'\n'}Recommendation
          </Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity className="mb-1 aspect-square w-[45%] items-center justify-center rounded-2xl border border-gray-200 bg-green-50 shadow-sm">
        <Text className="mb-2 text-4xl">🐞</Text>
        <Text className="text-center text-lg font-semibold text-gray-500">
          AI Powered Pest &{'\n'}Disease Detector
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="mb-1 aspect-square w-[45%] items-center justify-center rounded-2xl border border-gray-200 bg-green-50 shadow-sm">
        <Text className="mb-1 text-4xl">⚖️</Text>
        <Text className="text-center text-lg font-semibold text-gray-500">
          Dynamic Fertilizer{'\n'}calculator
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="mb-1 aspect-square w-[45%] items-center justify-center rounded-2xl border border-gray-200 bg-green-50 shadow-sm">
        <Text className="mb-2 text-4xl">💧</Text>
        <Text className="text-center text-lg font-semibold text-gray-500">
          Intelligent Irrigation{'\n'}Planner
        </Text>
      </TouchableOpacity>
    </View>
  );
}
