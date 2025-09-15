import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { LanguageContext } from '../../lib/LanguageContext';

export function MoreTools() {
  const { language } = useContext(LanguageContext);
  const t = {
    market: language === 'hi' ? 'बाजार मूल्य ट्रैकर' : 'Market Price Tracker',
    calendar:
      language === 'hi' ? 'व्यक्तिगत कृषि गतिविधि कैलेंडर' : 'Personalized Farm Activity Calendar',
    schemes: language === 'hi' ? 'सरकारी योजना सूचना केंद्र' : 'Goverment Scheme Information Hub',
  };
  return (
    <View className="space-y-3 px-3">
      <Link href="/MarketPriceScreen" asChild>
        <TouchableOpacity className="mb-2 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <Text className="mr-3 text-2xl">📈</Text>
          <Text className="text-base font-semibold text-gray-800">{t.market}</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/ActivityCalendarScreen" asChild>
        <TouchableOpacity className="mb-2 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <Text className="mr-3 text-2xl">🗓️</Text>
          <Text className="text-base font-semibold text-gray-800">{t.calendar}</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/GovtSchemesScreen" asChild>
        <TouchableOpacity className="mb-2 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <Text className="mr-3 text-2xl">🏛️</Text>
          <Text className="text-base font-semibold text-gray-800">{t.schemes}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
