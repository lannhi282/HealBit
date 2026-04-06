import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

// Thay URI bằng ảnh thật hoặc SVG illustration của bạn
const SLIDES = [
  {
    id: "1",
    title: "Improve Sleep\nQuality",
    description:
      "Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning",
    image: require("../../assets/images/sleep.png"), // thay bằng ảnh của bạn
  },
  {
    id: "2",
    title: "Eat Well",
    description:
      "Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun",
    image: require("../../assets/images/eat.png"),
  },
  {
    id: "3",
    title: "Get Burn",
    description:
      "Let's keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever",
    image: require("../../assets/images/burn.png"),
  },
  {
    id: "4",
    title: "Track Your Goal",
    description:
      "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
    image: require("../../assets/images/track.png"),
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      // Slide cuối → vào app chính
      router.replace("/");
    }
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <FlatList
        ref={flatListRef}
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            {/* Vùng ảnh với background xanh lá blob */}
            <View style={styles.imageContainer}>
              <View style={styles.blobBackground} />
              <Image source={item.image} style={styles.illustration} />
            </View>

            {/* Text content */}
            <View style={styles.textContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      {/* Bottom: dots + next button */}
      <View style={styles.footer}>
        {/* Dot indicators */}
        <View style={styles.dotsRow}>
          {SLIDES.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === currentIndex ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>

        {/* Next button */}
        <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <Text style={styles.nextArrow}>›</Text>
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
  slide: {
    width,
    flex: 1,
  },

  // Phần trên: illustration
  imageContainer: {
    height: height * 0.5,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  blobBackground: {
    position: "absolute",
    top: -40,
    left: -30,
    right: -30,
    height: height * 0.52,
    backgroundColor: "#6FCF6F", // xanh lá
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 40,
    opacity: 0.85,
  },
  illustration: {
    width: width * 0.75,
    height: height * 0.42,
    resizeMode: "contain",
    zIndex: 1,
  },

  // Phần dưới: text
  textContent: {
    paddingHorizontal: 28,
    paddingTop: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#1a1a1a",
    lineHeight: 38,
    marginBottom: 14,
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 22,
  },

  // Footer
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 28,
    paddingBottom: 40,
    paddingTop: 16,
  },
  dotsRow: {
    flexDirection: "row",
    gap: 6,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    width: 24,
    backgroundColor: "#4CAF50",
  },
  dotInactive: {
    width: 8,
    backgroundColor: "#d1d5db",
  },
  nextBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
  },
  nextArrow: {
    color: "#fff",
    fontSize: 26,
    lineHeight: 30,
    marginLeft: 2,
  },
});
