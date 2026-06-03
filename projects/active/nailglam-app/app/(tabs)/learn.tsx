import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { tutorials } from "@/data/mockData";
import type { Tutorial } from "@/data/mockData";

function getDifficultyStars(difficulty: Tutorial["difficulty"]): {
  count: number;
  label: string;
} {
  switch (difficulty) {
    case "beginner":
      return { count: 1, label: "入门" };
    case "intermediate":
      return { count: 2, label: "进阶" };
    case "advanced":
      return { count: 3, label: "高级" };
  }
}

function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  const diff = getDifficultyStars(tutorial.difficulty);

  return (
    <TouchableOpacity
      className="bg-card rounded-2xl mx-4 mb-4 overflow-hidden shadow-sm border border-border"
      activeOpacity={0.9}
    >
      {/* Thumbnail */}
      <View className="relative">
        <Image
          source={{ uri: tutorial.thumbnail }}
          className="w-full h-44"
          resizeMode="cover"
        />
        {/* Play button overlay */}
        <View className="absolute inset-0 bg-black/20 items-center justify-center">
          <View className="w-12 h-12 bg-white/80 rounded-full items-center justify-center">
            <Ionicons name="play" size={22} color="#E8A0BF" />
          </View>
        </View>

        {/* Price/Free badge */}
        <View
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full ${
            tutorial.isFree ? "bg-success" : "bg-accent"
          }`}
        >
          <View className="flex-row items-center gap-1">
            {tutorial.isFree ? (
              <Text className="text-white text-xs font-bold">免费</Text>
            ) : (
              <>
                <Ionicons name="lock-closed" size={10} color="#FFFFFF" />
                <Text className="text-white text-xs font-bold">
                  ¥{tutorial.price}
                </Text>
              </>
            )}
          </View>
        </View>

        {/* Duration badge */}
        <View className="absolute top-3 right-3 bg-black/60 px-2 py-0.5 rounded-full">
          <Text className="text-white text-[10px]">{tutorial.duration}</Text>
        </View>
      </View>

      {/* Content */}
      <View className="p-3.5">
        {/* Title + instructor */}
        <Text className="text-text-primary text-[15px] font-bold mb-1">
          {tutorial.title}
        </Text>
        <Text className="text-text-secondary text-xs mb-2.5">
          {tutorial.instructor} · {tutorial.category}
        </Text>

        {/* Difficulty stars */}
        <View className="flex-row items-center mb-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Ionicons
              key={i}
              name="star"
              size={14}
              color={i < diff.count ? "#F5C26B" : "#E0E0E0"}
            />
          ))}
          <Text className="text-text-muted text-xs ml-1.5">{diff.label}</Text>
        </View>

        {/* Steps preview */}
        <View className="flex-row gap-2">
          {tutorial.steps.map((step, idx) => (
            <View
              key={idx}
              className="flex-1 bg-warm rounded-lg px-2 py-1.5 items-center"
            >
              <Text className="text-text-muted text-[10px] mb-0.5">
                Step {idx + 1}
              </Text>
              <Text
                className="text-text-primary text-[11px] font-medium text-center"
                numberOfLines={1}
              >
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function LearnScreen() {
  return (
    <SafeAreaView className="flex-1 bg-warm" edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 20 }}
      >
        {/* Header */}
        <View className="px-4 mb-4">
          <Text className="text-text-primary text-xl font-bold mb-1">
            美甲教程 📚
          </Text>
          <Text className="text-text-secondary text-sm">
            从入门到高级，一步步成为美甲达人
          </Text>
        </View>

        {/* Category quick filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
          className="mb-4"
        >
          {["全部", "入门", "进阶", "高级", "免费"].map((tag) => (
            <TouchableOpacity
              key={tag}
              className={`px-4 py-1.5 rounded-full ${
                tag === "全部"
                  ? "bg-primary"
                  : "bg-card border border-border"
              }`}
            >
              <Text
                className={`text-xs font-medium ${
                  tag === "全部" ? "text-white" : "text-text-primary"
                }`}
              >
                {tag}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Tutorial Cards */}
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
