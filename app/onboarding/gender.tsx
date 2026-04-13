// app/onboarding/gender.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function GenderScreen() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const genderOptions = [
    { id: "male", label: "Male", icon: "mars", color: "#89CFF0" },
    { id: "female", label: "Female", icon: "venus", color: "#F4C2C2" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header với nút quay lại và thanh tiến trình */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarActive, { width: "20%" }]} />
        </View>
        <Text style={styles.progressText}>1/10</Text>
      </View>

      {/* Tiêu đề và mô tả */}
      <View style={styles.content}>
        <Text style={styles.title}>What is your gender?</Text>
        <Text style={styles.subtitle}>
          This helps us personalize your health plan.
        </Text>

        {/* Các tùy chọn giới tính */}
        <View style={styles.optionsContainer}>
          {genderOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                selectedGender === option.id && styles.selectedOption,
              ]}
              onPress={() => setSelectedGender(option.id)}
            >
              <FontAwesome5 name={option.icon} size={80} color={option.color} />
              <View style={styles.labelContainer}>
                <Text style={styles.optionLabel}>{option.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Nút Tiếp tục */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.nextButton, !selectedGender && styles.disabledButton]}
          onPress={() => selectedGender && router.push("/onboarding/age")}
          disabled={!selectedGender}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginHorizontal: 20,
  },
  progressBarActive: { height: 8, backgroundColor: "#4CAF50", borderRadius: 4 },
  progressText: { fontFamily: "BalsamiqSans_400Regular", color: "#666" },
  content: { flex: 1, paddingHorizontal: 30, paddingTop: 30 },
  title: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 26,
    color: "#1a1a1a",
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 40,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
  },
  optionButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#f9f9f9",
  },
  selectedOption: { borderColor: "#4CAF50", backgroundColor: "#f0fff0" },
  labelContainer: {
    marginTop: 15,
    backgroundColor: "#e0e0e0",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  optionLabel: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 16,
    color: "#1a1a1a",
  },
  footer: { padding: 30 },
  nextButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 18,
    borderRadius: 50,
    alignItems: "center",
  },
  disabledButton: { backgroundColor: "#c8e6c9" },
  nextButtonText: {
    fontFamily: "BalsamiqSans_700Bold",
    color: "#fff",
    fontSize: 16,
  },
});
