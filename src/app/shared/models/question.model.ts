export interface QuestionModel {
  id?: string;
  question: string;
  category: number;
  categoryName?: string;
  goal: string;
  expectedAnswer: string;
  level: number;
  weighted: number;
  isFavorite: boolean;
}
