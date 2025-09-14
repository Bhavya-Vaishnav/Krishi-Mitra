import React from 'react';
import { ScrollView, View } from 'react-native';
import { IrrigationHeader } from '../components/irrigation-planner/IrrigationHeader';
import { NextIrrigationCard } from '../components/irrigation-planner/NextIrrigationCard';
import { WeatherAlertCard } from '../components/irrigation-planner/WeatherAlertCard';
import { WeeklyPlanCard } from '../components/irrigation-planner/WeeklyPlanCard';
import { IrrigationButtons } from '../components/irrigation-planner/IrrigationButtons';

export default function IrrigationPlannerScreen() {
  return (
    <View className="flex-1 bg-[#f7f8ed]">
      <IrrigationHeader />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32, paddingTop: 12 }}
        showsVerticalScrollIndicator={false}>
        <NextIrrigationCard />
        <WeatherAlertCard />
        <WeeklyPlanCard />
        <IrrigationButtons />
      </ScrollView>
    </View>
  );
}
