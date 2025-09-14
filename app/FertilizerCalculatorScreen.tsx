import React from 'react';
import { View, ScrollView } from 'react-native';
import { FertilizerHeader } from '@/components/fertilizer-calculator/FertilizerHeader';
import { FertilizerForm } from '@/components/fertilizer-calculator/FertilizerForm';
import { FertilizerButton } from '@/components/fertilizer-calculator/FertilizerButton';
import { FertilizerResult } from '@/components/fertilizer-calculator/FertilizerResult';

export default function FertilizerCalculatorScreen() {
  return (
    <View className="flex-1 bg-white">
      <FertilizerHeader />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}>
        <FertilizerForm />
        <FertilizerButton />
        <FertilizerResult />
      </ScrollView>
    </View>
  );
}
