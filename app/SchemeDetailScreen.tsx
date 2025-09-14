import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

export default function SchemeDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  // Fallbacks for missing fields
  const scheme = {
    title: params.title || 'Scheme Detail',
    about: params.about || 'No description available',
    eligibility: params.eligibility || [],
    benefits: params.benefits || [],
    portal: params.portal || '',
    ...params,
  };
  // Convert eligibility/benefits to array if passed as string
  const eligibilityArr = Array.isArray(scheme.eligibility)
    ? scheme.eligibility
    : typeof scheme.eligibility === 'string'
      ? scheme.eligibility.split('\n')
      : [];
  const benefitsArr = Array.isArray(scheme.benefits)
    ? scheme.benefits
    : typeof scheme.benefits === 'string'
      ? scheme.benefits.split('\n')
      : [];

  return (
    <View className="flex-1 bg-[#f7f8ed]">
      <View className="relative flex-row items-center justify-between bg-green-700 px-4 pb-4 pt-5">
        <TouchableOpacity
          className="z-10 mr-3"
          style={{ width: 40, alignItems: 'flex-start' }}
          onPress={() => router.back()}>
          <ArrowLeft color="white" size={28} />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
          }}>
          <Text
            className="text-center text-2xl font-bold text-white"
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ maxWidth: '70%' }}>
            {scheme.title}
          </Text>
        </View>
        {/* Invisible right button for symmetry */}
        <View style={{ width: 40 }} />
      </View>
      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}>
        {/* About Section */}
        <View className="mb-5 rounded-3xl bg-white p-5 shadow">
          <Text className="mb-2 text-lg font-bold text-gray-800">About the Scheme</Text>
          <Text className="text-base text-green-700">{scheme.about}</Text>
        </View>
        {/* Eligibility Section */}
        <View className="mb-5 rounded-3xl bg-white p-5 shadow">
          <Text className="mb-2 text-lg font-bold text-gray-800">Who is Eligible?</Text>
          {eligibilityArr.length > 0 ? (
            eligibilityArr.map((item, idx) => (
              <View key={idx} className="mb-2 flex-row items-start">
                <Text className="mr-2 text-xl text-green-700">•</Text>
                <Text className="flex-1 text-base text-gray-800">{item}</Text>
              </View>
            ))
          ) : (
            <Text className="text-gray-500">No eligibility info.</Text>
          )}
        </View>
        {/* Benefits Section */}
        <View className="mb-5 rounded-3xl bg-white p-5 shadow">
          <Text className="mb-2 text-lg font-bold text-gray-800">Key Benefits</Text>
          {benefitsArr.length > 0 ? (
            benefitsArr.map((item, idx) => (
              <View key={idx} className="mb-2 flex-row items-start">
                <Text className="mr-2 text-xl text-green-700">•</Text>
                <Text className="flex-1 text-base text-gray-800">{item}</Text>
              </View>
            ))
          ) : (
            <Text className="text-gray-500">No benefits info.</Text>
          )}
        </View>
        {/* Portal Button */}
        {scheme.portal ? (
          <TouchableOpacity
            className="mb-8 mt-2 items-center rounded-2xl bg-green-700 py-4"
            onPress={() => {
              const url = Array.isArray(scheme.portal) ? scheme.portal[0] : scheme.portal;
              if (url) Linking.openURL(url);
            }}>
            <Text className="text-lg font-semibold text-white">VISIT OFFICIAL PORTAL</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          className={`mb-8 mt-2 items-center rounded-2xl py-4 ${scheme.portal ? 'bg-green-700' : 'bg-gray-300'}`}
          disabled={!scheme.portal}
          onPress={() => {
            const url = Array.isArray(scheme.portal) ? scheme.portal[0] : scheme.portal;
            if (url) Linking.openURL(url);
          }}>
          <Text
            className={`text-lg font-semibold ${scheme.portal ? 'text-white' : 'text-gray-500'}`}>
            VISIT OFFICIAL PORTAL
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
