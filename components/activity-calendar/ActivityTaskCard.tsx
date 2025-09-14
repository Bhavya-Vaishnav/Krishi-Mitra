import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface ActivityTaskCardProps {
  title: string;
  desc: string;
  date: string;
  checked: boolean;
  onToggle: () => void;
}

export function ActivityTaskCard({ title, desc, date, checked, onToggle }: ActivityTaskCardProps) {
  return (
    <View className="mb-4 flex-row items-center rounded-2xl bg-white p-4 shadow">
      <TouchableOpacity onPress={onToggle} className="mr-3">
        <View
          className={`h-6 w-6 rounded-full border-2 ${checked ? 'border-green-700 bg-green-700' : 'border-gray-300 bg-white'} items-center justify-center`}>
          {checked ? <View className="h-3 w-3 rounded-full bg-white" /> : null}
        </View>
      </TouchableOpacity>
      <View className="flex-1">
        <Text className="mb-1 text-lg font-bold text-gray-800">{title}</Text>
        <Text className="mb-1 text-sm text-green-700">{desc}</Text>
      </View>
      <Text className="ml-2 text-base font-semibold text-green-700">{date}</Text>
    </View>
  );
}
