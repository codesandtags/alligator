import { Injectable } from '@angular/core';
import { QuestionModel } from '../../models/question.model';
import { QuestionsMock } from '../../../../mocks/questions-mock';
import { QuestionCategoryModel } from '../../models/question-category.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class QuestionService {

  questionChange = new Subject<boolean>();

  constructor() {
  }

  public getAllQuestions(): Array<QuestionModel> {
    return QuestionsMock.questions;
  }

  public getQuestionsByCategory(category: QuestionCategoryModel): Array<QuestionModel> {
    return QuestionsMock.questions
      .filter(question => question.category === category);
  }

  public addQuestion(question: QuestionModel): void {
  }

  public updateQuestion(question: QuestionModel): void {
  }

  public getQuestionCategories(): QuestionCategoryModel[] {
    return QuestionsMock.questionCategories;
  }

}
