import React from 'react';
import { View, Text, TextInput } from 'react-native';

export function FertilizerForm() {
  return (
    <View className="p-5 mb-5 rounded-3xl bg-green-100">
      <Text className="mb-1 text-base text-gray-500">Select Your Crop</Text>
      <TextInput
        className="mb-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
        placeholder="Choose crop"
        placeholderTextColor="#888"
        editable={false}
      />
      <Text className="mb-1 text-base text-gray-500">Farm Area (in acres)</Text>
      <TextInput
        className="mb-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
        placeholder="Enter area"
        placeholderTextColor="#888"
        editable={false}
      />
      <Text className="mb-1 text-base text-gray-500">Current Nitrogen (N) in soil</Text>
      <TextInput
        className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
        placeholder="mg/kg"
        placeholderTextColor="#888"
        editable={false}
      />
    </View>
  );
}
