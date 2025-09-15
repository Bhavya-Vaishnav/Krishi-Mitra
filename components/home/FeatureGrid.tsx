import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { LanguageContext } from '../../lib/LanguageContext';

export function FeatureGrid() {
  const { language } = React.useContext(LanguageContext);
  const t = {
    crop: language === 'hi' ? 'स्मार्ट फसल\nसिफारिश' : 'Smart Crop\nRecommendation',
    pest: language === 'hi' ? 'एआई कीट व रोग\nडिटेक्टर' : 'AI Powered Pest &\nDisease Detector',
    fert: language === 'hi' ? 'डायनामिक उर्वरक\nकैलकुलेटर' : 'Dynamic Fertilizer\ncalculator',
    irrigation: language === 'hi' ? 'इंटेलिजेंट सिंचाई\nप्लानर' : 'Intelligent Irrigation\nPlanner',
  };
  return (
    <View className="mt-1 flex-row flex-wrap justify-center gap-2 px-2">
      <Link href="/CropRecommendationScreen" asChild>
        <TouchableOpacity className="mb-1 aspect-square w-[45%] items-center justify-center rounded-2xl border border-gray-200 bg-green-100 shadow-sm">
          <Text className="mb-2 text-4xl">🌱</Text>
          <Text className="text-center text-lg font-semibold text-gray-500">
            {t.crop.split('\n').map((line, i) => (i === 0 ? line : ['\n', line]))}
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/PestDiseaseScreen" asChild>
        <TouchableOpacity className="mb-1 aspect-square w-[45%] items-center justify-center rounded-2xl border border-gray-200 bg-green-100 shadow-sm">
          <Text className="mb-2 text-4xl">🐞</Text>
          <Text className="text-center text-lg font-semibold text-gray-500">
            {t.pest.split('\n').map((line, i) => (i === 0 ? line : ['\n', line]))}
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/FertilizerCalculatorScreen" asChild>
        <TouchableOpacity className="mb-1 aspect-square w-[45%] items-center justify-center rounded-2xl border border-gray-200 bg-green-100 shadow-sm">
          <Text className="mb-1 text-4xl">⚖️</Text>
          <Text className="text-center text-lg font-semibold text-gray-500">
            {t.fert.split('\n').map((line, i) => (i === 0 ? line : ['\n', line]))}
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/IrrigationPlannerScreen" asChild>
        <TouchableOpacity className="mb-1 aspect-square w-[45%] items-center justify-center rounded-2xl border border-gray-200 bg-green-100 shadow-sm">
          <Text className="mb-2 text-4xl">💧</Text>
          <Text className="text-center text-lg font-semibold text-gray-500">
            {t.irrigation.split('\n').map((line, i) => (i === 0 ? line : ['\n', line]))}
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
