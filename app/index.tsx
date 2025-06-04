import { useLocales } from "expo-localization";
import { Text, View } from "react-native";

export default function Index() {
  const [{ languageCode }] = useLocales();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Language code: {languageCode}</Text>
    </View>
  );
}
