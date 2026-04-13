// app/onboarding/user-welcome.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function UserWelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.content}>
        {/* Hình ảnh chào mừng (Tạm thời dùng ảnh user_welcome.png từ assets của bạn) */}
        <Image
          source={require("../../assets/images/user_welcome.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Tiêu đề chào mừng */}
        <Text style={styles.title}>
          Welcome to your personal health tracker
        </Text>
      </View>

      {/* Nút mũi tên điều hướng lớn */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/onboarding/gender")}
        >
          <Ionicons name="arrow-forward" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  backButton: { padding: 20 },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  image: { width: "100%", height: 300, marginBottom: 40 },
  title: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 28,
    color: "#1a1a1a",
    textAlign: "center",
    lineHeight: 36,
  },
  footer: { alignItems: "flex-end", padding: 30 },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
  },
});
