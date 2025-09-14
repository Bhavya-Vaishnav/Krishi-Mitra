import React from 'react';
import { View, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';

interface CropSearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export function CropSearchInput({ value, onChangeText }: CropSearchInputProps) {
  return (
    <View className="mb-3 flex-row items-center rounded-2xl bg-white px-4 py-2 shadow">
      <Search color="#7ca043" size={22} className="mr-2" />
      <TextInput
        className="flex-1 text-lg text-green-700"
        placeholder="Search crop"
        placeholderTextColor="#7ca043"
        style={{ paddingVertical: 8 }}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  );
}
