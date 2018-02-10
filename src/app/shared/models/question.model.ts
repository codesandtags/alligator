import { QuestionCategoryModel } from './question-category.model';

export interface QuestionModel {
  id?: string;
  question: string;
  category: QuestionCategoryModel;
  goal: string;
  expectedAnswer: string;
  level: number;
  weighted: number;
  isFavorite: boolean;
}
