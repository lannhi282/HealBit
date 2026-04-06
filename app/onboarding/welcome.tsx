import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Logo giữa màn hình */}
      <View style={styles.centerContent}>
        <Text style={styles.logo}>
          <Text style={styles.logoHeal}>Heal </Text>
          <Text style={styles.logoBit}>Bit</Text>
        </Text>
        <Text style={styles.tagline}>Everybody Can Train</Text>
      </View>

      {/* Nút Get Started */}
      <View style={styles.bottomArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/onboarding")}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 36,
    fontWeight: "700",
  },
  logoHeal: {
    color: "#1a1a1a",
  },
  logoBit: {
    color: "#4CAF50",
  },
  tagline: {
    marginTop: 8,
    fontSize: 15,
    color: "#6b7280",
  },
  bottomArea: {
    paddingHorizontal: 24,
    paddingBottom: 36,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 18,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
