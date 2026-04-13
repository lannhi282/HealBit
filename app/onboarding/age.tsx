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

export default function AgeScreen() {
  const [age, setAge] = useState<string>("");

  return (
    // 1. Dùng TouchableWithoutFeedback để click ra ngoài là đóng bàn phím
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        {/* 2. Dùng KeyboardAvoidingView để không bị bàn phím che mất nút */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarActive, { width: "30%" }]} />
            </View>
            <Text style={styles.progressText}>2/10</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>How old are you?</Text>
            <Text style={styles.subtitle}>
              This helps us personalize your health plan.
            </Text>

            <Image
              source={require("../../assets/images/age.png")}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Age"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
                maxLength={3}
                // Tự động đóng bàn phím khi nhấn nút "Done" trên bàn phím
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
              />
              <Text style={styles.unitText}>years old</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              style={[
                styles.nextButton,
                (!age || parseInt(age) < 5) && styles.disabledButton,
              ]}
              onPress={() => {
                Keyboard.dismiss(); // Đóng bàn phím trước khi chuyển trang
                if (age && parseInt(age) >= 5)
                  router.push("/onboarding/height");
              }}
              disabled={!age || parseInt(age) < 5}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

// ... Styles giữ nguyên như cũ
// ... Styles giữ nguyên như cũ
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
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
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
    marginBottom: 40,
    alignSelf: "flex-start",
  },
  image: { width: 150, height: 150, marginBottom: 50 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#e0e0e0",
    paddingBottom: 10,
    width: "100%",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    fontSize: 32,
    fontFamily: "BalsamiqSans_700Bold",
    color: "#1a1a1a",
    textAlign: "center",
    padding: 0,
  },
  unitText: {
    fontSize: 18,
    fontFamily: "BalsamiqSans_400Regular",
    color: "#6b7280",
    marginLeft: 15,
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
