import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { ChevronDown } from 'lucide-react-native';

const MARKETS = ['Jamnagar', 'Rajkot', 'Ahmedabad', 'Surat', 'Vadodara'];

export function MarketSelector() {
  const [selected, setSelected] = useState('Jamnagar');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="mb-3 rounded-2xl bg-white p-4 shadow">
      <TouchableOpacity className="flex-row items-center" onPress={() => setModalVisible(true)}>
        <Text className="mr-2 text-base text-gray-700">Market:</Text>
        <Text className="mr-1 text-base font-semibold text-green-700">{selected}</Text>
        <ChevronDown color="#7ca043" size={20} />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View className="flex-1 items-center justify-center bg-black/30">
          <View className="w-72 rounded-2xl bg-white p-4">
            <Text className="mb-2 text-lg font-bold text-green-700">Select Market</Text>
            <FlatList
              data={MARKETS}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="py-2"
                  onPress={() => {
                    setSelected(item);
                    setModalVisible(false);
                  }}>
                  <Text
                    className={`text-base ${item === selected ? 'font-bold text-green-700' : 'text-gray-700'}`}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity className="mt-2 items-center" onPress={() => setModalVisible(false)}>
              <Text className="font-semibold text-green-700">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
