import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface CalendarTabsProps {
  active: 'upcoming' | 'month';
  onChange: (tab: 'upcoming' | 'month') => void;
}

export function CalendarTabs({ active, onChange }: CalendarTabsProps) {
  return (
    <View className="mb-4 mt-4 flex-row px-2">
      <TouchableOpacity
        className={`flex-1 rounded-l-full py-2 ${active === 'upcoming' ? 'bg-green-700' : 'bg-white'} border border-green-700`}
        onPress={() => onChange('upcoming')}>
        <Text
          className={`text-center font-semibold ${active === 'upcoming' ? 'text-white' : 'text-green-700'}`}>
          Upcoming
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`flex-1 rounded-r-full py-2 ${active === 'month' ? 'bg-green-700' : 'bg-white'} border-b border-r border-t border-green-700`}
        onPress={() => onChange('month')}>
        <Text
          className={`text-center font-semibold ${active === 'month' ? 'text-white' : 'text-green-700'}`}>
          Month View
        </Text>
      </TouchableOpacity>
    </View>
  );
}
