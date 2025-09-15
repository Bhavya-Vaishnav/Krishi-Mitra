import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Globe } from 'lucide-react-native';

import { LanguageContext } from '../../lib/LanguageContext';

const HomeHeader = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <View className="flex-row items-center bg-green-700 px-5 pb-2 pt-2">
      <View>
        <Text className="text-xl font-bold text-white">KrishiMitra</Text>
      </View>
      <View className="relative flex-1 flex-row items-center justify-end gap-2">
        <TouchableOpacity
          className={`flex-row items-center gap-1 rounded px-3 py-1 ${language === 'en' ? 'bg-green-600' : 'bg-green-600'}`}
          onPress={() => setDropdownOpen((v) => !v)}>
          <Globe color="white" size={20} />
          <Text className="text-base font-semibold text-white">
            {language === 'en' ? 'English' : 'हिन्दी'}
          </Text>
        </TouchableOpacity>
        {dropdownOpen && (
          <View className="absolute right-0 top-12 z-50 w-28 rounded border border-gray-200 bg-white shadow-lg">
            <TouchableOpacity
              className="border-b border-gray-100 px-4 py-2"
              onPress={() => {
                setLanguage('en');
                setDropdownOpen(false);
              }}>
              <Text
                className={`text-base ${language === 'en' ? 'font-bold text-green-700' : 'text-gray-700'}`}>
                English
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="px-4 py-2"
              onPress={() => {
                setLanguage('hi');
                setDropdownOpen(false);
              }}>
              <Text
                className={`text-base ${language === 'hi' ? 'font-bold text-green-700' : 'text-gray-700'}`}>
                हिन्दी
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeHeader;
