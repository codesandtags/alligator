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
      questionValue: 'What was the first; the egg or the chicken?',
      category: QuestionsMock.questionCategories[4],
      favoriteQuestion: true,
      expectedAnswer: 'Cocoman',
      goal: 'Evaluate the capacity to think out the box',
      level: '1',
      weighted: '1'
    },
    {
      id: '2',
      questionValue: 'Which are the data types in JavaScript',
      category: QuestionsMock.questionCategories[0],
      favoriteQuestion: false,
      expectedAnswer: 'Undefined, number, array, object, string, boolean',
      goal: 'Knowledge about fundamentals in JavaScript',
      level: '1',
      weighted: '1'
    },
    {
      id: '3',
      questionValue: 'This is a question',
      category: QuestionsMock.questionCategories[2],
      favoriteQuestion: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '4',
      questionValue: 'This is a question',
      category: QuestionsMock.questionCategories[3],
      favoriteQuestion: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '5',
      questionValue: 'This is a question',
      category: QuestionsMock.questionCategories[4],
      favoriteQuestion: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '6',
      questionValue: 'This is a question',
      category: QuestionsMock.questionCategories[5],
      favoriteQuestion: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '7',
      questionValue: 'This is a question',
      category: QuestionsMock.questionCategories[0],
      favoriteQuestion: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '8',
      questionValue: 'This is a question',
      category: QuestionsMock.questionCategories[1],
      favoriteQuestion: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '9',
      questionValue: 'This is a question',
      category: QuestionsMock.questionCategories[2],
      favoriteQuestion: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '10',
      questionValue: 'This is a question',
      category: QuestionsMock.questionCategories[3],
      favoriteQuestion: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '3'
    },
    {
      id: '11',
      questionValue: 'This is a question',
      category: QuestionsMock.questionCategories[1],
      favoriteQuestion: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '3'
    },
    {
      id: '12',
      questionValue: 'This is a question',
      category: QuestionsMock.questionCategories[1],
      favoriteQuestion: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '3'
    }
  ];
}
