import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Globe } from 'lucide-react-native';

export function HomeHeader() {
  return (
    <View className="flex-row items-center bg-green-700 px-5 pb-2 pt-2">
      <View>
        <Text className="text-xl font-bold text-white">KrishiMitra</Text>
      </View>
      <View className="flex-row items-center gap-2 flex-1 justify-end">
        <TouchableOpacity className="flex-row items-center rounded bg-green-600 px-2 py-1 active:bg-green-800">
          <Globe color="white" size={20} />
          <Text className="text-base font-semibold text-white">EN</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://ui-avatars.com/api/?name=Farmer&background=4ade80&color=fff&rounded=true&size=64',
          }}
          className="h-10 w-10 rounded-full border-2 border-white"
        />
      </View>
    </View>
  );
}
