import React, { useState, useMemo, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { products, shopCategories } from "@/data/mockData";
import type { Product } from "@/data/mockData";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_GAP = 8;
const CARD_WIDTH = (SCREEN_WIDTH - 36 - CARD_GAP) / 2;

function ProductCard({ product }: { product: Product }) {
  const hasDiscount = !!product.originalPrice;

  return (
    <TouchableOpacity
      className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border"
      activeOpacity={0.9}
      style={{ width: CARD_WIDTH }}
    >
      {/* Product Image */}
      <Image
        source={{ uri: product.image }}
        className="w-full h-36"
        resizeMode="cover"
      />

      {/* Content */}
      <View className="p-2.5">
        {/* Platform tag */}
        <Text className="bg-warm text-text-muted text-[10px] px-1.5 py-0.5 rounded self-start mb-1">
          {product.platform}
        </Text>

        {/* Name */}
        <Text className="text-text-primary text-[13px] font-medium mb-1.5" numberOfLines={2}>
          {product.name}
        </Text>

        {/* Price row */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-baseline gap-1">
            <Text className="text-danger text-base font-bold">
              ¥{product.price}
            </Text>
            {hasDiscount && (
              <Text className="text-text-muted text-xs line-through">
                ¥{product.originalPrice}
              </Text>
            )}
          </View>
        </View>

        {/* Sales */}
        <View className="flex-row items-center mt-1.5">
          <Ionicons name="flame-outline" size={10} color="#B0B0B0" />
          <Text className="text-text-muted text-[10px] ml-0.5">
            {product.sales >= 10000
              ? `${(product.sales / 10000).toFixed(1)}万`
              : product.sales}{" "}
            已售
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function ShopScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategorySelect = useCallback((catName: string) => {
    setSelectedCategory((prev) => (prev === catName ? null : catName));
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-warm" edges={["top"]}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View className="p-1">
            <ProductCard product={item} />
          </View>
        )}
        columnWrapperStyle={{ paddingHorizontal: 14 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            <View className="px-4 pt-4 pb-2 flex-row items-center justify-between">
              <View>
                <Text className="text-text-primary text-xl font-bold">
                  美甲商城 🛍️
                </Text>
                <Text className="text-text-secondary text-xs mt-0.5">
                  精选好物，一站配齐
                </Text>
              </View>
              <TouchableOpacity className="w-10 h-10 bg-card rounded-full items-center justify-center border border-border">
                <Ionicons name="cart-outline" size={20} color="#E8A0BF" />
              </TouchableOpacity>
            </View>

            {/* Category tags */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
              className="mt-2 mb-3"
            >
              <TouchableOpacity
                className={`px-4 py-1.5 rounded-full ${
                  selectedCategory === null
                    ? "bg-primary"
                    : "bg-card border border-border"
                }`}
                onPress={() => setSelectedCategory(null)}
              >
                <Text
                  className={`text-xs font-medium ${
                    selectedCategory === null
                      ? "text-white"
                      : "text-text-primary"
                  }`}
                >
                  全部
                </Text>
              </TouchableOpacity>
              {shopCategories.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  className={`px-4 py-1.5 rounded-full flex-row items-center gap-1 ${
                    selectedCategory === cat.name
                      ? "bg-primary"
                      : "bg-card border border-border"
                  }`}
                  onPress={() => handleCategorySelect(cat.name)}
                >
                  <Text className="text-xs">{cat.emoji}</Text>
                  <Text
                    className={`text-xs font-medium ${
                      selectedCategory === cat.name
                        ? "text-white"
                        : "text-text-primary"
                    }`}
                  >
                    {cat.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Result count */}
            <View className="px-4 mb-2">
              <Text className="text-text-secondary text-xs">
                共 {filteredProducts.length} 件商品
              </Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
