import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

const CATEGORIES = ['All Schemes', 'Subsidy', 'Loan', 'Irrigation', 'Crop Insurance'];

interface SchemeCategoryTabsProps {
  selected: string;
  onSelect: (category: string) => void;
}

export function SchemeCategoryTabs({ selected, onSelect }: SchemeCategoryTabsProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-3">
      <View className="flex-row gap-3 px-1">
        <TouchableOpacity
          key="All Schemes"
          className={`rounded-xl px-5 py-2 ${selected === 'All Schemes' ? 'bg-yellow-400' : 'bg-yellow-100'}`}
          onPress={() => onSelect('All Schemes')}>
          <Text className="text-base font-semibold text-gray-800">All Schemes</Text>
        </TouchableOpacity>
        {CATEGORIES.slice(1).map((cat) => (
          <TouchableOpacity
            key={cat}
            className={`rounded-xl px-5 py-2 ${selected === cat ? 'bg-yellow-400' : 'bg-yellow-100'}`}
            onPress={() => onSelect(cat)}>
            <Text className="text-base font-semibold text-gray-800">{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
