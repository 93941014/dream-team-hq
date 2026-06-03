import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppStore } from "@/stores/useAppStore";
import type { NailDesign } from "@/data/mockData";

interface NailCardProps {
  nail: NailDesign;
  onPress?: () => void;
}

export default function NailCard({ nail, onPress }: NailCardProps) {
  const { toggleFavorite, isFavorite } = useAppStore();
  const favorited = isFavorite(nail.id);

  return (
    <TouchableOpacity
      className="flex-1 m-1.5 bg-card rounded-2xl overflow-hidden shadow-sm"
      activeOpacity={0.85}
      onPress={onPress}
    >
      {/* Image */}
      <View className="relative">
        <Image
          source={{ uri: nail.image }}
          className="w-full h-40"
          resizeMode="cover"
        />
        {/* Favorite button */}
        <TouchableOpacity
          className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full items-center justify-center"
          onPress={() => toggleFavorite(nail.id)}
        >
          <Ionicons
            name={favorited ? "heart" : "heart-outline"}
            size={16}
            color={favorited ? "#E8837A" : "#8E8E93"}
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="p-2.5">
        <Text className="text-text-primary text-[13px] font-semibold mb-1" numberOfLines={1}>
          {nail.title}
        </Text>

        {/* Style tag + likes row */}
        <View className="flex-row items-center justify-between">
          <View className="bg-primary-light/40 px-2 py-0.5 rounded-full">
            <Text className="text-primary-dark text-[11px]">
              {nail.styleEmoji} {nail.style}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="heart" size={12} color="#E8837A" />
            <Text className="text-text-muted text-[11px] ml-0.5">
              {nail.likes >= 1000
                ? `${(nail.likes / 1000).toFixed(1)}k`
                : nail.likes}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
