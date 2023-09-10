import { View, Text, StyleSheet } from "react-native";
import React from "react";
import questions from "../../data/questions.json";
const question = questions.items[1];

const QuestionListItem = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.stats}>
        {question.score} votes · {question.answer_count} answers ·{" "}
        {question.view_count} views
      </Text>
      <Text style={Styles.title}>{question.title}</Text>
      <Text style={Styles.body} numberOfLines={2}>
        {question.body_markdown}
      </Text>
      <View style={Styles.tags}>
        {question.tags.map((tag) => (
          <Text style={Styles.tag} key={tag}>
            {tag}
          </Text>
        ))}
        <Text style={Styles.time}>
          asked {new Date(question.creation_date * 1000).toDateString()}
        </Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: "lightgray",
  },
  stats: {
    fontSize: 12,
  },
  title: {
    color: "#0063bf",
    marginVertical: 5,
  },
  body: {
    fontSize: 11,
    color: "dimgray",
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginTop: 10,
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#e1ecf4",
    color: "#39739d",
    padding: 5,
    borderRadius: 3,
    overflow: "hidden",
    fontSize: 12,
  },
  time: {
    marginLeft: "auto",
    fontSize: 12,
    color: "dimgray",
  },
});

export default QuestionListItem;
