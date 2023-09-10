import { StyleSheet, Text, View } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";

export default function Page() {
  return (
    <View style={styles.container}>
      <QuestionListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
