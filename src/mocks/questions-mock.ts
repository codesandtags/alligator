import { QuestionModel } from '../app/shared/models/question.model';
import { QuestionCategory } from '../app/shared/enums/question-category';

export class QuestionsMock {

  public static readonly questions: [QuestionModel] = [
    {
      id: 'q1',
      questionValue: 'What was the first; the egg or the chicken?',
      category: QuestionCategory.GENERAL,
      favoriteQuestion: true,
      expectedAnswer: 'Cocoman',
      goal: 'Evaluate the capacity to think out the box',
      level: '1',
      weighted: '1'
    },
    {
      id: 'q2',
      questionValue: 'Which are the data types in JavaScript',
      category: QuestionCategory.FRONT_END,
      favoriteQuestion: false,
      expectedAnswer: 'Undefined, number, array, object, string, boolean',
      goal: 'Knowledge about fundamentals in JavaScript',
      level: '1',
      weighted: '1'
    }
  ];
}
