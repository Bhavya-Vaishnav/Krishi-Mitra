import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { THEME } from '@/lib/theme';
import { Link, Stack } from 'expo-router';
import { MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, type ImageStyle, View, SafeAreaView, ScrollView } from 'react-native';
import HomeHeader from '@/components/home/HomeHeader';

import { LanguageContext } from '../lib/LanguageContext';

const LOGO = {
  light: require('@/assets/images/react-native-reusables-light.png'),
  dark: require('@/assets/images/react-native-reusables-dark.png'),
};

const SCREEN_OPTIONS = {
  light: {
    title: 'React Native Reusables',
    headerTransparent: true,
    headerShadowVisible: true,
    headerStyle: { backgroundColor: THEME.light.background },
    headerRight: () => <ThemeToggle />,
  },
  dark: {
    title: 'React Native Reusables',
    headerTransparent: true,
    headerShadowVisible: true,
    headerStyle: { backgroundColor: THEME.dark.background },
    headerRight: () => <ThemeToggle />,
  },
};

const IMAGE_STYLE: ImageStyle = {
  height: 76,
  width: 76,
};

import { FeatureGrid } from '@/components/home/FeatureGrid';
import { WeatherUpdate } from '@/components/home/WeatherUpdate';
import { MoreTools } from '@/components/home/MoreTools';
import { BottomNav } from '@/components/home/BottomNav';

export default function Screen() {
  const { colorScheme } = useColorScheme();
  const { language } = React.useContext(LanguageContext);

  // Simple translation map
  const t = {
    welcome: language === 'hi' ? 'स्वागत है, किसान!' : 'Welcome, Farmer!',
    features: language === 'hi' ? 'अतिरिक्त सुविधाएँ' : 'Additional Features',
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HomeHeader />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}>
        <Text className="mb-2.5 mt-3 px-5 text-3xl font-bold text-gray-900">{t.welcome}</Text>
        <WeatherUpdate />
        <FeatureGrid />
        <Text className="mb-2 mt-0 px-5 text-xl font-bold text-gray-900">{t.features}</Text>
        <MoreTools />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className="rounded-full web:mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}
