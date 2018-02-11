import { QuestionModel } from '../app/shared/models/question.model';
import { QuestionCategoryModel } from '../app/shared/models/question-category.model';

export class QuestionsMock {

  public static readonly questionCategories: QuestionCategoryModel[] = [
    {
      id: 1,
      name: 'Front End'
    },
    {
      id: 2,
      name: 'Back End'
    },
    {
      id: 3,
      name: 'Android'
    },
    {
      id: 4,
      name: 'iOs'
    },
    {
      id: 5,
      name: 'General'
    },
    {
      id: 6,
      name: 'Fundamentals'
    }
  ];

  public static readonly questions: QuestionModel[] = [
    {
      id: '1',
      question: 'What was the first; the egg or the chicken?',
      category: QuestionsMock.questionCategories[4].id,
      categoryName: QuestionsMock.questionCategories[4].name,
      isFavorite: true,
      expectedAnswer: 'Cocoman',
      goal: 'Evaluate the capacity to think out the box',
      level: 1,
      weighted: 1
    }
  ];
}
