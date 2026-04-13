import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function GoalHeightScreen() {
  const [height, setHeight] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarActive, { width: "50%" }]} />
            </View>
            <Text style={styles.progressText}>5/10</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>What is your goal height?</Text>
            <Text style={styles.subtitle}>
              This helps us personalize your health plan.
            </Text>
            <Image
              source={require("../../assets/images/goal_height.png")}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="0"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
                returnKeyType="done"
              />
              <Text style={styles.unitText}>cm</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.nextButton, !height && styles.disabledButton]}
              onPress={() => height && router.push("/onboarding/goal-weight")}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
// (Styles dùng chung bên dưới)
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
  title: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 26,
    color: "#1a1a1a",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  subtitle: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 40,
    alignSelf: "flex-start",
  },
  progressBarActive: { height: 6, backgroundColor: "#4CAF50", borderRadius: 3 },
  progressText: {
    fontFamily: "BalsamiqSans_400Regular",
    color: "#999",
    fontSize: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: "center",
    paddingTop: 20,
  },

  image: { width: 150, height: 150, marginBottom: 30 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#4CAF50",
    width: "60%",
  },
  input: {
    flex: 1,
    fontSize: 32,
    fontFamily: "BalsamiqSans_700Bold",
    textAlign: "center",
    padding: 10,
  },
  unitText: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 18,
    color: "#666",
  },
  optionCard: {
    width: "100%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#f9f9f9",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  selectedCard: { borderColor: "#4CAF50", backgroundColor: "#f0fff0" },
  optionText: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 16,
    textAlign: "center",
  },
  footer: { padding: 30 },
  nextButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
  },
  finalButton: {
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
