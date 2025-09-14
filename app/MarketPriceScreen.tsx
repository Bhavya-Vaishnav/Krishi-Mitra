import React, { useState, useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { MarketPriceHeader } from '../components/market-price/MarketPriceHeader';
import { MarketSelector } from '../components/market-price/MarketSelector';
import { CropSearchInput } from '../components/market-price/CropSearchInput';
import { PriceDateLabel } from '../components/market-price/PriceDateLabel';
import { MarketPriceCard } from '../components/market-price/MarketPriceCard';

const prices = [
  { crop: 'Cotton', price: '₹7,500', min: '₹7,200', max: '₹7,650' },
  { crop: 'Wheat', price: '₹2,350', min: '₹2,200', max: '₹2,420' },
  { crop: 'Groundnut', price: '₹5,800', min: '₹5,500', max: '₹5,950' },
  { crop: 'Cumin', price: '₹29,500', min: '₹28,800', max: '₹29,900' },
  { crop: 'Onion', price: '₹1,800', min: '₹1,600', max: '₹1,920' },
];

export default function MarketPriceScreen() {
  const [search, setSearch] = useState('');

  const filteredPrices = useMemo(() => {
    if (!search.trim()) return prices;
    return prices.filter((item) => item.crop.toLowerCase().includes(search.trim().toLowerCase()));
  }, [search]);

  return (
    <View className="flex-1 bg-[#f7f8ed]">
      <MarketPriceHeader />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32, paddingTop: 12 }}
        showsVerticalScrollIndicator={false}>
        <MarketSelector />
        <CropSearchInput value={search} onChangeText={setSearch} />
        <PriceDateLabel />
        {filteredPrices.map((item) => (
          <MarketPriceCard key={item.crop} {...item} />
        ))}
      </ScrollView>
    </View>
  );
}
