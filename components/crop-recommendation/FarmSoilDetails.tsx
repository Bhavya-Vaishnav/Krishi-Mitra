import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Camera } from 'lucide-react-native';

export function FarmSoilDetails() {
  return (
    <View className="mb-4 rounded-3xl bg-green-100 p-5">
      <Text className="mb-2 text-lg font-bold text-gray-900">Step 1: Farm & Soil Details</Text>
      <Text className="mb-0.5 text-base text-gray-500">Soil Type</Text>
      <TextInput
        className="mb-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
        placeholder="Select or enter soil type"
        placeholderTextColor="#888"
        editable={true}
      />
      <Text className="mb-0.5 text-base text-gray-500">Soil pH</Text>
      <TextInput
        className="mb-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
        placeholder="e.g., 6.5"
        placeholderTextColor="#888"
        editable={true}
      />
      <View className="mb-1 flex-row justify-between">
        <Text className="w-[31%] text-center text-sm text-gray-500">Nitrogen (N)</Text>
        <Text className="w-[31%] text-center text-sm text-gray-500">Phosphorus (P)</Text>
        <Text className="w-[31%] text-center text-sm text-gray-500">Potassium (K)</Text>
      </View>
      <View className="mb-3 flex-row justify-between">
        <TextInput
          className="w-[31%] rounded-2xl border border-gray-200 bg-white px-4 py-3 text-center text-base text-gray-900"
          placeholder="mg/kg"
          placeholderTextColor="#888"
          editable={true}
        />
        <TextInput
          className="w-[31%] rounded-2xl border border-gray-200 bg-white px-4 py-3 text-center text-base text-gray-900"
          placeholder="mg/kg"
          placeholderTextColor="#888"
          editable={true}
        />
        <TextInput
          className="w-[31%] rounded-2xl border border-gray-200 bg-white px-4 py-3 text-center text-base text-gray-900"
          placeholder="mg/kg"
          placeholderTextColor="#888"
          editable={true}
        />
      </View>
      <Text className="mb-1 text-base text-gray-500">Soil Photo (optional)</Text>
      <View className="mb-1 flex-row items-center">
        <TouchableOpacity className="mr-3 h-16 w-16 items-center justify-center rounded-2xl border-2 border-dashed border-gray-300">
          <Camera color="#64748b" size={32} />
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-sm text-gray-400">
            Add a clear photo of the soil for AI analysis
          </Text>
        </View>
      </View>
      <Text className="ml-1 text-xs text-gray-400">
        Good light, hold phone 15–20 cm from soil surface.
      </Text>
    </View>
  );
}
