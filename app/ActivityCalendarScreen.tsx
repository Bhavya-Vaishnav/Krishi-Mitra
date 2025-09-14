import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Modal, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ActivityCalendarHeader } from '../components/activity-calendar/ActivityCalendarHeader';
import { CalendarTabs } from '../components/activity-calendar/CalendarTabs';
import { ActivityTaskCard } from '../components/activity-calendar/ActivityTaskCard';

const DEFAULT_TASKS = [
  {
    title: 'Pest Scouting',
    desc: 'Check for aphids and whiteflies.',
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
  },
  {
    title: 'Irrigation Check',
    desc: 'Verify drip lines and valve pressure.',
    date: new Date('2025-09-15').toISOString(),
  },
  {
    title: 'Fertilizer Application',
    desc: 'Apply NPK 10-26-26 as per schedule.',
    date: new Date('2025-09-18').toISOString(),
  },
  {
    title: 'Weed Control',
    desc: 'Spot spray along field edges.',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // Next week
  },
];

export default function ActivityCalendarScreen() {
  const [tab, setTab] = useState<'upcoming' | 'month'>('upcoming');
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const [checked, setChecked] = useState(Array(DEFAULT_TASKS.length).fill(false));
  const [modalVisible, setModalVisible] = useState(false);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [form, setForm] = useState({ title: '', desc: '', date: '' });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleToggle = (idx: number) => {
    setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const openAdd = () => {
    setEditIdx(null);
    setForm({ title: '', desc: '', date: new Date().toISOString() });
    setModalVisible(true);
  };
  const openEdit = (idx: number) => {
    setEditIdx(idx);
    setForm(tasks[idx]);
    setModalVisible(true);
  };
  const handleSave = () => {
    if (form.title.trim() === '') return;
    if (editIdx === null) {
      setTasks((prev) => [...prev, form]);
      setChecked((prev) => [...prev, false]);
    } else {
      setTasks((prev) => prev.map((t, i) => (i === editIdx ? form : t)));
    }
    setModalVisible(false);
  };
  const handleDelete = () => {
    if (editIdx === null) return;
    setTasks((prev) => prev.filter((_, i) => i !== editIdx));
    setChecked((prev) => prev.filter((_, i) => i !== editIdx));
    setModalVisible(false);
  };

  // Sort tasks by date (ascending)
  const sortedTasks = [...tasks].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  function formatDate(dateStr: string) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  return (
    <View className="flex-1 bg-[#f7f8ed]">
      <ActivityCalendarHeader />
      <CalendarTabs active={tab} onChange={setTab} />
      {tab === 'upcoming' && (
        <>
          <Text className="mb-1 mt-2 px-4 text-xs text-gray-500">
            Long press a task to edit or delete it.
          </Text>
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}
            showsVerticalScrollIndicator={false}>
            {sortedTasks.map((task, idx) => (
              <TouchableOpacity
                key={task.title + task.date}
                activeOpacity={0.8}
                onLongPress={() => openEdit(tasks.indexOf(task))}>
                <ActivityTaskCard
                  title={task.title}
                  desc={task.desc}
                  date={formatDate(task.date)}
                  checked={checked[tasks.indexOf(task)]}
                  onToggle={() => handleToggle(tasks.indexOf(task))}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            className="absolute bottom-8 right-8 h-14 w-14 items-center justify-center rounded-full bg-green-700 shadow-lg"
            onPress={openAdd}
            activeOpacity={0.8}>
            <Text className="text-3xl text-white">+</Text>
          </TouchableOpacity>
          <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}>
            <View className="flex-1 items-center justify-center bg-black/30">
              <View className="w-80 rounded-2xl bg-white p-6">
                <Text className="mb-2 text-lg font-bold text-green-700">
                  {editIdx === null ? 'Add Task' : 'Edit Task'}
                </Text>
                <TextInput
                  className="mb-2 rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Title"
                  value={form.title}
                  onChangeText={(t) => setForm((f) => ({ ...f, title: t }))}
                />
                <TextInput
                  className="mb-2 rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Description"
                  value={form.desc}
                  onChangeText={(t) => setForm((f) => ({ ...f, desc: t }))}
                />
                <TouchableOpacity
                  className="mb-4 rounded-lg border border-gray-300 px-3 py-2"
                  onPress={() => setShowDatePicker(true)}
                  activeOpacity={0.7}>
                  <Text className="text-gray-700">
                    {form.date ? formatDate(form.date) : 'Choose Date'}
                  </Text>
                </TouchableOpacity>
                {showDatePicker && (
                  <DateTimePicker
                    value={form.date ? new Date(form.date) : new Date()}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'inline' : 'default'}
                    onChange={(_e, selectedDate) => {
                      setShowDatePicker(false);
                      if (selectedDate) {
                        setForm((f) => ({ ...f, date: selectedDate.toISOString() }));
                      }
                    }}
                  />
                )}
                <View className="flex-row justify-between">
                  {editIdx !== null && (
                    <TouchableOpacity
                      onPress={handleDelete}
                      className="rounded-lg bg-red-100 px-4 py-2">
                      <Text className="font-semibold text-red-700">Delete</Text>
                    </TouchableOpacity>
                  )}
                  <View className="flex-1" />
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    className="mr-2 px-4 py-2">
                    <Text className="font-semibold text-gray-700">Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleSave}
                    className="rounded-lg bg-green-700 px-4 py-2">
                    <Text className="font-semibold text-white">Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </>
      )}
      {tab === 'month' && (
        <View className="flex-1 items-center justify-center">
          <View className="rounded-2xl bg-white p-8 shadow">
            <Text className="font-semibold text-green-700">Month View Coming Soon</Text>
          </View>
        </View>
      )}
    </View>
  );
}
