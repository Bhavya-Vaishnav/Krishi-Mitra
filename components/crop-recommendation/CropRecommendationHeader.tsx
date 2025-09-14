import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export function CropRecommendationHeader() {
  const router = useRouter();
  return (
    <View className="relative flex-row items-center justify-center bg-green-700 px-4 pb-4 pt-5">
      <TouchableOpacity className="absolute left-4 top-6" onPress={() => router.back()}>
        <ArrowLeft color="white" size={28} />
      </TouchableOpacity>
      <Text className="text-2xl font-bold text-white">Crop Recommendation</Text>
    </View>
  );
}
