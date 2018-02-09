import { QuestionCategoryModel } from './question-category.model';

export interface QuestionModel {
  id?: string;
  questionValue: string;
  category: QuestionCategoryModel;
  goal: string;
  expectedAnswer: string;
  level: string;
  weighted: string;
  favoriteQuestion: boolean;
}
