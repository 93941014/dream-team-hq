import React, { useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import BannerCarousel from "@/components/BannerCarousel";
import StyleGrid from "@/components/StyleGrid";
import NailCard from "@/components/NailCard";
import {
  banners,
  styleCategories,
  nailDesigns,
} from "@/data/mockData";
import type { StyleCategory, NailDesign } from "@/data/mockData";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_GAP = 6;
const CARD_WIDTH = (SCREEN_WIDTH - 32 - CARD_GAP) / 2;

export default function HomeScreen() {
  const handleStyleSelect = useCallback((cat: StyleCategory) => {
    // Navigate to explore with style filter (placeholder)
    console.log("Selected style:", cat.name);
  }, []);

  const handleBannerPress = useCallback((banner: any) => {
    console.log("Banner pressed:", banner.title);
  }, []);

  const handleNailPress = useCallback((nail: NailDesign) => {
    console.log("Nail pressed:", nail.title);
  }, []);

  const renderNailItem = useCallback(
    ({ item }: { item: NailDesign }) => (
      <View style={{ width: CARD_WIDTH }}>
        <NailCard nail={item} onPress={() => handleNailPress(item)} />
      </View>
    ),
    [handleNailPress]
  );

  return (
    <SafeAreaView className="flex-1 bg-warm" edges={["top"]}>
      <FlatList
        data={nailDesigns}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderNailItem}
        columnWrapperStyle={{ paddingHorizontal: 12, gap: CARD_GAP }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header Greeting */}
            <View className="px-4 pt-4 pb-2 flex-row items-center justify-between">
              <View>
                <Text className="text-text-primary text-xl font-bold">
                  Discover Your
                </Text>
                <Text className="text-primary text-xl font-bold">
                  Nail Inspiration ✨
                </Text>
              </View>
              <View className="w-10 h-10 bg-primary-light rounded-full items-center justify-center">
                <Ionicons name="notifications-outline" size={20} color="#E8A0BF" />
              </View>
            </View>

            {/* Banner Carousel */}
            <View className="mt-3 mb-5">
              <BannerCarousel
                banners={banners}
                onPress={handleBannerPress}
              />
            </View>

            {/* Style Grid */}
            <View className="mb-4">
              <View className="flex-row items-center justify-between px-4 mb-3">
                <Text className="text-text-primary text-base font-bold">
                  风格分类
                </Text>
                <Text className="text-primary text-xs font-medium">
                  查看全部 →
                </Text>
              </View>
              <StyleGrid
                categories={styleCategories}
                onSelect={handleStyleSelect}
              />
            </View>

            {/* Popular Section Title */}
            <View className="flex-row items-center justify-between px-4 mb-3 mt-2">
              <Text className="text-text-primary text-base font-bold">
                🔥 热门推荐
              </Text>
              <Text className="text-text-muted text-xs">
                共 {nailDesigns.length} 款
              </Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
