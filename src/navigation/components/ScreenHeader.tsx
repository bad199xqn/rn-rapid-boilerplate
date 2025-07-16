import {useColors} from "@/hooks/useColors.ts";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View} from "react-native";
import {ChevronLeft} from "lucide-react-native";
import React from "react";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";

export default function CustomScreenHeader({
                                             navigation, route, options, back
                                           }: NativeStackHeaderProps) {
  const colors = useColors();
  const insets = useSafeAreaInsets();

  return (
    <View
      className={'bg-background px-4 py-3 pt-safe-offset-3 flex-row items-center border-b border-neutrals1000'}
    >
      <>{options.headerLeft ? options.headerLeft : ""}</>
      {back && (
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{marginRight: 12}}
        >
          <ChevronLeft size={24} color={colors.foreground}/>
        </TouchableOpacity>
      )}
      <Text className={'text-foreground text-lg font-sans-semibold flex-1'}>
        {options.title || route.name}
      </Text>
      <>{options.headerRight ? options.headerRight : ""}</>
    </View>
  );
}
