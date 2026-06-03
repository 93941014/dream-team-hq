import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateScreen() {
  return (
    <SafeAreaView className="flex-1 bg-warm items-center justify-center">
      <Text className="text-text-primary text-lg font-bold mb-2">
        📸 发布你的美甲作品
      </Text>
      <Text className="text-text-secondary text-sm">
        拍照或从相册选择照片
      </Text>
      <Text className="text-text-muted text-xs mt-1">
        功能即将上线...
      </Text>
    </SafeAreaView>
  );
}
