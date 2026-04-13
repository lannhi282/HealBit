import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function RecommendedPlanScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarActive, { width: "85%" }]} />
        </View>
        <Text style={styles.progressText}>10/10</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Recommended Plan</Text>
        <Text style={styles.subtitle}>Your personalized plan</Text>

        {/* Hình ảnh minh họa Workout */}
        <Image
          source={require("../../assets/images/plan.png")} // Đảm bảo file này là ảnh 2 người tập luyện như trong hình
          style={styles.mainIllustration}
          resizeMode="contain"
        />

        {/* Danh sách các chỉ số (Stats List) */}
        <View style={styles.statsCard}>
          {/* Row: Daily Calories */}
          <View style={styles.statRow}>
            <View style={styles.statLeft}>
              <View
                style={[styles.iconContainer, { backgroundColor: "#E7F7EF" }]}
              >
                <Image
                  source={require("../../assets/images/calo.png")}
                  style={styles.statIcon}
                />
              </View>
              <Text style={styles.statName}>Daily calories</Text>
            </View>
            <Text style={styles.statValue}>1900 kcal</Text>
          </View>

          <View style={styles.divider} />

          {/* Row: Water Goal */}
          <View style={styles.statRow}>
            <View style={styles.statLeft}>
              <View
                style={[styles.iconContainer, { backgroundColor: "#E9F0FF" }]}
              >
                <Image
                  source={require("../../assets/images/water.png")}
                  style={styles.statIcon}
                />
              </View>
              <Text style={styles.statName}>Water goal</Text>
            </View>
            <Text style={styles.statValue}>2,000 Liters</Text>
          </View>

          <View style={styles.divider} />

          {/* Row: Exercise */}
          <View style={styles.statRow}>
            <View style={styles.statLeft}>
              <View
                style={[styles.iconContainer, { backgroundColor: "#FFEEE9" }]}
              >
                <Image
                  source={require("../../assets/images/ex.png")}
                  style={styles.statIcon}
                />
              </View>
              <Text style={styles.statName}>Exercise</Text>
            </View>
            <Text style={styles.statValue}>30 min/day</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/onboarding/get-started")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
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
    backgroundColor: "#E7F7EF",
    borderRadius: 3,
    marginHorizontal: 15,
  },
  progressBarActive: { height: 6, backgroundColor: "#4CAF50", borderRadius: 3 },
  progressText: {
    fontFamily: "BalsamiqSans_400Regular",
    color: "#1D1617",
    fontSize: 14,
  },

  content: { paddingHorizontal: 30, alignItems: "center" },
  title: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 28,
    color: "#1D1617",
    alignSelf: "flex-start",
    marginTop: 15,
  },
  subtitle: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 14,
    color: "#7B6F72",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  mainIllustration: {
    width: width * 0.8,
    height: 220,
    marginVertical: 30,
  },

  // Style cho bảng thông số
  statsCard: {
    width: "100%",
    backgroundColor: "#F7F8F8",
    borderRadius: 16,
    padding: 15,
    marginTop: 50,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  statLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  statIcon: {
    width: 24,
    height: 24,
  },
  statName: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 15,
    color: "#1D1617",
  },
  statValue: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 14,
    color: "#7B6F72",
  },
  divider: {
    height: 1,
    backgroundColor: "#DDD",
    marginVertical: 2,
    opacity: 0.3,
  },

  footer: { padding: 30 },
  nextButton: {
    backgroundColor: "#58B65C", // Màu xanh lá giống trong ảnh
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
  },
  nextButtonText: {
    fontFamily: "BalsamiqSans_700Bold",
    color: "#fff",
    fontSize: 18,
  },
});
