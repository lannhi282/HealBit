import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function FitnessLevelScreen() {
  const [level, setLevel] = useState<string | null>(null);
  const levels = ["Beginner", "Intermediate", "Advance"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarActive, { width: "80%" }]} />
        </View>
        <Text style={styles.progressText}>8/10</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>What’s your fitness level?</Text>
        <Text style={styles.subtitle}>
          This helps us personalize your health plan.
        </Text>
        {levels.map((item: string) => (
          <TouchableOpacity
            key={item}
            style={[styles.optionCard, level === item && styles.selectedCard]}
            onPress={() => setLevel(item)}
          >
            <Text
              style={[
                styles.optionText,
                level === item && styles.selectedOptionText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.nextButton, !level && styles.disabledButton]}
          onPress={() => level && router.push("/onboarding/body-type")}
          disabled={!level}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styles giữ nguyên như trang Goal Selection bạn đã gửi
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { flexDirection: "row", alignItems: "center", padding: 20 },
  progressBarBg: {
    flex: 1,
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 3,
    marginHorizontal: 15,
  },
  progressBarActive: { height: 6, backgroundColor: "#4CAF50", borderRadius: 3 },
  progressText: {
    fontFamily: "BalsamiqSans_400Regular",
    color: "#999",
    fontSize: 12,
  },
  content: { paddingHorizontal: 30, paddingTop: 20 },
  title: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 24,
    color: "#1a1a1a",
    textAlign: "left",
    marginBottom: 30,
  },

  subtitle: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 40,
    alignSelf: "flex-start",
  },
  optionCard: {
    width: "100%",
    padding: 22,
    borderRadius: 15,
    backgroundColor: "#F7F8F8",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#F7F8F8",
  },
  selectedCard: {
    borderColor: "#4CAF50",
    backgroundColor: "#fff",
    // Đổ bóng nhẹ cho item được chọn
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 16,
    color: "#7B6F72",
  },
  selectedOptionText: {
    fontFamily: "BalsamiqSans_700Bold", // Chữ đậm hơn khi chọn
    color: "#4CAF50",
  },
  footer: { padding: 30 },
  nextButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
  },
  nextButtonText: {
    fontFamily: "BalsamiqSans_700Bold",
    color: "#fff",
    fontSize: 16,
  },
  disabledButton: { backgroundColor: "#ccc" },
});
