import React from 'react';
import { View, Text, TextInput } from 'react-native';

export function LocationDetails() {
  return (
    <View className="mb-6 rounded-3xl bg-green-100 p-5">
      <Text className="mb-2 text-lg font-bold text-gray-900">Step 2: Location</Text>
      <Text className="mb-0.5 text-base text-gray-500">Location</Text>
      <TextInput
        className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
        placeholder="Location: Jamnagar, Gujarat"
        placeholderTextColor="#888"
        editable={true}
      />
    </View>
  );
}
