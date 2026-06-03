import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import type { Banner } from "@/data/mockData";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_WIDTH = SCREEN_WIDTH - 48;
const CARD_SPACING = 12;

interface BannerCarouselProps {
  banners: Banner[];
  onPress?: (banner: Banner) => void;
}

export default function BannerCarousel({
  banners,
  onPress,
}: BannerCarouselProps) {
  const scrollRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollTimer = useRef<ReturnType<typeof setInterval>>();

  // Auto scroll every 3 seconds
  useEffect(() => {
    autoScrollTimer.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % banners.length;
        scrollRef.current?.scrollTo({
          x: next * (CARD_WIDTH + CARD_SPACING),
          animated: true,
        });
        return next;
      });
    }, 3000);

    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };
  }, [banners.length]);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (CARD_WIDTH + CARD_SPACING));
    setActiveIndex(index);
  };

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled={false}
        snapToInterval={CARD_WIDTH + CARD_SPACING}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: CARD_SPACING,
        }}
        onMomentumScrollEnd={handleScroll}
      >
        {banners.map((banner) => (
          <TouchableOpacity
            key={banner.id}
            activeOpacity={0.9}
            onPress={() => onPress?.(banner)}
          >
            <View
              style={{ width: CARD_WIDTH }}
              className="h-36 rounded-2xl overflow-hidden relative"
            >
              <Image
                source={{ uri: banner.image }}
                className="w-full h-full absolute"
                resizeMode="cover"
              />
              {/* Gradient overlay */}
              <View className="absolute inset-0 bg-black/30" />

              {/* Text overlay */}
              <View className="absolute bottom-0 left-0 right-0 p-4">
                <Text className="text-white text-base font-bold mb-0.5">
                  {banner.title}
                </Text>
                <Text className="text-white/80 text-xs mb-2">
                  {banner.subtitle}
                </Text>
                <View className="bg-white/20 self-start px-3 py-1 rounded-full">
                  <Text className="text-white text-xs font-medium">
                    {banner.ctaText}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Dots indicator */}
      <View className="flex-row justify-center items-center mt-3 gap-1.5">
        {banners.map((_, idx) => (
          <View
            key={idx}
            className={`rounded-full ${
              idx === activeIndex
                ? "w-5 h-2 bg-primary"
                : "w-2 h-2 bg-text-muted/30"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
