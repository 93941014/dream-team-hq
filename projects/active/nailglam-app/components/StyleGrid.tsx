import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import type { StyleCategory } from "@/data/mockData";

interface StyleGridProps {
  categories: StyleCategory[];
  onSelect: (category: StyleCategory) => void;
}

export default function StyleGrid({ categories, onSelect }: StyleGridProps) {
  return (
    <View className="flex-row flex-wrap justify-between px-4">
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.id}
          className="w-[23%] bg-card rounded-2xl items-center justify-center py-3.5 mb-2.5 shadow-sm border border-border"
          activeOpacity={0.7}
          onPress={() => onSelect(cat)}
        >
          <Text className="text-2xl mb-1.5">{cat.emoji}</Text>
          <Text className="text-text-primary text-xs font-medium">
            {cat.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
