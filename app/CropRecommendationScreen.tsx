import React from 'react';
import { View, ScrollView } from 'react-native';
import { CropRecommendationHeader } from '@/components/crop-recommendation/CropRecommendationHeader';
import { FarmSoilDetails } from '@/components/crop-recommendation/FarmSoilDetails';
import { LocationDetails } from '@/components/crop-recommendation/LocationDetails';
import { GetRecommendationsButton } from '@/components/crop-recommendation/GetRecommendationsButton';

export default function CropRecommendationScreen() {
  return (
    <View className="flex-1 bg-white">
      <CropRecommendationHeader />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}>
        <FarmSoilDetails />
        <LocationDetails />
        <GetRecommendationsButton />
      </ScrollView>
    </View>
  );
}
