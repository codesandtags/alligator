import { QuestionCategory } from '../enums/question-category';

export interface QuestionModel {
  id?: string;
  questionValue: string;
  category: QuestionCategory;
  goal: string;
  expectedAnswer: string;
  level: string;
  weighted: string;
  favoriteQuestion: boolean;
}
