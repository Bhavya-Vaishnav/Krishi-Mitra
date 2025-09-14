import React from 'react';
import { View, ScrollView } from 'react-native';
// Update the path below to the correct relative path based on your folder structure
import { PestDiseaseHeader } from '../components/pest-disease/PestDiseaseHeader';
import { DetectorInfo } from '../components/pest-disease/DetectorInfo';
import { DetectorTips } from '../components/pest-disease/DetectorTips';
import { DetectorActions } from '../components/pest-disease/DetectorActions';

export default function PestDiseaseScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <PestDiseaseHeader />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}>
        <DetectorInfo />
        <DetectorTips />
        <DetectorActions />
      </ScrollView>
    </View>
  );
}
