import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export function MoreTools() {
  return (
    <View className="space-y-3 px-3">
      <Link href="/MarketPriceScreen" asChild>
        <TouchableOpacity className="mb-2 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <Text className="mr-3 text-2xl">📈</Text>
          <Text className="text-base font-semibold text-gray-800">Market Price Tracker</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/ActivityCalendarScreen" asChild>
        <TouchableOpacity className="mb-2 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <Text className="mr-3 text-2xl">🗓️</Text>
          <Text className="text-base font-semibold text-gray-800">
            Personalized Farm Activity Calendar
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/GovtSchemesScreen" asChild>
        <TouchableOpacity className="mb-2 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <Text className="mr-3 text-2xl">🏛️</Text>
          <Text className="text-base font-semibold text-gray-800">
            Goverment Scheme Information Hub
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
