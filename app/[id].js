import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import questions from "../data/questions.json";
import answers from "../data/answers.json";
import QuestionHeader from "../src/components/QuestionHeader";
import AnswerListItem from "../src/components/AnswerListItem";

const details = () => {
  const { id } = useSearchParams();
  const question = questions.items.find((q) => q.question_id == id);
  if (!question) {
    return <Text>Question not found</Text>;
  }
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <FlatList
        data={answers.items}
        renderItem={({ item }) => <AnswerListItem answer={item} />}
        ListHeaderComponent={<QuestionHeader question={question} />}
      />
    </View>
  );
};

export default details;
