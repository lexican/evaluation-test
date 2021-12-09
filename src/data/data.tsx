export type IEvaluationQuestion = {
  id: number;
  question: string;
  answer?: string;
};
export const evaluationQuestions: IEvaluationQuestion[] = [
  { id: 1, question: "Q1. I am very familiar with the e-portal", answer: "" },
  {
    id: 2,
    question:
      "Q2. I can easily access the home page of the university’s e-portal",
    answer: "",
  },
  {
    id: 3,
    question: "Q3. I get lost due to the navigation of the e-portal",
    answer: "",
  },
  {
    id: 4,
    question: "Q4. I can learn to use the e-portal without instructions",
    answer: "",
  },
  {
    id: 5,
    question: "Q5. I can search for information and find it easily",
    answer: "",
  },
  {
    id: 6,
    question:
      "Q6. I easily understand the information content that is presented on the website",
    answer: "",
  },
  {
    id: 7,
    question: "Q7. I can get up-to-date news and events on the e-portal",
    answer: "",
  },
  {
    id: 8,
    question: "Q8. I can read the text on the e-portal very easily",
    answer: "",
  },
  {
    id: 9,
    question: "Q9. The colors and content layout is comfortable to see",
    answer: "",
  },
  { id: 10, question: "Q10. I feel comfortable using the website", answer: "" },
];
