import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function GetStartedFinalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/thank.png")}
          style={styles.largeImage}
        />
        <Text style={styles.title}>You are all set!</Text>
        <Text style={styles.subtitle}>
          Your journey to a healthier life starts now.
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.finalButton}
          onPress={() => router.replace("/(tabs)")}
        >
          <Text style={styles.nextButtonText}>Go to Dashboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
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
  content: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 24,
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: 20,
  },
  largeImage: {
    width: 280,
    height: 280,
    resizeMode: "contain",
    marginBottom: 150,
  },
  subtitle: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 16,
    color: "#7B6F72",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  image: { width: 150, height: 150, marginBottom: 300 },
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
