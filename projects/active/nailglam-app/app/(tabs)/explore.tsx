import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import NailCard from "@/components/NailCard";
import {
  nailDesigns,
  styleCategories,
  colorOptions,
  difficultyOptions,
} from "@/data/mockData";
import { useAppStore } from "@/stores/useAppStore";
import type { NailDesign, StyleCategory } from "@/data/mockData";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_GAP = 6;
const CARD_WIDTH = (SCREEN_WIDTH - 32 - CARD_GAP) / 2;

export default function ExploreScreen() {
  const { searchHistory, addSearchHistory } = useAppStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  const handleSearch = useCallback(() => {
    if (searchQuery.trim()) {
      addSearchHistory(searchQuery.trim());
    }
  }, [searchQuery, addSearchHistory]);

  const handleStyleSelect = useCallback((style: string) => {
    setSelectedStyle((prev) => (prev === style ? null : style));
  }, []);

  const handleColorToggle = useCallback((colorId: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorId)
        ? prev.filter((c) => c !== colorId)
        : [...prev, colorId]
    );
  }, []);

  const handleDifficultySelect = useCallback((diffId: string) => {
    setSelectedDifficulty((prev) => (prev === diffId ? null : diffId));
  }, []);

  const filteredNails = useMemo(() => {
    let results = [...nailDesigns];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.style.toLowerCase().includes(q)
      );
    }

    if (selectedStyle) {
      results = results.filter((n) => n.style === selectedStyle);
    }

    if (selectedDifficulty) {
      results = results.filter((n) => n.difficulty === selectedDifficulty);
    }

    if (selectedColors.length > 0) {
      results = results.filter((n) =>
        n.colors.some((c) =>
          selectedColors.some((sc) => {
            const colorOption = colorOptions.find((co) => co.id === sc);
            return colorOption ? c === colorOption.hex : false;
          })
        )
      );
    }

    return results;
  }, [searchQuery, selectedStyle, selectedDifficulty, selectedColors]);

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
        data={filteredNails}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderNailItem}
        columnWrapperStyle={{ paddingHorizontal: 12, gap: CARD_GAP }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            <View className="px-4 pt-4 pb-2">
              <Text className="text-text-primary text-xl font-bold mb-3">
                探索美甲灵感 🔍
              </Text>

              {/* Search Bar */}
              <View className="flex-row items-center bg-card rounded-2xl px-4 py-2.5 border border-border">
                <Ionicons name="search" size={18} color="#B0B0B0" />
                <TextInput
                  className="flex-1 ml-2 text-text-primary text-sm"
                  placeholder="搜索风格、颜色、关键词..."
                  placeholderTextColor="#B0B0B0"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  onSubmitEditing={handleSearch}
                  returnKeyType="search"
                />
                {searchQuery.length > 0 && (
                  <TouchableOpacity onPress={() => setSearchQuery("")}>
                    <Ionicons name="close-circle" size={18} color="#B0B0B0" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Style Tags */}
            <View className="px-4 mt-3 mb-2">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 8 }}
              >
                <TouchableOpacity
                  className={`px-4 py-1.5 rounded-full ${
                    selectedStyle === null
                      ? "bg-primary"
                      : "bg-card border border-border"
                  }`}
                  onPress={() => setSelectedStyle(null)}
                >
                  <Text
                    className={`text-xs font-medium ${
                      selectedStyle === null ? "text-white" : "text-text-primary"
                    }`}
                  >
                    全部
                  </Text>
                </TouchableOpacity>
                {styleCategories.map((cat) => (
                  <TouchableOpacity
                    key={cat.id}
                    className={`px-4 py-1.5 rounded-full flex-row items-center gap-1 ${
                      selectedStyle === cat.name
                        ? "bg-primary"
                        : "bg-card border border-border"
                    }`}
                    onPress={() => handleStyleSelect(cat.name)}
                  >
                    <Text className="text-xs">{cat.emoji}</Text>
                    <Text
                      className={`text-xs font-medium ${
                        selectedStyle === cat.name
                          ? "text-white"
                          : "text-text-primary"
                      }`}
                    >
                      {cat.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Filter Toggle */}
            <View className="px-4 mb-2 flex-row items-center justify-between">
              <Text className="text-text-secondary text-xs">
                找到 {filteredNails.length} 个设计
              </Text>
              <TouchableOpacity
                className="flex-row items-center gap-1"
                onPress={() => setShowFilters(!showFilters)}
              >
                <Ionicons
                  name="options-outline"
                  size={16}
                  color={showFilters ? "#E8A0BF" : "#8E8E93"}
                />
                <Text
                  className={`text-xs font-medium ${
                    showFilters ? "text-primary" : "text-text-secondary"
                  }`}
                >
                  筛选
                </Text>
              </TouchableOpacity>
            </View>

            {/* Filter Panel */}
            {showFilters && (
              <View className="mx-4 mb-3 p-4 bg-card rounded-2xl border border-border">
                {/* Color Filter */}
                <Text className="text-text-primary text-sm font-semibold mb-2">
                  颜色筛选
                </Text>
                <View className="flex-row flex-wrap gap-2 mb-4">
                  {colorOptions.map((color) => (
                    <TouchableOpacity
                      key={color.id}
                      className={`flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border ${
                        selectedColors.includes(color.id)
                          ? "border-primary bg-primary-light/30"
                          : "border-border bg-white"
                      }`}
                      onPress={() => handleColorToggle(color.id)}
                    >
                      <View
                        className="w-3.5 h-3.5 rounded-full"
                        style={{ backgroundColor: color.hex }}
                      />
                      <Text className="text-text-primary text-xs">
                        {color.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Difficulty Filter */}
                <Text className="text-text-primary text-sm font-semibold mb-2">
                  难度筛选
                </Text>
                <View className="flex-row gap-2">
                  {difficultyOptions.map((diff) => (
                    <TouchableOpacity
                      key={diff.id}
                      className={`flex-row items-center gap-1 px-4 py-1.5 rounded-full border ${
                        selectedDifficulty === diff.id
                          ? "border-primary bg-primary-light/30"
                          : "border-border bg-white"
                      }`}
                      onPress={() => handleDifficultySelect(diff.id)}
                    >
                      <Text className="text-xs">{diff.emoji}</Text>
                      <Text className="text-text-primary text-xs">
                        {diff.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Clear Filters */}
                {(selectedColors.length > 0 || selectedDifficulty) && (
                  <TouchableOpacity
                    className="mt-3 self-end"
                    onPress={() => {
                      setSelectedColors([]);
                      setSelectedDifficulty(null);
                    }}
                  >
                    <Text className="text-primary text-xs font-medium">
                      清除筛选
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        }
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-20">
            <Ionicons name="search-outline" size={48} color="#B0B0B0" />
            <Text className="text-text-muted text-sm mt-2">
              没有找到匹配的设计
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
