import React from 'react';
import { View, Text } from 'react-native';

interface MarketPriceCardProps {
  crop: string;
  price: string;
  min: string;
  max: string;
}

export function MarketPriceCard({ crop, price, min, max }: MarketPriceCardProps) {
  return (
    <View className="mb-3 flex-row items-center justify-between rounded-2xl bg-white p-3 shadow">
      <View>
        <Text className="mb-1 text-lg font-medium text-gray-800">{crop}</Text>
      </View>
      <View className='flex-col items-end'>
        <Text className="text-2xl font-medium text-gray-700">{price}</Text>
        <Text className="text-xs text-green-700">
          Min: {min} | Max: {max}
        </Text>
      </View>
    </View>
  );
}
