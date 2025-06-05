import { useLocales } from "expo-localization";
import { Text, View } from "react-native";

const greetings = {
  en: "Hello World!",
  fr: "Bonjour le monde!",
  de: "Hallo Welt!",
} as const;

function isValidLanguageCode(code: string): code is keyof typeof greetings {
  return code in greetings;
}

export default function Index() {
  const [{ languageCode }] = useLocales();

  if (!languageCode) {
    throw new Error("Language code is not available");
  }

  if (!isValidLanguageCode(languageCode)) {
    throw new Error("Unsupported language code: " + languageCode);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {greetings[languageCode]}
      </Text>
      <Text>Language code: {languageCode}</Text>
    </View>
  );
}
