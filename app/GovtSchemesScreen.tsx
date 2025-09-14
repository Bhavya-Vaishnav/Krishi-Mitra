import React, { useState, useMemo } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { GovtSchemesHeader } from '../components/govt-schemes/GovtSchemesHeader';
import { SchemeSearchInput } from '../components/govt-schemes/SchemeSearchInput';
import { SchemeCategoryTabs } from '../components/govt-schemes/SchemeCategoryTabs';
import { SchemeCard } from '../components/govt-schemes/SchemeCard';

const SCHEMES = [
  {
    title: 'PM-KUSUM Solar Pump Subsidy',
    desc: 'Financial support for installing solar pumps to reduce diesel usage.',
    category: 'Subsidy',
  },
  {
    title: 'NABARD Long-Term Farm Loan',
    desc: 'Low-interest loans for irrigation infrastructure and farm expansion.',
    category: 'Loan',
  },
  {
    title: 'Pradhan Mantri Fasal Bima Yojana',
    desc: 'Crop insurance against yield losses due to adverse weather.',
    category: 'Crop Insurance',
  },
  {
    title: 'Micro-Irrigation Fund Support',
    desc: 'Assistance for drip and sprinkler systems to optimize water use.',
    category: 'Irrigation',
  },
  {
    title: 'Agri-Equipment Subsidy Program',
    desc: 'Subsidies for modern farm machinery to improve efficiency.',
    category: 'Subsidy',
  },
];

export default function GovtSchemesScreen() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Schemes');

  const filteredSchemes = useMemo(() => {
    if (category === 'All Schemes')
      return SCHEMES.filter(
        (s) =>
          s.title.toLowerCase().includes(search.toLowerCase()) ||
          s.desc.toLowerCase().includes(search.toLowerCase())
      );
    return SCHEMES.filter(
      (s) =>
        s.category === category &&
        (s.title.toLowerCase().includes(search.toLowerCase()) ||
          s.desc.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, category]);

  return (
    <View className="flex-1 bg-[#f7f8ed]">
      <GovtSchemesHeader />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32, paddingTop: 12 }}
        showsVerticalScrollIndicator={false}>
        <SchemeSearchInput value={search} onChangeText={setSearch} />
        <SchemeCategoryTabs selected={category} onSelect={setCategory} />

        {category === 'All Schemes' ? (
          <View className="mt-2">
            {['Subsidy', 'Loan', 'Irrigation', 'Crop Insurance'].map((cat) => {
              const catSchemes = SCHEMES.filter(
                (s) =>
                  s.category === cat &&
                  (s.title.toLowerCase().includes(search.toLowerCase()) ||
                    s.desc.toLowerCase().includes(search.toLowerCase()))
              );
              if (catSchemes.length === 0) return null;
              return (
                <View key={cat} className="mb-4">
                  <Text className="mb-1 text-base font-semibold text-yellow-700">{cat}</Text>
                  {catSchemes.map((scheme) => (
                    <SchemeCard key={scheme.title} title={scheme.title} desc={scheme.desc} />
                  ))}
                </View>
              );
            })}
          </View>
        ) : (
          filteredSchemes.map((scheme) => (
            <SchemeCard key={scheme.title} title={scheme.title} desc={scheme.desc} />
          ))
        )}
      </ScrollView>
    </View>
  );
}
