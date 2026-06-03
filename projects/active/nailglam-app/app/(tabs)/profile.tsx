import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAppStore } from "@/stores/useAppStore";

interface MenuItem {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  badge?: string;
}

const menuItems: MenuItem[][] = [
  [
    { id: "fav", title: "我的收藏", icon: "heart-outline", color: "#E8837A" },
    {
      id: "history",
      title: "浏览历史",
      icon: "time-outline",
      color: "#8E8E93",
    },
    {
      id: "purchased",
      title: "已购课程",
      icon: "play-circle-outline",
      color: "#E8A0BF",
    },
  ],
  [
    {
      id: "vip",
      title: "会员中心",
      icon: "diamond-outline",
      color: "#D4A574",
      badge: "PRO",
    },
    {
      id: "settings",
      title: "设置",
      icon: "settings-outline",
      color: "#8E8E93",
    },
    { id: "about", title: "关于我们", icon: "information-circle-outline", color: "#8E8E93" },
  ],
];

export default function ProfileScreen() {
  const { user, isLoggedIn, login, logout } = useAppStore();

  const handleLogin = () => {
    login({
      id: "u1",
      name: "NailArt Lover",
      avatar: "https://picsum.photos/seed/avatar/200/200",
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-warm" edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Profile Header */}
        <View className="px-4 pt-6 pb-4">
          {isLoggedIn && user ? (
            <View className="flex-row items-center">
              <View className="w-16 h-16 bg-primary-light rounded-full items-center justify-center mr-4">
                <Ionicons name="person" size={32} color="#E8A0BF" />
              </View>
              <View className="flex-1">
                <Text className="text-text-primary text-lg font-bold">
                  {user.name}
                </Text>
                <Text className="text-text-secondary text-sm mt-0.5">
                  美甲爱好者 · 入门级
                </Text>
              </View>
              <TouchableOpacity onPress={logout}>
                <Text className="text-text-muted text-xs">退出</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              className="bg-primary rounded-2xl py-4 items-center justify-center"
              onPress={handleLogin}
            >
              <Text className="text-white text-base font-bold">
                登录 / 注册
              </Text>
              <Text className="text-white/70 text-xs mt-1">
                同步收藏和历史记录
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Menu Sections */}
        {menuItems.map((section, sectionIdx) => (
          <View
            key={sectionIdx}
            className="mx-4 mb-3 bg-card rounded-2xl overflow-hidden shadow-sm border border-border"
          >
            {section.map((item, itemIdx) => (
              <TouchableOpacity
                key={item.id}
                className={`flex-row items-center px-4 py-3.5 ${
                  itemIdx < section.length - 1
                    ? "border-b border-border"
                    : ""
                }`}
                activeOpacity={0.6}
              >
                <View
                  className="w-8 h-8 rounded-lg items-center justify-center mr-3"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Ionicons name={item.icon} size={18} color={item.color} />
                </View>
                <Text className="flex-1 text-text-primary text-[15px]">
                  {item.title}
                </Text>
                {item.badge && (
                  <View className="bg-accent px-2 py-0.5 rounded-full mr-2">
                    <Text className="text-white text-[10px] font-bold">
                      {item.badge}
                    </Text>
                  </View>
                )}
                <Ionicons name="chevron-forward" size={18} color="#C0C0C0" />
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {/* App Version */}
        <View className="items-center py-6">
          <Text className="text-text-muted text-xs">NailGlam v1.0.0</Text>
          <Text className="text-text-muted text-[10px] mt-0.5">
            Made with 💅 by Dream Team
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
