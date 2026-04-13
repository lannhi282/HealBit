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
          onPress={() => router.push("/onboarding")} // Điều hướng đến app/onboarding/index.tsx
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
  logo: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 36,
  },
  tagline: {
    fontFamily: "BalsamiqSans_400Regular",
    marginTop: 8,
    fontSize: 15,
    color: "#6b7280",
  },
  buttonText: {
    fontFamily: "BalsamiqSans_700Bold",
    color: "#fff",
    fontSize: 16,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logoHeal: {
    color: "#1a1a1a",
  },
  logoBit: {
    color: "#4CAF50",
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
});
