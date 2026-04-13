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

export default function WeightScreen() {
  const [weight, setWeight] = useState<string>("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarActive, { width: "50%" }]} />
            </View>
            <Text style={styles.progressText}>4/10</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>What is your weight?</Text>
            <Text style={styles.subtitle}>
              This helps us personalize your health plan.
            </Text>

            <Image
              source={require("../../assets/images/weight.png")}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="0"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
                maxLength={3}
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
              />
              <Text style={styles.unitText}>kg</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              style={[
                styles.nextButton,
                (!weight || parseInt(weight) < 20) && styles.disabledButton,
              ]}
              onPress={() => {
                Keyboard.dismiss();
                if (weight && parseInt(weight) >= 20) {
                  // Thay vì vào (tabs), giờ sẽ chuyển sang Goal Height
                  router.push("/onboarding/goal-height");
                }
              }}
              disabled={!weight || parseInt(weight) < 20}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

// Style tương tự như HeightScreen, chỉ đổi màu hoặc icon nếu muốn
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
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    marginHorizontal: 20,
  },
  progressBarActive: {
    height: 8,
    backgroundColor: "#4CAF50",
    borderRadius: 4,
  },
  progressText: { fontFamily: "BalsamiqSans_400Regular", color: "#666" },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
    alignItems: "center",
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
    marginBottom: 30,
    alignSelf: "flex-start",
  },
  image: { width: 180, height: 180, marginBottom: 40 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#4CAF50",
    paddingBottom: 10,
    width: "80%",
    justifyContent: "center",
  },
  input: {
    fontSize: 40,
    fontFamily: "BalsamiqSans_700Bold",
    color: "#1a1a1a",
    textAlign: "center",
    minWidth: 60,
  },
  unitText: {
    fontSize: 20,
    fontFamily: "BalsamiqSans_400Regular",
    color: "#6b7280",
    marginLeft: 10,
  },
  footer: { padding: 30 },
  nextButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
  },
  disabledButton: { backgroundColor: "#d1d5db" },
  nextButtonText: {
    fontFamily: "BalsamiqSans_700Bold",
    color: "#fff",
    fontSize: 18,
  },
});
