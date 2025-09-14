import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

type SchemeCardProps = {
  title: string;
  desc: string;
  schemeData?: any;
};

export function SchemeCard({ title, desc, schemeData }: SchemeCardProps) {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="mb-4 rounded-2xl bg-white p-4 shadow"
      activeOpacity={0.85}
      onPress={() =>
        router.push({ pathname: '/SchemeDetailScreen', params: { ...schemeData, title, desc } })
      }>
      <Text className="mb-1 text-lg font-bold text-gray-800">{title}</Text>
      <Text className="text-base text-green-700">{desc}</Text>
    </TouchableOpacity>
  );
}
