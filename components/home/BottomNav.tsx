import React from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import { Home, ShoppingCart, Mic, User } from 'lucide-react-native';

export function BottomNav() {
  return (
    <View className="absolute bottom-0 left-0 right-0 h-16 flex-row items-center justify-around border-t border-green-800 bg-green-700 pt-1 pb-3 ">
      <TouchableOpacity className="flex-1 items-center">
        <Home color="white" size={28} />
        <Text className="text-white">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 items-center">
        <ShoppingCart color="white" size={28} />
        <Text className="text-white">Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 items-center">
        <Mic color="white" size={28} />
        <Text className="text-white">Voice</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 items-center">
        <User color="white" size={28} />
        <Text className="text-white">Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
