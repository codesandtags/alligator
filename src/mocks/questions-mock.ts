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
      category: QuestionsMock.questionCategories[4],
      isFavorite: true,
      expectedAnswer: 'Cocoman',
      goal: 'Evaluate the capacity to think out the box',
      level: '1',
      weighted: '1'
    },
    {
      id: '2',
      question: 'Which are the data types in JavaScript',
      category: QuestionsMock.questionCategories[0],
      isFavorite: false,
      expectedAnswer: 'Undefined, number, array, object, string, boolean',
      goal: 'Knowledge about fundamentals in JavaScript',
      level: '1',
      weighted: '1'
    },
    {
      id: '3',
      question: 'This is a question',
      category: QuestionsMock.questionCategories[2],
      isFavorite: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '4',
      question: 'This is a question',
      category: QuestionsMock.questionCategories[3],
      isFavorite: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '5',
      question: 'This is a question',
      category: QuestionsMock.questionCategories[4],
      isFavorite: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '6',
      question: 'This is a question',
      category: QuestionsMock.questionCategories[5],
      isFavorite: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '7',
      question: 'This is a question',
      category: QuestionsMock.questionCategories[0],
      isFavorite: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '8',
      question: 'This is a question',
      category: QuestionsMock.questionCategories[1],
      isFavorite: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '9',
      question: 'This is a question',
      category: QuestionsMock.questionCategories[2],
      isFavorite: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '1'
    },
    {
      id: '10',
      question: 'This is a question',
      category: QuestionsMock.questionCategories[3],
      isFavorite: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '3'
    },
    {
      id: '11',
      question: 'This is a question',
      category: QuestionsMock.questionCategories[1],
      isFavorite: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '3'
    },
    {
      id: '12',
      question: 'This is a question',
      category: QuestionsMock.questionCategories[1],
      isFavorite: false,
      expectedAnswer: 'This is the expected answer',
      goal: 'This is the goal',
      level: '2',
      weighted: '3'
    }
  ];
}
