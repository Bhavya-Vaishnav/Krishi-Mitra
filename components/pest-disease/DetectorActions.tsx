import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Camera, Image as ImageIcon } from 'lucide-react-native';

export function DetectorActions() {
  return (
    <View className="mt-8">
      <TouchableOpacity className="mb-3 flex-row items-center justify-center rounded-full bg-green-700 py-4">
        <Camera color="white" size={22} className="mr-2" />
        <Text className="text-lg font-bold text-white"> Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center justify-center rounded-full border border-green-700 py-4">
        <ImageIcon color="#14532d" size={22} className="mr-2" />
        <Text className="text-lg font-bold text-green-900"> Upload from Gallery</Text>
      </TouchableOpacity>
    </View>
  );
}
